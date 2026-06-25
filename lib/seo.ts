import type { Metadata } from 'next'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://uat.positiveness.club'
export const SITE_NAME = 'positiveness.club'
export const SITE_DESCRIPTION =
  'Apps that make you a little more human. Book summaries, calm in 3 minutes, morning rituals, and a guitar tuner that respects your privacy.'

export function siteMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SITE_NAME,
      template: `%s · ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    keywords: [
      'book summary app',
      'anxiety relief',
      'morning routine',
      'guitar tuner',
      'privacy-first apps',
      'positiveness',
    ],
    authors: [{ name: 'positiveness.club', url: SITE_URL }],
    creator: 'positiveness.club',
    publisher: 'positiveness.club',
    formatDetection: { email: false, address: false, telephone: false },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: SITE_URL,
      siteName: SITE_NAME,
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      images: [
        {
          url: '/api/og?title=positiveness.club&subtitle=Apps+that+make+you+a+little+more+human',
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      images: ['/api/og?title=positiveness.club&subtitle=Apps+that+make+you+a+little+more+human'],
      creator: '@positivenessclub',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.svg',
      apple: '/apple-touch-icon.png',
    },
    alternates: {
      canonical: SITE_URL,
    },
  }
}