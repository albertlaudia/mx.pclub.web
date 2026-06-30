'use client'

import { trackEvent } from '@/lib/analytics'
import { cn } from '@/lib/utils'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { useState, useTransition } from 'react'

interface LeadMagnetFormProps {
  source: string // "homepage-hero" | "app-1perc" | "blog-<slug>" | ...
  app?: string
  magnet?: string
  headline?: string
  subtext?: string
  buttonLabel?: string
  className?: string
}

/**
 * Email capture with optimistic UI.
 *
 * v1: writes to /api/leads which is a stub.
 * Production: PocketBase + Resend + welcome email.
 */
export function LeadMagnetForm({
  source,
  app,
  magnet,
  headline,
  subtext,
  buttonLabel = 'Send me the pack',
  className,
}: LeadMagnetFormProps) {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isPending, startTransition] = useTransition()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!email.includes('@')) {
      setError('Please enter a valid email')
      return
    }
    if (!consent) {
      setError('Please agree to receive emails')
      return
    }

    startTransition(async () => {
      try {
        const res = await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source, app, magnet }),
        })
        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          throw new Error(data.error || 'Something went wrong')
        }
        setSuccess(true)
        trackEvent('lead_captured', { source, app, magnet })
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong')
      }
    })
  }

  if (success) {
    return (
      <div
        className={cn(
          'flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-5',
          className,
        )}
      >
        <CheckCircle2 className="text-green-600 shrink-0" size={24} />
        <div>
          <p className="font-medium text-green-900">Check your inbox.</p>
          <p className="text-sm text-green-700">
            Your pack is on its way. We sent a confirmation to <strong>{email}</strong>.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('flex flex-col gap-3 rounded-2xl border border-line bg-card p-5', className)}
    >
      {(headline || subtext) && (
        <div className="mb-1">
          {headline && <p className="font-semibold text-ink">{headline}</p>}
          {subtext && <p className="text-sm text-mute mt-1">{subtext}</p>}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 h-11 px-4 rounded-full border border-line bg-canvas text-[15px] focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral"
          required
          disabled={isPending}
        />
        <button
          type="submit"
          disabled={isPending}
          className="btn-base btn-md btn-primary disabled:opacity-50"
        >
          {isPending ? (
            <>
              <Loader2 className="animate-spin" size={16} />
              Sending...
            </>
          ) : (
            buttonLabel
          )}
        </button>
      </div>

      <label className="flex items-start gap-2 text-xs text-mute leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5"
        />
        <span>
          I agree to receive emails from positiveness.club. Unsubscribe anytime. See our{' '}
          <a href="/privacy" className="underline hover:text-ink">
            privacy policy
          </a>
          .
        </span>
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  )
}
