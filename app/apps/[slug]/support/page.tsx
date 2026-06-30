import { getApp, getApps } from '@/lib/data'
import { Mail, MessageCircle, FileText } from 'lucide-react'
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
    title: `${app.name} — Support`,
    description: `Get help with ${app.name}.`,
  }
}

export default async function AppSupportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const app = await getApp(slug)
  if (!app) notFound()

  // Per-app support pages: HEAL has dedicated legal pages accessible from here.
  const hasDedicatedLegal = app.slug === 'heal'

  return (
    <article className="container-narrow py-16 md:py-24">
      <Link
        href={`/apps/${app.slug}`}
        className="text-sm text-mute hover:text-ink mb-6 inline-flex"
      >
        ← Back to {app.name}
      </Link>
      <h1 className="text-display-md font-bold tracking-tight mb-4">{app.name} — Support</h1>
      <p className="text-mute text-lg mb-12">
        Need help with {app.name}? We're a small team but we read everything.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <a href="mailto:hello@positiveness.club" className="card card-hover group">
          <Mail className="text-coral mb-3" size={24} />
          <h3 className="font-semibold mb-1">Email</h3>
          <p className="text-sm text-mute">hello@positiveness.club</p>
          <p className="text-xs text-mute mt-2">We reply within 48 hours.</p>
        </a>

        <Link href="/blog" className="card card-hover group">
          <MessageCircle className="text-coral mb-3" size={24} />
          <h3 className="font-semibold mb-1">Read the blog</h3>
          <p className="text-sm text-mute">Tips, tutorials, and deep dives.</p>
          <p className="text-xs text-mute mt-2 group-hover:text-coral">Browse posts →</p>
        </Link>
      </div>

      {hasDedicatedLegal && (
        <div className="mt-8">
          <h2 className="font-semibold mb-3">Legal & policies</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/heal/tnc" className="card card-hover group">
              <FileText className="text-coral mb-3" size={24} />
              <h3 className="font-semibold mb-1">Terms & Conditions</h3>
              <p className="text-sm text-mute">Subscription terms, medical disclaimer, arbitration.</p>
              <p className="text-xs text-mute mt-2 group-hover:text-coral">Read /heal/tnc →</p>
            </Link>
            <Link href="/heal/policies" className="card card-hover group">
              <FileText className="text-coral mb-3" size={24} />
              <h3 className="font-semibold mb-1">Privacy Policy</h3>
              <p className="text-sm text-mute">Local-first, no analytics, no tracking.</p>
              <p className="text-xs text-mute mt-2 group-hover:text-coral">Read /heal/policies →</p>
            </Link>
          </div>
        </div>
      )}

      <div className="mt-16 p-6 rounded-2xl border border-line bg-card">
        <h2 className="font-semibold mb-3">Common questions</h2>
        <div className="space-y-4 text-sm text-mute">
          {app.faq.slice(0, 3).map((f) => (
            <details key={f.q}>
              <summary className="cursor-pointer font-medium text-ink">{f.q}</summary>
              <p className="mt-2 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </article>
  )
}

