# Deployment guide — positiveness.club

## Status: 2026-06-25 — partial (source config must be set in Dokploy UI)

The Dokploy REST API works for project/app/env/domain setup, but it
**fails on `application.saveGitProvider`** with a Postgres-level error —
a known Dokploy bug where the schema validation requires fields that
can't be supplied together. Source config (repo + branch + buildPath)
must be set in the Dokploy UI before the first deploy.

## Target

- **Project**: `PClub UAT` (Dokploy) — `projectId: ttw5CWxB9Uu4Kjz3KvK0b`
- **App**: `uat.positiveness.club` — `applicationId: TuEvJmGHhY8YVkz1FAdeI`
- **Domain**: `uat.positiveness.club` — `domainId: a9T4AuaTU6alTj1d_vxL8` (HTTPS via Let's Encrypt)
- **Build type**: `railpack` (auto-detected, no Dockerfile needed)
- **Path in repo**: `mx.pclub.web/`
- **Production target (later)**: `positiveness.club`

---

## What's already done (via API)

| Step | Status |
|---|---|
| Create `PClub UAT` project | ✅ |
| Create `production` environment inside it | ✅ |
| Create `uat.positiveness.club` application | ✅ |
| Set build type to `railpack` (auto-detect) | ✅ |
| Set env vars (`NEXT_PUBLIC_SITE_URL`, Plausible, NODE_ENV, etc.) | ✅ |
| Bind domain `uat.positiveness.club` with HTTPS | ✅ |

---

## What you need to do in Dokploy UI (~2 minutes)

### 1. Set the GitHub source

Open the `uat.positiveness.club` app in Dokploy → **Source** tab:

- **Source**: GitHub
- **Repository**: `albertlaudia/mx.pclub.web`
- **Branch**: `main`
- **Build path**: `mx.pclub.web`
- **GitHub App**: pick the existing `dokploy-gop-2026-05-30-...` (it's already installed for the org)

### 2. Set the port

**Advanced** tab → **Ports**:

- Container port: `3000`
- Target port: `3000`

### 3. Click Deploy

**Deployments** tab → **Deploy** button.

Railpack will detect the Next.js app from `package.json` + `next.config.mjs` and build it. No Dockerfile invocation needed.

### 4. Verify

- `https://uat.positiveness.club` should load with the brand hub
- `https://uat.positiveness.club/apps/1perc` should show the 1perc landing
- `https://uat.positiveness.club/blog` should show the blog index
- `https://uat.positiveness.club/sitemap.xml` should return valid XML

### 5. Add Cloudflare DNS record

In Cloudflare for the `positiveness.club` zone:

```
Type: CNAME
Name: uat
Content: <Dokploy LB domain — visible in Dokploy Domains tab>
Proxy: Proxied
```

---

## After first deploy works

### Add GitHub secrets for auto-deploy

In `https://github.com/albertlaudia/mx.pclub.web/settings/secrets/actions`:

| Secret | Value |
|---|---|
| `DOKPLOY_URL` | `https://dokploy.scaleupcrm.com` |
| `DOKPLOY_API_KEY` | your Dokploy API key |
| `DOKPLOY_APP_ID` | `TuEvJmGHhY8YVkz1FAdeI` (already known) |
| `SITE_URL` | `https://uat.positiveness.club` (for the HTTP check) |

After secrets are set, push to `main` and the GitHub Action at
`.github/workflows/deploy.yml` will auto-trigger a redeploy.

### Deploy triggers (3 ways)

The `deploy.yml` workflow fires on:

1. **`push` to `main`** — every commit auto-deploys
2. **`workflow_dispatch`** — manual trigger from the Actions tab (with a reason field for logs)
3. **`schedule: 0 */6 * * *`** — every 6 hours (00:00, 06:00, 12:00, 18:00 UTC). Periodic resync so Dokploy always has the latest `main`, even without a push.

Each run also verifies the build succeeded (`applicationStatus != 'error'`)
and that the site returns HTTP 200 after a 30s warmup.

---

## Going to production (positiveness.club)

When UAT is verified, duplicate this setup:

1. Create a second app in the same `PClub UAT` project (or a new `PClub Production` project — your call)
2. Bind `positiveness.club` (apex) + `www.positiveness.club` with HTTPS
3. Cloudflare DNS:
   - `positiveness.club` → A or CNAME to Dokploy (Proxied)
   - `www.positiveness.club` → CNAME to apex (Proxied)
4. Update env: `NEXT_PUBLIC_SITE_URL=https://positiveness.club`
5. Add `RESEND_API_KEY` for live email
6. Add PocketBase production URL once ready
7. Submit `sitemap.xml` to Google Search Console

---

## Resources created (for reference)

```
projectId:      ttw5CWxB9Uu4Kjz3KvK0b   (PClub UAT)
environmentId:  C52n3GhmIpY0EJx3RwGoH   (production)
applicationId:  TuEvJmGHhY8YVkz1FAdeI   (uat.positiveness.club)
domainId:       a9T4AuaTU6alTj1d_vxL8   (uat.positiveness.club)
```

---

## Why not full Docker deploy?

The repo has a `Dockerfile` at the root of `mx.pclub.web/` ready for
`buildType: dockerfile` mode. We chose Railpack instead because:

1. Railpack auto-detects Next.js from `package.json` — no Dockerfile maintenance
2. Same pattern as your other working apps (1perc, HEAL, etc. all use Railpack)
3. Faster builds (skip Docker layer overhead)
4. Easier to debug — direct npm/pnpm output

If you ever want to switch back to Dockerfile mode:
- In Dokploy UI → Build type → Docker
- Build path: `mx.pclub.web`
- Dockerfile path: `Dockerfile`

---

## Quick command reference

```bash
# After UI setup, push to trigger auto-deploy (when GitHub secrets are set)
cd /path/to/mx.pclub.web
git add -A && git commit -m "..." && git push origin main
# → GitHub Action fires → Dokploy redeploys → uat.positiveness.club updates

# Manual redeploy via API (from any terminal)
curl -X POST "https://dokploy.scaleupcrm.com/api/trpc/application.deploy" \
  -H "x-api-key: $DOKPLOY_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"json":{"applicationId":"TuEvJmGHhY8YVkz1FAdeI"}}'
```

---

## Troubleshooting

**Deploy returns `null` body**
- Source not configured in UI yet. See step 1.

**502 Bad Gateway after deploy**
- Check container logs in Dokploy
- Most common: missing env vars or wrong port (must be 3000)
- Verify with: `docker ps` on host (if SSH available)

**Domain doesn't resolve**
- DNS propagation takes 5-30 minutes with Cloudflare Proxied
- Check `dig uat.positiveness.club` from your laptop

**Build fails — "no package.json found"**
- Build path is wrong. Should be `mx.pclub.web` (not `/` or `.`)

**Build fails — "Cannot find module"**
- `npm install` may have hit a network issue. Re-trigger the deploy.

**Auto-deploy doesn't fire**
- GitHub secrets not set, or empty. Check
  `https://github.com/albertlaudia/mx.pclub.web/settings/secrets/actions`
