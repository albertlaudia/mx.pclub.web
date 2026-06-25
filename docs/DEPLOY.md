# Deployment guide — positiveness.club

## Target

- **Project**: `PClub UAT` (Dokploy)
- **App**: `uat.positiveness.club` (UAT / staging)
- **Path in repo**: `mx.pclub.web/`
- **Production target (later)**: `positiveness.club`

---

## One-time setup in Dokploy UI

### 1. Create the app

In the `PClub UAT` project, create a new app:

- **Type**: Application (not a database, not a service)
- **Name**: `uat.positiveness.club` (or `mx-pclub-web-uat` — whatever you prefer)
- **Source**: GitHub
- **Repository**: `albertlaudia/mx.pclub.web`
- **Branch**: `main`
- **Build path**: `mx.pclub.web/` (or `mx.pclub.web` — depends on Dokploy version)
- **Dockerfile path**: `Dockerfile`
- **Port**: `3000`

> **Important**: the *first* deploy must be triggered manually from the Dokploy UI
> (Deploy button). The API returns null for new apps. After that, the GitHub Action handles it.

### 2. Add environment variables

In the app's Environment tab:

```env
# Site
NEXT_PUBLIC_SITE_URL=https://uat.positiveness.club

# Analytics (Plausible — placeholder, set up later)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=uat.positiveness.club
NEXT_PUBLIC_PLAUSIBLE_SCRIPT=https://plausible.io/js/script.js

# Email (Resend — leave blank for UAT, fill in for production)
RESEND_API_KEY=
RESEND_FROM_EMAIL=hello@positiveness.club

# PocketBase (leave blank for UAT — using local data files)
PB_URL=

# App store IDs (leave blank for UAT — Smart Banner won't render)
NEXT_PUBLIC_APP_1PERC_APPLE_ID=
NEXT_PUBLIC_APP_1PERC_PLAY_ID=
NEXT_PUBLIC_APP_HEAL_APPLE_ID=
NEXT_PUBLIC_APP_HEAL_PLAY_ID=
NEXT_PUBLIC_APP_RISEUP_APPLE_ID=
NEXT_PUBLIC_APP_RISEUP_PLAY_ID=
NEXT_PUBLIC_APP_RESONATE_APPLE_ID=
NEXT_PUBLIC_APP_RESONATE_PLAY_ID=
```

### 3. Bind the domain

In the app's Domains tab:

- Host: `uat.positiveness.club`
- Service: the app you just created
- HTTPS: auto (Let's Encrypt via Dokploy)

### 4. Add DNS record in Cloudflare

For `positiveness.club` zone (Cloudflare):

```
Type: CNAME
Name: uat
Content: <Dokploy LB domain or IP>
Proxy: Proxied (orange cloud)
```

Or if Dokploy gives you an A record, use that.

---

## GitHub secrets (for auto-deploy)

In `https://github.com/albertlaudia/mx.pclub.web/settings/secrets/actions`:

| Secret | Value |
|---|---|
| `DOKPLOY_URL` | `https://dokploy.scaleupcrm.com` (your Dokploy base URL) |
| `DOKPLOY_API_KEY` | Your Dokploy API key (Settings → API Keys) |
| `DOKPLOY_APP_ID` | The application ID from Dokploy (visible in the URL when editing the app) |

After adding secrets, push to `main` — the GitHub Action at `.github/workflows/deploy.yml` will trigger a redeploy.

---

## First deploy checklist

1. [ ] Repo created and pushed (done — `albertlaudia/mx.pclub.web`)
2. [ ] Dokploy app created (above)
3. [ ] Domain bound in Dokploy
4. [ ] DNS record added in Cloudflare
5. [ ] Environment variables set in Dokploy
6. [ ] First manual deploy via UI (Deploy button)
7. [ ] Verify `https://uat.positiveness.club` loads
8. [ ] Add GitHub secrets for auto-deploy
9. [ ] Push a test commit → verify auto-deploy fires

---

## Going to production (positiveness.club)

When UAT is verified:

1. Create a second app in Dokploy (or promote the UAT one — your call)
2. Bind `positiveness.club` (apex, no `uat.`) with HTTPS
3. Update Cloudflare DNS:
   - `positiveness.club` → Dokploy (Proxied)
   - `www.positiveness.club` → CNAME to apex (Proxied)
4. Set `NEXT_PUBLIC_SITE_URL=https://positiveness.club` in env
5. Add `RESEND_API_KEY` (Resend production key)
6. Add PocketBase production URL + admin token
7. Add App Store IDs once each app is published
8. Submit `sitemap.xml` to Google Search Console
9. Verify Cloudflare cache hit rate on static assets

---

## PocketBase schema (pc_* prefix)

When you're ready to swap from static data to PocketBase, create these collections
on your PB instance:

| Collection | Purpose |
|---|---|
| `pc_apps` | Drives `/apps/[slug]` — slug, name, tagline, screenshots, store URLs, etc. |
| `pc_blog_posts` | Drives `/blog/[slug]` — title, MDX body, author, topic, related app |
| `pc_topics` | Blog topic taxonomy |
| `pc_authors` | Blog author profiles |
| `pc_leads` | Email captures from forms |
| `pc_redirects` | Short referral codes (`/r/[code]`) |

Mirror the TypeScript types in `lib/data/apps.ts` and `lib/data/blog.ts` — those are
the contract. Don't drift.

Add a `pb_migrations/` directory to this repo with all schema migrations committed
(per the agent memory entry on PocketBase quirks).

---

## Troubleshooting

**App shows 502 / not responding**
- Check Dokploy logs. Most often: env vars missing, or build failed.
- Verify `PORT=3000` and `HOSTNAME=0.0.0.0` (added in Dockerfile).

**Domain doesn't resolve**
- DNS propagation can take 5-30 minutes with Cloudflare.
- Check `dig uat.positiveness.club` from your laptop.

**Smart App Banner doesn't appear**
- `NEXT_PUBLIC_APP_*_APPLE_ID` env vars are empty (UAT). Set them once apps are
  published to the App Store.

**Plausible shows no data**
- Plausible script is loaded but no events fire.
- Either the domain isn't added to your Plausible account, or events need a manual
  goal setup in Plausible dashboard.
- Add `uat.positiveness.club` as a site in Plausible.

**Auto-deploy doesn't fire after push to main**
- Check GitHub Actions tab for errors.
- Verify secrets are set (not empty).
- Dokploy returns 200 with `null` body when API fails — check Dokploy UI directly.

---

## Quick command reference

```bash
# Push a small change to trigger deploy
cd /path/to/mx.pclub.web
# ... make change ...
git add -A
git commit -m "fix: ..."
git push origin main
# → GitHub Action fires → Dokploy redeploys → uat.positiveness.club updates in ~2 min

# Watch live logs in Dokploy
# (UI only — no CLI access in this setup)
```