import { getApps } from '@/lib/data'
import { SITE_URL } from '@/lib/seo'
import { Download, Mail } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Press kit',
  description:
    'Press kit for positiveness.club — logos, app icons, founder bio, screenshots, and contact.',
  alternates: { canonical: `${SITE_URL}/press` },
}

export default async function PressPage() {
  const apps = await getApps()
  return (
    <article className="container-wide py-16 md:py-24">
      <div className="max-w-3xl mb-16">
        <span className="chip mb-6">Press kit</span>
        <h1 className="text-display-lg font-bold tracking-tight mb-6">Press & assets</h1>
        <p className="text-xl text-mute leading-relaxed">
          Everything you need to write about positiveness.club. Logos, app icons, screenshots,
          founder bio, and a contact for interviews.
        </p>
      </div>

      <section className="grid gap-6 md:grid-cols-2 mb-16">
        <div className="card">
          <Mail className="text-coral mb-3" size={24} />
          <h3 className="font-semibold mb-2">Press contact</h3>
          <p className="text-sm text-mute mb-3">For interviews, quotes, embargoed stories.</p>
          <a href="mailto:press@positiveness.club" className="text-coral underline text-sm">
            press@positiveness.club
          </a>
        </div>
        <div className="card">
          <Download className="text-coral mb-3" size={24} />
          <h3 className="font-semibold mb-2">Asset bundle</h3>
          <p className="text-sm text-mute mb-3">
            All logos, app icons, screenshots in one ZIP. ~12MB.
          </p>
          <a href="/press/positiveness-press-kit.zip" className="text-coral underline text-sm">
            Download press kit (zip) →
          </a>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">App icons</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {apps.map((app) => (
            <div key={app.slug} className="card text-center">
              <div
                className="w-20 h-20 mx-auto rounded-[22%] mb-3 flex items-center justify-center text-white font-semibold text-2xl"
                style={{
                  background: `linear-gradient(135deg, ${app.accentColor}, ${app.accentColor}cc)`,
                }}
              >
                {app.name.charAt(0)}
              </div>
              <p className="font-medium">{app.name}</p>
              <a
                href={`/press/icons/${app.slug}.png`}
                className="text-xs text-mute hover:text-coral"
              >
                Download PNG
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Wordmark</h2>
        <div className="card flex items-center justify-center py-16">
          <div className="flex items-center gap-3">
            <svg width="48" height="48" viewBox="0 0 32 32">
              <defs>
                <linearGradient id="logo-grad-press" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FF6B5B" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
              <path
                d="M6 22 C6 12, 14 6, 22 8"
                stroke="url(#logo-grad-press)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="22" cy="8" r="3" fill="url(#logo-grad-press)" />
            </svg>
            <span className="text-3xl font-semibold tracking-tight">positiveness</span>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Boilerplate</h2>
        <div className="card space-y-4 text-sm leading-relaxed text-mute">
          <div>
            <p className="text-ink font-medium mb-1">Long (50 words)</p>
            <p>
              positiveness.club is a small independent studio building calm, focused, privacy-first
              apps. Their four apps — 1perc (book summaries), HEAL (anxiety audio), Riseup (morning
              routines), and Resonate (guitar tuner) — share one philosophy: do one thing well, then
              disappear.
            </p>
          </div>
          <div>
            <p className="text-ink font-medium mb-1">Short (25 words)</p>
            <p>
              positiveness.club is an indie studio building calm, privacy-first apps for reading,
              calming down, morning routines, and tuning instruments.
            </p>
          </div>
          <div>
            <p className="text-ink font-medium mb-1">One-liner</p>
            <p>Apps that make you a little more human.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Founder bio</h2>
        <div className="card space-y-4 leading-relaxed text-mute">
          <p>
            <strong className="text-ink">Albert Laudia</strong> is the founder of positiveness.club.
            He has been building software professionally since 2015, including founding and selling
            a SaaS company in the productivity space in 2022.
          </p>
          <p>
            Before positiveness, he led mobile engineering at a Series B healthtech company in
            Singapore, where he shipped apps used by 500k+ daily active users. He is the original
            author of Resonate (a privacy-first guitar tuner) and 1perc (a book-summary app
            currently in private beta).
          </p>
          <p>
            He writes about the philosophy of small software, calm UX, and the practical realities
            of running a one-person app studio across Singapore and Indonesia. Reach him at{' '}
            <a href="mailto:hello@positiveness.club" className="text-coral underline">
              hello@positiveness.club
            </a>
            .
          </p>
        </div>
      </section>
    </article>
  )
}
