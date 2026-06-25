import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { siteMetadata } from '@/lib/seo'

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

export const metadata: Metadata = siteMetadata()

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'uat.positiveness.club'
const PLAUSIBLE_SCRIPT = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT || 'https://plausible.io/js/script.js'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />

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