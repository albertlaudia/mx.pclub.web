import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { PclubApp } from '@/lib/data/apps'
import { cn } from '@/lib/utils'
import { AppIcon } from './AppIcon'

interface AppCardProps {
  app: PclubApp
  variant?: 'default' | 'featured'
  className?: string
}

export function AppCard({ app, variant = 'default', className }: AppCardProps) {
  return (
    <Link
      href={`/apps/${app.slug}`}
      className={cn(
        'group relative flex flex-col gap-5 rounded-2xl border border-line bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 hover:border-coral/30',
        variant === 'featured' && 'md:p-8',
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <AppIcon slug={app.slug} size="lg" />
        <ArrowUpRight
          className="text-mute group-hover:text-coral group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
          size={20}
        />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-semibold">{app.name}</h3>
          <span className="chip text-[10px] py-0.5">{app.categoryLabel}</span>
        </div>
        <p className="text-mute text-[15px] leading-relaxed">{app.tagline}</p>
      </div>

      <ul className="space-y-2 mt-auto">
        {app.bullets.slice(0, 2).map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-mute">
            <span
              className="mt-1.5 h-1 w-1 rounded-full shrink-0"
              style={{ backgroundColor: app.accentColor }}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </Link>
  )
}