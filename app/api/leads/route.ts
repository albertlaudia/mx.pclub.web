import { NextResponse } from 'next/server'
import { z } from 'zod'
import { isPbConfigured, pbCreate, PocketBaseError } from '@/lib/pb'
import { sendMagnetEmail } from '@/lib/email'

export const runtime = 'nodejs'

const LeadSchema = z.object({
  email: z.string().email(),
  source: z.string().min(1).max(80),
  app: z.string().max(80).optional(),
  magnet: z.string().max(80).optional(),
  message: z.string().max(2000).optional(),
  page: z.string().max(300).optional(),
  locale: z.string().max(10).optional(),
  utm_source: z.string().max(80).optional(),
  utm_medium: z.string().max(80).optional(),
  utm_campaign: z.string().max(80).optional(),
})

/**
 * Lead capture endpoint.
 *
 * v1: writes to PocketBase `pc_leads` collection + fires confirmation email.
 *
 * Flow:
 *   1. Validate input (Zod)
 *   2. Persist to pc_leads (PB server-side, public createRule)
 *   3. Fire Resend confirmation email (best-effort, doesn't block response)
 *
 * If PB is not configured, we log + still return success (avoid breaking the
 * site during local dev or a transient PB outage).
 */

function hashIp(ip: string | null): string | null {
  if (!ip) return null
  // GDPR-friendly: rotate the daily salt
  const today = new Date().toISOString().slice(0, 10)
  // Simple FNV-1a-ish hash, no crypto dep needed for pseudo-anonymous dedup
  let h = 2166136261
  const s = `${today}|${ip}`
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return `ip_${(h >>> 0).toString(36)}`
}

export async function POST(request: Request) {
  try {
    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
    }

    const parsed = LeadSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: parsed.error.flatten() },
        { status: 400 },
      )
    }

    const data = parsed.data
    const referer = request.headers.get('referer') ?? undefined
    const userAgent = request.headers.get('user-agent') ?? undefined
    const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip')

    // Persist to PB (best-effort — site stays functional if PB is down)
    let pbId: string | null = null
    if (isPbConfigured()) {
      try {
        const created = await pbCreate<{ id: string }>('pc_leads', {
          email: data.email,
          source: data.source,
          app_slug: data.app ?? '',
          page: data.page ?? referer ?? '',
          message: data.message ?? '',
          locale: data.locale ?? 'en',
          utm_source: data.utm_source ?? '',
          utm_medium: data.utm_medium ?? '',
          utm_campaign: data.utm_campaign ?? '',
          status: 'new',
        })
        pbId = created.id
      } catch (err) {
        if (err instanceof PocketBaseError) {
          console.error(`[LEAD] PB create failed (${err.status}):`, err.message, err.data)
        } else {
          console.error('[LEAD] PB create failed:', err)
        }
        // Don't fail the user-visible request — log and continue
      }
    } else {
      console.log('[LEAD] PB not configured, skipping persist:', { email: data.email, source: data.source })
    }

    // Fire confirmation email (best-effort, never block the response)
    if (data.magnet || data.source.startsWith('homepage') || data.source.startsWith('app-')) {
      try {
        await sendMagnetEmail({
          to: data.email,
          source: data.source,
          magnet: data.magnet ?? data.source,
          app: data.app,
        })
      } catch (err) {
        console.warn('[LEAD] confirmation email failed (non-blocking):', err)
      }
    }

    return NextResponse.json({ ok: true, id: pbId })
  } catch (error) {
    console.error('[LEAD] unexpected error', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

// GET — health/diagnostics (superuser-protected)
export async function GET(request: Request) {
  const auth = request.headers.get('authorization')
  const expected = process.env.LEADS_API_TOKEN

  if (expected && auth !== `Bearer ${expected}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({
    ok: true,
    pbConfigured: isPbConfigured(),
    emailConfigured: !!process.env.RESEND_API_KEY,
    ts: new Date().toISOString(),
  })
}