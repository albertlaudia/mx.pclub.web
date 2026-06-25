# AGENTS.md — mx.pclub.web

> Project context for any agent working on this repo. Read this first.

## What this is

`positiveness.club` marketing platform — a single Next.js web app that promotes the pclub app ecosystem (1perc, HEAL, Riseup, Resonate) and converts search/visit traffic into app installs.

**Live URL**: `positiveness.club` (TBD)
**Repo**: `albertlaudia/mx.pclub.web`
**Author**: @albertlaudia
**Status (2026-06-25)**: Pre-build. Design phase complete. See `docs/ARCHITECTURE.md` for the full design.

## Core job

Turn visitors into app installers. That's it. We're not building a product — we're building a marketing platform that drives installs of other products.

## Source of truth

**`docs/ARCHITECTURE.md`** is the design doc. All architectural decisions live there. If you need to deviate, update the doc in the same PR.

**`docs/CONTENT_GUIDE.md`** (TBD) — editorial guidelines for blog content
**`docs/PB_SCHEMA.md`** (TBD) — PocketBase collection reference
**`docs/RUNBOOK.md`** (TBD) — ops procedures

## Apps in the ecosystem

| App | Slug | Status | Bundle ID | Repo |
|---|---|---|---|---|
| 1perc | `1perc` | Production (mobile) | `com.pclub.1perc` | `albertlaudia/1perc` (monorepo) |
| HEAL | `heal` | Development | `com.pclub.heal` | (TBD) |
| Riseup | `riseup` | TBD | `com.pclub.riseup` | (TBD) |
| Resonate | `resonate` | Production-ready | `com.solverwatch.guitartuner` | `albertlaudia/mx.tools.guitartuner` |

**Note**: Resonate's bundle ID uses `solverwatch` (legacy), not `pclub`. The repo lives under `mx.tools.guitartuner` (web-utility pattern). This is the pre-pclub convention — leave as-is.

## Repo naming convention (cross-project)

- `mx.tools.*` = web utility
- `mx.ai.*` = AI apps
- `mx.pclub.*` = positiveness.club brand (mobile + this marketing web)

This repo lives under `mx.pclub.*` because it's the pclub brand's web platform.

## Stack reminder

- **Framework**: Next.js 15 App Router + TypeScript
- **Styling**: Tailwind 4 + Radix UI primitives
- **Backend**: PocketBase (existing instance, separate admin origin)
- **Hosting**: Dokploy (same host as 1perc/HEAL web)
- **DNS/CDN**: Cloudflare (positiveness.club zone)
- **Analytics**: Plausible (privacy-first, no cookie banner)
- **Email**: Resend (lead magnet delivery)

## What goes through this repo

- All marketing pages for `positiveness.club`
- The blog
- Lead capture endpoints
- Smart App Banner + deep link routing
- SEO infrastructure (sitemap, JSON-LD, OG images)

## What does NOT go in this repo

- The apps themselves (Flutter, mobile) — they live in their own repos
- PocketBase instance code — separate
- Dokploy config files — managed in Dokploy UI

## Conventions for this repo

- **Static-first**: SSG by default. ISR when content needs to refresh on publish. SSR only for `/r/[code]` and `/api/*`.
- **One CTA component**: every install button goes through `<SmartCTA>`. No raw links to store URLs.
- **One email form**: every lead capture goes through `<LeadMagnetForm>`. No raw form posts.
- **No client router for install**: plain `<a>` to store URL. Crawlable, debuggable, doesn't break without JS.
- **No client-side analytics for PII**: Plausible aggregates. No GA, no Facebook Pixel, no session replays.
- **Accessibility floor**: WCAG 2.1 AA. No shipping without axe passing.
- **No stock photos**: custom illustrations, typography, or app screenshots only.

## Cross-project context

This repo is one of ~10 projects under the positiveness.club brand. See agent MEMORY.md (root session) for:
- PocketBase quirks (read `pocketbase-quirks` topic before any PB work)
- Dokploy deploy patterns (read `dokploy-sslip-pattern` topic before any deploy)
- SmarterASP / resources CDN (read `smarterasp-ftp-upload` topic before uploading media)
- VPS security + Dokploy overlay recovery (cross-project emergency playbooks)

## Key decisions in this repo

(Documented fully in `docs/ARCHITECTURE.md` §3. Highlights:)

- **One web app, subpath routing** — `/apps/[slug]`, not `<slug>.positiveness.club`
- **Plausible, not GA** — no cookie banner needed
- **Server Components by default** — `'use client'` only when needed (forms, dismissable banners, animations)
- **No CMS, just PB admin** — avoid the dependency
- **English-only at launch, i18n-ready structure** — don't ship half-translated

## Open questions (as of 2026-06-25)

See `docs/ARCHITECTURE.md` §22. Key ones:
- Which app is the **growth priority** (1perc, HEAL, Riseup)?
- Lead magnet content — 1perc "7-day book summary pack" is my pick, confirm?
- Is Riseup built, or aspirational?
- Existing `1perc.positiveness.club` subdomain — 301 to `/apps/1perc`?

## Working with this repo

1. Read `docs/ARCHITECTURE.md` first
2. Read this file second
3. Read the cross-project memory topics (links above) for infra patterns
4. Make changes that align with the design doc; update the doc if you deviate
5. Keep PRs small and scoped
6. Don't add dependencies without justification

## Status

- [x] Repo created
- [x] Architecture documented
- [ ] Repo scaffolded (Next.js)
- [ ] PB collections set up
- [ ] First page live
- [ ] First blog post
- [ ] First lead captured
- [ ] First install attributed
