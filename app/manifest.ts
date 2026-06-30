/**
 * Web App Manifest (PWA).
 *
 * Tells browsers:
 *  - How to install the site as a PWA
 *  - The home screen icon
 *  - Splash screen colors
 *  - Display mode (standalone = feels like a native app)
 *  - The start URL
 *
 * This is a minimal PWA manifest. We don't add a service worker
 * (yet) — the installability bonus alone (homescreen icon, custom splash)
 * is worth it for a marketing site.
 */

import { SITE_URL } from '@/lib/seo'
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'positiveness.club',
    short_name: 'positiveness',
    description: 'Apps that make you a little more human. 1perc, HEAL, Riseup, Resonate.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#FAF7F2',
    theme_color: '#FF6B5B',
    lang: 'en',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['books', 'lifestyle', 'music', 'health'],
  }
}
