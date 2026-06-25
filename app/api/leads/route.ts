import { NextResponse } from 'next/server'
import { z } from 'zod'

const LeadSchema = z.object({
  email: z.string().email(),
  source: z.string().min(1).max(64),
  app: z.string().max(64).optional(),
  magnet: z.string().max(64).optional(),
})

/**
 * Lead capture endpoint.
 *
 * v1 (this stub): logs to console and returns success.
 * Production: write to PocketBase `pc_leads` collection + send via Resend.
 *
 * The PB schema for pc_leads:
 *   - email (email, indexed)
 *   - source (text)
 *   - magnet (text)
 *   - app (relation -> pc_apps)
 *   - referrer (text)
 *   - utm_source / utm_medium / utm_campaign / utm_content (text)
 *   - ip_hash (text, for dedup, GDPR-rotated)
 *   - user_agent (text)
 *   - created (date, auto)
 *   - unsubscribed_at (date, nullable)
 */

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = LeadSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: parsed.error.flatten() },
        { status: 400 },
      )
    }

    const { email, source, app, magnet } = parsed.data

    // TODO (production): write to PocketBase
    // const pb = new PocketBase(process.env.PB_URL)
    // await pb.collection('pc_leads').create({
    //   email, source, magnet, app,
    //   ip_hash: hashIp(request.headers.get('x-forwarded-for')),
    //   user_agent: request.headers.get('user-agent'),
    //   referrer: request.headers.get('referer'),
    // })

    // TODO (production): send welcome email via Resend
    // await resend.emails.send({
    //   from: process.env.RESEND_FROM_EMAIL,
    //   to: email,
    //   subject: 'Your free pack is here',
    //   html: renderMagnetEmail({ source, magnet }),
    // })

    // Stub: log only
    console.log('[LEAD]', { email, source, app, magnet, ts: new Date().toISOString() })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[LEAD] error', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}