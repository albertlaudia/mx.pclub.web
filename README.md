# positiveness.club — marketing platform

> The web funnel that turns search into installs for the **pclub app ecosystem** (1perc, HEAL, Riseup, Resonate).

This repo contains the marketing site at `positiveness.club` — a single Next.js application that promotes every app in the pclub brand, captures leads, and routes visitors to the right store listing.

## What this is

- **One web app** (Next.js 15 App Router) under `positiveness.club`
- **Subpath routing** for every app page (`/apps/1perc`, `/apps/heal`, …)
- **Marketing machine** — not a brochure. Smart App Banners, email capture, blog CMS, structured data, conversion tracking.
- **Brand hub** — `/about`, `/privacy`, `/press`, plus a content engine at `/blog`.

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
| 1perc | `1perc` | Books / audio learning |
| HEAL | `heal` | Wellness / audio therapy |
| Riseup | `riseup` | Habits / morning routine |
| Resonate | `resonate` | Music / instrument tools |

## Tech stack

- **Framework**: Next.js 15 (App Router) · TypeScript · React 19
- **Styling**: Tailwind CSS 4 + Radix UI primitives
- **Backend**: PocketBase (existing instance) for blog CMS, lead capture, app metadata
- **Hosting**: Dokploy (same host as 1perc / HEAL web)
- **DNS / CDN**: Cloudflare (positiveness.club zone)
- **Analytics**: Plausible (privacy-first, no cookie banner needed)
- **Email**: Resend or Postmark (lead magnet delivery)
- **Object storage**: existing `resources.positiveness.club` (IIS via SmarterASP)

## Quick links

- **[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)** — the full design doc. Read this first.
- **[`AGENTS.md`](AGENTS.md)** — project context for future agent work.

## Repo conventions

- `main` is always deployable
- Feature branches: `feat/<slug>`, `fix/<slug>`, `chore/<slug>`
- All PRs target `main`
- Deploy on push via existing Dokploy GitHub Action (see ARCHITECTURE §19)

## Local dev

```bash
pnpm install
cp .env.example .env.local   # fill in PB_URL, ANALYTICS, RESEND_KEY
pnpm dev
```

(Not scaffolded yet — see `docs/ARCHITECTURE.md` §20 for the phased plan.)
