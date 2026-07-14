import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { SITE_NAME, siteMetadata } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  ...siteMetadata(),
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'theme-color': '#FF6B5B',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'positiveness',
    'mobile-web-web-app-capable': 'yes',
    'format-detection': 'telephone=no',
  },
}

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'uat.positiveness.club'
const PLAUSIBLE_SCRIPT =
  process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT || 'https://plausible.io/js/script.js'

/**
 * Root layout — only the HTML shell.
 *
 * SiteHeader and SiteFooter are no longer rendered here. They live in
 * app/(marketing)/layout.tsx so that pages in the (marketing) route
 * group (home, blog, apps, about, manifesto, privacy, terms, etc.)
 * get the marketing chrome, while pages in the (legal) route group
 * (all /[app]/terms, /[app]/policy pages) render as standalone
 * documents with no header and no footer.
 *
 * Plausible still loads on every page (including legal pages) — the
 * analytics script doesn't need the marketing chrome to function.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${SITE_NAME} — Field notes`}
          href="/feed.xml"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          title={`${SITE_NAME} — Field notes`}
          href="/feed.xml?format=atom"
        />
      </head>
      <body>
        {children}
        <Script
          defer
          data-domain={PLAUSIBLE_DOMAIN}
          src={PLAUSIBLE_SCRIPT}
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
