import type { Metadata } from 'next'
import { AppCard } from '@/components/AppCard'
import { JsonLd } from '@/components/JsonLd'
import { getApps } from '@/lib/data'
import { SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Apps',
  description: 'Every positiveness.club app — book summaries, calm audio, morning routines, and a privacy-first guitar tuner.',
  alternates: { canonical: `${SITE_URL}/apps` },
}

export default async function AppsIndexPage() {
  const apps = await getApps()
  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'positiveness.club apps',
    itemListElement: apps.map((app, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'MobileApplication',
        name: app.name,
        url: `${SITE_URL}/apps/${app.slug}`,
        applicationCategory: app.categoryLabel,
        description: app.tagline,
      },
    })),
  }

  return (
    <>
      <JsonLd data={itemListLd} />

      <section className="container-wide py-20 md:py-28">
        <div className="max-w-2xl mb-16">
          <h1 className="text-display-lg font-bold tracking-tight">Every app, one philosophy.</h1>
          <p className="mt-5 text-xl text-mute leading-relaxed">
            Each positiveness app does one thing and does it well. Pick what you need, leave the
            rest.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} variant="featured" />
          ))}
        </div>
      </section>
    </>
  )
}