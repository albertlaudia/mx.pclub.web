#!/usr/bin/env tsx
/**
 * Seed a few useful short redirect codes into pc_redirects.
 *
 * Idempotent: upserts by code.
 *
 * Usage:
 *   PB_URL=... PB_IDENTITY=... PB_PASSWORD=... npx tsx scripts/seed-redirects.ts
 */

const PB_URL = process.env.PB_URL ?? process.env.NEXT_PUBLIC_PB_URL ?? ''
const IDENTITY = process.env.PB_IDENTITY ?? ''
const PASSWORD = process.env.PB_PASSWORD ?? ''
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://uat.positiveness.club'

if (!PB_URL || !IDENTITY || !PASSWORD) {
  console.error('Missing required env: PB_URL, PB_IDENTITY, PB_PASSWORD')
  process.exit(1)
}

let token: string | null = null
async function auth(): Promise<string> {
  if (token) return token
  const res = await fetch(`${PB_URL}/api/collections/_superusers/auth-with-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identity: IDENTITY, password: PASSWORD }),
  })
  if (!res.ok) throw new Error(`auth failed: ${res.status} ${await res.text()}`)
  const json = (await res.json()) as { token: string }
  token = json.token
  return token
}

async function upsert(
  code: string,
  targetUrl: string,
  appSlug = '',
  description = '',
): Promise<string> {
  const t = await auth()
  // Check if exists
  const checkRes = await fetch(
    `${PB_URL}/api/collections/pc_redirects/records?filter=${encodeURIComponent(`code = '${code}'`)}&perPage=1`,
    { headers: { Authorization: t } },
  )
  const checkJson = (await checkRes.json()) as { items: { id: string }[] }
  const existing = checkJson.items[0]

  const payload = {
    code,
    target_url: targetUrl,
    app_slug: appSlug,
    description,
    active: true,
  }

  if (existing) {
    const r = await fetch(`${PB_URL}/api/collections/pc_redirects/records/${existing.id}`, {
      method: 'PATCH',
      headers: { Authorization: t, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!r.ok) throw new Error(`update ${code}: ${r.status} ${(await r.text()).slice(0, 200)}`)
    return 'updated'
  }

  const r = await fetch(`${PB_URL}/api/collections/pc_redirects/records`, {
    method: 'POST',
    headers: { Authorization: t, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!r.ok) throw new Error(`create ${code}: ${r.status} ${(await r.text()).slice(0, 200)}`)
  return 'created'
}

const REDIRECTS: Array<[string, string, string, string]> = [
  // [code, target, app_slug, description]
  [
    '1perc-ios',
    'https://apps.apple.com/app/id-coming-soon',
    '1perc',
    '1perc iOS App Store — placeholder until approved',
  ],
  [
    '1perc-android',
    'https://play.google.com/store/apps/details?id=com.pclub.theoneperc',
    '1perc',
    '1perc Play Store',
  ],
  ['heal-ios', 'https://apps.apple.com/app/id-coming-soon', 'heal', 'HEAL iOS — placeholder'],
  [
    'heal-android',
    'https://play.google.com/store/apps/details?id=com.pclub.heal',
    'heal',
    'HEAL Play Store — placeholder',
  ],
  ['riseup-ios', 'https://apps.apple.com/app/id-coming-soon', 'riseup', 'Riseup iOS — placeholder'],
  [
    'riseup-android',
    'https://play.google.com/store/apps/details?id=com.pclub.riseup',
    'riseup',
    'Riseup Play Store — placeholder',
  ],
  [
    'resonate-ios',
    'https://apps.apple.com/app/id-coming-soon',
    'resonate',
    'Resonate iOS — placeholder',
  ],
  [
    'resonate-android',
    'https://play.google.com/store/apps/details?id=com.solverwatch.guitartuner',
    'resonate',
    'Resonate Play Store',
  ],
  [
    'pack-1perc',
    `${SITE_URL}/?magnet=1perc-7day-pack`,
    '1perc',
    'Free 1perc 7-day book summary pack',
  ],
  ['pack-heal', `${SITE_URL}/?magnet=heal-3min-reset`, 'heal', 'Free HEAL 3-min reset audio'],
  [
    'pack-riseup',
    `${SITE_URL}/?magnet=riseup-7day-template`,
    'riseup',
    'Free Riseup 7-day morning template',
  ],
  ['blog', `${SITE_URL}/blog`, '', 'All blog posts'],
  ['apps', `${SITE_URL}/apps`, '', 'All apps'],
  ['privacy', `${SITE_URL}/privacy`, '', 'Platform privacy policy'],
  ['press', `${SITE_URL}/press`, '', 'Press kit'],
  ['contact', 'mailto:hello@positiveness.club', '', 'Contact email'],
]

async function main() {
  console.log('→ Seeding redirects…')
  for (const [code, target, app, desc] of REDIRECTS) {
    try {
      const action = await upsert(code, target, app, desc)
      console.log(`  ${action === 'created' ? '+' : '~'} ${code} → ${target.slice(0, 50)}…`)
    } catch (err) {
      console.error(`  ✗ ${code}: ${(err as Error).message}`)
    }
  }
  console.log(`\n✓ Done. ${REDIRECTS.length} redirects ready.`)
}

main().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
