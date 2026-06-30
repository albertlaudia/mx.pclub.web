import Link from 'next/link'
import { Button } from './Button'
import { Logo } from './Logo'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-line/50 bg-canvas/80 backdrop-blur-lg">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Logo size={28} />
          <span className="text-[15px]">positiveness</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          <Link href="/apps" className="text-mute hover:text-ink transition-colors">
            Apps
          </Link>
          <Link href="/blog" className="text-mute hover:text-ink transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-mute hover:text-ink transition-colors">
            About
          </Link>
          <Link href="/manifesto" className="text-mute hover:text-ink transition-colors">
            Manifesto
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            as="link"
            href="/apps"
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Get the apps
          </Button>
          <Button as="link" href="/apps/1perc" variant="primary" size="sm">
            Try free
          </Button>
        </div>
      </div>
    </header>
  )
}
