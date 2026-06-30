/**
 * One-click unsubscribe page.
 *
 * Flow:
 *   1. User clicks "Unsubscribe" in an email → arrives here with ?token=...
 *   2. Page verifies the HMAC-signed token (lib/tokens.ts)
 *   3. If valid: shows confirmation; on confirmation, calls /api/unsubscribe/confirm
 *   4. If invalid: shows "link expired" error with contact fallback
 *
 * Token contains: { email, ts } — no PII beyond email.
 * Verification uses HMAC-SHA256 with UNSUBSCRIBE_SECRET.
 *
 * No PB lookup needed for token verification — the token itself is the proof.
 * The confirm step then marks the lead record(s) as unsubscribed.
 */

import { SITE_URL } from '@/lib/seo'
import { verifyUnsubscribeToken } from '@/lib/tokens'
import type { Metadata } from 'next'
import { UnsubscribeClient } from './client'

export const metadata: Metadata = {
  title: 'Unsubscribe',
  description: 'Unsubscribe from positiveness.club emails.',
  alternates: { canonical: `${SITE_URL}/unsubscribe` },
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>
}) {
  const { token } = await searchParams
  const verified = token ? verifyUnsubscribeToken(token) : null
  const isValid = !!verified

  return (
    <main className="container-narrow py-20 md:py-28">
      <UnsubscribeClient
        token={token ?? ''}
        email={isValid ? (verified as { email: string }).email : null}
        isValid={isValid}
      />
    </main>
  )
}
