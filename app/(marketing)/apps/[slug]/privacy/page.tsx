import { getApp, getApps } from '@/lib/data'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const apps = await getApps()
  return apps.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const app = await getApp(slug)
  if (!app) return {}
  return {
    title: `${app.name} — Privacy`,
    description: `How ${app.name} handles your data.`,
  }
}

export default async function AppPrivacyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const app = await getApp(slug)
  if (!app) notFound()

  // All 4 apps have dedicated legal pages at /<slug>/terms and /<slug>/policy
  // (cleaner URL convention; /tnc and /policies remain as legacy aliases).
  // Per-app privacy pages link to the canonical routes that App Store / Play
  // Store metadata point to.
  const legalSlugs = ['heal', '1perc', 'riseup', 'resonate'] as const
  const hasDedicatedLegal = (legalSlugs as readonly string[]).includes(app.slug)
  const legalSlug = hasDedicatedLegal ? app.slug : null
  const legalLabel = app.name

  // Short, app-specific bullet that goes after the link
  const privacyBlurb =
    app.slug === 'heal'
      ? 'local-first, no analytics, no tracking'
      : app.slug === '1perc'
        ? 'local-first, no analytics, IP/copyright handling'
        : app.slug === 'riseup'
          ? 'local-first, no analytics, no tracking'
          : 'local-first, mic on-device only, no analytics'

  const termsBlurb =
    app.slug === 'heal'
      ? 'subscription, medical disclaimer, arbitration'
      : app.slug === '1perc'
        ? 'subscription, fair-use, voice talent, arbitration'
        : app.slug === 'riseup'
          ? 'subscription, no-medical-advice, arbitration'
          : 'subscription, music-content licence, mic-data handling, arbitration'

  return (
    <article className="container-narrow py-16 md:py-24">
      <Link
        href={`/apps/${app.slug}`}
        className="text-sm text-mute hover:text-ink mb-6 inline-flex"
      >
        ← Back to {app.name}
      </Link>
      <h1 className="text-display-md font-bold tracking-tight mb-4">{app.name} — Privacy</h1>
      <p className="text-mute text-lg mb-12">
        How {app.name} handles your data. Short version: as little as possible.
      </p>

      {hasDedicatedLegal && legalSlug && (
        <div className="card border-coral/40 bg-coral/5 mb-12">
          <p className="text-base font-semibold mb-3 text-coral">Full legal documents</p>
          <p className="text-mute text-sm mb-4">
            The following pages are the legally binding documents referenced in {app.name}&rsquo;s
            app-store metadata and inside the app itself.
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href={`/${legalSlug}/policy`} className="text-coral underline font-medium">
                {legalLabel} — Privacy Policy
              </Link>{' '}
              <span className="text-mute">({privacyBlurb})</span>
            </li>
            <li>
              <Link href={`/${legalSlug}/terms`} className="text-coral underline font-medium">
                {legalLabel} — Terms and Conditions
              </Link>{' '}
              <span className="text-mute">({termsBlurb})</span>
            </li>
          </ul>
        </div>
      )}

      <div className="prose max-w-none text-mute leading-relaxed space-y-6">
        <p>
          <strong className="text-ink">No analytics.</strong> {app.name} does not include Google
          Analytics, Facebook Pixel, Mixpanel, Amplitude, or any third-party tracking SDK.
        </p>
        <p>
          <strong className="text-ink">No crash reporting.</strong> We don't ship Sentry, Bugsnag,
          or any equivalent. If {app.name} crashes, you won't be the one telling us.
        </p>
        <p>
          <strong className="text-ink">No advertising.</strong> {app.name} contains no ad network
          SDKs. No ad IDs. No remarketing.
        </p>
        <p>
          <strong className="text-ink">Local-first.</strong> Your data stays on your device unless
          you explicitly choose to sync it. There is no account required.
        </p>
        <p>
          <strong className="text-ink">Open source audit.</strong> See the {app.name} repository for
          the full source.
        </p>

        <p className="text-sm text-mute italic pt-8 border-t border-line">
          This is the per-app privacy policy for {app.name}. For the platform-level policy covering
          positiveness.club and any future cross-app features, see{' '}
          <Link href="/privacy" className="text-coral underline">
            /privacy
          </Link>
          .
        </p>
      </div>
    </article>
  )
}
