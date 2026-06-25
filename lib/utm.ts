/**
 * UTM injection for SmartCTA.
 * Every CTA that goes through SmartCTA gets these params automatically.
 */

export interface UtmParams {
  source: string
  medium: string
  campaign: string
  content?: string
  term?: string
}

export const SITE_UTM = {
  source: 'positiveness.club',
  medium: 'cta',
} as const

export function buildStoreUrl(base: string, params: Partial<UtmParams>): string {
  const url = new URL(base)
  for (const [k, v] of Object.entries(params)) {
    if (v) url.searchParams.set(`utm_${k}`, v)
  }
  return url.toString()
}

export function buildUtmForCta(args: {
  app: string
  placement: string
  variant?: string
}): UtmParams {
  return {
    source: SITE_UTM.source,
    medium: SITE_UTM.medium,
    campaign: args.app,
    content: `${args.placement}${args.variant ? `-${args.variant}` : ''}`,
  }
}