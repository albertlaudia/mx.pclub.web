# Ops Runbook — positiveness.club

> On-call playbook for the positiveness.club marketing platform.
> Last updated 2026-06-29.

## TL;DR

- **Live URL**: https://uat.positiveness.club (UAT) · https://positiveness.club (prod, TBD)
- **Repo**: github.com/albertlaudia/mx.pclub.web
- **Dokploy project**: `PClub UAT` (id `ttw5CWxB9Uu4Kjz3KvK0b`)
- **Dokploy app**: `uat.positiveness.club` (id `TuEvJmGHhY8YVkz1FAdeI`)
- **Dokploy URL**: https://dokploy.scaleupcrm.com
- **PB**: https://pocketbase.scaleupcrm.com (admin via superuser token)
- **DNS / CDN**: Cloudflare (in front of everything)

## Common scenarios

### 1. Site returns 502 Bad Gateway

**Symptom**: `curl https://uat.positiveness.club/` returns `HTTP 502` with body `Bad Gateway`

**Cause**: Traefik (Dokploy's reverse proxy) can't route to the running container.

**Fix**:
1. Open Dokploy UI → project `PClub UAT` → app `uat.positiveness.club`
2. Go to the **Domains** tab
3. For `uat.positiveness.club`: toggle **HTTPS** off, wait 10s, toggle back on
4. Wait 30s. Site should respond with HTTP 200.

**If still 502 after that**:
1. Check the **Deployments** tab — is the latest deployment `running` or `error`?
2. If `error`: check the deployment log (click the deployment → "Logs")
3. If `running`: the container is up but Traefik is confused. Try:
   - In **Settings → Traefik** (Dokploy level): "Reload" if available
   - SSH to host: `docker kill --signal=HUP $(docker ps -q --filter name=traefik)`
4. **Last resort**: recreate the domain in the Domains tab (delete + re-add)

### 2. Site returns 404 on a known route

**Symptom**: `curl https://uat.positiveness.club/blog/foo` returns 404 but the post exists in PB.

**Cause**: Static pages are pre-rendered at build time. PB was updated but the site hasn't rebuilt.

**Fix**:
1. Trigger a rebuild:
   - Option A: Push a commit to `main` (any commit, even empty)
   - Option B: GitHub → Actions → "Deploy" → "Run workflow"
   - Option C: 6-hourly cron will catch it automatically
2. Wait ~3-5 min for Railpack build to finish
3. Test the URL again

### 3. Lead form submissions are failing

**Symptom**: User fills out a form, sees an error, no record in `pc_leads`.

**Cause**: `/api/leads` failing on PB write, Resend email send, or both.

**Debug**:
1. Test the endpoint directly:
   ```bash
   curl -X POST https://uat.positiveness.club/api/leads \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","source":"debug"}'
   ```
2. Check the response — 200 means it worked.
3. If 503: PB is down. Check `https://pocketbase.scaleupcrm.com/api/health`
4. If 502: Traefik issue (see scenario 1)
5. If 400: validation failed (Zod schema). The response body will say which field.

**Check the log**:
- PB admin UI → Logs → look for `pc_leads` create errors
- Server log (via Dokploy UI): `app-program-multi-byte-interface-61kgyf-...log`

### 4. Email confirmations are not sending

**Symptom**: Lead lands in PB but no email arrives.

**Cause**: `RESEND_API_KEY` env var not set, or Resend API is down.

**Fix**:
1. Check env: Dokploy → app → "Environment" tab → look for `RESEND_API_KEY`
2. If missing: get a key from https://resend.com/api-keys and add it
3. Redeploy (env changes don't auto-trigger; push a commit or manual trigger)
4. Test by submitting a form to your own email

### 5. PocketBase is down

**Symptom**: All PB queries fail; site shows fallback content (static).

**Cause**: PB container crashed, or VPS has issues.

**Fix**:
1. Check PB health: `curl https://pocketbase.scaleupcrm.com/api/health`
2. If 502/timeout: PB is down. SSH to host: `docker ps | grep pocketbase`
3. If PB container is down: `docker logs <container-id>`
4. If VPS is up but PB is down, restart: `docker restart <container-id>`
5. **The site stays functional** thanks to the static-data fallback in `lib/data/index.ts`. Verify by checking the home page.

### 6. SSL cert expired

**Symptom**: `curl https://positiveness.club/` returns `SSL certificate problem: certificate has expired`

**Cause**: Let's Encrypt cert didn't auto-renew.

**Fix**:
1. For Dokploy-managed certs: Dokploy → project → Domains → "Renew Certificate"
2. For Cloudflare-managed: Cloudflare dashboard → SSL → Edge Certificates → check expiry
3. For a fresh cert: delete the domain and re-add it (Dokploy will re-issue)

### 7. Deployment stuck at "running" forever

**Symptom**: Latest deployment shows `running` status for >15 min.

**Cause**: The deploy log is a runaway process or stuck on a long build step.

**Fix**:
1. Click into the deployment → "Stop"
2. If stop doesn't work: SSH to host, find the container:
   ```bash
   docker ps | grep app-program-multi-byte-interface
   docker kill <container-id>
   ```
3. Trigger a fresh redeploy via GitHub Action or Dokploy UI

### 8. SEO: sitemap.xml is missing routes

**Symptom**: `curl https://uat.positiveness.club/sitemap.xml` doesn't list a blog post that exists in PB.

**Cause**: Sitemap is built at request time from PB. The PB query failed OR the post's `status` isn't `published`.

**Debug**:
1. Query PB directly: `curl https://pocketbase.scaleupcrm.com/api/collections/pc_blog_posts/records?perPage=50`
2. Check that the post has `status: "published"` and `published_at` is set
3. If yes, check the sitemap query — `lib/data/index.ts:getPosts()` filters by `status = 'published'`

## Deploy checklist (manual cutover)

When promoting UAT to production for the first time:

- [ ] Provision a new Dokploy project: `PClub Production` (id will be different)
- [ ] Provision a new app: `positiveness.club` (production domain)
- [ ] Add DNS records (A or CNAME) pointing the apex `positiveness.club` to the Dokploy server
- [ ] Add all env vars: same as UAT but with `NEXT_PUBLIC_SITE_URL=https://positiveness.club`
- [ ] Add a new GitHub environment: `production`
- [ ] Update `.github/workflows/deploy.yml` to also trigger the production app
- [ ] Cut over DNS with low TTL 24h before
- [ ] After cutover: monitor Plausible + Dokploy logs for 48h
- [ ] Update PB superuser creds: rotate to production-only identity

## Backup

PB has a daily backup. To restore from backup:

1. SSH to PB host
2. `docker exec -it <pocketbase-container> /bin/sh`
3. Restore from `/pb_data/` backups (rotation: 7 daily, 4 weekly, 6 monthly)
4. Or: download a backup via the PB admin UI → Settings → Backups

For disaster recovery: the seed script (`scripts/seed-pocketbase.ts`) can rebuild the entire pc_* collection schema + content from scratch in ~30 seconds. Use this if PB is wiped clean.

## Contacts

- **Domain/DNS**: Cloudflare account `albertlaudia@gmail.com` (assumed)
- **Dokploy host**: VPS 84.247.174.141 (root via SSH key)
- **GitHub**: albertlaudia
- **Resend**: https://resend.com (account under albert@positiveness.club)
- **Plausible**: https://plausible.io (shared team account)

## Log locations

| What | Where |
|---|---|
| App container stdout | Dokploy UI → deployment → "Logs" tab |
| PB access log | SSH to PB host → `/pb_data/auxiliary.log` |
| PB audit log | PB admin UI → Logs |
| Traefik access log | SSH to Dokploy host → `docker logs $(docker ps -q --filter name=traefik)` |
| GitHub Actions run log | github.com/albertlaudia/mx.pclub.web/actions |

## When to escalate

Escalate to the user (Albert) when:

- Site has been 502 for >15 min after you've tried scenario 1
- PB has been down for >30 min
- Data loss suspected (check PB `audit_log` and look for `DELETE` events)
- Security incident suspected (unauthorized PB writes, unusual deploys, suspicious redirects)
- An app store submission is at risk due to a marketing site issue
