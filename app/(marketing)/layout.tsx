/**
 * Marketing layout — wraps every page in the (marketing) route group
 * with the site header, a flex-1 main element, and the site footer.
 *
 * Pages in this group:
 *   - /                            (home)
 *   - /apps, /apps/[slug],         (per-app landing + privacy + support)
 *     /apps/[slug]/privacy,
 *     /apps/[slug]/support
 *   - /blog, /blog/[slug],         (blog list, posts, search, topic)
 *     /blog/search,
 *     /blog/topic/[topic]
 *   - /about, /manifesto,
 *     /press, /privacy, /terms,
 *     /unsubscribe
 *   - /feed.xml                    (RSS + Atom)
 *   - /r/[code]                    (short-URL redirects)
 *
 * Pages in (legal) do NOT use this layout — they render as standalone
 * documents with no header and no footer.
 */
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  )
}
