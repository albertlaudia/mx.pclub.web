import type { Metadata } from 'next'
import { getApps } from '@/lib/data'
import { SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About',
  description: 'positiveness.club is a small studio building calm, focused, privacy-first apps. Four apps, one philosophy.',
  alternates: { canonical: `${SITE_URL}/about` },
}

export default async function AboutPage() {
  const apps = await getApps()
  return (
    <article className="container-narrow py-16 md:py-24">
      <h1 className="text-display-lg font-bold tracking-tight mb-6">
        A small studio building calm software.
      </h1>

      <div className="prose prose-lg max-w-none text-mute leading-relaxed space-y-6 mt-12">
        <p>
          positiveness.club is a small independent studio. We make four apps —{' '}
          {apps.map((a, i) => (
            <span key={a.slug}>
              <a href={`/apps/${a.slug}`} className="text-coral underline">
                {a.name}
              </a>
              {i < apps.length - 1 ? ', ' : ''}
            </span>
          ))}{' '}
          — and that's it. No platform, no suite, no "ecosystem strategy." Just four apps, each
          doing one thing well.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-ink">What we believe</h2>

        <p>
          <strong className="text-ink">Small is a feature.</strong> Most apps try to do
          too much. They measure, they notify, they gamify, they optimize for engagement at the
          cost of attention. We make apps that do one thing and disappear when you're done.
        </p>

        <p>
          <strong className="text-ink">Privacy is the design.</strong> Not a feature
          you bolt on. Not a checkbox. A constraint that makes the app better — faster, simpler,
          more trustworthy. [Resonate](/apps/resonate) is the proof.
        </p>

        <p>
          <strong className="text-ink">Beautiful is non-negotiable.</strong> A calm
          app can be ugly. A privacy-first app can be ugly. They usually are. We don't accept
          that. Every pixel of every screen is intentional.
        </p>

        <p>
          <strong className="text-ink">No streaks. No shame.</strong> You miss a
          day. The app doesn't notice. You miss a week. The app still doesn't notice. The point
          is to make the small thing easy to come back to, not to make absence feel like failure.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-ink">Who we are</h2>

        <p>
          A two-person team working out of Singapore and Indonesia. We're builders, not marketers.
          We ship things we want to use.
        </p>

        <p>
          You can reach us at <a href="mailto:hello@positiveness.club" className="text-coral underline">hello@positiveness.club</a>. We read everything.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-ink">What's next</h2>

        <p>
          We have four apps. We're not making a fifth. We're focused on making these four the
          best versions of themselves. If you're a 1perc user, you might love HEAL. If you're
          an HEAL user, you might love Riseup. The cross-promo is gentle, never aggressive.
        </p>

        <p>
          If we ever do make a fifth app, it'll be on the same page: one thing, beautifully,
          privately.
        </p>
      </div>
    </article>
  )
}