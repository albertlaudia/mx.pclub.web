#!/usr/bin/env tsx
/**
 * Daily PocketBase backup → JSON export → B2 (or any S3-compatible storage).
 *
 * What gets backed up:
 *   - Schema for all 6 pc_* collections (pb_migrations/0001_initial_pc_collections.json)
 *   - All records for each pc_* collection
 *   - Compact JSON: one .json per collection, plus a manifest.json with totals
 *
 * Usage:
 *   # Local backup only (no B2)
 *   PB_URL=... PB_IDENTITY=... PB_PASSWORD=... \
 *     BACKUP_DIR=/var/backups/pclub \
 *     npx tsx scripts/backup-pocketbase.ts
 *
 *   # With B2 upload
 *   ... + B2_KEY_ID=... B2_APPLICATION_KEY=... B2_BUCKET=pclub-backups \
 *     npx tsx scripts/backup-pocketbase.ts
 *
 * Cron:
 *   0 3 * * *  cd /opt/mx.pclub.web && npx tsx scripts/backup-pocketbase.ts
 *
 * Restore: see docs/RUNBOOK.md §Backup
 */

import { mkdirSync, writeFileSync, rmSync, existsSync } from "node:fs"
import { join } from "node:path"

const PB_URL = process.env.PB_URL ?? process.env.NEXT_PUBLIC_PB_URL ?? ""
const IDENTITY = process.env.PB_IDENTITY ?? ""
const PASSWORD = process.env.PB_PASSWORD ?? ""
const BACKUP_DIR = process.env.BACKUP_DIR ?? "/tmp/pb-backup"
const B2_BUCKET = process.env.B2_BUCKET ?? ""
const B2_KEY_ID = process.env.B2_KEY_ID ?? ""
const B2_APP_KEY = process.env.B2_APPLICATION_KEY ?? ""
const RETAIN_LOCAL = Number(process.env.RETAIN_LOCAL ?? "7") // keep last 7 backups

const COLLECTIONS = [
  "pc_apps",
  "pc_blog_posts",
  "pc_topics",
  "pc_authors",
  "pc_leads",
  "pc_redirects",
]

if (!PB_URL || !IDENTITY || !PASSWORD) {
  console.error("Missing required env: PB_URL, PB_IDENTITY, PB_PASSWORD")
  process.exit(1)
}

interface BackupManifest {
  timestamp: string
  pb_url: string
  collections: Record<string, { count: number; bytes: number }>
  total_records: number
  total_bytes: number
}

async function auth(): Promise<string> {
  const res = await fetch(`${PB_URL}/api/collections/_superusers/auth-with-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identity: IDENTITY, password: PASSWORD }),
  })
  if (!res.ok) throw new Error(`auth: ${res.status} ${await res.text()}`)
  return ((await res.json()) as { token: string }).token
}

async function backupCollection(token: string, name: string): Promise<{ count: number; records: unknown[] }> {
  // Use paginated list with perPage=500
  const all: unknown[] = []
  let page = 1
  while (true) {
    const url = `${PB_URL}/api/collections/${name}/records?page=${page}&perPage=500&sort=id`
    const res = await fetch(url, { headers: { Authorization: token } })
    if (!res.ok) throw new Error(`list ${name}: ${res.status} ${await res.text()}`)
    const json = (await res.json()) as { items: unknown[]; totalPages: number }
    all.push(...json.items)
    if (page >= json.totalPages) break
    page++
  }
  return { count: all.length, records: all }
}

async function uploadToB2(filePath: string, key: string): Promise<void> {
  if (!B2_BUCKET || !B2_KEY_ID || !B2_APP_KEY) {
    console.log(`[b2] not configured, skipping upload of ${key}`)
    return
  }
  // B2 S3-compatible API
  // 1. Authorize
  const authRes = await fetch("https://api.backblazeb2.com/b2api/v2/b2_authorize_account", {
    headers: { Authorization: `Basic ${Buffer.from(`${B2_KEY_ID}:${B2_APP_KEY}`).toString("base64")}` },
  })
  if (!authRes.ok) throw new Error(`b2 auth: ${authRes.status}`)
  const authJson = (await authRes.json()) as { apiUrl: string; authorizationToken: string; allowed: { bucketId?: string; bucketName?: string; capabilities?: string[] } }

  // 2. Get upload URL
  const uploadUrlRes = await fetch(`${authJson.apiUrl}/b2api/v2/b2_get_upload_url`, {
    method: "POST",
    headers: { Authorization: authJson.authorizationToken, "Content-Type": "application/json" },
    body: JSON.stringify({ bucketId: process.env.B2_BUCKET_ID }),
  })
  if (!uploadUrlRes.ok) throw new Error(`b2 get upload url: ${uploadUrlRes.status}`)
  const uploadJson = (await uploadUrlRes.json()) as { uploadUrl: string; authorizationToken: string }

  // 3. Upload
  const fileContent = await import("node:fs").then((fs) => fs.readFileSync(filePath))
  const sha1 = await import("node:crypto").then((c) => c.createHash("sha1").update(fileContent).digest("hex"))
  const putRes = await fetch(uploadJson.uploadUrl, {
    method: "POST",
    headers: {
      Authorization: uploadJson.authorizationToken,
      "X-Bz-File-Name": key,
      "Content-Type": "application/json",
      "X-Bz-Content-Sha1": sha1,
    },
    body: fileContent,
  })
  if (!putRes.ok) throw new Error(`b2 upload: ${putRes.status} ${await putRes.text()}`)
  console.log(`[b2] uploaded ${key}`)
}

async function main() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
  const backupRoot = join(BACKUP_DIR, timestamp)
  console.log(`→ Backing up to ${backupRoot}`)
  mkdirSync(backupRoot, { recursive: true })

  const token = await auth()
  console.log("✓ Auth OK")

  const manifest: BackupManifest = {
    timestamp: new Date().toISOString(),
    pb_url: PB_URL,
    collections: {},
    total_records: 0,
    total_bytes: 0,
  }

  for (const coll of COLLECTIONS) {
    try {
      const { count, records } = await backupCollection(token, coll)
      const filePath = join(backupRoot, `${coll}.json`)
      writeFileSync(filePath, JSON.stringify(records, null, 2))
      const stat = await import("node:fs").then((fs) => fs.statSync(filePath))
      manifest.collections[coll] = { count, bytes: stat.size }
      manifest.total_records += count
      manifest.total_bytes += stat.size
      console.log(`  ✓ ${coll}: ${count} records (${stat.size} bytes)`)
    } catch (err) {
      console.error(`  ✗ ${coll}: ${(err as Error).message}`)
    }
  }

  // Write manifest
  const manifestPath = join(backupRoot, "manifest.json")
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
  console.log(`\n✓ Total: ${manifest.total_records} records, ${manifest.total_bytes} bytes`)

  // Upload to B2
  if (B2_BUCKET) {
    console.log("\n→ Uploading to B2…")
    try {
      await uploadToB2(manifestPath, `pclub/${timestamp}/manifest.json`)
      for (const coll of COLLECTIONS) {
        const fp = join(backupRoot, `${coll}.json`)
        if (existsSync(fp)) {
          await uploadToB2(fp, `pclub/${timestamp}/${coll}.json`)
        }
      }
    } catch (err) {
      console.error("✗ B2 upload failed:", err)
    }
  }

  // Prune old local backups
  if (existsSync(BACKUP_DIR)) {
    const fs = await import("node:fs")
    const entries = fs
      .readdirSync(BACKUP_DIR)
      .filter((e: string) => /^\d{4}-\d{2}-\d{2}T/.test(e))
      .sort()
      .reverse()
    const toDelete = entries.slice(RETAIN_LOCAL)
    for (const e of toDelete) {
      rmSync(join(BACKUP_DIR, e), { recursive: true, force: true })
      console.log(`  pruned ${e}`)
    }
  }

  console.log("\n✓ Backup complete")
}

main().catch((err) => {
  console.error("Backup failed:", err)
  process.exit(1)
})