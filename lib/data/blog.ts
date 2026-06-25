/**
 * Blog post metadata.
 *
 * v1: static. The body content lives as MDX in `content/blog/<slug>.mdx`.
 * Production: move to PocketBase + a body MDX field.
 * Schema mirrors the `blog_posts` collection in docs/ARCHITECTURE.md §7.
 */

export type BlogTopic = 'books' | 'wellness' | 'habits' | 'music' | 'meta'

export interface BlogPostMeta {
  slug: string
  title: string
  metaDescription: string
  excerpt: string
  cover: string
  author: string
  authorRole: string
  topic: BlogTopic
  tags: string[]
  relatedApp: string | null
  readingTimeMin: number
  publishedAt: string
  status: 'published' | 'draft'
  keywords: string[]
  featured?: boolean
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: '5-books-that-change-how-you-think-about-money',
    title: '5 books that will change how you think about money',
    metaDescription:
      'Five books that reframe money — not as a number, but as a tool. From The Psychology of Money to Your Money or Your Life, here\'s what to read first.',
    excerpt:
      "Money is a story we tell ourselves. These five books rewrite the story — and most are under 250 pages.",
    cover: '/blog/covers/money-books.png',
    author: 'Albert L.',
    authorRole: 'Founder, 1perc',
    topic: 'books',
    tags: ['money', 'personal finance', 'book recommendations', 'psychology'],
    relatedApp: '1perc',
    readingTimeMin: 7,
    publishedAt: '2026-06-22',
    status: 'published',
    keywords: ['best money books', 'personal finance books', 'psychology of money'],
    featured: true,
  },
  {
    slug: '3-minute-morning-reset-anxiety',
    title: 'The 3-minute morning reset for anxiety (no meditation required)',
    metaDescription:
      'A 3-minute audio routine that actually works for racing thoughts. No app ritual, no hour-long meditation — just press play and breathe.',
    excerpt:
      "If 'just meditate' is the last thing you can do when anxiety hits, this 3-minute routine is for you.",
    cover: '/blog/covers/morning-reset.png',
    author: 'Albert L.',
    authorRole: 'Founder, HEAL',
    topic: 'wellness',
    tags: ['anxiety relief', 'morning routine', 'mental health', 'breathing'],
    relatedApp: 'heal',
    readingTimeMin: 5,
    publishedAt: '2026-06-20',
    status: 'published',
    keywords: ['anxiety relief', 'morning anxiety', '3 minute meditation'],
    featured: true,
  },
  {
    slug: '30-second-guitar-tuning-trick',
    title: 'The 30-second guitar tuning trick every player should know',
    metaDescription:
      'Why your guitar goes out of tune (and the 30-second trick that fixes it). Plus how to tune by ear in under a minute.',
    excerpt:
      "If your guitar sounds off no matter what you do, it's almost certainly this. The fix takes 30 seconds.",
    cover: '/blog/covers/guitar-tuning.png',
    author: 'Albert L.',
    authorRole: 'Founder, Resonate',
    topic: 'music',
    tags: ['guitar tuning', 'guitar tips', 'beginner guitar', 'chromatic tuner'],
    relatedApp: 'resonate',
    readingTimeMin: 4,
    publishedAt: '2026-06-18',
    status: 'published',
    keywords: ['how to tune a guitar', 'guitar out of tune', 'tuning trick'],
    featured: true,
  },
  {
    slug: 'why-morning-routines-fail',
    title: 'Why morning routines fail (and what actually works instead)',
    metaDescription:
      "Most morning routines fail because they're copied from people with different lives. Here's the small-win framework that actually sticks.",
    excerpt:
      "The 5am club is a brand, not a blueprint. Here's the morning routine that fits your actual life.",
    cover: '/blog/covers/morning-routine.png',
    author: 'Albert L.',
    authorRole: 'Founder, Riseup',
    topic: 'habits',
    tags: ['morning routine', 'habits', 'productivity', '5am club'],
    relatedApp: 'riseup',
    readingTimeMin: 6,
    publishedAt: '2026-06-15',
    status: 'published',
    keywords: ['morning routine', 'why routines fail', '5am club alternative'],
  },
  {
    slug: 'privacy-first-apps-can-be-beautiful',
    title: 'Privacy-first apps can (and should) be beautiful',
    metaDescription:
      "The myth that privacy-first means ugly or limited. How Resonate proves the opposite — and why every app should follow.",
    excerpt:
      "Privacy isn't a feature you bolt on. It's a design constraint that produces better apps.",
    cover: '/blog/covers/privacy-beautiful.png',
    author: 'Albert L.',
    authorRole: 'Founder, positiveness.club',
    topic: 'meta',
    tags: ['privacy', 'design', 'app philosophy', 'positiveness'],
    relatedApp: 'resonate',
    readingTimeMin: 5,
    publishedAt: '2026-06-12',
    status: 'published',
    keywords: ['privacy first app', 'beautiful apps', 'app design philosophy'],
  },
]

export function getPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getPublishedPosts(): BlogPostMeta[] {
  return blogPosts
    .filter((p) => p.status === 'published')
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export function getPostsByTopic(topic: BlogTopic): BlogPostMeta[] {
  return getPublishedPosts().filter((p) => p.topic === topic)
}

export function getPostsByApp(appSlug: string): BlogPostMeta[] {
  return getPublishedPosts().filter((p) => p.relatedApp === appSlug)
}

export function getRelatedPosts(slug: string, n = 3): BlogPostMeta[] {
  const post = getPost(slug)
  if (!post) return []
  return getPublishedPosts()
    .filter((p) => p.slug !== slug)
    .filter((p) => p.topic === post.topic || p.relatedApp === post.relatedApp)
    .slice(0, n)
}

export const topics: { slug: BlogTopic; name: string; description: string; color: string }[] = [
  {
    slug: 'books',
    name: 'Books & learning',
    description: 'What to read, and what to skip.',
    color: '#F5A623',
  },
  {
    slug: 'wellness',
    name: 'Wellness & calm',
    description: 'For the harder moments.',
    color: '#7FB069',
  },
  {
    slug: 'habits',
    name: 'Habits & routine',
    description: 'Small moves, lasting change.',
    color: '#E07856',
  },
  {
    slug: 'music',
    name: 'Music & craft',
    description: 'For the makers.',
    color: '#C46A4A',
  },
  {
    slug: 'meta',
    name: 'Field notes',
    description: 'How we build, why we build.',
    color: '#6B6B6B',
  },
]
