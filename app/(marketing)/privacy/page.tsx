import { SITE_URL } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How positiveness.club handles your data. Short version: as little as possible.',
  alternates: { canonical: `${SITE_URL}/privacy` },
}

export default function PrivacyPage() {
  return (
    <article className="container-narrow py-16 md:py-24">
      <h1 className="text-display-md font-bold tracking-tight mb-4">Privacy policy</h1>
      <p className="text-mute text-lg mb-12">Last updated: 2026-06-25</p>

      <div className="prose prose-lg max-w-none text-mute leading-relaxed space-y-8">
        <p>
          This is the privacy policy for <strong className="text-ink">positiveness.club</strong> —
          the marketing website at positiveness.club. It covers the website only. Each app in the
          pclub ecosystem has its own privacy policy, linked from the app store listing and from{' '}
          <a href="/apps" className="text-coral underline">
            /apps
          </a>
          .
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-ink">What we collect</h2>

        <p>
          <strong className="text-ink">Plausible analytics.</strong> We use Plausible to count
          visits and measure which pages are useful. Plausible is privacy-first: it does not set
          cookies, does not collect IP addresses, does not track you across sites. The data is
          aggregated. We see "1,234 visits on Tuesday" — never "Alice from Singapore visited."
        </p>

        <p>
          <strong className="text-ink">Email (only if you give it).</strong> If you subscribe to the
          blog or download a lead magnet, we store your email address. That's it. We use it to send
          you the thing you signed up for, and occasionally to tell you about something genuinely
          relevant. Unsubscribe is one click in every email.
        </p>

        <p>
          <strong className="text-ink">Nothing else.</strong> No fingerprinting. No device IDs. No
          location. No social profile lookups. No third-party trackers of any kind.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-ink">How we use what we collect</h2>

        <ul className="space-y-2">
          <li>
            <strong className="text-ink">Plausible data</strong> — to understand which posts and
            pages are useful. Aggregated counts only.
          </li>
          <li>
            <strong className="text-ink">Email addresses</strong> — to send you the content you
            asked for, and to occasionally tell you about new posts or new apps. You can unsubscribe
            at any time.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-ink">Where your data lives</h2>

        <p>
          Email addresses are stored in our email service provider (Resend) and our database
          (PocketBase). Both are hosted on infrastructure we control. We do not share email
          addresses with any third party.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-ink">Your rights</h2>

        <ul className="space-y-2">
          <li>
            <strong className="text-ink">Access</strong> — email hello@positiveness.club and we'll
            send you everything we have on you.
          </li>
          <li>
            <strong className="text-ink">Deletion</strong> — email hello@positiveness.club and we'll
            delete your email from our systems within 7 days.
          </li>
          <li>
            <strong className="text-ink">Unsubscribe</strong> — every email has a one-click
            unsubscribe link.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-ink">Cookies</h2>

        <p>
          We don't use cookies. Plausible is cookieless. Our forms don't set cookies. If you're
          seeing a cookie banner on this site, something is wrong — please tell us.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-ink">Children's privacy</h2>

        <p>
          This site is not directed at children under 13. We do not knowingly collect data from
          children. If you're a parent and believe your child has submitted data, email
          hello@positiveness.club and we'll delete it.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-ink">Changes</h2>

        <p>
          If we change this policy in a material way, we'll update this page and note the change
          date at the top. We won't email you about it — but we'll add a banner to the site for 30
          days.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-ink">Contact</h2>

        <p>
          Questions?{' '}
          <a href="mailto:hello@positiveness.club" className="text-coral underline">
            hello@positiveness.club
          </a>
          .
        </p>

        <p className="text-sm italic pt-8 border-t border-line">
          See also:{' '}
          <a href="/manifesto" className="text-coral underline">
            our privacy manifesto
          </a>
          , which explains the philosophy behind these choices.
        </p>
      </div>
    </article>
  )
}
