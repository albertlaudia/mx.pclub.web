import type { PclubApp } from '@/lib/data/apps'

/**
 * Smart App Banner meta tag for iOS Safari.
 * Renders inside <head> when an app context is known.
 *
 * On Android, the equivalent is a JS-driven banner in <AndroidAppBanner />.
 */

export function SmartAppBannerMeta({ app }: { app: PclubApp }) {
  if (!app.appStoreId) return null
  return (
    <meta
      name="apple-itunes-app"
      content={`app-id=${app.appStoreId}, app-argument=positiveness://${app.slug}?ct=smartbanner&utm_source=web`}
    />
  )
}