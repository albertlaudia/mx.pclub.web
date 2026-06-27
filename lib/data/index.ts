/**
 * Unified data layer for pclub-web.
 *
 * Public API:
 *   - getApps()              · all apps, sorted by sort_order
 *   - getApp(slug)           · single app by slug
 *   - getLiveApps()          · apps with status === 'live'
 *   - getOtherApps(slug, n)  · N other apps excluding the given slug
 *   - getTopics()            · blog topic taxonomy
 *   - getAuthors()           · blog authors
 *   - getAuthor(slug)        · single author by slug
 *   - getPosts()             · all published blog posts (newest first)
 *   - getPost(slug)          · single post by slug with body
 *   - getPostBody(slug)      · just the body MDX/markdown
 *   - getPostsByTopic(topic) · published posts in a topic
 *   - getPostsByApp(slug)    · published posts related to an app
 *   - getRelatedPosts(slug,n)· related posts
 *   - getFeaturedPosts(n)    · featured published posts
 *
 * Source of truth selection:
 *   1. If NEXT_PUBLIC_PB_URL is set + PB is reachable → fetch from PocketBase.
 *   2. Otherwise → fall back to static TS data in lib/data/{apps.ts,blog.ts}.
 *
 * All functions are async because they may hit PB.
 * For SSG/SSR, both paths work — the build picks up the right one.
 *
 * Public API surface stays stable when swapping sources.
 */

import { isPbConfigured, pbList, PocketBaseError } from "@/lib/pb"
import { apps as staticApps, getApp as staticGetApp, getOtherApps as staticGetOtherApps, getLiveApps as staticGetLiveApps, type PclubApp, type AppSlug, type AppFaqItem, type AppTestimonial } from "./apps"
import { blogPosts as staticPosts, getPost as staticGetPost, getPublishedPosts as staticGetPublishedPosts, getPostsByTopic as staticGetPostsByTopic, getPostsByApp as staticGetPostsByApp, getRelatedPosts as staticGetRelatedPosts, topics as staticTopics, type BlogTopic, type BlogPostMeta } from "./blog"

// Re-export types so consumers only import from this module
export type { PclubApp, AppSlug, AppFaqItem, AppTestimonial }
export type { BlogTopic, BlogPostMeta }

// ----------------------------------------------------------------------
// PocketBase row types
// ----------------------------------------------------------------------
interface PbApp {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  icon?: string
  accent_color?: string
  category?: string
  keywords?: string[]
  features?: { title: string; description: string; icon: string }[]
  highlights?: { title: string; body?: string; icon?: string }[]
  platforms?: string[]
  download_ios?: string
  download_android?: string
  download_web?: string
  privacy_url?: string
  support_url?: string
  website_url?: string
  promo_video?: string
  og_image?: string
  status: "active" | "beta" | "paused" | "hidden"
  sort_order?: number
}

interface PbBlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  body: string
  cover_image?: string
  cover_alt?: string
  author?: string
  topics?: string[]
  keywords?: string[]
  related_apps?: string[]
  reading_minutes?: number
  featured?: boolean
  status: "draft" | "scheduled" | "published" | "archived"
  published_at?: string
  og_image?: string
}

interface PbTopic {
  id: string
  slug: string
  name: string
  description?: string
  color?: string
  icon?: string
  sort_order?: number
}

interface PbAuthor {
  id: string
  slug: string
  name: string
  bio?: string
  avatar?: string
  role?: string
  twitter?: string
  linkedin?: string
  github?: string
}

// ----------------------------------------------------------------------
// Map PB rows → public domain models
// ----------------------------------------------------------------------
function mapPbApp(row: PbApp): PclubApp {
  const accent = row.accent_color ?? "#F5A623"
  // Map a hex color to a Tailwind bg-* class heuristically
  const accentBgClass = pickBgClass(accent)
  const status: PclubApp["status"] = row.status === "active" ? "live" : "coming-soon"
  const category = (row.category ?? "books") as PclubApp["category"]
  return {
    slug: row.slug as AppSlug,
    name: row.name,
    tagline: row.tagline,
    description: row.description,
    longDescription: row.description,
    icon: row.icon ?? `/apps/${row.slug}/icon.png`,
    hero: row.og_image ?? `/apps/${row.slug}/hero.png`,
    screenshots: [],
    accentColor: accent,
    accentBgClass,
    category,
    categoryLabel: prettyCategory(category),
    keywords: row.keywords ?? [],
    iosUrl: row.download_ios ?? "",
    androidUrl: row.download_android ?? "",
    appStoreId: "",
    bundleId: `com.pclub.${row.slug}`,
    leadMagnetSlug: null,
    ctaHeadline: row.tagline,
    ctaSubtext: row.description,
    bullets: (row.features ?? []).map((f) => `${f.title} — ${f.description}`),
    faq: [],
    testimonials: [],
    status,
    sortOrder: row.sort_order ?? 999,
    features: row.features ?? [],
  }
}

function mapPbPost(row: PbBlogPost): BlogPostMeta {
  const topic = (row.topics?.[0] ?? "meta") as BlogTopic
  return {
    slug: row.slug,
    title: row.title,
    metaDescription: row.excerpt,
    excerpt: row.excerpt,
    cover: row.cover_image ?? `/blog/covers/${row.slug}.png`,
    author: row.author ?? "Albert L.",
    authorRole: "Founder, positiveness.club",
    topic,
    tags: row.keywords ?? [],
    relatedApp: row.related_apps?.[0] ?? null,
    readingTimeMin: row.reading_minutes ?? 5,
    publishedAt: (row.published_at ?? new Date().toISOString()).slice(0, 10),
    status: row.status === "published" ? "published" : "draft",
    keywords: row.keywords ?? [],
    featured: row.featured,
  }
}

function mapPbTopic(row: PbTopic): { slug: string; name: string; description: string; color: string } {
  return {
    slug: row.slug,
    name: row.name,
    description: row.description ?? "",
    color: row.color ?? "#6B6B6B",
  }
}

function prettyCategory(c: string): string {
  switch (c) {
    case "books": return "Books · Learning"
    case "wellness": return "Wellness · Calm"
    case "habits": return "Habits · Routine"
    case "music": return "Music · Tools"
    default: return "App"
  }
}

// Tailwind class picker — uses the existing static palette as a guide
const ACCENT_BG_MAP: Record<string, string> = {
  "#F5A623": "bg-amber-50 dark:bg-amber-950/30",
  "#7FB069": "bg-green-50 dark:bg-green-950/30",
  "#E07856": "bg-orange-50 dark:bg-orange-950/30",
  "#C46A4A": "bg-rose-50 dark:bg-rose-950/30",
  "#6B6B6B": "bg-zinc-50 dark:bg-zinc-950/30",
}
function pickBgClass(hex: string): string {
  return ACCENT_BG_MAP[hex.toUpperCase()] ?? "bg-zinc-50 dark:bg-zinc-950/30"
}

// ----------------------------------------------------------------------
// PB fetches with caching
// ----------------------------------------------------------------------
let _pbAppsCache: PclubApp[] | null = null
let _pbAppsCacheAt = 0
const CACHE_TTL_MS = 60_000

async function fetchAppsFromPb(): Promise<PclubApp[]> {
  const now = Date.now()
  if (_pbAppsCache && now - _pbAppsCacheAt < CACHE_TTL_MS) {
    return _pbAppsCache
  }
  const result = await pbList<PbApp>("pc_apps", {
    sort: "sort_order,slug",
    perPage: 100,
    filter: "status != 'hidden'",
  })
  const mapped = result.items.map(mapPbApp)
  _pbAppsCache = mapped
  _pbAppsCacheAt = now
  return mapped
}

let _pbPostsCache: BlogPostMeta[] | null = null
let _pbPostsCacheAt = 0

async function fetchPostsFromPb(): Promise<BlogPostMeta[]> {
  const now = Date.now()
  if (_pbPostsCache && now - _pbPostsCacheAt < CACHE_TTL_MS) {
    return _pbPostsCache
  }
  const result = await pbList<PbBlogPost>("pc_blog_posts", {
    sort: "-published_at",
    perPage: 100,
    filter: "status = 'published'",
  })
  const mapped = result.items.map(mapPbPost)
  _pbPostsCache = mapped
  _pbPostsCacheAt = now
  return mapped
}

let _pbTopicsCache: ReturnType<typeof mapPbTopic>[] | null = null
async function fetchTopicsFromPb() {
  if (_pbTopicsCache) return _pbTopicsCache
  const result = await pbList<PbTopic>("pc_topics", {
    sort: "sort_order,slug",
    perPage: 50,
  })
  _pbTopicsCache = result.items.map(mapPbTopic)
  return _pbTopicsCache
}

let _pbAuthorCache: Map<string, PbAuthor> = new Map()
async function fetchAuthor(slug: string): Promise<PbAuthor | null> {
  if (_pbAuthorCache.has(slug)) return _pbAuthorCache.get(slug) ?? null
  try {
    const result = await pbList<PbAuthor>("pc_authors", {
      filter: `slug = '${slug.replace(/'/g, "\\'")}'`,
      perPage: 1,
    })
    const author = result.items[0] ?? null
    if (author) _pbAuthorCache.set(slug, author)
    return author
  } catch {
    return null
  }
}

// ----------------------------------------------------------------------
// Public API
// ----------------------------------------------------------------------
async function shouldUsePb(): Promise<boolean> {
  if (!isPbConfigured()) return false
  try {
    // Probe the PB health endpoint cheaply.
    const url = (process.env.NEXT_PUBLIC_PB_URL ?? process.env.PB_URL ?? "").replace(/\/$/, "")
    const res = await fetch(`${url}/api/health`, {
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    })
    return res.ok
  } catch {
    return false
  }
}

export async function getApps(): Promise<PclubApp[]> {
  if (await shouldUsePb()) {
    try {
      return await fetchAppsFromPb()
    } catch (err) {
      if (err instanceof PocketBaseError) {
        console.warn(`[data] PB getApps failed (${err.status}), falling back to static:`, err.message)
      } else {
        console.warn(`[data] PB getApps failed, falling back to static:`, err)
      }
    }
  }
  return staticApps
}

export async function getApp(slug: string): Promise<PclubApp | undefined> {
  if (await shouldUsePb()) {
    try {
      const apps = await fetchAppsFromPb()
      return apps.find((a) => a.slug === slug)
    } catch (err) {
      console.warn(`[data] PB getApp failed, falling back:`, err)
    }
  }
  return staticGetApp(slug)
}

export async function getLiveApps(): Promise<PclubApp[]> {
  if (await shouldUsePb()) {
    try {
      const apps = await fetchAppsFromPb()
      return apps.filter((a) => a.status === "live")
    } catch (err) {
      console.warn(`[data] PB getLiveApps failed, falling back:`, err)
    }
  }
  return staticGetLiveApps()
}

export async function getOtherApps(slug: string, n = 3): Promise<PclubApp[]> {
  if (await shouldUsePb()) {
    try {
      const apps = await fetchAppsFromPb()
      return apps.filter((a) => a.slug !== slug).slice(0, n)
    } catch (err) {
      console.warn(`[data] PB getOtherApps failed, falling back:`, err)
    }
  }
  return staticGetOtherApps(slug, n)
}

// ----------------------------------------------------------------------
// Blog
// ----------------------------------------------------------------------
export async function getPosts(): Promise<BlogPostMeta[]> {
  if (await shouldUsePb()) {
    try {
      return await fetchPostsFromPb()
    } catch (err) {
      console.warn(`[data] PB getPosts failed, falling back:`, err)
    }
  }
  return staticGetPublishedPosts()
}

export async function getPost(slug: string): Promise<BlogPostMeta | undefined> {
  if (await shouldUsePb()) {
    try {
      const posts = await fetchPostsFromPb()
      return posts.find((p) => p.slug === slug)
    } catch (err) {
      console.warn(`[data] PB getPost failed, falling back:`, err)
    }
  }
  return staticGetPost(slug)
}

export async function getPostBody(slug: string): Promise<string | null> {
  if (await shouldUsePb()) {
    try {
      const url = (process.env.NEXT_PUBLIC_PB_URL ?? process.env.PB_URL ?? "").replace(/\/$/, "")
      const filter = encodeURIComponent(`slug = '${slug.replace(/'/g, "\\'")}' && status = 'published'`)
      const res = await fetch(
        `${url}/api/collections/pc_blog_posts/records?perPage=1&filter=${filter}&fields=body`,
        { next: { revalidate: 60, tags: ["pb", "pc_blog_posts"] } }
      )
      if (res.ok) {
        const json = (await res.json()) as { items: { body?: string }[] }
        return json.items[0]?.body ?? null
      }
    } catch (err) {
      console.warn(`[data] PB getPostBody failed:`, err)
    }
  }
  // Fallback: read MDX file from /content/blog/
  try {
    const { readFileSync } = await import("node:fs")
    const { join } = await import("node:path")
    const file = join(process.cwd(), "content", "blog", `${slug}.mdx`)
    return readFileSync(file, "utf8")
  } catch {
    try {
      const { readFileSync } = await import("node:fs")
      const { join } = await import("node:path")
      const file = join(process.cwd(), "content", "blog", `${slug}.md`)
      return readFileSync(file, "utf8")
    } catch {
      return null
    }
  }
}

export async function getPostsByTopic(topic: string): Promise<BlogPostMeta[]> {
  if (await shouldUsePb()) {
    try {
      const posts = await fetchPostsFromPb()
      return posts.filter((p) => p.topic === topic)
    } catch (err) {
      console.warn(`[data] PB getPostsByTopic failed, falling back:`, err)
    }
  }
  return staticGetPostsByTopic(topic as BlogTopic)
}

export async function getPostsByApp(appSlug: string): Promise<BlogPostMeta[]> {
  if (await shouldUsePb()) {
    try {
      const posts = await fetchPostsFromPb()
      return posts.filter((p) => p.relatedApp === appSlug)
    } catch (err) {
      console.warn(`[data] PB getPostsByApp failed, falling back:`, err)
    }
  }
  return staticGetPostsByApp(appSlug)
}

export async function getRelatedPosts(slug: string, n = 3): Promise<BlogPostMeta[]> {
  if (await shouldUsePb()) {
    try {
      const posts = await fetchPostsFromPb()
      const post = posts.find((p) => p.slug === slug)
      if (!post) return []
      return posts
        .filter((p) => p.slug !== slug)
        .filter((p) => p.topic === post.topic || p.relatedApp === post.relatedApp)
        .slice(0, n)
    } catch (err) {
      console.warn(`[data] PB getRelatedPosts failed, falling back:`, err)
    }
  }
  return staticGetRelatedPosts(slug, n)
}

export async function getFeaturedPosts(n = 3): Promise<BlogPostMeta[]> {
  const posts = await getPosts()
  return posts.filter((p) => p.featured).slice(0, n)
}

// ----------------------------------------------------------------------
// Topics + authors
// ----------------------------------------------------------------------
export async function getTopics(): Promise<{ slug: string; name: string; description: string; color: string }[]> {
  if (await shouldUsePb()) {
    try {
      return await fetchTopicsFromPb()
    } catch (err) {
      console.warn(`[data] PB getTopics failed, falling back:`, err)
    }
  }
  return staticTopics
}

export interface AuthorInfo {
  slug: string
  name: string
  role?: string
  bio?: string
  avatar?: string
}

export async function getAuthor(slug: string): Promise<AuthorInfo | null> {
  if (await shouldUsePb()) {
    const a = await fetchAuthor(slug)
    if (a) {
      return {
        slug: a.slug,
        name: a.name,
        role: a.role,
        bio: a.bio,
        avatar: a.avatar,
      }
    }
  }
  // Static fallback — synthesize from known authors
  const fallback: Record<string, AuthorInfo> = {
    "albert-l": { slug: "albert-l", name: "Albert L.", role: "Founder, positiveness.club", bio: "Building the pclub ecosystem." },
  }
  return fallback[slug] ?? null
}

export async function getAuthors(): Promise<AuthorInfo[]> {
  const items: AuthorInfo[] = []
  if (await shouldUsePb()) {
    try {
      const result = await pbList<PbAuthor>("pc_authors", { sort: "name", perPage: 100 })
      for (const a of result.items) {
        _pbAuthorCache.set(a.slug, a)
        items.push({ slug: a.slug, name: a.name, role: a.role, bio: a.bio, avatar: a.avatar })
      }
      return items
    } catch (err) {
      console.warn(`[data] PB getAuthors failed, falling back:`, err)
    }
  }
  return [{ slug: "albert-l", name: "Albert L.", role: "Founder, positiveness.club", bio: "Building the pclub ecosystem." }]
}

// Utility: clear cached PB responses (useful after writes)
export function clearPbCache(): void {
  _pbAppsCache = null
  _pbAppsCacheAt = 0
  _pbPostsCache = null
  _pbPostsCacheAt = 0
  _pbTopicsCache = null
  _pbAuthorCache.clear()
}