import { BlogCard } from '@/components/BlogCard'
import { JsonLd } from '@/components/JsonLd'
import { getPosts, getTopics } from '@/lib/data'
import { SITE_URL } from '@/lib/seo'
import { Search as SearchIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Field notes',
  description:
    "What we're learning building a small family of calm, focused apps. Books, wellness, habits, music, and the philosophy of small software.",
  alternates: { canonical: `${SITE_URL}/blog` },
}

export default async function BlogIndexPage() {
  const [posts, topics] = await Promise.all([getPosts(), getTopics()])
  const featured = posts.find((p) => p.featured) || posts[0]
  const rest = posts.filter((p) => p.slug !== featured?.slug)

  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'positiveness.club — Field notes',
    url: `${SITE_URL}/blog`,
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.publishedAt,
      author: { '@type': 'Person', name: p.author },
    })),
  }

  return (
    <>
      <JsonLd data={blogLd} />

      <section className="container-wide py-16 md:py-24">
        <div className="max-w-2xl mb-12">
          <h1 className="text-display-lg font-bold tracking-tight">Field notes</h1>
          <p className="mt-5 text-xl text-mute leading-relaxed">
            What we're learning building a small family of calm, focused apps.
          </p>
        </div>

        {/* Topic chips + search */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <Link href="/blog" className="chip chip-active">
            All
          </Link>
          {topics.map((t) => (
            <Link key={t.slug} href={`/blog/topic/${t.slug}`} className="chip">
              {t.name}
            </Link>
          ))}
          <Link
            href="/blog/search"
            className="chip ml-auto text-mute hover:text-ink"
            aria-label="Search posts"
          >
            <SearchIcon className="inline-block mr-1" size={14} />
            Search
          </Link>
        </div>

        {/* Featured post */}
        {featured && (
          <div className="mb-16">
            <BlogCard post={featured} featured />
          </div>
        )}

        {/* Rest */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-mute text-lg">No posts yet. Check back soon.</p>
          </div>
        )}
      </section>
    </>
  )
}
