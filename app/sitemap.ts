import type { MetadataRoute } from 'next'
import { apps } from '@/lib/data/apps'
import { getPublishedPosts } from '@/lib/data/blog'
import { SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
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

  const blogRoutes: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...appRoutes, ...blogRoutes]
}