/**
 * Minimal layout for the 12 legal pages (canonical + legacy aliases).
 *
 * This route group is the (legal) directory in app/(legal). Route groups
 * in Next.js are wrapped in parens and do NOT contribute to the URL —
 * so app/(legal)/heal/terms/page.tsx still serves at /heal/terms.
 *
 * Why a separate layout:
 *   - The root app/layout.tsx wraps every page in <SiteHeader> and
 *     <SiteFooter> (the marketing site chrome).
 *   - Legal pages should render as standalone documents, with no marketing
 *     chrome, no nav, no footer with app links.
 *   - This layout just renders {children} inside <body>, so the page
 *     becomes the entire HTML document.
 *
 * The body and html tags still come from the root layout — Next.js
 * composes nested layouts, it doesn't replace them. So fonts, metadata,
 * manifest, RSS link, and Plausible still load.
 */
export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
