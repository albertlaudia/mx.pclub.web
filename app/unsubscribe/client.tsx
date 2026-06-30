'use client'

import { Button } from '@/components/Button'
import { AlertCircle, CheckCircle2, Loader2, Mail } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

type State = 'idle' | 'submitting' | 'done' | 'error'

interface UnsubscribeClientProps {
  token: string
  email: string | null
  isValid: boolean
}

/**
 * Client-side unsubscribe UI.
 * - Valid token: shows email + "Confirm unsubscribe" button
 * - On confirm: POSTs to /api/unsubscribe/confirm
 * - On done: shows success message
 * - Invalid token: shows error with contact fallback
 */
export function UnsubscribeClient({ token, email, isValid }: UnsubscribeClientProps) {
  const [state, setState] = useState<State>('idle')
  const [error, setError] = useState<string | null>(null)

  async function handleConfirm() {
    setState('submitting')
    setError(null)
    try {
      const res = await fetch('/api/unsubscribe/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || `HTTP ${res.status}`)
      }
      setState('done')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
      setState('error')
    }
  }

  if (!isValid) {
    return (
      <div className="card text-center max-w-xl mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-amber-600 flex items-center justify-center mx-auto mb-5">
          <AlertCircle size={24} />
        </div>
        <h1 className="text-2xl font-bold tracking-tight mb-3">
          This unsubscribe link isn't valid
        </h1>
        <p className="text-mute leading-relaxed mb-6">
          The link may have expired or been tampered with. To unsubscribe, you can:
        </p>
        <ul className="text-left text-sm text-mute space-y-2 mb-6 max-w-md mx-auto">
          <li>• Click the "Unsubscribe" link at the bottom of any future email.</li>
          <li>
            • Email us at{' '}
            <a href="mailto:hello@positiveness.club" className="text-coral underline">
              hello@positiveness.club
            </a>{' '}
            and we'll remove you within 24 hours.
          </li>
        </ul>
        <Link href="/" className="text-sm text-mute hover:text-ink">
          ← Back to positiveness.club
        </Link>
      </div>
    )
  }

  if (state === 'done') {
    return (
      <div className="card text-center max-w-xl mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-green-50 dark:bg-green-950/30 text-green-600 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={24} />
        </div>
        <h1 className="text-2xl font-bold tracking-tight mb-3">You're unsubscribed</h1>
        <p className="text-mute leading-relaxed mb-2">
          We won't email <strong className="text-ink">{email}</strong> again.
        </p>
        <p className="text-sm text-mute mb-6">
          You can still use any of our apps — this only stops marketing emails.
        </p>
        <Link href="/" className="text-sm text-coral hover:text-coral-hover">
          ← Back to positiveness.club
        </Link>
      </div>
    )
  }

  return (
    <div className="card text-center max-w-xl mx-auto">
      <div className="w-12 h-12 rounded-2xl bg-coral/10 text-coral flex items-center justify-center mx-auto mb-5">
        <Mail size={24} />
      </div>
      <h1 className="text-2xl font-bold tracking-tight mb-3">Unsubscribe from emails</h1>
      <p className="text-mute leading-relaxed mb-2">
        You're unsubscribing <strong className="text-ink">{email}</strong> from positiveness.club
        marketing emails.
      </p>
      <p className="text-sm text-mute mb-8">
        This only stops emails from this site. You can still get product updates from each app
        you've installed.
      </p>

      {state === 'error' && error && (
        <div className="mb-4 p-3 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 text-sm">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          variant="primary"
          size="md"
          onClick={handleConfirm}
          disabled={state === 'submitting'}
        >
          {state === 'submitting' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Unsubscribing...
            </>
          ) : (
            'Confirm unsubscribe'
          )}
        </Button>
        <Link href="/">
          <Button variant="secondary" size="md">
            Cancel
          </Button>
        </Link>
      </div>
    </div>
  )
}
