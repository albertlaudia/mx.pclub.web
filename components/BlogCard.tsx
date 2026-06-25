import Link from 'next/link'
import { Clock } from 'lucide-react'
import type { BlogPostMeta } from '@/lib/data/blog'
import { formatDate } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPostMeta
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block ${featured ? 'md:col-span-2' : ''}`}
    >
      <article className="flex flex-col h-full rounded-2xl border border-line bg-card overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 hover:border-coral/30">
        <div
          className={`relative overflow-hidden ${featured ? 'aspect-[2/1]' : 'aspect-[16/9]'}`}
          style={{
            background: `linear-gradient(135deg, ${getTopicColor(post.topic)}40 0%, ${getTopicColor(post.topic)}10 100%)`,
          }}
        >
          <div className="absolute inset-0 flex items-end p-6">
            <span className="chip" style={{ color: getTopicColor(post.topic) }}>
              {post.topic}
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-1 p-6">
          <h3
            className={`font-semibold tracking-tight group-hover:text-coral transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}
          >
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-mute leading-relaxed line-clamp-2">{post.excerpt}</p>

          <div className="mt-auto pt-4 flex items-center gap-3 text-xs text-mute">
            <span>{post.author}</span>
            <span>·</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} />
              {post.readingTimeMin} min
            </span>
          </div>
        </div>
      </article>
    </Link>
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