import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Terms of service',
  description: 'Terms of service for positiveness.club.',
  alternates: { canonical: `${SITE_URL}/terms` },
}

export default function TermsPage() {
  return (
    <article className="container-narrow py-16 md:py-24">
      <h1 className="text-display-md font-bold tracking-tight mb-4">Terms of service</h1>
      <p className="text-mute text-lg mb-12">Last updated: 2026-06-25</p>

      <div className="prose prose-lg max-w-none text-mute leading-relaxed space-y-6">
        <p>
          These terms cover the positiveness.club website. Each app in the pclub ecosystem has
          its own terms, linked from the app store listing.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-3 text-ink">The short version</h2>
        <ul className="space-y-2">
          <li>The website is free. The content is for general information.</li>
          <li>Don't scrape, spam, or abuse the site.</li>
          <li>App store purchases are governed by Apple's and Google's terms, not ours.</li>
          <li>We may update these terms. We'll post changes here.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-3 text-ink">The longer version</h2>

        <p>
          By using this website, you agree to these terms. If you don't agree, please don't use
          the site.
        </p>

        <p>
          <strong className="text-ink">Content.</strong> The blog posts, app
          descriptions, and other content on this site are for informational purposes. They're
          not professional advice (medical, financial, legal, etc.).
        </p>

        <p>
          <strong className="text-ink">App purchases.</strong> When you tap "Get on
          iOS" or "Get on Android," you're being redirected to Apple's App Store or Google Play.
          Your purchase, subscription, and refund are governed by their terms — not ours. We
          don't process payments.
        </p>

        <p>
          <strong className="text-ink">Intellectual property.</strong> The site
          design, copy, and code are ours. The app icons and screenshots are ours. The blog
          posts are ours. You can share them (please do). You can quote them (please credit us).
          You can't republish them in bulk or claim them as your own.
        </p>

        <p>
          <strong className="text-ink">No warranty.</strong> The site is provided "as
          is." We do our best to keep it working and accurate, but we can't guarantee it.
        </p>

        <p>
          <strong className="text-ink">Limitation of liability.</strong> We're not
          liable for any damages arising from your use of this site.
        </p>

        <p>
          <strong className="text-ink">Governing law.</strong> These terms are
          governed by the laws of Singapore, where we're incorporated.
        </p>

        <p>
          <strong className="text-ink">Contact.</strong>{' '}
          <a href="mailto:hello@positiveness.club" className="text-coral underline">hello@positiveness.club</a>.
        </p>
      </div>
    </article>
  )
}