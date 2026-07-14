/**
 * PlainLegalPage — shared layout for all 12 legal documents.
 *
 * Intentionally unstyled compared to the marketing site:
 *   - No hero header, no gradient, no "chip" badges
 *   - No brand-color accent borders or callout boxes
 *   - Simple h1, simple borders (slate/grey), underline-only links
 *   - Print/PDF-friendly: works without JS, no viewport-dependent layout
 *
 * Used by:
 *   - /[app]/terms and /[app]/policy (canonical URLs for all 4 apps)
 *   - /[app]/tnc and /[app]/policies (legacy aliases for heal + 1perc)
 *
 * Each page passes its own content via `children` (the article body),
 * plus a SECTIONS array (rendered as TOC) and a few header strings.
 *
 * The standard "Not legal advice" footer is rendered automatically so
 * every legal page carries the same disclosure without each page
 * duplicating the boilerplate.
 */

import type { ReactNode } from 'react'

interface Section {
  id: string
  title: string
}

interface OtherDoc {
  /** Short label, e.g. "HEAL — Privacy Policy" */
  label: string
  /** URL, e.g. "/heal/policy" */
  href: string
}

interface PlainLegalPageProps {
  /** Full page title, e.g. "HEAL — Terms and Conditions" */
  documentTitle: string
  /** Version string, e.g. "v1.0" */
  version: string
  /** ISO date string, e.g. "2026-07-13" */
  lastUpdated: string
  /** Optional cross-link to the complementary document (terms ↔ policy) */
  otherDoc?: OtherDoc
  /** TOC entries; pass an empty array to skip the TOC */
  sections: Section[]
  /** The article body (h2/h3/p/ul/etc. as JSX) */
  children: ReactNode
}

export function PlainLegalPage({
  documentTitle,
  version,
  lastUpdated,
  otherDoc,
  sections,
  children,
}: PlainLegalPageProps) {
  return (
    <main className="min-h-[60vh]">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 md:py-14">
        <header className="mb-8 pb-6 border-b border-line">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
            {documentTitle}
          </h1>
          <p className="mt-2 text-sm text-mute">
            Version <span className="font-mono">{version}</span> · Last updated{' '}
            <time dateTime={lastUpdated}>{lastUpdated}</time>
          </p>
          {otherDoc ? (
            <p className="mt-2 text-sm text-mute">
              Looking for the {otherDoc.label}?{' '}
              <a href={otherDoc.href} className="text-ink underline hover:no-underline">
                See {otherDoc.label}
              </a>
              .
            </p>
          ) : null}
        </header>

        {sections.length > 0 ? (
          <nav aria-label="Table of contents" className="mb-10 p-5 border border-line rounded-lg">
            <p className="font-semibold text-sm mb-3 text-ink">Contents</p>
            <ol className="text-sm space-y-1 text-mute columns-1 sm:columns-2 gap-x-6">
              {sections.map((s) => (
                <li key={s.id} className="break-inside-avoid">
                  <a href={`#${s.id}`} className="text-mute hover:text-ink hover:underline">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-headings:font-semibold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3 prose-h3:text-base prose-h3:mt-5 prose-h3:mb-2 prose-a:text-ink prose-a:no-underline hover:prose-a:underline prose-strong:text-ink">
          {children}
        </div>

        <hr className="my-12 border-line" />

        <footer className="text-sm text-mute space-y-3">
          <p>
            <strong className="text-ink">Document control:</strong> Version {version} · Effective{' '}
            {lastUpdated} · Owner: positiveness.club Pte Ltd.
          </p>
          <p>
            <strong className="text-ink">Not legal advice.</strong> This document was drafted by the
            Company as a starting template. It has <strong>not</strong> been reviewed by licensed
            counsel. Before shipping the Service to Users in any jurisdiction, the Company must have
            a licensed attorney in the relevant jurisdiction review and approve this document.
          </p>
          <p>
            Questions or comments? Email{' '}
            <a href="mailto:legal@positiveness.club" className="text-ink underline">
              legal@positiveness.club
            </a>
            .
          </p>
        </footer>
      </article>
    </main>
  )
}
