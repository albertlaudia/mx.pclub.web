import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import { AppCard } from '@/components/AppCard'
import { BlogCard } from '@/components/BlogCard'
import { Button } from '@/components/Button'
import { JsonLd } from '@/components/JsonLd'
import { LeadMagnetForm } from '@/components/LeadMagnetForm'
import { apps } from '@/lib/data/apps'
import { getPublishedPosts } from '@/lib/data/blog'
import { SITE_DESCRIPTION, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Apps that make you a little more human',
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
}

export default function HomePage() {
  const recentPosts = getPublishedPosts().slice(0, 3)
  const featuredApp = apps[0]
  const otherApps = apps.slice(1)

  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'positiveness.club',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    sameAs: [
      'https://twitter.com/positivenessclub',
      'https://github.com/albertlaudia',
    ],
  }

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'positiveness.club',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <JsonLd data={[orgLd, websiteLd]} />

      {/* Hero */}
      <section className="relative overflow-hidden gradient-bg-soft">
        <div className="container-wide pt-20 pb-24 md:pt-32 md:pb-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="chip mb-6">UAT preview · v0.1</span>
            <h1 className="text-display-lg md:text-display-xl font-bold tracking-tight text-balance">
              Apps that make you a{' '}
              <span className="gradient-text">little more human</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-mute leading-relaxed max-w-2xl mx-auto">
              Book summaries in 5 minutes. Calm in 3. A morning ritual that actually fits. A guitar
              tuner that respects your privacy. Four small apps, one philosophy.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Button as="link" href="/apps" size="lg" variant="primary">
                See all apps
                <ArrowRight size={18} />
              </Button>
              <Button as="link" href="/apps/1perc" size="lg" variant="secondary">
                Try 1perc free
              </Button>
            </div>
            <p className="mt-6 text-sm text-mute">
              No credit card. No tracking. No streak-shaming.
            </p>
          </div>

          {/* App cluster preview */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {apps.map((app) => (
                <Link
                  key={app.slug}
                  href={`/apps/${app.slug}`}
                  className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-card/80 backdrop-blur border border-line hover:border-coral/40 transition-all hover:-translate-y-0.5"
                >
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-[22%] flex items-center justify-center text-white font-semibold text-xl"
                    style={{
                      background: `linear-gradient(135deg, ${app.accentColor}, ${app.accentColor}cc)`,
                    }}
                  >
                    {app.name.charAt(0)}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-sm">{app.name}</p>
                    <p className="text-xs text-mute mt-0.5 line-clamp-1">
                      {app.tagline.split('.')[0]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apps grid */}
      <section className="container-wide py-20 md:py-28">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <h2 className="text-display-md font-bold tracking-tight">Four small apps.</h2>
            <p className="mt-3 text-mute text-lg">
              Each one focused. None of them bloated. Pick what you need.
            </p>
          </div>
          <Link
            href="/apps"
            className="text-sm font-medium text-coral hover:text-coral-hover inline-flex items-center gap-1"
          >
            See all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="container-narrow py-20 md:py-28">
        <h2 className="text-display-md font-bold tracking-tight mb-8">Why these apps exist</h2>
        <div className="space-y-6 text-lg text-mute leading-relaxed">
          <p>
            We believe most apps try to do too much. They measure, they notify, they gamify, they
            optimize for engagement at the cost of attention. The result: a screen full of tools
            that feel like work to use.
          </p>
          <p>
            positiveness.club is the opposite. Each app does <em>one thing</em> and does it
            well. A book summary app that respects your time. A calm app that respects your
            mental state. A morning app that respects your actual life. A guitar tuner that
            respects your data.
          </p>
          <p className="text-ink font-medium">
            Small apps. Calm apps. Apps that disappear when you don't need them.
          </p>
        </div>
      </section>

      {/* Blog */}
      <section className="container-wide py-20 md:py-28 border-t border-line">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <h2 className="text-display-md font-bold tracking-tight">Field notes</h2>
            <p className="mt-3 text-mute text-lg">What we're learning as we build.</p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-medium text-coral hover:text-coral-hover inline-flex items-center gap-1"
          >
            All posts <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Email capture */}
      <section className="container-narrow py-20 md:py-28">
        <div className="text-center mb-8">
          <h2 className="text-display-md font-bold tracking-tight">Not ready for the app?</h2>
          <p className="mt-3 text-mute text-lg">
            Get a free 7-day book summary pack. One book a day, 5 minutes each, delivered to
            your inbox.
          </p>
        </div>
        <LeadMagnetForm
          source="homepage-hero"
          magnet="1perc-7day-pack"
          headline="Free 7-day book summary pack"
          subtext="We'll send it instantly. Unsubscribe anytime."
          buttonLabel="Send me the pack"
        />
      </section>
    </>
  )
}