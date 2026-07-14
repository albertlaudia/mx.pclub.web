import { BlogCard } from '@/components/BlogCard'
import { getPostsByTopic, getTopics } from '@/lib/data'
import { SITE_URL } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const topics = await getTopics()
  return topics.map((t) => ({ topic: t.slug }))
}

export async function generateMetadata({
  params,
}: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const { topic } = await params
  const topics = await getTopics()
  const t = topics.find((x) => x.slug === topic)
  if (!t) return {}
  return {
    title: `${t.name} — Field notes`,
    description: t.description,
    alternates: { canonical: `${SITE_URL}/blog/topic/${t.slug}` },
  }
}

export default async function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params
  const [topics, posts] = await Promise.all([getTopics(), getPostsByTopic(topic)])
  const t = topics.find((x) => x.slug === topic)
  if (!t) notFound()

  return (
    <>
      <section
        className="border-b border-line"
        style={{ background: `linear-gradient(135deg, ${t.color}10 0%, transparent 60%)` }}
      >
        <div className="container-wide py-16 md:py-24">
          <Link
            href="/blog"
            className="text-sm text-mute hover:text-ink mb-6 inline-flex items-center gap-1"
          >
            ← All posts
          </Link>
          <h1 className="text-display-lg font-bold tracking-tight" style={{ color: t.color }}>
            {t.name}
          </h1>
          <p className="mt-4 text-xl text-mute max-w-2xl">{t.description}</p>
          <p className="mt-6 text-sm text-mute">{posts.length} posts</p>
        </div>
      </section>

      <section className="container-wide py-16">
        {posts.length === 0 ? (
          <p className="text-center text-mute py-12">No posts in this topic yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
