import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/seo'
import { describe, expect, it } from 'vitest'

describe('SEO constants', () => {
  it('has a valid SITE_URL', () => {
    expect(SITE_URL).toMatch(/^https?:\/\//)
  })

  it('has a non-empty SITE_NAME and description', () => {
    expect(SITE_NAME).toBeTruthy()
    expect(SITE_NAME.length).toBeGreaterThan(3)
    expect(SITE_DESCRIPTION).toBeTruthy()
    expect(SITE_DESCRIPTION.length).toBeGreaterThan(20)
  })
})

describe('Static data integrity (apps)', () => {
  // Import lazily so we don't accidentally trigger PB at import time
  it('every app has a unique slug', async () => {
    const { apps } = await import('@/lib/data/apps')
    const slugs = apps.map((a) => a.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('every app has a tagline and description', async () => {
    const { apps } = await import('@/lib/data/apps')
    for (const a of apps) {
      expect(a.tagline.length).toBeGreaterThan(10)
      expect(a.description.length).toBeGreaterThan(20)
    }
  })
})

describe('Static data integrity (blog)', () => {
  it('every post has a unique slug', async () => {
    const { blogPosts } = await import('@/lib/data/blog')
    const slugs = blogPosts.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('every post has title + excerpt + cover', async () => {
    const { blogPosts } = await import('@/lib/data/blog')
    for (const p of blogPosts) {
      expect(p.title.length).toBeGreaterThan(10)
      expect(p.excerpt.length).toBeGreaterThan(20)
      expect(p.cover).toMatch(/^\//)
    }
  })
})
