/**
 * Short redirect consumer: /r/[code]
 *
 * Looks up a code in PocketBase `pc_redirects` and 302-redirects to the
 * target URL while incrementing click_count.
 *
 * Behavior:
 *   - Unknown code: 302 to /404-style page (or just home, with a query flag)
 *   - Inactive code: 410 Gone
 *   - Missing target_url: 500
 *
 * Use cases:
 *   - utm.positiveness.club/r/heal-yt-campaign → https://apps.apple.com/...
 *   - email CTA short links
 *   - QR code landing pages
 *
 * Implementation note: for hot paths, we'd add a Next.js rewrite cache.
 * For now: PB lookup per request, with Next.js data cache + revalidate=60s.
 */

import { PocketBaseError, isPbConfigured, pbList } from '@/lib/pb'
import { SITE_URL } from '@/lib/seo'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface PbRedirect {
  id: string
  code: string
  target_url: string
  app_slug?: string
  description?: string
  click_count?: number
  active?: boolean
}

export async function GET(request: Request, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params

  // Validate the code shape early
  if (!code || !/^[a-zA-Z0-9_-]{1,40}$/.test(code)) {
    return NextResponse.redirect(`${SITE_URL}/?invalid_short_code=1`, { status: 302 })
  }

  if (!isPbConfigured()) {
    return NextResponse.redirect(`${SITE_URL}/?short_code_unavailable=1`, { status: 302 })
  }

  try {
    const escaped = code.replace(/'/g, "\\'")
    const result = await pbList<PbRedirect>(
      'pc_redirects',
      {
        filter: `code = '${escaped}'`,
        perPage: 1,
      },
      // Public read access — pb_redirects.listRule is '' (open) in our schema
    )

    const entry = result.items[0]
    if (!entry) {
      return NextResponse.redirect(
        `${SITE_URL}/?short_code_not_found=${encodeURIComponent(code)}`,
        {
          status: 302,
        },
      )
    }
    if (entry.active === false) {
      return new NextResponse('This short link is no longer active.', { status: 410 })
    }
    if (!entry.target_url) {
      return new NextResponse('This short link is misconfigured (no target).', { status: 500 })
    }

    // Best-effort click counter increment (don't fail redirect on counter errors)
    incrementClickCount(entry.id, entry.click_count ?? 0).catch((err) =>
      console.warn(`[redirect] click counter update failed for ${code}:`, err),
    )

    // Validate target URL is http(s) (defense against malformed PB data)
    let target: URL
    try {
      target = new URL(entry.target_url)
    } catch {
      return new NextResponse('Short link target is invalid.', { status: 500 })
    }
    if (target.protocol !== 'http:' && target.protocol !== 'https:') {
      return new NextResponse('Short link target must be http(s).', { status: 500 })
    }

    return NextResponse.redirect(target.toString(), { status: 302 })
  } catch (err) {
    if (err instanceof PocketBaseError) {
      console.error(`[redirect] PB error (${err.status}):`, err.message)
    } else {
      console.error('[redirect] unexpected error:', err)
    }
    return NextResponse.redirect(`${SITE_URL}/?short_code_error=1`, { status: 302 })
  }
}

async function incrementClickCount(id: string, current: number): Promise<void> {
  // Use superuser for write — public listRule doesn't grant update
  const { pbAdminUpdate } = await import('@/lib/pb')
  await pbAdminUpdate('pc_redirects', id, { click_count: current + 1 })
}
