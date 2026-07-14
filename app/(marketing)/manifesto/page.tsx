import { SITE_URL } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy manifesto',
  description: "Privacy isn't a feature. It's the constraint that makes apps better.",
  alternates: { canonical: `${SITE_URL}/manifesto` },
}

export default function ManifestoPage() {
  return (
    <article className="container-narrow py-16 md:py-24">
      <span className="chip mb-6">Manifesto</span>
      <h1 className="text-display-lg font-bold tracking-tight mb-8 text-balance">
        Privacy isn't a feature. It's the design.
      </h1>

      <div className="prose prose-lg max-w-none text-mute leading-relaxed space-y-6">
        <p>
          Most apps treat privacy as a settings screen. A toggle. A compliance checkbox. "We care
          about your privacy" — followed by 47 SDKs in the binary.
        </p>

        <p>
          We think privacy is more fundamental. It's a constraint — and like all good constraints,
          it produces better work.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-ink">Five commitments</h2>

        <ol className="space-y-8 list-none pl-0">
          <li>
            <strong className="text-ink text-lg">1. No analytics.</strong>
            <p className="mt-2">
              No Google Analytics. No Facebook Pixel. No Mixpanel, Amplitude, Segment, Heap, Hotjar,
              FullStory, LogRocket, or any other third-party tracking SDK in any of our apps.
            </p>
          </li>

          <li>
            <strong className="text-ink text-lg">2. No crash reporting.</strong>
            <p className="mt-2">
              We don't ship Sentry, Bugsnag, Crashlytics, or equivalent. If an app crashes, we find
              out the same way you do — when you email us. (You almost never do.)
            </p>
          </li>

          <li>
            <strong className="text-ink text-lg">3. No advertising.</strong>
            <p className="mt-2">
              No ad networks. No ad IDs. No remarketing pixels. No "sponsored content." The apps we
              make are paid for by the people who use them.
            </p>
          </li>

          <li>
            <strong className="text-ink text-lg">4. Local-first by default.</strong>
            <p className="mt-2">
              Your data stays on your device unless you explicitly choose to sync it. There is no
              account required to use any pclub app. There is no server in the loop unless you ask
              for one.
            </p>
          </li>

          <li>
            <strong className="text-ink text-lg">5. We tell you when we're wrong.</strong>
            <p className="mt-2">
              If we discover a privacy issue — a leaked log line, a too-permissive permission, an
              accidental SDK — we tell you. Publicly. With a post-mortem. We don't bury it in a
              settings menu.
            </p>
          </li>
        </ol>

        <h2 className="text-2xl font-bold mt-16 mb-4 text-ink">Why this is good for you</h2>

        <p>
          Apps without analytics are faster. Without crash reporting, they're more focused. Without
          ad networks, they're quieter. Without a server in the loop, they work offline, every time.
        </p>

        <p>
          Apps without surveillance feel different. They're tools, not services. You open them, use
          them, close them. They don't follow you around. They don't push notifications to pull you
          back. They respect your attention the way they respect your data.
        </p>

        <h2 className="text-2xl font-bold mt-16 mb-4 text-ink">Why this is good for us</h2>

        <p>
          Privacy-first apps are easier to maintain. No dashboards to check. No funnel to optimize.
          No growth team. Just the product, the people who use it, and the work.
        </p>

        <p>
          The economics work because the apps are small. We don't need millions of users. We need
          thousands. A privacy-first app with 50,000 happy users is a viable business.
        </p>

        <h2 className="text-2xl font-bold mt-16 mb-4 text-ink">Why this is good for software</h2>

        <p>
          Most apps in 2026 are bloated, surveilling, engagement-optimized machines. They're tools
          built for the company, not the user. The result: a generation of people who'd rather own a
          flip phone.
        </p>

        <p>
          There's a counter-trend forming. People are deleting apps. Switching to web. Using fewer
          things more deeply. The "small apps" movement is real — and privacy-first is part of it.
        </p>

        <p>
          We're betting that the next decade of software belongs to small, calm, privacy-first apps.
          Apps that do one thing. Apps that disappear when you don't need them. Apps that respect
          you.
        </p>

        <p className="text-ink font-medium pt-8 border-t border-line">
          If you're building something similar — we want to hear from you.{' '}
          <a href="mailto:hello@positiveness.club" className="text-coral underline">
            hello@positiveness.club
          </a>
          .
        </p>
      </div>
    </article>
  )
}
