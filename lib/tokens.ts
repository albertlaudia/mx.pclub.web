/**
 * HMAC-SHA256 token signing for unsubscribe links.
 *
 * Why not a JWT library?
 *   - Our needs are tiny: sign (email, timestamp) so a one-click unsubscribe
 *     can be validated without a DB lookup.
 *   - No third-party dep, no JWT complexity (no alg=none concerns, no kid, no jwks).
 *   - HMAC-SHA256 with a 32-byte secret is enough to make a link un-guessable.
 *
 * Token format: base64url(JSON({email, ts})).base64url(hmac-sha256)
 *   Decoding verifies the HMAC matches the payload before trusting the email.
 *
 * The secret should be set in UNSUBSCRIBE_SECRET env var.
 * Falls back to a static dev secret in dev so the flow works without setup.
 *
 * Used by:
 *   - /api/unsubscribe/confirm  (POST: token → mark lead as unsubscribed)
 *   - lib/email.ts               (signs tokens into email links)
 */

import { createHmac, timingSafeEqual } from 'node:crypto'

const SECRET =
  process.env.UNSUBSCRIBE_SECRET ??
  // Dev-only fallback. In prod, set UNSUBSCRIBE_SECRET.
  'dev-only-insecure-fallback-do-not-use-in-prod-zzzzzzzzzzzzzz'

export interface UnsubscribeToken {
  email: string
  ts: number
}

function b64urlEncode(input: Buffer | string): string {
  const buf = typeof input === 'string' ? Buffer.from(input) : input
  return buf.toString('base64').replace(/=+$/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

function b64urlDecode(input: string): Buffer {
  const pad = input.length % 4 === 0 ? '' : '='.repeat(4 - (input.length % 4))
  return Buffer.from(input.replace(/-/g, '+').replace(/_/g, '/') + pad, 'base64')
}

function hmac(payload: string): string {
  return createHmac('sha256', SECRET)
    .update(payload)
    .digest('base64')
    .replace(/=+$/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}

export function signUnsubscribeToken(email: string): string {
  const payload: UnsubscribeToken = {
    email: email.toLowerCase().trim(),
    ts: Date.now(),
  }
  const payloadStr = b64urlEncode(JSON.stringify(payload))
  const sig = hmac(payloadStr)
  return `${payloadStr}.${sig}`
}

export function verifyUnsubscribeToken(token: string): UnsubscribeToken | null {
  const parts = token.split('.')
  if (parts.length !== 2) return null
  const [payloadStr, sig] = parts
  if (!payloadStr || !sig) return null

  const expectedSig = hmac(payloadStr)
  // timingSafeEqual requires equal-length buffers
  if (sig.length !== expectedSig.length) return null
  const a = Buffer.from(sig)
  const b = Buffer.from(expectedSig)
  if (!timingSafeEqual(a, b)) return null

  try {
    const payload = JSON.parse(b64urlDecode(payloadStr).toString('utf8')) as UnsubscribeToken
    if (!payload.email || typeof payload.email !== 'string') return null
    return payload
  } catch {
    return null
  }
}

/**
 * Build a one-click unsubscribe URL for a given email.
 * Used by the email template.
 */
export function buildUnsubscribeUrl(email: string, siteUrl?: string): string {
  const base = siteUrl ?? process.env.NEXT_PUBLIC_SITE_URL ?? 'https://uat.positiveness.club'
  const token = signUnsubscribeToken(email)
  return `${base}/unsubscribe?token=${token}`
}

/**
 * Sanity-check helper for tests.
 */
export function _isDevFallback(): boolean {
  return !process.env.UNSUBSCRIBE_SECRET
}
