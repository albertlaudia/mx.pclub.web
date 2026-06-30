/**
 * Resend email client (server-only).
 *
 * Used for:
 *   - Lead magnet delivery (the free 7-day pack)
 *   - App welcome sequences (later)
 *   - Press contact auto-replies (later)
 *
 * Never throws — email failures are best-effort and logged.
 */

import { buildUnsubscribeUrl } from './tokens'

export interface MagnetEmailOptions {
  to: string
  source: string
  magnet: string
  app?: string
}

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'hello@positiveness.club'
const APP_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://positiveness.club'

const MAGNET_PRESETS: Record<
  string,
  {
    subject: string
    headline: string
    downloadLabel: string
    ctaText: string
    ctaHref: (app?: string) => string
  }
> = {
  '1perc-7day-pack': {
    subject: 'Your 7-day book summary pack is here',
    headline: '7 books, 7 days, 5 minutes each.',
    downloadLabel: 'Read book 1 now',
    ctaText: 'Get the 1perc app',
    ctaHref: (app) => `${APP_URL}/apps/${app ?? '1perc'}`,
  },
  'heal-3min-reset': {
    subject: 'Your 3-minute calm reset (audio)',
    headline: 'Three minutes. One breath at a time.',
    downloadLabel: 'Listen to the 3-minute reset',
    ctaText: 'Get the HEAL app',
    ctaHref: (app) => `${APP_URL}/apps/${app ?? 'heal'}`,
  },
  'riseup-7day-template': {
    subject: 'Your 7-day morning template',
    headline: 'One small win a day.',
    downloadLabel: "See today's prompt",
    ctaText: 'Get the Riseup app',
    ctaHref: (app) => `${APP_URL}/apps/${app ?? 'riseup'}`,
  },
}

function renderEmail(opts: MagnetEmailOptions): { subject: string; html: string; text: string } {
  const preset = MAGNET_PRESETS[opts.magnet] ?? {
    subject: 'Your free pack is here',
    headline: 'We saved something for you.',
    downloadLabel: 'Open it now',
    ctaText: 'See the apps',
    ctaHref: () => APP_URL,
  }

  const subject = preset.subject
  const ctaHref = preset.ctaHref(opts.app)
  const unsubUrl = buildUnsubscribeUrl(opts.to)

  const html = `<!doctype html>
<html><body style="margin:0;padding:0;background:#FAF7F2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif;color:#1a1a1a;">
  <div style="max-width:520px;margin:0 auto;padding:32px 24px;">
    <div style="margin-bottom:24px;">
      <span style="display:inline-block;padding:4px 10px;border-radius:999px;background:#FFE9E5;color:#C45A4A;font-size:12px;font-weight:500;">positiveness.club</span>
    </div>
    <h1 style="margin:0 0 12px;font-size:28px;line-height:1.2;letter-spacing:-0.02em;">${preset.headline}</h1>
    <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#555;">Hi — thanks for signing up. Here's what you came for:</p>

    <div style="margin:24px 0;padding:20px;border-radius:16px;background:#fff;border:1px solid #EAE6DF;">
      <p style="margin:0 0 16px;font-size:14px;color:#888;">Today's pick:</p>
      <a href="${ctaHref}" style="display:inline-block;padding:12px 20px;border-radius:12px;background:linear-gradient(135deg,#FF6B5B,#F59E0B);color:#fff;text-decoration:none;font-weight:600;font-size:15px;">${preset.downloadLabel} →</a>
    </div>

    <p style="margin:24px 0;font-size:15px;line-height:1.6;color:#555;">Over the next 7 days we'll send one book a day. Each takes about 5 minutes to read or listen.</p>

    <div style="margin:24px 0;padding:16px;border-radius:12px;background:#F5F2EE;">
      <p style="margin:0;font-size:13px;color:#777;">If you'd rather just install the app:</p>
      <p style="margin:8px 0 0;">
        <a href="${ctaHref}" style="color:#C45A4A;font-weight:500;text-decoration:underline;">${preset.ctaText}</a>
      </p>
    </div>

    <hr style="margin:32px 0;border:none;border-top:1px solid #EAE6DF;" />
    <p style="margin:0;font-size:12px;color:#999;line-height:1.5;">
      You got this because you signed up at positiveness.club.
      <a href="${unsubUrl}" style="color:#999;text-decoration:underline;">Unsubscribe</a>.
    </p>
  </div>
</body></html>`

  const text = `${preset.headline}

Hi — thanks for signing up. Here's what you came for:

Today's pick: ${preset.downloadLabel} → ${ctaHref}

Over the next 7 days we'll send one book a day. Each takes about 5 minutes.

If you'd rather just install the app: ${preset.ctaText} → ${ctaHref}

—
You got this because you signed up at positiveness.club.
Unsubscribe: ${unsubUrl}
`

  return { subject, html, text }
}

export async function sendMagnetEmail(
  opts: MagnetEmailOptions,
): Promise<{ sent: boolean; reason?: string }> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[email] RESEND_API_KEY not set, skipping send to', opts.to)
    return { sent: false, reason: 'no_api_key' }
  }

  const { subject, html, text } = renderEmail(opts)

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [opts.to],
        subject,
        html,
        text,
        tags: [
          { name: 'magnet', value: opts.magnet },
          { name: 'source', value: opts.source },
          ...(opts.app ? [{ name: 'app', value: opts.app }] : []),
        ],
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error(`[email] Resend ${res.status}: ${err.slice(0, 200)}`)
      return { sent: false, reason: `resend_${res.status}` }
    }

    const json = (await res.json()) as { id?: string }
    console.log(`[email] sent ${json.id ?? '(no id)'} to ${opts.to} (magnet=${opts.magnet})`)
    return { sent: true }
  } catch (err) {
    console.error('[email] send failed:', err)
    return { sent: false, reason: 'network' }
  }
}
