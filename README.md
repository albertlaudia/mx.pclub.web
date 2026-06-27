# positiveness.club — marketing platform

> The web funnel that turns search into installs for the **pclub app ecosystem** (1perc, HEAL, Riseup, Resonate).

A single Next.js 15 web application that promotes every app in the pclub brand,
captures leads, and routes visitors to the right store listing.

**Live**: `https://uat.positiveness.club` (UAT) · production target `https://positiveness.club`

## What this is

- **One web app** (Next.js 15 App Router) under `positiveness.club`
- **Subpath routing** for every app page (`/apps/1perc`, `/apps/heal`, …)
- **Marketing machine** — not a brochure. Smart App Banners, email capture, blog CMS, structured data, conversion tracking.
- **Brand hub** — `/about`, `/privacy`, `/manifesto`, `/press`, plus a content engine at `/blog`.

## Conversion model

```
problem-aware user
        │
        ▼
Google search  →  blog post or app landing page
        │
        ▼
Smart App Banner / CTA  →  store listing (iOS / Android)
        │
        ▼
install
        │
        ▼
in-app cross-promo to next pclub app
```

## Apps promoted

| App | Slug | Category |
|---|---|---|
| 1perc | `1perc` | Books · Learning |
| HEAL | `heal` | Wellness · Calm |
| Riseup | `riseup` | Habits · Routine |
| Resonate | `resonate` | Music · Tools |

## Tech stack

- **Framework**: Next.js 15 (App Router) · TypeScript · React 19
- **Styling**: Tailwind CSS 4 + Radix UI primitives
- **Backend**: PocketBase v0.22+ (for content + leads — `pc_*` collections)
- **Hosting**: Dokploy (project: `PClub UAT`, app: `uat.positiveness.club`)
- **DNS / CDN**: Cloudflare
- **Analytics**: Plausible (privacy-first, no cookie banner)
- **Email**: Resend (lead magnet delivery)

## Project structure

```
app/                          Next.js App Router
  page.tsx                    / brand hub
  apps/                       /apps index + per-app landings
  blog/                       /blog index + posts
  about, privacy, terms,
  press, manifesto            Static pages
  api/                        /api/leads, /api/og
  sitemap.ts, robots.ts       SEO infrastructure

components/                   React components
  AppIcon.tsx                 Hand-crafted SVG icons
  HeroArt.tsx                 Hand-crafted SVG hero illustrations
  SmartCTA.tsx                The conversion engine
  LeadMagnetForm.tsx          Email capture form
  ...

lib/
  data/
    apps.ts                   Apps metadata (drives /apps/[slug])
    blog.ts                   Blog posts metadata
  analytics.ts                Plausible event helpers
  seo.ts                      Metadata builders
  utm.ts                      UTM injection
  utils.ts                    cn(), formatDate(), etc.

content/blog/                 MDX blog posts
  *.mdx

docs/                         Documentation
  ARCHITECTURE.md             Full design doc (22 sections)
  DEPLOY.md                   Deploy guide
  CONTENT_GUIDE.md            Editorial guide (TBD)
  PB_SCHEMA.md                PocketBase schema (TBD)
```

## Local dev

```bash
# Prereqs: Node 22+, pnpm 9+
corepack enable

# Install
pnpm install

# Dev server (uses static data files — no PB needed)
pnpm dev
# → http://localhost:3000

# Build
pnpm build
pnpm start

# Lint + typecheck
pnpm lint
pnpm typecheck
```

## Deployment

See [`docs/DEPLOY.md`](docs/DEPLOY.md) for the full guide.

Quick version:
1. Repo lives at `albertlaudia/mx.pclub.web`
2. Dokploy app: project `PClub UAT` → app `uat.positiveness.club`
3. Domain: `uat.positiveness.club` (HTTPS via Cloudflare)
4. Auto-deploy on push to `main` via GitHub Action → Dokploy API
5. First deploy MUST be triggered from Dokploy UI (API returns null for new apps)

## PocketBase collections (when migrating from static data)

All collections prefixed with `pc_*`:

| Collection | Purpose |
|---|---|
| `pc_apps` | App metadata — drives `/apps/[slug]` |
| `pc_blog_posts` | Blog posts — drives `/blog/[slug]` |
| `pc_topics` | Blog topic taxonomy |
| `pc_authors` | Author profiles |
| `pc_leads` | Email captures |
| `pc_redirects` | Short referral codes |

Mirror the TS types in `lib/data/apps.ts` and `lib/data/blog.ts` — those are the contract.

## Quick links

- **[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)** — full design doc (read first)
- **[`docs/DEPLOY.md`](docs/DEPLOY.md)** — deploy guide
- **[`AGENTS.md`](AGENTS.md)** — project context for future agent work

## Repo conventions

- `main` is always deployable
- Feature branches: `feat/<slug>`, `fix/<slug>`, `chore/<slug>`
- All PRs target `main`
- Deploy on push via GitHub Action → Dokploy

## Status

- [x] Repo scaffolded with Next.js 15 + TS + Tailwind 4
- [x] All pages built (brand hub, apps, blog, about, privacy, press, manifesto)
- [x] SEO infrastructure (sitemap, JSON-LD, OG, Smart App Banner, UTM)
- [x] 5 SEO-targeted blog posts written
- [x] Lead capture form (stubbed, ready for Resend)
- [x] Dockerfile + GitHub Action for Dokploy deploy
- [ ] PocketBase migration (collections with `pc_*` prefix)
- [ ] Resend integration (welcome email automation)
- [ ] Plausible live integration (domain registered)
- [ ] Production deploy at `positiveness.club`// trigger fresh build
