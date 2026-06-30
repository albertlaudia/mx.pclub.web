import { describe, expect, it } from 'vitest'
import { z } from 'zod'

// Mirror of the schema in app/api/leads/route.ts. Re-defined here for test isolation.
const LeadSchema = z.object({
  email: z.string().email(),
  source: z.string().min(1).max(80),
  app: z.string().max(80).optional(),
  magnet: z.string().max(80).optional(),
  message: z.string().max(2000).optional(),
  page: z.string().max(300).optional(),
  locale: z.string().max(10).optional(),
  utm_source: z.string().max(80).optional(),
  utm_medium: z.string().max(80).optional(),
  utm_campaign: z.string().max(80).optional(),
})

describe('/api/leads — input validation', () => {
  it('accepts a complete payload', () => {
    const r = LeadSchema.safeParse({
      email: 'test@example.com',
      source: 'homepage-hero',
      app: '1perc',
      magnet: '1perc-7day-pack',
      utm_source: 'twitter',
    })
    expect(r.success).toBe(true)
  })

  it('rejects an invalid email', () => {
    const r = LeadSchema.safeParse({
      email: 'not-an-email',
      source: 'homepage',
    })
    expect(r.success).toBe(false)
  })

  it('rejects a missing source', () => {
    const r = LeadSchema.safeParse({ email: 'test@example.com' })
    expect(r.success).toBe(false)
  })

  it('rejects a too-long source', () => {
    const r = LeadSchema.safeParse({
      email: 'test@example.com',
      source: 'x'.repeat(100),
    })
    expect(r.success).toBe(false)
  })

  it('accepts minimal payload (just email + source)', () => {
    const r = LeadSchema.safeParse({
      email: 'test@example.com',
      source: 'x',
    })
    expect(r.success).toBe(true)
  })
})
