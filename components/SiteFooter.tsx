import Link from 'next/link'
import { apps } from '@/lib/data/apps'
import { Logo } from './Logo'

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-line bg-card">
      <div className="container-wide py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Logo size={28} />
            <p className="mt-4 text-sm text-mute max-w-xs leading-relaxed">
              Apps that make you a little more human.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Apps</h4>
            <ul className="space-y-2.5 text-sm">
              {apps.map((app) => (
                <li key={app.slug}>
                  <Link href={`/apps/${app.slug}`} className="text-mute hover:text-ink transition-colors">
                    {app.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Read</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/blog" className="text-mute hover:text-ink transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-mute hover:text-ink transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/manifesto" className="text-mute hover:text-ink transition-colors">
                  Privacy manifesto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">More</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/press" className="text-mute hover:text-ink transition-colors">
                  Press kit
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-mute hover:text-ink transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-mute hover:text-ink transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-mute">
          <p>© {new Date().getFullYear()} positiveness.club. Built with care.</p>
          <p>Made with Next.js · Hosted with Dokploy</p>
        </div>
      </div>
    </footer>
  )
}