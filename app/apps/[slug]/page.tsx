import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AppCard } from '@/components/AppCard'
import { AppIcon } from '@/components/AppIcon'
import { BlogCard } from '@/components/BlogCard'
import { HeroArt } from '@/components/HeroArt'
import { JsonLd } from '@/components/JsonLd'
import { LeadMagnetForm } from '@/components/LeadMagnetForm'
import { RatingBadge } from '@/components/RatingBadge'
import { ScreenshotMock } from '@/components/ScreenshotMock'
import { SmartAppBannerMeta } from '@/components/SmartAppBannerMeta'
import { SmartCTA } from '@/components/SmartCTA'
import { apps, getApp, getOtherApps } from '@/lib/data/apps'
import { getPostsByApp } from '@/lib/data/blog'
import { SITE_URL } from '@/lib/seo'

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const app = getApp(slug)
  if (!app) return {}
  return {
    title: `${app.name} — ${app.tagline}`,
    description: app.description,
    keywords: app.keywords,
    alternates: { canonical: `${SITE_URL}/apps/${app.slug}` },
    openGraph: {
      title: app.name,
      description: app.tagline,
      url: `${SITE_URL}/apps/${app.slug}`,
      images: [`/api/og?title=${encodeURIComponent(app.name)}&subtitle=${encodeURIComponent(app.tagline)}&accent=${encodeURIComponent(app.accentColor.replace('#', ''))}`],
    },
  }
}

export default async function AppLandingPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const app = getApp(slug)
  if (!app) notFound()

  const others = getOtherApps(slug, 3)
  const relatedPosts = getPostsByApp(slug).slice(0, 2)

  // JSON-LD: SoftwareApplication
  const softwareLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.description,
    url: `${SITE_URL}/apps/${app.slug}`,
    applicationCategory: app.categoryLabel,
    operatingSystem: 'iOS, Android',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Organization', name: 'positiveness.club', url: SITE_URL },
  }

  // JSON-LD: FAQPage
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: app.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <JsonLd data={[softwareLd, faqLd]} />
      <SmartAppBannerMeta app={app} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0 opacity-30 -z-10"
          style={{
            background: `linear-gradient(135deg, ${app.accentColor}20 0%, transparent 50%, ${app.accentColor}10 100%)`,
          }}
        />
        <div className="container-wide py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <Link
                href="/apps"
                className="text-sm text-mute hover:text-ink mb-6 inline-flex items-center gap-1"
              >
                ← All apps
              </Link>
              <div className="flex items-center gap-3 mb-5">
                <AppIcon slug={app.slug} size="lg" />
                <span className="chip">{app.categoryLabel}</span>
              </div>
              <h1 className="text-display-lg md:text-display-xl font-bold tracking-tight">
                {app.name}
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-mute leading-relaxed">
                {app.tagline}
              </p>
              <p className="mt-6 text-mute leading-relaxed">{app.description}</p>

              {app.status === 'live' && (
                <div className="mt-4">
                  <RatingBadge appName={app.name} rating={4.8} count={12000} />
                </div>
              )}

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <SmartCTA
                  app={app.slug}
                  placement="hero"
                  variant="primary"
                  size="lg"
                  showSubtext
                />
                <Link
                  href="#features"
                  className="btn-base btn-lg btn-secondary inline-flex items-center justify-center"
                >
                  See what it does
                </Link>
              </div>
            </div>

            <div className="relative">
              <HeroArt slug={app.slug} className="w-full h-auto rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {[0, 1, 2].map((i) => (
            <ScreenshotMock key={i} app={app} index={i} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container-wide py-20 border-t border-line">
        <div className="max-w-2xl mb-12">
          <h2 className="text-display-md font-bold tracking-tight">What you'll love</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {app.features.map((f) => (
            <div key={f.title} className="card card-hover">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${app.accentColor}20` }}
              >
                <CheckCircle2 size={24} style={{ color: app.accentColor }} />
              </div>
              <h3 className="font-semibold mb-1.5">{f.title}</h3>
              <p className="text-sm text-mute leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Long description */}
      <section className="container-narrow py-20 border-t border-line">
        <h2 className="text-display-md font-bold tracking-tight mb-8">In detail</h2>
        <div className="prose prose-lg max-w-none text-mute leading-relaxed space-y-6">
          {app.longDescription.split('\n\n').map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {app.testimonials.length > 0 && (
        <section className="container-wide py-20 border-t border-line">
          <h2 className="text-display-md font-bold tracking-tight mb-12">What people say</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {app.testimonials.map((t) => (
              <figure key={t.author} className="card">
                <blockquote className="text-lg leading-relaxed text-ink">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-4 text-sm text-mute">
                  — {t.author}, <span>{t.source}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="container-narrow py-20 border-t border-line">
        <h2 className="text-display-md font-bold tracking-tight mb-10">Frequently asked</h2>
        <div className="space-y-4">
          {app.faq.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-line bg-card p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer font-medium">
                {f.q}
                <span className="text-mute group-open:rotate-45 transition-transform text-2xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-4 text-mute leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Cross-promo */}
      <section className="container-wide py-20 border-t border-line">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <h2 className="text-display-md font-bold tracking-tight">Also from positiveness</h2>
            <p className="mt-2 text-mute">Other apps in the ecosystem.</p>
          </div>
          <Link
            href="/apps"
            className="text-sm font-medium text-coral inline-flex items-center gap-1"
          >
            All apps <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {others.map((o) => (
            <AppCard key={o.slug} app={o} />
          ))}
        </div>
      </section>

      {/* Related blog */}
      {relatedPosts.length > 0 && (
        <section className="container-wide py-20 border-t border-line">
          <h2 className="text-display-md font-bold tracking-tight mb-10">Read more</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedPosts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      {/* Email capture */}
      {app.leadMagnetSlug && (
        <section className="container-narrow py-20 border-t border-line">
          <div className="text-center mb-8">
            <h2 className="text-display-md font-bold tracking-tight">Try before you install</h2>
            <p className="mt-3 text-mute text-lg">
              Get a free taste of {app.name} in your inbox.
            </p>
          </div>
          <LeadMagnetForm
            source={`app-${app.slug}`}
            app={app.slug}
            magnet={app.leadMagnetSlug}
            headline={`Free ${app.name} starter pack`}
            buttonLabel="Send it to me"
          />
        </section>
      )}

      {/* Final CTA */}
      <section className="container-wide py-20 border-t border-line">
        <div
          className="rounded-3xl p-12 md:p-16 text-center"
          style={{ backgroundColor: `${app.accentColor}15` }}
        >
          <h2 className="text-display-md font-bold tracking-tight">Ready when you are.</h2>
          <p className="mt-4 text-lg text-mute max-w-xl mx-auto">{app.ctaSubtext}</p>
          <div className="mt-8">
            <SmartCTA app={app.slug} placement="final" variant="primary" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}