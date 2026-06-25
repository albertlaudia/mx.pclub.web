# positiveness.club — Architecture & Design

> Marketing platform for the pclub app ecosystem. Convert search into installs.

**Last updated:** 2026-06-25
**Status:** Pre-build (design phase)
**Owner:** @albertlaudia

---

## Table of contents

1. [Strategic role](#1-strategic-role)
2. [Conversion model](#2-conversion-model)
3. [Architecture decisions](#3-architecture-decisions)
4. [Stack](#4-stack)
5. [Route map](#5-route-map)
6. [Page templates](#6-page-templates)
7. [Data models (PocketBase)](#7-data-models-pocketbase)
8. [Component library](#8-component-library)
9. [SEO infrastructure](#9-seo-infrastructure)
10. [App-to-web conversion mechanics](#10-app-to-web-conversion-mechanics)
11. [Content engine](#11-content-engine)
12. [Lead generation](#12-lead-generation)
13. [Analytics & experimentation](#13-analytics--experimentation)
14. [Performance budget](#14-performance-budget)
15. [Design system](#15-design-system)
16. [Internationalization](#16-internationalization)
17. [Accessibility](#17-accessibility)
18. [File structure](#18-file-structure)
19. [Hosting, DNS, deploy](#19-hosting-dns-deploy)
20. [Implementation phases](#20-implementation-phases)
21. [Operational runbook](#21-operational-runbook)
22. [Open questions](#22-open-questions)

---

## 1. Strategic role

positiveness.club is the **web front door** for every app in the pclub brand. Its job is to make every app *findable* (SEO), *legible* (clear value prop), and *installable* (smart deep links into the store).

| Layer | positiveness.club's role |
|---|---|
| **ASO** | "positiveness" as publisher name on every store listing (cross-link) |
| **Web SEO** | Brand hub + per-app landings + content blog (the SEO compound) |
| **Direct** | Smart App Banners, deep links, email capture for "save for later" |
| **Cross-promo** | Universal PocketBase account → in-app "Also try" cards |

**Non-goals (v1):**
- The apps themselves (Flutter, mobile)
- A user-facing web product (no logins, no web app features — marketing only)
- A community / forum / social layer
- Payments (the apps own their own paywall)

---

## 2. Conversion model

```
┌─────────────────────────────────────────────────────────────┐
│  AWARENESS         problem-aware user feels the pain         │
│       ▼                                                        │
│  SEARCH            Google: "5-min book summary app"            │
│       ▼                                                        │
│  LAND              lands on /blog/<post> or /apps/<slug>      │
│       ▼                                                        │
│  ENGAGE            reads 30-90s, sees the value, builds intent │
│       ▼                                                        │
│  CONVERT           Smart App Banner / "Get the app" CTA       │
│       ▼                                                        │
│  STORE             iOS App Store / Google Play                 │
│       ▼                                                        │
│  INSTALL           deep link if installed; store if not        │
│       ▼                                                        │
│  RETAIN            app-side (not our concern at this layer)   │
│       ▼                                                        │
│  CROSS-PROMO       in-app "Also try HEAL" card → app #2       │
└─────────────────────────────────────────────────────────────┘
```

**Attribution** (so we know which channel actually works):

| Source | Signal | Storage |
|---|---|---|
| Google organic | UTM `?utm_source=google&utm_medium=organic` | Cookie + Plausible |
| Google search → install | UTM in CTA button + Smart Banner `app-argument` | Plausible event `cta_click` |
| Direct | referrer = none | Plausible `direct` |
| Cross-app | `?utm_source=app&utm_medium=cross_promo&utm_campaign=heal` | Plausible event `cross_promo_click` |
| Blog → install | `?utm_source=blog&utm_medium=cta&utm_content=<post-slug>` | Plausible event `blog_cta_click` |

All CTAs go through a single `<SmartCTA>` component that auto-injects UTM params + fires the Plausible event. **No CTA in the site bypasses this.**

---

## 3. Architecture decisions

| # | Decision | Rationale |
|---|---|---|
| D1 | **One Next.js app, subpath routing** | Consolidates domain authority. Big SaaS (Stripe, Notion, Linear, Vercel, Figma) all do this. |
| D2 | **Subpath for content** (`/apps/1perc`), **subdomain for infra** (`resources.`, `api.`) | Subdomains don't inherit root DA. Infra is infra. |
| D3 | **Static generation for app landings**, **ISR for blog** | App metadata changes rarely (revalidate weekly). Blog changes on publish. |
| D4 | **PocketBase as backend** | Already in use. One instance, one auth surface, one admin UI. |
| D5 | **Tailwind 4 + Radix UI** | Radix for a11y-correct primitives (dialog, popover, tabs). Tailwind for speed. No component library lock-in. |
| D6 | **Plausible for analytics** | Privacy-first. No cookie banner needed (SEA market is sensitive to this). Plausible script is < 1KB. |
| D7 | **Resend for email** (lead magnet delivery) | Simple API, generous free tier, great deliverability. |
| D8 | **No client-side router for install flow** | Use plain `<a>` to the store URL with UTM params. Crawlable, debuggable, doesn't break without JS. |
| D9 | **Smart App Banner over native iOS install prompt** | One line of meta, no JS, works on every page. Android equivalent = a small client component that triggers Play Store intent. |
| D10 | **No CMS, PocketBase admin** | Avoid the dependency. PB admin is good enough for 1-person content ops. |
| D11 | **English-only at launch**, i18n-ready structure from day 1 | Don't ship a half-translated site. Build the routing keys; translate when content exists. |
| D12 | **Cloudflare in front of Dokploy** | DNS, DDoS, cache static assets, free tier. Positiveness.club zone already exists. |

---

## 4. Stack

| Layer | Choice | Version | Why |
|---|---|---|---|
| Framework | Next.js | 15.x (App Router) | SSR + SSG + ISR + Server Actions in one. Best SEO story. |
| Language | TypeScript | 5.x | Strict, no surprises. |
| UI | React | 19 | Required by Next 15. |
| Styling | Tailwind CSS | 4.x | No CSS-in-JS runtime cost. |
| Primitives | Radix UI | latest | A11y-correct headless components. |
| Animation | Framer Motion | 11.x | For hero / cross-promo cards. CSS animations elsewhere. |
| Icons | Lucide | latest | Tree-shakable, consistent. |
| CMS / DB | PocketBase | 0.22+ | Existing instance, single binary. |
| Email | Resend | API | Lead magnet delivery + welcome sequence. |
| Analytics | Plausible | self-host or cloud | No cookie banner, lightweight, owns the data. |
| Forms | Server Actions | native | No react-hook-form needed for marketing. |
| Validation | Zod | 3.x | Server-side form validation. |
| SEO | next-sitemap | latest | Sitemap + robots generation. |
| Lint / format | Biome | latest | Single tool, faster than ESLint+Prettier. |
| Test | Vitest + Playwright | latest | Vitest for unit, Playwright for E2E of install flow. |
| Hosting | Dokploy | existing | Same host as 1perc / HEAL web. |
| DNS / CDN | Cloudflare | existing | positiveness.club zone exists. |

**Pinned versions live in `package.json` (no `^` on critical packages — deterministic builds).**

---

## 5. Route map

### Public site

| Route | Type | Purpose | Cache |
|---|---|---|---|
| `/` | SSG + ISR (revalidate 1h) | Brand hub, hero, all 4 apps featured, mission, latest 3 blog posts | ISR |
| `/apps` | SSG | All-apps index with cross-promo cards + "which is right for you" filter | Static |
| `/apps/[slug]` | SSG + ISR (revalidate 1d) | Per-app landing (data-driven from PB `apps` collection) | ISR |
| `/apps/[slug]/privacy` | SSG | Per-app privacy policy (for store listing URL field) | Static |
| `/apps/[slug]/support` | SSG | Per-app support page (for store listing URL field) | Static |
| `/blog` | SSG + ISR (revalidate 1h) | Blog index, paginated, filter by topic | ISR |
| `/blog/[slug]` | SSG + ISR (on-demand) | Article page | On-demand ISR |
| `/blog/topic/[topic]` | SSG + ISR | Topic landing page | ISR |
| `/about` | SSG | Brand story, mission, team | Static |
| `/privacy` | SSG | Master privacy policy | Static |
| `/terms` | SSG | Terms of service | Static |
| `/press` | SSG | Press kit, logos, screenshots, contact | Static |
| `/manifesto` | SSG | Privacy manifesto (Resonate's zero-telemetry story) | Static |
| `/careers` | SSG (placeholder) | Future | Static |
| `/sitemap.xml` | Generated | All routes + lastmod | Dynamic |
| `/robots.txt` | Generated | Allow all, point to sitemap | Static |
| `/r/[code]` | Server | Short referral/affiliate redirect with attribution | Dynamic |
| `/api/leads` | Server Action / API | Lead capture | — |
| `/api/og` | Edge | Dynamic OG image generation | Edge |

### PocketBase admin (separate origin, not on marketing domain)

- `pb.positiveness.club` (or existing PB host) — content + leads management
- Not linked from the public site
- 2FA enforced

### Why this shape

- **`/apps/[slug]` is data-driven** — adding a 5th app = one row in PB, no code change.
- **Per-app `/privacy` and `/support`** — Apple and Google both require a public URL for these on every store listing. Hard requirement.
- **`/r/[code]` referral redirect** — when we launch an affiliate/referral program, we don't bake links into the apps. We change the redirect.
- **`/api/og`** — dynamic OG images for blog posts (title + author + cover). Big win for Twitter/LinkedIn shares.

---

## 6. Page templates

### 6.1 Brand hub (`/`)

```
┌─────────────────────────────────────────────────────────────┐
│ [nav: Apps  Blog  About  Press]                  [Get app]   │
├─────────────────────────────────────────────────────────────┤
│  HERO                                                          │
│  "Apps that make you a little more human."                    │
│  Subhead · [Get the app] [See all apps]                       │
│  Hero visual: 4 app icons in a soft cluster                   │
├─────────────────────────────────────────────────────────────┤
│  APPS GRID (4 cards)                                          │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                 │
│  │ 1perc  │ │  HEAL  │ │ Riseup │ │Resonate│                 │
│  └────────┘ └────────┘ └────────┘ └────────┘                 │
├─────────────────────────────────────────────────────────────┤
│  MISSION (3 short paragraphs, no stock photos)               │
├─────────────────────────────────────────────────────────────┤
│  LATEST FROM THE BLOG (3 cards)                              │
├─────────────────────────────────────────────────────────────┤
│  EMAIL CAPTURE: "Get a free book summary pack"               │
│  [email] [Send me the pack]                                   │
├─────────────────────────────────────────────────────────────┤
│  FOOTER: links, social, copyright, build hash                 │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 Per-app landing (`/apps/[slug]`)

```
┌─────────────────────────────────────────────────────────────┐
│ [nav]                                                          │
├─────────────────────────────────────────────────────────────┤
│  HERO                                                          │
│  [app icon]   <app name>                                     │
│               <one-line tagline>                             │
│               [Get on iOS]  [Get on Android]                │
│               4.8★ · 12k reviews (from store API, ISR)       │
├─────────────────────────────────────────────────────────────┤
│  SCREENSHOTS CAROUSEL (5-8 images, swipeable on mobile)      │
├─────────────────────────────────────────────────────────────┤
│  WHAT IT DOES (3-5 bullet points, outcome-led)               │
├─────────────────────────────────────────────────────────────┤
│  "Why you'll love it" (3-4 short feature callouts)           │
├─────────────────────────────────────────────────────────────┤
│  TESTIMONIALS (1-3, from store reviews, ISR-refreshed)       │
├─────────────────────────────────────────────────────────────┤
│  RELATED BLOG POSTS (2-3 cross-links)                        │
├─────────────────────────────────────────────────────────────┤
│  "Also from positiveness" cross-promo (3 other app cards)    │
├─────────────────────────────────────────────────────────────┤
│  EMAIL CAPTURE: app-specific lead magnet                     │
├─────────────────────────────────────────────────────────────┤
│  FAQ (3-5 collapsible items, JSON-LD FAQPage schema)         │
├─────────────────────────────────────────────────────────────┤
│  FOOTER                                                        │
└─────────────────────────────────────────────────────────────┘
```

### 6.3 Blog index (`/blog`)

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER: "Field notes" (or similar editorial name)            │
│  Topic chips: All · Books · Wellness · Habits · Music        │
├─────────────────────────────────────────────────────────────┤
│  FEATURED POST (latest, large card with cover)                │
├─────────────────────────────────────────────────────────────┤
│  POST GRID (12 per page, paginated)                          │
│  ┌────────┐ ┌────────┐ ┌────────┐                            │
│  │ cover  │ │ cover  │ │ cover  │                            │
│  │ title  │ │ title  │ │ title  │                            │
│  │ 4 min  │ │ 3 min  │ │ 6 min  │                            │
│  └────────┘ └────────┘ └────────┘                            │
├─────────────────────────────────────────────────────────────┤
│  [Load more] or [1] 2 3 ...                                   │
└─────────────────────────────────────────────────────────────┘
```

### 6.4 Blog post (`/blog/[slug]`)

```
┌─────────────────────────────────────────────────────────────┐
│  COVER IMAGE                                                  │
│  TITLE                                                        │
│  [author avatar] Name · 6 min read · 2026-06-25 · topic chip │
├─────────────────────────────────────────────────────────────┤
│  BODY (MDX, prose-width, 65-75ch, drop cap optional)          │
│   - inline CTA cards (mid-article, 2 max)                    │
│   - pull quotes (typography, not images)                      │
│   - code blocks where relevant (shiki)                        │
├─────────────────────────────────────────────────────────────┤
│  END-OF-ARTICLE CTA: app-specific SmartCTA                   │
├─────────────────────────────────────────────────────────────┤
│  AUTHOR CARD                                                   │
├─────────────────────────────────────────────────────────────┤
│  RELATED POSTS (3, same topic or shared tags)                │
└─────────────────────────────────────────────────────────────┘
```

### 6.5 Apps index (`/apps`)

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER: "Every app, one philosophy."                         │
│  Filter chips: All · Books · Wellness · Habits · Music       │
├─────────────────────────────────────────────────────────────┤
│  4 APP CARDS in a responsive grid                            │
│  Each card: icon, name, tagline, 3 bullet points, [Get] btn  │
├─────────────────────────────────────────────────────────────┤
│  "Which is right for you?" quiz (optional v2)                │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. Data models (PocketBase)

### `apps` — drives `/apps/[slug]`

```ts
{
  id: string,                      // auto
  slug: string,                    // unique, "1perc", "heal", "riseup", "resonate"
  name: string,                    // "1perc"
  tagline: string,                 // "One book a day. 5 minutes. A little smarter."
  description: string,             // 1-2 sentences, 200-300 chars
  longDescription: string,         // MDX, 500-1000 words
  iconUrl: string,                 // CDN path, e.g. "resources.positiveness.club/apps/1perc/icon.png"
  screenshots: string[],           // 5-8 CDN URLs
  accentColor: string,             // "#C46A4A" (rosewood for Resonate, etc.)
  category: "books" | "wellness" | "habits" | "music",
  keywords: string[],              // ASO target keywords
  iosUrl: string,                  // https://apps.apple.com/app/id...
  androidUrl: string,              // https://play.google.com/store/apps/details?id=...
  appStoreId: string,              // "1234567890" (for Smart App Banner)
  bundleId: string,                // "com.pclub.1perc"
  leadMagnetSlug: string,          // "1perc-7day-pack"
  ctaHeadline: string,             // "Try 1perc free"
  ctaSubtext: string,              // "5-min book summaries, every day."
  bullets: string[],               // 3-5 short outcome-led bullets
  faq: { q: string, a: string }[], // 3-5 items for FAQ schema
  testimonials: { quote: string, author: string, source: string }[],
  status: "draft" | "live" | "archived",
  sortOrder: number,               // manual sort on /apps index
  created: string,                 // auto
  updated: string,                 // auto
}
```

### `blog_posts`

```ts
{
  id: string,
  slug: string,                    // unique
  title: string,                   // SEO title (60 chars max)
  metaDescription: string,         // 155 chars max
  coverUrl: string,
  body: string,                    // MDX source
  excerpt: string,                 // 200 chars
  author: string,                  // FK to authors collection
  topic: string,                   // FK to topics
  tags: string[],                  // 3-8 tags
  relatedApp: string,              // FK to apps, "this post promotes <app>"
  readingTimeMin: number,          // computed on save
  status: "draft" | "scheduled" | "published" | "archived",
  publishedAt: string,             // nullable, set on publish
  created: string,
  updated: string,
}
```

### `topics`

```ts
{ id, slug, name, description, color, sortOrder }
```

### `authors`

```ts
{ id, slug, name, avatarUrl, bio, socials: { twitter?, linkedin? } }
```

### `leads` — email capture

```ts
{
  id: string,
  email: string,                   // indexed
  source: string,                  // "homepage-hero", "app-1perc", "blog-post-slug"
  magnet: string,                  // "book-summary-pack" | "heal-sleep-track" | null
  referrer: string,
  utm: { source?, medium?, campaign?, content?, term? },
  app: string,                     // FK to apps, nullable
  ip: string,                      // for dedup, GDPR-rotated
  userAgent: string,
  created: string,
  unsubscribedAt: string,          // nullable
}
```

### `redirects` — for `/r/[code]`

```ts
{ id, code: string, destination: string, campaign: string, expiresAt: string }
```

### `experiments` — A/B test config (v2)

```ts
{ id, key: string, variants: { name: string, weight: number }[], active: bool }
```

### Migrations

PocketBase migrations live in `pb_migrations/`. **Never edit the PB admin UI directly** — every schema change gets a migration file committed.

---

## 8. Component library

All in `components/`, organized by purpose. No external component library — we own the API.

### Primitives (`components/ui/`)

| Component | Based on | Notes |
|---|---|---|
| `<Button>` | Radix Slot | variants: `primary`, `secondary`, `ghost`, `link`; sizes: `sm`, `md`, `lg` |
| `<SmartCTA>` | — | **The conversion engine.** See §10. |
| `<Card>` | — | variants: `app`, `blog`, `plain` |
| `<Dialog>` | Radix | for video embeds, lead-magnet success modal |
| `<Popover>` | Radix | for share buttons, more menu |
| `<Tabs>` | Radix | for blog topic filter |
| `<Accordion>` | Radix | for FAQ |
| `<Tooltip>` | Radix | for icon buttons |
| `<Input>`, `<Textarea>` | — | styled, accessible, error states |
| `<Switch>`, `<Checkbox>` | Radix | |
| `<Toast>` | Radix | for form submission feedback |

### Composite (`components/`)

| Component | Purpose |
|---|---|
| `<SiteHeader>` | Sticky, transparent on hero, solid on scroll |
| `<SiteFooter>` | Links, social, copyright, build hash |
| `<AppCard>` | Card for app on /apps and / |
| `<AppIcon>` | Render the app icon with consistent size + glow |
| `<ScreenshotCarousel>` | Touch-friendly, keyboard-accessible, lazy-loaded |
| `<BlogCard>` | Cover, title, excerpt, reading time, topic |
| `<BlogPostBody>` | MDX renderer wrapper with prose styles |
| `<LeadMagnetForm>` | Email capture with optimistic UI |
| `<RatingBadge>` | 4.8★ · 12k reviews, ISR-refreshed from store API |
| `<Faq>` | Accordion + JSON-LD |
| `<CrossPromoStrip>` | "Also from positiveness" |
| `<EmailCapture>` | Generic email form (configurable source) |
| `<OgImage>` | Renders `/api/og?title=...` |
| `<JsonLd>` | Renders JSON-LD for SoftwareApplication, Article, FAQPage, Organization |
| `<SmartAppBannerMeta>` | Renders the `<meta name="apple-itunes-app">` tag |

### Icons

- `lucide-react` for utility icons
- App icons are custom (per-app PNG/SVG in `/public/apps/<slug>/`)

---

## 9. SEO infrastructure

### Sitemap (`/sitemap.xml`)

Generated by `next-sitemap` on every build. Includes:
- All static routes
- All `apps` where `status = live`
- All `blog_posts` where `status = published`
- `lastmod` from PB `updated` field

### Robots (`/robots.txt`)

```
User-agent: *
Allow: /
Disallow: /r/
Disallow: /api/

Sitemap: https://positiveness.club/sitemap.xml
```

### Structured data (JSON-LD)

| Page type | Schema.org type | Required fields |
|---|---|---|
| `/` | `Organization` + `WebSite` | name, url, logo, sameAs (socials) |
| `/apps/[slug]` | `SoftwareApplication` | name, description, image, operatingSystem, applicationCategory, offers (price=0), aggregateRating, author |
| `/blog` | `Blog` | name, url |
| `/blog/[slug]` | `Article` (or `BlogPosting`) | headline, image, datePublished, author, publisher, description |
| `/apps/[slug]` (FAQ section) | `FAQPage` | mainEntity[] |
| `/about` | `Organization` + `Person` (founders) | |

**Implementation:** a `<JsonLd>` component that takes a typed object and renders a `<script type="application/ld+json">` in `<head>`. Every page composes the schemas it needs.

### Open Graph + Twitter cards

Every page renders:
- `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`

For blog posts, OG image is dynamic via `/api/og?title=...&author=...` (uses `@vercel/og` or `next/og`).

### Canonical + hreflang

- `<link rel="canonical" href="https://positiveness.club<path>">` on every page
- `<link rel="alternate" hreflang="en" href="...">` on all routes (even if only `en` ships at v1 — the structure is ready for v2)

### Meta template

```ts
// app/layout.tsx
export const metadata = {
  metadataBase: new URL('https://positiveness.club'),
  title: { default: 'positiveness.club', template: '%s · positiveness.club' },
  description: 'Apps that make you a little more human.',
  openGraph: { siteName: 'positiveness.club', type: 'website' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}
```

### Performance SEO signals (covered in §14)

- LCP < 2.5s (P75)
- INP < 200ms (P75)
- CLS < 0.1 (P75)
- HTTPS everywhere (Cloudflare auto)
- Mobile-friendly (responsive by default)

---

## 10. App-to-web conversion mechanics

This is the heart of the platform. Every CTA goes through the same component.

### `<SmartCTA>` component

```tsx
<SmartCTA
  app="1perc"            // app slug (looks up PB)
  variant="primary"      // visual
  size="lg"
  placement="hero"       // for analytics
  label="Get the app"    // overridable
  className="..."
/>
```

**Behavior:**

1. **If user agent = iOS Safari** → render as `<a href={iosUrl}>` with `app-argument=<deep-link>` and `ct=smartbanner` (Apple Smart App Banner compatible)
2. **If user agent = Android Chrome** → render as `<a href={androidUrl}>` with `?ct=smartbanner` (Play Store will open)
3. **If neither** → render as plain deep link to a fallback page with both buttons
4. **In all cases**, fire Plausible event `cta_click { app, placement, variant }` on click
5. **Inject UTM params** automatically: `?utm_source=positiveness.club&utm_medium=cta&utm_campaign={app}&utm_content={placement}`

### Smart App Banner (iOS)

In every page's `<head>` (only when an app context exists):

```html
<meta name="apple-itunes-app"
      content="app-id=1234567890, app-argument=positiveness://landing?ct=smartbanner&utm_source=web">
```

If the app is installed, iOS opens the deep link. Otherwise the user can tap "View" to go to the store.

### Android (no native Smart Banner)

Render a small client component at the top of the page (collapsible after 5s):

```tsx
// components/AndroidAppBanner.tsx
'use client'
export function AndroidAppBanner({ app }) {
  // Detects Android Chrome, shows "Open in app" / "Get on Play Store"
  // Dismissible, remembers dismissal in localStorage
}
```

### Deep links (configured in each app's manifest)

- iOS: `positiveness://<app>?...` (universal links preferred, deep link fallback)
- Android: `https://positiveness.club/<app>?...` (app links)

The web platform doesn't own the deep link handler — the apps do. We just construct the right URL.

### Email capture (deferred install)

When a user dismisses the Smart Banner, show a polite prompt:

> "Not installing now? Get a free 7-day book summary pack — we'll send it to your email."

Captures lead + creates opportunity for a 7-day nurture sequence that re-prompts install.

### "Which is right for you?" quiz (v2)

Simple 4-question quiz on `/apps` that recommends an app and deep-links. Build later.

---

## 11. Content engine

The blog is the **SEO compound engine**. Every post targets a problem-based long-tail keyword, links to an app landing page, and pulls authority from the root domain.

### Content pillars (one per app)

| Pillar | Sample topics | Target app |
|---|---|---|
| Books & learning | "5 books that change how you think about X", "best book summary apps compared" | 1perc |
| Wellness & calm | "3-min morning reset", "anxiety relief without medication" | HEAL |
| Habits & routines | "the 5am myth", "morning routine for night owls" | Riseup |
| Music & craft | "why your guitar is out of tune (and how to fix it)", "free tuner apps compared" | Resonate |

### SEO content rules

- **Title**: keyword-first, 50-60 chars, curiosity gap optional
- **Meta description**: 140-155 chars, includes the keyword
- **URL slug**: short, keyword, no stop words
- **H1**: matches title (or close)
- **First 100 words**: keyword appears, sets up the problem
- **Body**: 800-2000 words, scannable (H2 every 200 words, lists, images)
- **Internal links**: ≥ 2 to app landings, ≥ 1 to other blog posts
- **External links**: 1-3 to authoritative sources
- **End CTA**: SmartCTA to the related app
- **Cover image**: 1200×630, branded, with the post title
- **OG image**: dynamic from `/api/og`

### Editorial calendar

- 1 post per week minimum (Tuesday 8am SGT)
- Topics planned 1 month ahead in PB
- Drafts reviewed, then scheduled
- Auto-publish at scheduled time (or manual)

### Internal linking strategy

- Every blog post links to ≥ 1 app landing
- Every app landing links to ≥ 3 related blog posts
- Every cross-link uses descriptive anchor text (not "click here")
- A PB query builds the "related posts" widget for each app

### Comment policy (v1)

- **No comments.** Avoid moderation cost, spam, and legal risk. The email capture + cross-promo is the engagement loop.
- If we want community later, embed Disqus or similar.

---

## 12. Lead generation

### Email capture points

| Location | Magnet | Notes |
|---|---|---|
| Homepage hero | "7-day book summary pack" (1perc content) | Highest volume |
| `/apps/1perc` | "5 free book summaries" | App-specific |
| `/apps/heal` | "5-min morning reset audio" | App-specific |
| `/apps/riseup` | "7-day morning routine template" | App-specific |
| `/apps/resonate` | None (privacy-first, no email needed) | Resonate is zero-telemetry |
| Blog post end | App-specific magnet | Contextual |
| Smart Banner dismiss | "Send me the free pack" | Last-chance capture |

### Lead flow

```
form submit
  → server action validates with Zod
  → POST /api/leads
  → PocketBase stores lead
  → Resend sends welcome email with magnet link
  → Plausible fires `lead_captured` event
  → user sees success state (toast)
```

### Email automation (v2)

- Day 0: welcome + magnet
- Day 2: "did you try the app?" with deep link
- Day 5: testimonial + social proof
- Day 7: "last chance" with cross-promo to other pclub app
- Day 30: re-engagement or unsubscribe

Build via Resend Audiences + scheduled sends. Keep simple — no marketing automation platform needed at this scale.

### GDPR / privacy

- Plausible: no cookie banner needed
- Email form: explicit consent checkbox ("I agree to receive emails from positiveness.club")
- Privacy policy links on every form
- One-click unsubscribe in every email (Resend handles)
- Lead IP stored hashed (not raw) for dedup

---

## 13. Analytics & experimentation

### Plausible

- Script: `https://plausible.io/js/script.js` (or self-hosted)
- Domain: `positiveness.club`
- Goals (events):
  - `cta_click { app, placement, variant }`
  - `lead_captured { app, source, magnet }`
  - `app_store_click { app, store, source }`
  - `cross_promo_click { from_app, to_app, placement }`
  - `smart_banner_view { app }`
  - `smart_banner_dismiss { app }`
  - `blog_read_complete { slug, time_to_complete }` (fires at 90% scroll)
- Revenue: not tracked (apps own the paywall)
- UTM: every CTA auto-tags (see §2)

### Funnel reports (Plausible)

- `/apps/[slug]` → CTA click → store → install (we only see up to store; install is reported back by Apple/Google Search Ads if you run them)
- `/blog/[slug]` → CTA click → store
- `/` → email capture → lead

### A/B testing (v2)

- Cookie-based variant assignment (no flicker)
- Variants stored in PB `experiments` collection
- Component: `<Experiment key="hero_headline" variants={...}>`
- Significance: built into Plausible custom goals (we'll add their A/B feature when available)

### Privacy

- No Google Analytics, no Facebook Pixel, no hotjar session replays
- Plausible aggregates, doesn't identify
- Cookie banner: **not needed** (Plausible sets no cookies)

---

## 14. Performance budget

### Core Web Vitals targets (P75, mobile 4G)

| Metric | Target | Hard limit |
|---|---|---|
| LCP | < 2.0s | 2.5s |
| INP | < 150ms | 200ms |
| CLS | < 0.05 | 0.1 |
| TBT | < 150ms | 200ms |
| Speed Index | < 2.5s | 3.0s |
| Total JS | < 120KB gzipped | 180KB |
| Total CSS | < 30KB gzipped | 50KB |

### Lighthouse score targets

- Performance: ≥ 95 (mobile)
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: 100

### How we hit it

- **Static generation** for every page that doesn't need user data
- **Image optimization** via `next/image` with AVIF/WebP, lazy below fold
- **Font**: self-host Inter (variable), `font-display: swap`, preload
- **No client-side router for install** (plain `<a>`)
- **No external scripts** besides Plausible (1KB) and Resend (zero client-side)
- **Cloudflare cache** for static assets (1y), ISR pages (1h)
- **Edge functions** for `/api/og` and `/r/[code]`

### Monitoring

- Plausible's built-in performance tracking (Lighthouse on real devices, opt-in)
- Cloudflare Web Analytics (free, no script, aggregated)
- Sentry for server errors only (no session replay)

---

## 15. Design system

### Brand foundations

| Token | Value | Use |
|---|---|---|
| `--brand-primary` | `#FF6B5B` (warm coral) | CTAs, links, accents |
| `--brand-primary-hover` | `#E85A4A` | hover state |
| `--brand-secondary` | `#1A1A1A` (near-black) | text, dark mode bg |
| `--brand-bg` | `#FAFAF7` (off-white) | light mode bg |
| `--brand-surface` | `#FFFFFF` | cards |
| `--brand-muted` | `#6B6B6B` | secondary text |
| `--brand-border` | `#E5E5E0` | dividers |
| `--brand-accent-1perc` | `#F5A623` (amber) | app:1perc |
| `--brand-accent-heal` | `#7FB069` (sage) | app:heal |
| `--brand-accent-riseup` | `#E07856` (terracotta) | app:riseup |
| `--brand-accent-resonate` | `#C46A4A` (rosewood) | app:resonate |

### Typography

- **Display**: Inter Variable, 700, 48-72px hero
- **Headings**: Inter Variable, 600, 24-40px
- **Body**: Inter Variable, 400, 16-18px, line-height 1.6
- **Mono**: JetBrains Mono Variable, 400 (for code blocks)
- Self-hosted via `next/font/google` (no FOIT, no external request)

### Spacing scale

4-pt grid: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128

### Motion

- **Page transitions**: opacity + 8px Y, 200ms, ease-out
- **Card hover**: scale 1.02, shadow up, 150ms
- **Smart Banner slide-in**: translateY, 300ms, spring
- **No bouncy / playful animations** — the brand is calm, focused
- `prefers-reduced-motion` respected everywhere

### Iconography

- Lucide for utility
- Custom app icons (per-app, see PB `apps.iconUrl`)
- No emoji in UI (only in blog content where appropriate)

### Dark mode

- Built from day 1 (CSS variables, no JS toggle by default)
- `prefers-color-scheme: dark` honored first
- Manual toggle in footer (preference stored in cookie)

### Imagery

- No stock photos. Ever.
- App screenshots: device frames on brand background
- Blog covers: custom illustrations or simple typography
- Avatars: initials on brand color, no fake faces

---

## 16. Internationalization

### v1: English only

- Single locale: `en`
- No locale prefix in URLs
- All copy in `/content/en/`

### v2: Add locales (future-ready)

- URL structure: `positiveness.club/<locale>/...` (e.g., `/id/...` for Bahasa)
- Middleware detects locale from `Accept-Language` and `Sec-CH-Lang`
- `next-intl` for routing + copy
- App metadata in PB can be locale-keyed

### Translation pipeline (when we add locales)

- PB stores per-locale strings for `apps.name`, `apps.tagline`, `apps.bullets`, `apps.faq`
- Blog posts have a `translations` relation
- Auto-translate via DeepL API, human review before publish
- hreflang tags wired up

---

## 17. Accessibility

WCAG 2.1 AA is the floor. Tested with axe-core + manual screen reader passes.

### Concrete commitments

- Semantic HTML (`<main>`, `<nav>`, `<article>`, `<aside>`)
- All interactive elements keyboard-accessible
- Focus indicators visible (custom, on-brand)
- Color contrast ≥ 4.5:1 (body), ≥ 3:1 (large text, UI)
- Alt text on all images (decorative = `alt=""`)
- Form labels associated with inputs
- ARIA only when semantic HTML doesn't work
- `prefers-reduced-motion` honored
- Skip-to-content link
- No keyboard traps
- Tested: VoiceOver (iOS/macOS), NVDA (Windows), TalkBack (Android)

### Testing

- `axe-core` in Playwright E2E
- Manual test before each major release
- Lighthouse accessibility audit on every deploy

---

## 18. File structure

```
mx.pclub.web/
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # root layout, metadata, providers
│   ├── page.tsx                      # /  (brand hub)
│   ├── apps/
│   │   ├── page.tsx                  # /apps (index)
│   │   ├── [slug]/
│   │   │   ├── page.tsx              # /apps/[slug] (landing)
│   │   │   ├── privacy/page.tsx
│   │   │   └── support/page.tsx
│   ├── blog/
│   │   ├── page.tsx                  # /blog (index, paginated)
│   │   ├── [slug]/page.tsx
│   │   └── topic/[topic]/page.tsx
│   ├── about/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── press/page.tsx
│   ├── manifesto/page.tsx
│   ├── careers/page.tsx
│   ├── r/[code]/page.tsx             # referral redirect
│   ├── api/
│   │   ├── leads/route.ts            # lead capture
│   │   ├── og/route.tsx              # dynamic OG image
│   │   └── revalidate/route.ts       # on-demand ISR
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── globals.css
│   └── not-found.tsx
│
├── components/
│   ├── ui/                           # primitives (Button, Card, Dialog, ...)
│   ├── site/                         # SiteHeader, SiteFooter
│   ├── apps/                         # AppCard, ScreenshotCarousel, RatingBadge, ...
│   ├── blog/                         # BlogCard, BlogPostBody, ...
│   ├── lead/                         # LeadMagnetForm, EmailCapture
│   ├── seo/                          # JsonLd, SmartAppBannerMeta
│   ├── cta/                          # SmartCTA
│   └── analytics/                    # Plausible events
│
├── lib/
│   ├── pb.ts                         # PocketBase client (server)
│   ├── pb-types.ts                   # generated types from PB schema
│   ├── analytics.ts                  # Plausible event helpers
│   ├── seo.ts                        # metadata builders
│   ├── utm.ts                        # UTM injection
│   ├── store-api.ts                  # App Store / Play Store lookups
│   ├── env.ts                        # Zod-validated env
│   ├── utils.ts
│   └── content/                      # static copy (not in PB)
│       ├── home.ts
│       ├── about.ts
│       └── manifesto.ts
│
├── content/                          # MDX content for static pages
│   ├── about.mdx
│   ├── manifesto.mdx
│   └── press.mdx
│
├── public/
│   ├── apps/<slug>/                  # app icons, hero assets
│   ├── blog/covers/                  # blog cover images
│   ├── og/                           # fallback OG images
│   └── fonts/                        # self-hosted Inter, JetBrains Mono
│
├── styles/
│   ├── globals.css                   # tailwind + tokens
│   ├── prose.css                     # blog prose styles
│   └── mdx.css
│
├── tests/
│   ├── e2e/                          # Playwright
│   │   ├── home.spec.ts
│   │   ├── app-landing.spec.ts
│   │   ├── blog.spec.ts
│   │   ├── lead-capture.spec.ts
│   │   └── smart-cta.spec.ts
│   └── unit/                         # Vitest
│       ├── utm.test.ts
│       ├── seo.test.ts
│       └── seo-schema.test.ts
│
├── scripts/
│   ├── seed-pb.ts                    # seed PB with initial apps data
│   ├── sync-store-ratings.ts         # cron: refresh rating badge from store APIs
│   └── generate-og-fallbacks.ts
│
├── .github/
│   └── workflows/
│       ├── ci.yml                    # lint, typecheck, test
│       └── deploy.yml                # trigger Dokploy redeploy on push to main
│
├── docs/
│   ├── ARCHITECTURE.md               # this file
│   ├── CONTENT_GUIDE.md              # editorial guidelines
│   ├── PB_SCHEMA.md                  # PocketBase collection reference
│   └── RUNBOOK.md                    # ops procedures
│
├── AGENTS.md                         # project context for future agent work
├── README.md
├── next.config.mjs
├── tailwind.config.ts
├── biome.json
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
├── .env.example
├── .gitignore
└── LICENSE
```

---

## 19. Hosting, DNS, deploy

### DNS (Cloudflare — `positiveness.club` zone)

| Record | Type | Value | Proxy |
|---|---|---|---|
| `positiveness.club` | A | `<Dokploy LB IP>` | Proxied |
| `www.positiveness.club` | CNAME | `positiveness.club` | Proxied |
| `pb.positiveness.club` | A | `<PB host IP>` | Proxied (or DNS-only for self-signed) |
| `resources.positiveness.club` | A | `<IIS host IP>` (existing) | Proxied (existing) |
| `api.positiveness.club` | CNAME | `<PB host>` | DNS-only |

### SSL

- Cloudflare Universal SSL on `positiveness.club` and `www.`
- Origin uses Let's Encrypt via Dokploy auto-cert

### Deploy (GitHub Action → Dokploy)

Already battle-tested pattern (1perc webhook→action migration, see agent memory):

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  trigger:
    runs-on: ubuntu-latest
    steps:
      - run: |
          curl -X POST "https://dokploy.scaleupcrm.com/api/trpc/application.redeploy" \
            -H "x-api-key: ${{ secrets.DOKPLOY_API_KEY }}" \
            -H "Content-Type: application/json" \
            -d '{"json":{"applicationId":"<mx.pclub.web-id>"}}'
```

**First deploy MUST be triggered from the Dokploy UI** (API returns null for new apps). Subsequent deploys via Action.

### Dokploy app config

- Build path: `mx.pclub.web/`
- Dockerfile: `Dockerfile` (we provide — see below)
- Port: `3000`
- Health check: `/` returns 200

### Dockerfile (Next.js standalone)

```dockerfile
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
```

`next.config.mjs` uses `output: 'standalone'` for this.

### Environments

| Env | URL | PocketBase | Notes |
|---|---|---|---|
| Local | `localhost:3000` | localhost:8090 | PB dev mode |
| Staging | `staging.positiveness.club` | same PB, `staging_*` collections or env-flag | Optional, can skip |
| Production | `positiveness.club` | `pb.positiveness.club` | Live |

---

## 20. Implementation phases

### Phase 0 — Foundation (3 days)

- [ ] Repo scaffolded with Next.js 15 + TS + Tailwind 4
- [ ] Biome configured
- [ ] Vitest + Playwright set up
- [ ] `.env.example` documented
- [ ] CI workflow (lint + typecheck + test)
- [ ] Deploy workflow (Dokploy trigger)
- [ ] First deploy live at `positiveness.club` (placeholder "coming soon")

### Phase 1 — Core pages (5 days)

- [ ] PocketBase collections created (apps, blog_posts, leads, redirects)
- [ ] Seed script with 4 apps data
- [ ] Brand hub `/` with hero + apps grid + email capture
- [ ] Apps index `/apps`
- [ ] Per-app landing `/apps/[slug]` (data-driven)
- [ ] Per-app privacy + support pages
- [ ] `/about`, `/privacy`, `/terms`
- [ ] `SmartCTA` component
- [ ] Smart App Banner meta on every page

**End of Phase 1: every page exists, every CTA routes correctly.**

### Phase 2 — SEO infrastructure (3 days)

- [ ] Sitemap + robots
- [ ] JSON-LD on every page
- [ ] OG image generation
- [ ] Twitter cards
- [ ] Canonical + hreflang ready
- [ ] Plausible integrated
- [ ] UTM injection on all CTAs
- [ ] Lighthouse ≥ 95 on home + 1 app page (mobile)

### Phase 3 — Blog (4 days)

- [ ] `/blog` index with pagination
- [ ] `/blog/[slug]` with MDX renderer
- [ ] Blog CMS via PB
- [ ] OG image for posts
- [ ] Related posts widget
- [ ] First 3 posts published

**End of Phase 3: blog live, SEO compound engine started.**

### Phase 4 — Lead capture + email (2 days)

- [ ] Lead form with Zod validation
- [ ] Resend integration
- [ ] Welcome email with magnet link
- [ ] Success state UI
- [ ] Privacy consent checkbox
- [ ] Plausible `lead_captured` event

**End of Phase 4: full funnel live, leads flowing.**

### Phase 5 — Polish (3 days)

- [ ] Dark mode
- [ ] `prefers-reduced-motion` everywhere
- [ ] Accessibility pass (axe + manual)
- [ ] Cross-promo on app landings
- [ ] "Not installing?" email prompt
- [ ] Documentation (CONTENT_GUIDE, PB_SCHEMA, RUNBOOK)
- [ ] AGENTS.md filled out

**End of Phase 5: production-ready v1.**

### Total: ~20 working days (4 weeks at 1 dev full-time)

After v1: 1 post/week, monitor Plausible, iterate on the highest-converting pages.

---

## 21. Operational runbook

(Full runbook in `docs/RUNBOOK.md` when we get there. Quick version here.)

### Daily

- Plausible dashboard glance
- Lead notification (Resend)
- PocketBase backup status (auto, daily)

### Weekly

- Publish 1 blog post
- Review Plausible funnel for top 3 app landings
- Check broken links (Screaming Frog, or `linkinator`)

### Monthly

- Refresh app ratings + reviews from store API
- Lighthouse audit on all key pages
- Review lead → install attribution (need app-side reporting)
- Security: dependabot PR review, `pnpm audit`

### Per release

- Tag with semver
- Update CHANGELOG
- Verify Cloudflare cache hit rate
- Verify Search Console coverage (no new errors)

### Rollback

- Dokploy redeploy previous container
- Or: `git revert` + push → auto-deploys

---

## 22. Open questions

1. **Lead magnet priority** — 1perc "7-day book summary pack" feels strongest. Confirm before Phase 4?
2. **HEAL launch timing** — if HEAL is pre-launch, should the landing page be `status: draft` or `status: live` with "Notify me" CTA? Affects the `apps` collection schema slightly.
3. **Riseup app** — I see "Riseup" in the project list. Is it built, or aspirational? Affects whether to include in v1.
4. **Plausible self-host or cloud?** — Cloud is $9/mo for 10k events. Self-host = free + maintenance. Defer to Phase 2.
5. **Resonate email capture** — privacy-first, no email. Confirm we don't need a list for Resonate users at all.
6. **Analytics for cross-promo** — apps need to report back which pclub app the user came from. Is the universal account scheme ready, or do we need to coordinate with the apps' teams first?
7. **Existing `1perc.positiveness.club` subdomain** — keep, 301-redirect to `/apps/1perc`, or repurpose? Recommend 301.
8. **Press kit assets** — do we have logos, screenshots, founder photos? Or is that part of the build?

---

*This document is the source of truth. If code and doc disagree, doc wins — fix the code.*
