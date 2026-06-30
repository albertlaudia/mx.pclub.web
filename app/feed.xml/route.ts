/**
 * RSS 2.0 + Atom 1.0 feeds for the blog.
 *
 * Why serve both?
 *   - RSS 2.0: NetNewsWire, Feedly, older readers, most podcast apps
 *   - Atom 1.0:  Modern readers, Google Reader's successor ecosystem
 * Same content, slightly different XML shape. One fetch = two feeds.
 *
 * Selectable via `?format=rss` (default) or `?format=atom`.
 *
 * Source: PocketBase `pc_blog_posts` where status='published'.
 *
 * Cache: revalidate every 30 minutes. Blog posts don't update that often.
 */

import { isPbConfigured, pbList } from '@/lib/pb'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/seo'

export const runtime = 'nodejs'
export const revalidate = 1800 // 30 min

interface PbPost {
  id: string
  slug: string
  title: string
  excerpt: string
  body: string
  published_at?: string
  updated_at?: string
  author?: string
  topics?: string[]
  keywords?: string[]
  cover_image?: string
  og_image?: string
}

const escapeXml = (s: string): string =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

const stripMd = (md: string): string =>
  md
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^>\s*/gm, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

async function fetchPosts(): Promise<PbPost[]> {
  if (!isPbConfigured()) return []
  try {
    const result = await pbList<PbPost>('pc_blog_posts', {
      filter: "status = 'published'",
      sort: '-published_at',
      perPage: 50,
    })
    return result.items
  } catch (err) {
    console.error('[feed] PB fetch failed:', err)
    return []
  }
}

function buildRss(posts: PbPost[]): string {
  const now = new Date().toUTCString()
  const lastBuild = posts[0]?.published_at ? new Date(posts[0].published_at).toUTCString() : now

  const items = posts
    .map((p) => {
      const url = `${SITE_URL}/blog/${p.slug}`
      const pubDate = p.published_at ? new Date(p.published_at).toUTCString() : now
      const desc = p.excerpt || stripMd(p.body).slice(0, 300)
      const categories = (p.topics ?? [])
        .map((t) => `      <category>${escapeXml(t)}</category>`)
        .join('\n')
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(desc)}</description>
${categories}
    </item>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)} — Field notes</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`
}

function buildAtom(posts: PbPost[]): string {
  const now = new Date().toISOString()
  const updated = posts[0]?.published_at ?? now

  const entries = posts
    .map((p) => {
      const url = `${SITE_URL}/blog/${p.slug}`
      const pub = p.published_at ? new Date(p.published_at).toISOString() : now
      const desc = p.excerpt || stripMd(p.body).slice(0, 300)
      return `  <entry>
    <title>${escapeXml(p.title)}</title>
    <link href="${url}"/>
    <id>${url}</id>
    <updated>${pub}</updated>
    <published>${pub}</published>
    <summary>${escapeXml(desc)}</summary>
  </entry>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(SITE_NAME)} — Field notes</title>
  <link href="${SITE_URL}/blog"/>
  <link href="${SITE_URL}/feed.xml?format=atom" rel="self"/>
  <id>${SITE_URL}/blog</id>
  <updated>${updated}</updated>
  <subtitle>${escapeXml(SITE_DESCRIPTION)}</subtitle>
${entries}
</feed>`
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const format = url.searchParams.get('format') ?? 'rss'
  const posts = await fetchPosts()

  const body = format === 'atom' ? buildAtom(posts) : buildRss(posts)
  const contentType =
    format === 'atom' ? 'application/atom+xml; charset=utf-8' : 'application/rss+xml; charset=utf-8'

  return new Response(body, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=1800, s-maxage=3600',
    },
  })
}
