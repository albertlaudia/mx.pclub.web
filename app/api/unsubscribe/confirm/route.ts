/**
 * One-click unsubscribe confirmation endpoint.
 *
 * POST { token: string }
 *   - Verifies HMAC token
 *   - Marks all matching pc_leads rows as status='unsubscribed'
 *   - Returns { ok: true, count: number }
 *
 * GDPR/anti-abuse: requires valid token. No public unsubscribe by email lookup.
 */

import { PocketBaseError, isPbConfigured, pbAdminList, pbAdminUpdate } from '@/lib/pb'
import { verifyUnsubscribeToken } from '@/lib/tokens'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'nodejs'

const Schema = z.object({
  token: z.string().min(1).max(2048),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = Schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  // Verify the token (HMAC, no DB lookup)
  const verified = verifyUnsubscribeToken(parsed.data.token)
  if (!verified) {
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 })
  }

  if (!isPbConfigured()) {
    console.log('[unsub] PB not configured, would have unsubscribed:', verified.email)
    return NextResponse.json({ ok: true, count: 0, dryRun: true })
  }

  // Find all lead records matching the email and mark unsubscribed.
  // Use superuser to bypass listRule (which is restricted to superusers anyway).
  try {
    const escaped = verified.email.replace(/'/g, "\\'")
    const leads = await pbAdminList<{ id: string; status: string }>('pc_leads', {
      filter: `email = '${escaped}' && status != 'unsubscribed'`,
      perPage: 500,
    })
    let updated = 0
    for (const lead of leads.items) {
      await pbAdminUpdate('pc_leads', lead.id, {
        status: 'unsubscribed',
        notes: `Unsubscribed ${new Date().toISOString()} via email link`,
      })
      updated++
    }
    return NextResponse.json({ ok: true, count: updated, email: verified.email })
  } catch (err) {
    if (err instanceof PocketBaseError) {
      console.error(`[unsub] PB error (${err.status}):`, err.message)
      return NextResponse.json({ error: 'Service temporarily unavailable' }, { status: 503 })
    }
    console.error('[unsub] unexpected error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
