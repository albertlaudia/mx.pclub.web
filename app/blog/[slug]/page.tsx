import Link from 'next/link'
import { Clock } from 'lucide-react'
import type { Metadata } from 'next'
import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { AppCard } from '@/components/AppCard'
import { JsonLd } from '@/components/JsonLd'
import { SmartCTA } from '@/components/SmartCTA'
import { getApp } from '@/lib/data/apps'
import { getPost, getPublishedPosts, getRelatedPosts } from '@/lib/data/blog'
import { SITE_URL } from '@/lib/seo'
import { formatDate } from '@/lib/utils'
import { mdxComponents } from '@/components/mdx'

export function generateStaticParams() {
  return getPublishedPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [`/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(post.author)}`],
    },
  }
}

export default async function BlogPostPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const relatedApp = post.relatedApp ? getApp(post.relatedApp) : null
  const relatedPosts = getRelatedPosts(slug, 3)

  let content
  try {
    const fs = await import('node:fs/promises')
    const path = await import('node:path')
    const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`)
    const source = await fs.readFile(filePath, 'utf8')
    const compiled = await compileMDX({
      source,
      components: mdxComponents,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              { behavior: 'wrap', properties: { className: ['heading-anchor'] } },
            ],
          ],
        },
      },
    })
    content = compiled.content
  } catch {
    content = (
      <p className="text-mute">Content not available.</p>
    )
  }

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE_URL}${post.cover}`,
    datePublished: post.publishedAt,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'positiveness.club',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    keywords: post.keywords.join(', '),
  }

  return (
    <article>
      <JsonLd data={articleLd} />

      {/* Cover / Header */}
      <header
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${getTopicBg(post.topic)} 0%, transparent 100%)`,
        }}
      >
        <div className="container-narrow pt-16 pb-12 md:pt-24 md:pb-16">
          <Link
            href="/blog"
            className="text-sm text-mute hover:text-ink mb-6 inline-flex items-center gap-1"
          >
            ← Field notes
          </Link>
          <div className="flex items-center gap-2 mb-6">
            <Link
              href={`/blog/topic/${post.topic}`}
              className="chip text-xs"
              style={{ color: getTopicColor(post.topic) }}
            >
              {post.topic}
            </Link>
            {post.relatedApp && (
              <Link href={`/apps/${post.relatedApp}`} className="chip text-xs">
                {post.relatedApp}
              </Link>
            )}
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold tracking-tight text-balance">
            {post.title}
          </h1>
          <p className="mt-6 text-xl text-mute leading-relaxed">{post.excerpt}</p>
          <div className="mt-8 flex items-center gap-4 text-sm text-mute">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-coral/10 text-coral flex items-center justify-center font-semibold text-xs">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-ink">{post.author}</p>
                <p className="text-xs">{post.authorRole}</p>
              </div>
            </div>
            <span>·</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={14} />
              {post.readingTimeMin} min read
            </span>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="container-narrow py-12 md:py-16">
        <div className="prose prose-lg max-w-none prose-headings:tracking-tight prose-headings:font-semibold prose-a:text-coral prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-blockquote:border-coral prose-blockquote:bg-coral/5 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic">
          {content}
        </div>

        {/* Mid-article CTA */}
        {relatedApp && (
          <div className="my-16">
            <div
              className="rounded-3xl p-8 md:p-10 text-center"
              style={{ backgroundColor: `${relatedApp.accentColor}15` }}
            >
              <p className="text-sm font-medium uppercase tracking-wider text-mute mb-2">
                Try the app
              </p>
              <h3 className="text-display-sm font-bold tracking-tight mb-2">
                {relatedApp.name}
              </h3>
              <p className="text-mute mb-6 max-w-md mx-auto">{relatedApp.tagline}</p>
              <SmartCTA app={relatedApp.slug} placement="blog-mid" size="md" />
            </div>
          </div>
        )}
      </div>

      {/* End CTA */}
      {relatedApp && (
        <div className="container-narrow pb-16">
          <div className="text-center">
            <p className="text-mute mb-4">Liked this? Try the app.</p>
            <SmartCTA app={relatedApp.slug} placement="blog-end" size="md" />
          </div>
        </div>
      )}

      {/* Author */}
      <div className="container-narrow pb-16 border-t border-line pt-12">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-coral/10 text-coral flex items-center justify-center font-semibold">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="font-semibold">{post.author}</p>
            <p className="text-sm text-mute">{post.authorRole}</p>
            <p className="mt-2 text-sm text-mute leading-relaxed max-w-md">
              Building small, calm, privacy-first apps. Subscribe to the blog for new posts.
            </p>
          </div>
        </div>
      </div>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <div className="container-wide py-16 border-t border-line">
          <h2 className="text-display-sm font-bold tracking-tight mb-8">Keep reading</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card card-hover group"
              >
                <span className="chip text-xs mb-3" style={{ color: getTopicColor(p.topic) }}>
                  {p.topic}
                </span>
                <h3 className="font-semibold group-hover:text-coral transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-mute line-clamp-2">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

function getTopicColor(topic: string): string {
  const map: Record<string, string> = {
    books: '#F5A623',
    wellness: '#7FB069',
    habits: '#E07856',
    music: '#C46A4A',
    meta: '#6B6B6B',
  }
  return map[topic] || '#6B6B6B'
}

function getTopicBg(topic: string): string {
  const map: Record<string, string> = {
    books: '#FEF3C7',
    wellness: '#DCFCE7',
    habits: '#FFEDD5',
    music: '#FCE7E7',
    meta: '#F5F5F4',
  }
  return map[topic] || '#F5F5F4'
}