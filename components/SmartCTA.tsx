'use client'

import { trackEvent } from '@/lib/analytics'
import type { PclubApp } from '@/lib/data'
import { cn } from '@/lib/utils'
import { buildStoreUrl, buildUtmForCta } from '@/lib/utm'
import type { ReactNode } from 'react'
import { Button } from './Button'

/**
 * The conversion engine. Every CTA to a store goes through this component.
 *
 * Behavior:
 * 1. Renders an <a> with UTM-injected store URL
 * 2. Fires Plausible event `cta_click` on click
 * 3. Auto-attributes placement + variant
 *
 * Bypassing this component = losing attribution. Don't.
 *
 * Since this is a client component, the parent (server component)
 * resolves the app data via the async data layer and passes the
 * relevant fields as props.
 */

interface SmartCTAProps {
  appSlug: string
  appName: string
  iosUrl: string
  androidUrl: string
  ctaSubtext?: string
  placement: string // "hero" | "apps-card" | "blog-end" | ...
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  label?: string
  showSubtext?: boolean
  children?: ReactNode
}

export function SmartCTA({
  appSlug,
  appName,
  iosUrl,
  androidUrl,
  ctaSubtext,
  placement,
  variant = 'primary',
  size = 'md',
  className,
  label,
  showSubtext = false,
  children,
}: SmartCTAProps) {
  if (!iosUrl && !androidUrl) return null

  const ctaLabel = label || `Get ${appName}`
  const isIOS = typeof navigator !== 'undefined' && /iPhone|iPad|iPod/.test(navigator.userAgent)
  const target = isIOS ? iosUrl : androidUrl

  const utm = buildUtmForCta({ app: appSlug, placement, variant })
  const href = buildStoreUrl(target, utm)

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Button
        as="link"
        href={href}
        target="_blank"
        rel="noopener"
        variant={variant}
        size={size}
        onClick={() => trackEvent('cta_click', { app: appSlug, placement, variant })}
        className="w-full sm:w-auto"
      >
        {children || ctaLabel}
        <span aria-hidden="true">→</span>
      </Button>
      {showSubtext && ctaSubtext && (
        <p className="text-xs text-mute text-center sm:text-left">{ctaSubtext}</p>
      )}
    </div>
  )
}

/**
 * Convenience: server-side wrapper that resolves the app from the data layer
 * and renders the client SmartCTA.
 */
export async function SmartCTAServer({
  app,
  placement,
  variant,
  size,
  className,
  label,
  showSubtext,
  children,
}: {
  app: PclubApp
  placement: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  label?: string
  showSubtext?: boolean
  children?: ReactNode
}) {
  return (
    <SmartCTA
      appSlug={app.slug}
      appName={app.name}
      iosUrl={app.iosUrl}
      androidUrl={app.androidUrl}
      ctaSubtext={app.ctaSubtext}
      placement={placement}
      variant={variant}
      size={size}
      className={className}
      label={label}
      showSubtext={showSubtext}
    >
      {children}
    </SmartCTA>
  )
}
