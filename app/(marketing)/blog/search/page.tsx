import { getPosts } from '@/lib/data'
import { SITE_URL } from '@/lib/seo'
import { Search, X } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { BlogSearchClient } from './client'

export const metadata: Metadata = {
  title: 'Search field notes',
  description:
    'Search the positiveness.club blog. Books, wellness, habits, music, and field notes on building small software.',
  alternates: { canonical: `${SITE_URL}/blog/search` },
  robots: { index: true, follow: true },
}

export const dynamic = 'force-dynamic'

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const allPosts = await getPosts()

  // Build a lightweight search index: each post + the words in title/excerpt/tags
  const index = allPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    topic: p.topic,
    tags: p.tags,
    readingTimeMin: p.readingTimeMin,
    publishedAt: p.publishedAt,
    relatedApp: p.relatedApp,
    cover: p.cover,
    featured: p.featured ?? false,
  }))

  return (
    <main className="container-wide py-16 md:py-24">
      <header className="max-w-2xl mb-12">
        <Link
          href="/blog"
          className="text-sm text-mute hover:text-ink mb-4 inline-flex items-center gap-1"
        >
          ← All posts
        </Link>
        <h1 className="text-display-lg font-bold tracking-tight mb-3">Search field notes</h1>
        <p className="text-xl text-mute leading-relaxed">
          Find a post by title, topic, or tag. {allPosts.length} posts indexed.
        </p>
      </header>

      <Suspense fallback={<div className="text-mute">Loading…</div>}>
        <BlogSearchClient index={index} initialQuery={q ?? ''} />
      </Suspense>
    </main>
  )
}
