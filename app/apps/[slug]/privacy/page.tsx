import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getApps, getApp } from '@/lib/data'

export async function generateStaticParams() {
  const apps = await getApps()
  return apps.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const app = await getApp(slug)
  if (!app) return {}
  return {
    title: `${app.name} — Privacy`,
    description: `How ${app.name} handles your data.`,
  }
}

export default async function AppPrivacyPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const app = await getApp(slug)
  if (!app) notFound()

  return (
    <article className="container-narrow py-16 md:py-24">
      <Link href={`/apps/${app.slug}`} className="text-sm text-mute hover:text-ink mb-6 inline-flex">
        ← Back to {app.name}
      </Link>
      <h1 className="text-display-md font-bold tracking-tight mb-4">
        {app.name} — Privacy
      </h1>
      <p className="text-mute text-lg mb-12">
        How {app.name} handles your data. Short version: as little as possible.
      </p>

      <div className="prose max-w-none text-mute leading-relaxed space-y-6">
        <p>
          <strong className="text-ink">No analytics.</strong> {app.name} does not include
          Google Analytics, Facebook Pixel, Mixpanel, Amplitude, or any third-party tracking SDK.
        </p>
        <p>
          <strong className="text-ink">No crash reporting.</strong> We don't ship Sentry,
          Bugsnag, or any equivalent. If {app.name} crashes, you won't be the one telling us.
        </p>
        <p>
          <strong className="text-ink">No advertising.</strong> {app.name} contains no
          ad network SDKs. No ad IDs. No remarketing.
        </p>
        <p>
          <strong className="text-ink">Local-first.</strong> Your data stays on your device
          unless you explicitly choose to sync it. There is no account required.
        </p>
        <p>
          <strong className="text-ink">Open source audit.</strong> See the {app.name}{' '}
          repository for the full source.
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