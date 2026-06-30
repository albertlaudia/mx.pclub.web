#!/usr/bin/env tsx
/**
 * Seed PocketBase with the static data from lib/data/.
 *
 * Usage:
 *   PB_URL=https://... PB_IDENTITY=... PB_PASSWORD=... \
 *     npx tsx scripts/seed-pocketbase.ts
 *
 * Idempotent: re-running upserts records by slug (so it's safe to re-run
 * after edits to lib/data/*).
 *
 * What gets seeded:
 *   1. Authors   (pc_authors)     — derived from existing static posts
 *   2. Topics    (pc_topics)      — taxonomy
 *   3. Apps      (pc_apps)        — from lib/data/apps.ts
 *   4. Posts     (pc_blog_posts)  — from lib/data/blog.ts + content/blog/*.mdx bodies
 */

import { readFileSync } from 'node:fs'
import { join } from 'node:path'

// ---------- Env ----------
const PB_URL = process.env.PB_URL ?? process.env.NEXT_PUBLIC_PB_URL ?? ''
const IDENTITY = process.env.PB_IDENTITY ?? ''
const PASSWORD = process.env.PB_PASSWORD ?? ''
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://uat.positiveness.club'

// Helper: turn a relative path like "/apps/1perc/icon.png" into a full URL
function absUrl(path: string): string {
  if (!path) return ''
  if (path.startsWith('http')) return path
  if (path.startsWith('/')) return `${SITE_URL}${path}`
  return `${SITE_URL}/${path}`
}

if (!PB_URL || !IDENTITY || !PASSWORD) {
  console.error('Missing required env: PB_URL, PB_IDENTITY, PB_PASSWORD')
  process.exit(1)
}

// ---------- PB minimal client ----------
let token: string | null = null
async function auth(): Promise<string> {
  if (token) return token
  const res = await fetch(`${PB_URL}/api/collections/_superusers/auth-with-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identity: IDENTITY, password: PASSWORD }),
  })
  if (!res.ok) {
    throw new Error(`PB auth failed: ${res.status} ${await res.text()}`)
  }
  const json = (await res.json()) as { token: string }
  token = json.token
  return token
}

async function pbList<T>(col: string, filter = ''): Promise<T[]> {
  const t = await auth()
  const url = `${PB_URL}/api/collections/${col}/records?perPage=200${filter ? `&filter=${encodeURIComponent(filter)}` : ''}`
  const res = await fetch(url, { headers: { Authorization: t } })
  if (!res.ok) throw new Error(`list ${col}: ${res.status}`)
  const json = (await res.json()) as { items: T[] }
  return json.items
}

async function pbCreate<T>(col: string, data: Record<string, unknown>): Promise<T> {
  const t = await auth()
  const res = await fetch(`${PB_URL}/api/collections/${col}/records`, {
    method: 'POST',
    headers: { Authorization: t, 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error(`create ${col}: ${res.status} ${(await res.text()).slice(0, 300)}`)
  return (await res.json()) as T
}

async function pbUpdate<T>(col: string, id: string, data: Record<string, unknown>): Promise<T> {
  const t = await auth()
  const res = await fetch(`${PB_URL}/api/collections/${col}/records/${id}`, {
    method: 'PATCH',
    headers: { Authorization: t, 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok)
    throw new Error(`update ${col}/${id}: ${res.status} ${(await res.text()).slice(0, 300)}`)
  return (await res.json()) as T
}

async function upsertByFilter<T extends { id: string }>(
  col: string,
  filter: string,
  data: Record<string, unknown>,
): Promise<{ id: string; action: 'created' | 'updated' }> {
  const existing = await pbList<T>(col, filter)
  if (existing.length > 0) {
    const updated = await pbUpdate<T>(col, existing[0].id, data)
    return { id: updated.id, action: 'updated' }
  }
  const created = await pbCreate<T>(col, data)
  return { id: created.id, action: 'created' }
}

// ---------- Static data ----------
const ACCENT_BY_SLUG: Record<string, string> = {
  '1perc': '#F5A623',
  heal: '#7FB069',
  riseup: '#E07856',
  resonate: '#C46A4A',
}

const APPS: Array<{
  slug: string
  name: string
  tagline: string
  description: string
  icon: string
  accent_color: string
  category: string
  keywords: string[]
  features: { title: string; description: string; icon: string }[]
  platforms: string[]
  download_ios: string
  download_android: string
  download_web: string
  privacy_url: string
  support_url: string
  website_url: string
  status: 'active' | 'beta' | 'paused'
  sort_order: number
}> = [
  {
    slug: '1perc',
    name: '1perc',
    tagline: 'One book a day. 5 minutes. A little smarter.',
    description:
      'Bite-sized book summaries that fit your day. Read or listen — gain a year of knowledge in minutes.',
    icon: '/apps/1perc/icon.png',
    accent_color: ACCENT_BY_SLUG['1perc'],
    category: 'books',
    keywords: [
      'book summary',
      'book insights',
      'blinkist alternative',
      'daily learning',
      '5 min read',
    ],
    features: [
      {
        title: 'Daily drop',
        description: 'A new book every morning, ready when you are.',
        icon: 'Sparkles',
      },
      {
        title: 'Audio + text',
        description: 'Read or listen — whichever fits the moment.',
        icon: 'Headphones',
      },
      {
        title: 'Insights that stick',
        description: 'Key ideas revisit you throughout the week.',
        icon: 'Lightbulb',
      },
      { title: 'Offline-first', description: 'Your library goes where you go.', icon: 'Download' },
    ],
    platforms: ['ios', 'android'],
    download_ios: '',
    download_android: 'https://play.google.com/store/apps/details?id=com.pclub.theoneperc',
    download_web: '',
    privacy_url: 'https://uat.positiveness.club/apps/1perc/privacy',
    support_url: 'https://uat.positiveness.club/apps/1perc/support',
    website_url: 'https://uat.positiveness.club/apps/1perc',
    status: 'beta',
    sort_order: 1,
  },
  {
    slug: 'heal',
    name: 'HEAL',
    tagline: 'Quiet your mind in 3 minutes.',
    description:
      'Audio therapy for anxiety, sleep, and overwhelm. Guided resets you can do anywhere — no app ritual, just press play.',
    icon: '/apps/heal/icon.png',
    accent_color: ACCENT_BY_SLUG.heal,
    category: 'wellness',
    keywords: [
      'anxiety relief',
      'meditation',
      'sleep sounds',
      'guided breathing',
      'calm alternative',
    ],
    features: [
      {
        title: '3-minute resets',
        description: 'For the moment you need it, not 20-minute rituals.',
        icon: 'Clock',
      },
      {
        title: 'Clinically informed',
        description: 'Designed with real psychologists, not wellness clichés.',
        icon: 'Stethoscope',
      },
      {
        title: 'Warm human voice',
        description: 'Calm guidance that sounds like a person, not a robot.',
        icon: 'Mic',
      },
      {
        title: 'Truly private',
        description: 'Your sessions stay on your device. No tracking, ever.',
        icon: 'Shield',
      },
    ],
    platforms: ['ios', 'android'],
    download_ios: '',
    download_android: '',
    download_web: '',
    privacy_url: 'https://uat.positiveness.club/apps/heal/privacy',
    support_url: 'https://uat.positiveness.club/apps/heal/support',
    website_url: 'https://uat.positiveness.club/apps/heal',
    status: 'beta',
    sort_order: 2,
  },
  {
    slug: 'riseup',
    name: 'Riseup',
    tagline: 'Rise with intention. One small win a day.',
    description:
      'A morning ritual app that actually fits your life. 5 minutes, one tiny win, evidence-based — not another 47-step routine.',
    icon: '/apps/riseup/icon.png',
    accent_color: ACCENT_BY_SLUG.riseup,
    category: 'habits',
    keywords: ['morning routine', 'habit tracker', '5am club', 'intention setting', 'daily ritual'],
    features: [
      {
        title: 'One tiny win',
        description: 'A 5-minute prompt that actually moves the needle.',
        icon: 'Target',
      },
      {
        title: 'Evidence-based',
        description: 'Built on habit research, not hustle influencers.',
        icon: 'BookOpen',
      },
      {
        title: 'No streak shame',
        description: "Miss a day, the app doesn't even notice.",
        icon: 'Heart',
      },
      { title: 'Works offline', description: 'Your routine, always available.', icon: 'WifiOff' },
    ],
    platforms: ['ios', 'android'],
    download_ios: '',
    download_android: '',
    download_web: '',
    privacy_url: 'https://uat.positiveness.club/apps/riseup/privacy',
    support_url: 'https://uat.positiveness.club/apps/riseup/support',
    website_url: 'https://uat.positiveness.club/apps/riseup',
    status: 'beta',
    sort_order: 3,
  },
  {
    slug: 'resonate',
    name: 'Resonate',
    tagline: 'Tune with confidence. No tracking, ever.',
    description:
      'A precision guitar tuner that does one thing perfectly. Beautiful to look at, gentle on the ears, and respects your privacy completely.',
    icon: '/apps/resonate/icon.png',
    accent_color: ACCENT_BY_SLUG.resonate,
    category: 'music',
    keywords: ['guitar tuner', 'chromatic tuner', 'free tuner', 'instrument tuner', 'bass tuner'],
    features: [
      {
        title: 'Studio accuracy',
        description: '±0.5 cent precision. The pros use it.',
        icon: 'Crosshair',
      },
      {
        title: 'Beautiful visualizer',
        description: 'Tuning feedback that actually feels good.',
        icon: 'Waves',
      },
      {
        title: 'Zero tracking',
        description: 'No analytics, no crash reports, no network calls.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Forever free',
        description: 'No ads, no in-app purchases, no "pro" tier.',
        icon: 'Gift',
      },
    ],
    platforms: ['ios', 'android'],
    download_ios: '',
    download_android: 'https://play.google.com/store/apps/details?id=com.solverwatch.guitartuner',
    download_web: '',
    privacy_url: 'https://uat.positiveness.club/apps/resonate/privacy',
    support_url: 'https://uat.positiveness.club/apps/resonate/support',
    website_url: 'https://uat.positiveness.club/apps/resonate',
    status: 'active',
    sort_order: 4,
  },
]

interface StaticPost {
  slug: string
  title: string
  metaDescription: string
  excerpt: string
  cover: string
  author: string
  topic: string
  tags: string[]
  relatedApp: string | null
  readingTimeMin: number
  publishedAt: string
  keywords: string[]
  featured?: boolean
  bodyFile: string
}

const POSTS: StaticPost[] = [
  {
    slug: '5-books-that-change-how-you-think-about-money',
    title: '5 books that will change how you think about money',
    metaDescription:
      "Five books that reframe money — not as a number, but as a tool. From The Psychology of Money to Your Money or Your Life, here's what to read first.",
    excerpt:
      'Money is a story we tell ourselves. These five books rewrite the story — and most are under 250 pages.',
    cover: '/blog/covers/money-books.png',
    author: 'albert-l',
    topic: 'books',
    tags: ['money', 'personal finance', 'book recommendations', 'psychology'],
    relatedApp: '1perc',
    readingTimeMin: 7,
    publishedAt: '2026-06-22',
    keywords: ['best money books', 'personal finance books', 'psychology of money'],
    featured: true,
    bodyFile: '5-books-that-change-how-you-think-about-money.mdx',
  },
  {
    slug: '3-minute-morning-reset-anxiety',
    title: 'The 3-minute morning reset for anxiety (no meditation required)',
    metaDescription:
      'A 3-minute audio routine that actually works for racing thoughts. No app ritual, no hour-long meditation — just press play and breathe.',
    excerpt:
      "If 'just meditate' is the last thing you can do when anxiety hits, this 3-minute routine is for you.",
    cover: '/blog/covers/morning-reset.png',
    author: 'albert-l',
    topic: 'wellness',
    tags: ['anxiety relief', 'morning routine', 'mental health', 'breathing'],
    relatedApp: 'heal',
    readingTimeMin: 5,
    publishedAt: '2026-06-20',
    keywords: ['anxiety relief', 'morning anxiety', '3 minute meditation'],
    featured: true,
    bodyFile: '3-minute-morning-reset-anxiety.mdx',
  },
  {
    slug: '30-second-guitar-tuning-trick',
    title: 'The 30-second guitar tuning trick every player should know',
    metaDescription:
      'Why your guitar goes out of tune (and the 30-second trick that fixes it). Plus how to tune by ear in under a minute.',
    excerpt:
      "If your guitar sounds off no matter what you do, it's almost certainly this. The fix takes 30 seconds.",
    cover: '/blog/covers/guitar-tuning.png',
    author: 'albert-l',
    topic: 'music',
    tags: ['guitar tuning', 'guitar tips', 'beginner guitar', 'chromatic tuner'],
    relatedApp: 'resonate',
    readingTimeMin: 4,
    publishedAt: '2026-06-18',
    keywords: ['how to tune a guitar', 'guitar out of tune', 'tuning trick'],
    featured: true,
    bodyFile: '30-second-guitar-tuning-trick.mdx',
  },
  {
    slug: 'why-morning-routines-fail',
    title: 'Why morning routines fail (and what actually works instead)',
    metaDescription:
      "Most morning routines fail because they're copied from people with different lives. Here's the small-win framework that actually sticks.",
    excerpt:
      "The 5am club is a brand, not a blueprint. Here's the morning routine that fits your actual life.",
    cover: '/blog/covers/morning-routine.png',
    author: 'albert-l',
    topic: 'habits',
    tags: ['morning routine', 'habits', 'productivity', '5am club'],
    relatedApp: 'riseup',
    readingTimeMin: 6,
    publishedAt: '2026-06-15',
    keywords: ['morning routine', 'why routines fail', '5am club alternative'],
    bodyFile: 'why-morning-routines-fail.mdx',
  },
  {
    slug: 'privacy-first-apps-can-be-beautiful',
    title: 'Privacy-first apps can (and should) be beautiful',
    metaDescription:
      'The myth that privacy-first means ugly or limited. How Resonate proves the opposite — and why every app should follow.',
    excerpt:
      "Privacy isn't a feature you bolt on. It's a design constraint that produces better apps.",
    cover: '/blog/covers/privacy-beautiful.png',
    author: 'albert-l',
    topic: 'meta',
    tags: ['privacy', 'design', 'app philosophy', 'positiveness'],
    relatedApp: 'resonate',
    readingTimeMin: 5,
    publishedAt: '2026-06-12',
    keywords: ['privacy first app', 'beautiful apps', 'app design philosophy'],
    bodyFile: 'privacy-first-apps-can-be-beautiful.mdx',
  },
  {
    slug: 'why-your-meditation-app-isnt-working',
    title: "Why your meditation app isn't working (and what to use instead)",
    metaDescription:
      "Most meditation apps are designed for people who already meditate. If you've tried Calm or Headspace and it didn't stick, here's why — and what works better.",
    excerpt:
      "The 90% churn rate in meditation apps isn't a failure of meditation. It's a failure of format.",
    cover: '/blog/covers/heal-3min.png',
    author: 'albert-l',
    topic: 'wellness',
    tags: ['meditation', 'anxiety', 'calm', 'headspace alternative', 'calm alternative'],
    relatedApp: 'heal',
    readingTimeMin: 4,
    publishedAt: '2026-07-01',
    keywords: ['meditation app not working', 'calm alternative', 'headspace alternative'],
    featured: true,
    bodyFile: 'why-your-meditation-app-isnt-working.mdx',
  },
  {
    slug: '15-books-i-read-twice',
    title: "15 books I've read twice (and the 4% that did 80% of the work)",
    metaDescription:
      "200+ non-fiction books in five years. Here's the 4% that did 80% of the work on my thinking — and why they're worth re-reading.",
    excerpt:
      'The 4% of books that did 80% of the work on my thinking, and why I keep coming back to them.',
    cover: '/blog/covers/books-read-twice.png',
    author: 'albert-l',
    topic: 'books',
    tags: ['book recommendations', 'non-fiction', 'reread', '1perc'],
    relatedApp: '1perc',
    readingTimeMin: 6,
    publishedAt: '2026-07-05',
    keywords: ['best non fiction books', 'books to read twice', 'book recommendations'],
    featured: true,
    bodyFile: '15-books-i-read-twice.mdx',
  },
  {
    slug: 'build-small-not-busy',
    title: 'Build small, not busy (the pclub way)',
    metaDescription:
      "I've shipped 12 features last month, then 1. The second one shipped faster, was better, and made more money. Here's the math of small.",
    excerpt:
      '12 features last month vs 1. The second one shipped faster, was better, and made more money.',
    cover: '/blog/covers/build-small.png',
    author: 'albert-l',
    topic: 'meta',
    tags: ['indie hackers', 'build in public', 'small apps', 'pclub philosophy'],
    relatedApp: null,
    readingTimeMin: 5,
    publishedAt: '2026-07-08',
    keywords: ['build small', 'indie hackers', 'product strategy', 'pclub'],
    bodyFile: 'build-small-not-busy.mdx',
  },
]

const TOPICS: Array<{
  slug: string
  name: string
  description: string
  color: string
  icon: string
  sort_order: number
}> = [
  {
    slug: 'books',
    name: 'Books & learning',
    description: 'What to read, and what to skip.',
    color: '#F5A623',
    icon: 'BookOpen',
    sort_order: 1,
  },
  {
    slug: 'wellness',
    name: 'Wellness & calm',
    description: 'For the harder moments.',
    color: '#7FB069',
    icon: 'Heart',
    sort_order: 2,
  },
  {
    slug: 'habits',
    name: 'Habits & routine',
    description: 'Small moves, lasting change.',
    color: '#E07856',
    icon: 'Sunrise',
    sort_order: 3,
  },
  {
    slug: 'music',
    name: 'Music & craft',
    description: 'For the makers.',
    color: '#C46A4A',
    icon: 'Music',
    sort_order: 4,
  },
  {
    slug: 'meta',
    name: 'Field notes',
    description: 'How we build, why we build.',
    color: '#6B6B6B',
    icon: 'Notebook',
    sort_order: 5,
  },
]

const AUTHORS: Array<{
  slug: string
  name: string
  bio: string
  role: string
  twitter?: string
  github?: string
}> = [
  {
    slug: 'albert-l',
    name: 'Albert L.',
    role: 'Founder, positiveness.club',
    bio: 'Building small, calm, privacy-first apps. Writes about books, anxiety, guitar, and the philosophy of small software.',
    twitter: 'positivenessclub',
    github: 'albertlaudia',
  },
]

// ---------- Run ----------
async function main() {
  console.log('→ Authenticating to PB…')
  await auth()
  console.log('✓ Auth OK')

  console.log('\n→ Seeding topics…')
  for (const t of TOPICS) {
    const r = await upsertByFilter<{ id: string }>('pc_topics', `slug = '${t.slug}'`, t)
    console.log(`  ${r.action === 'created' ? '+' : '~'} ${t.slug} (${r.id})`)
  }

  console.log('\n→ Seeding authors…')
  for (const a of AUTHORS) {
    const r = await upsertByFilter<{ id: string }>('pc_authors', `slug = '${a.slug}'`, a)
    console.log(`  ${r.action === 'created' ? '+' : '~'} ${a.slug} (${r.id})`)
  }

  console.log('\n→ Seeding apps…')
  for (const app of APPS) {
    const payload = {
      ...app,
      icon: absUrl(app.icon),
      privacy_url: absUrl(app.privacy_url),
      support_url: absUrl(app.support_url),
      website_url: absUrl(app.website_url),
    }
    const r = await upsertByFilter<{ id: string }>('pc_apps', `slug = '${app.slug}'`, payload)
    console.log(`  ${r.action === 'created' ? '+' : '~'} ${app.slug} (${r.id})`)
  }

  console.log('\n→ Seeding blog posts (with bodies)…')
  for (const post of POSTS) {
    let body = ''
    try {
      body = readFileSync(join(process.cwd(), 'content', 'blog', post.bodyFile), 'utf8')
    } catch (err) {
      console.warn(`  ! ${post.slug}: cannot read ${post.bodyFile}, using empty body`)
    }

    // Look up author ID
    const authors = await pbList<{ id: string; slug: string }>(
      'pc_authors',
      `slug = '${post.author}'`,
    )
    const authorId = authors[0]?.id ?? ''

    const r = await upsertByFilter<{ id: string }>('pc_blog_posts', `slug = '${post.slug}'`, {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      body,
      cover_image: absUrl(post.cover),
      cover_alt: post.title,
      author: authorId,
      topics: [post.topic],
      keywords: post.keywords,
      related_apps: post.relatedApp ? [post.relatedApp] : [],
      reading_minutes: post.readingTimeMin,
      featured: !!post.featured,
      status: 'published',
      published_at: `${post.publishedAt}T09:00:00.000Z`,
    })
    console.log(
      `  ${r.action === 'created' ? '+' : '~'} ${post.slug} (${r.id}, ${body.length}b body)`,
    )
  }

  console.log('\n✓ Done. PB is now the source of truth.')
}

main().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
