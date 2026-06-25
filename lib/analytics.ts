/**
 * Plausible analytics helpers.
 *
 * Plausible script is loaded via <Script> in app/layout.tsx.
 * These functions are safe to call server-side (no-op).
 */

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void
  }
}

export type AnalyticsEvent =
  | { name: 'cta_click'; props: { app: string; placement: string; variant: string } }
  | { name: 'lead_captured'; props: { source: string; app?: string; magnet?: string } }
  | { name: 'app_store_click'; props: { app: string; store: 'ios' | 'android'; source: string } }
  | { name: 'cross_promo_click'; props: { from: string; to: string; placement: string } }
  | { name: 'blog_read_complete'; props: { slug: string; time_to_complete?: number } }
  | { name: 'smart_banner_view'; props: { app: string } }
  | { name: 'smart_banner_dismiss'; props: { app: string } }

export function trackEvent<K extends AnalyticsEvent['name']>(
  name: K,
  props: Extract<AnalyticsEvent, { name: K }>['props'],
) {
  if (typeof window === 'undefined') return
  if (typeof window.plausible !== 'function') return
  window.plausible(name, { props: props as Record<string, unknown> })
}