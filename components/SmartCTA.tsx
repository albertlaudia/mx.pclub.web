'use client'

import { trackEvent } from '@/lib/analytics'
import type { ReactNode } from 'react'
import { getApp } from '@/lib/data/apps'
import { buildStoreUrl, buildUtmForCta } from '@/lib/utm'
import { cn } from '@/lib/utils'
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
 */

interface SmartCTAProps {
  app: string
  placement: string // "hero" | "apps-card" | "blog-end" | ...
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  label?: string
  showSubtext?: boolean
  children?: ReactNode
}

export function SmartCTA({
  app,
  placement,
  variant = 'primary',
  size = 'md',
  className,
  label,
  showSubtext = false,
  children,
}: SmartCTAProps) {
  const appData = getApp(app)
  if (!appData) return null

  const ctaLabel = label || `Get ${appData.name}`
  const isIOS = typeof navigator !== 'undefined' && /iPhone|iPad|iPod/.test(navigator.userAgent)
  const target = isIOS ? appData.iosUrl : appData.androidUrl

  const utm = buildUtmForCta({ app, placement, variant })
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
        onClick={() => trackEvent('cta_click', { app, placement, variant })}
        className="w-full sm:w-auto"
      >
        {children || ctaLabel}
        <span aria-hidden="true">→</span>
      </Button>
      {showSubtext && (
        <p className="text-xs text-mute text-center sm:text-left">{appData.ctaSubtext}</p>
      )}
    </div>
  )
}