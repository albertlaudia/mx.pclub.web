'use client'

import { formatDate } from '@/lib/utils'
import { Search, X } from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState } from 'react'

export interface PostIndexEntry {
  slug: string
  title: string
  excerpt: string
  topic: string
  tags: string[]
  readingTimeMin: number
  publishedAt: string
  relatedApp: string | null
  cover: string
  featured: boolean
}

interface BlogSearchClientProps {
  index: PostIndexEntry[]
  initialQuery: string
}

/**
 * Client-side fuzzy search over the blog index.
 *
 * Algorithm: simple token match with scoring.
 *   - Title hit: 10 points
 *   - Tag hit: 5 points
 *   - Topic hit: 4 points
 *   - Excerpt hit: 2 points
 *   - All multi-token queries require every token to hit somewhere
 *
 * No backend, no full-text search needed for 8 posts.
 * Scales fine to ~500 posts. For >500, switch to a real search engine.
 */
export function BlogSearchClient({ index, initialQuery }: BlogSearchClientProps) {
  const [query, setQuery] = useState(initialQuery)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []

    const tokens = q.split(/\s+/).filter(Boolean)
    if (tokens.length === 0) return []

    const scored: Array<{ post: PostIndexEntry; score: number }> = []

    for (const post of index) {
      const haystacks = {
        title: post.title.toLowerCase(),
        excerpt: post.excerpt.toLowerCase(),
        topic: post.topic.toLowerCase(),
        tags: post.tags.map((t) => t.toLowerCase()),
      }

      let score = 0
      let allMatch = true

      for (const token of tokens) {
        let tokenScore = 0
        if (haystacks.title.includes(token)) tokenScore += 10
        if (haystacks.tags.some((t) => t.includes(token))) tokenScore += 5
        if (haystacks.topic.includes(token)) tokenScore += 4
        if (haystacks.excerpt.includes(token)) tokenScore += 2
        if (tokenScore === 0) {
          allMatch = false
          break
        }
        score += tokenScore
      }

      if (allMatch) scored.push({ post, score })
    }

    scored.sort((a, b) => b.score - a.score)
    return scored.map((s) => s.post)
  }, [query, index])

  return (
    <>
      <div className="relative max-w-2xl mb-8">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-mute pointer-events-none"
          size={20}
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try 'meditation', 'guitar', 'money'…"
          className="w-full pl-12 pr-12 py-3.5 rounded-2xl border border-line bg-card text-base focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-mute hover:text-ink hover:bg-zinc-100"
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {query.trim() && (
        <p className="text-sm text-mute mb-6">
          {results.length === 0
            ? `No posts match "${query}".`
            : `${results.length} post${results.length === 1 ? '' : 's'} match "${query}".`}
        </p>
      )}

      {!query.trim() && (
        <div className="card max-w-2xl text-mute">
          <p className="leading-relaxed">
            Type a keyword to search. Try{' '}
            <button
              type="button"
              onClick={() => setQuery('meditation')}
              className="text-coral underline"
            >
              meditation
            </button>
            ,{' '}
            <button
              type="button"
              onClick={() => setQuery('guitar')}
              className="text-coral underline"
            >
              guitar
            </button>
            , or{' '}
            <button
              type="button"
              onClick={() => setQuery('morning')}
              className="text-coral underline"
            >
              morning
            </button>
            .
          </p>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {results.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card card-hover group">
            <div className="flex items-center gap-2 mb-3">
              <span className="chip text-xs">{post.topic}</span>
              {post.featured && <span className="text-xs text-coral font-medium">Featured</span>}
            </div>
            <h3 className="font-semibold group-hover:text-coral transition-colors mb-2">
              {post.title}
            </h3>
            <p className="text-sm text-mute line-clamp-2 mb-3">{post.excerpt}</p>
            <div className="flex items-center gap-3 text-xs text-mute">
              <span>{formatDate(post.publishedAt)}</span>
              <span>·</span>
              <span>{post.readingTimeMin} min read</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
