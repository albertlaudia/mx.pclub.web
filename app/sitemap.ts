import { getApps, getPosts } from '@/lib/data'
import { SITE_URL } from '@/lib/seo'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [apps, posts] = await Promise.all([getApps(), getPosts()])
  const now = new Date()
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/apps`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/manifesto`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}/press`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]

  const appRoutes: MetadataRoute.Sitemap = apps.flatMap((app) => [
    {
      url: `${SITE_URL}/apps/${app.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/apps/${app.slug}/privacy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/apps/${app.slug}/support`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ])

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Per-app legal pages (all 4 apps have dedicated legal docs).
  // /<app>/terms and /<app>/policy are the canonical URLs that App Store /
  // Play Store metadata point to. The legacy /<app>/tnc and /<app>/policies
  // URLs are kept as backwards-compatible aliases (same content) for
  // already-shared links, but we do not list them in the sitemap to avoid
  // duplicate-content signals.
  const appLegalRoutes: MetadataRoute.Sitemap = apps
    .filter((app) => ['heal', '1perc', 'riseup', 'resonate'].includes(app.slug))
    .flatMap((app) => [
      {
        url: `${SITE_URL}/${app.slug}/terms`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.4,
      },
      {
        url: `${SITE_URL}/${app.slug}/policy`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.4,
      },
    ])

  return [...staticRoutes, ...appRoutes, ...blogRoutes, ...appLegalRoutes]
}
