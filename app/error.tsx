'use client'

import { Button } from '@/components/Button'
import { AlertCircle, RotateCw } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

/**
 * Top-level error boundary.
 *
 * Catches:
 *  - PB fetch failures (should never crash the page now thanks to fallback,
 *    but defense-in-depth)
 *  - Component render errors
 *  - Any unhandled exception in a child server component
 *
 * Doesn't catch:
 *  - Errors in /api/* (those return JSON errors)
 *  - Errors in middleware
 */
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log to console — in production we'd send to Sentry or similar
    console.error('[error.tsx] caught:', error)
  }, [error])

  return (
    <main className="container-narrow py-20 md:py-28">
      <div className="card text-center max-w-xl mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-amber-600 flex items-center justify-center mx-auto mb-5">
          <AlertCircle size={24} />
        </div>
        <h1 className="text-2xl font-bold tracking-tight mb-3">Something went wrong</h1>
        <p className="text-mute leading-relaxed mb-2">
          We hit an unexpected error rendering this page. It has been logged.
        </p>
        {error.digest && <p className="text-xs text-mute font-mono mb-6">ref: {error.digest}</p>}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="primary" onClick={reset}>
            <RotateCw size={16} />
            Try again
          </Button>
          <Link href="/">
            <Button variant="secondary">Back to home</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
