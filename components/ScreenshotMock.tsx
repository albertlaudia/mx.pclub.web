import type { PclubApp } from '@/lib/data/apps'
import { cn } from '@/lib/utils'

/**
 * Phone-mockup placeholder for app screenshots.
 * v1: gradient placeholders with the app name.
 * Production: replace with real screenshots from /apps/<slug>/screen-*.png.
 */

interface ScreenshotMockProps {
  app: PclubApp
  index?: number
  className?: string
}

const PLACEHOLDER_TITLES: Record<string, string[]> = {
  '1perc': ["Today's book", 'Listen mode', 'Your insights'],
  heal: ['3-min reset', 'Breathe', 'Tonight'],
  riseup: ['Today', 'Streak', 'Library'],
  resonate: ['Tune', 'Strings', 'Settings'],
}

export function ScreenshotMock({ app, index = 0, className }: ScreenshotMockProps) {
  const title = PLACEHOLDER_TITLES[app.slug]?.[index] || app.name
  return (
    <div
      className={cn(
        'relative aspect-[9/19.5] w-full max-w-[280px] mx-auto rounded-[40px] border-[10px] border-ink bg-card shadow-xl overflow-hidden',
        className,
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${app.accentColor}30 0%, ${app.accentColor}10 100%)`,
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <div
          className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center text-white font-semibold text-xl"
          style={{ backgroundColor: app.accentColor }}
        >
          {app.name.charAt(0)}
        </div>
        <p className="text-xs uppercase tracking-wider text-mute font-medium">{app.name}</p>
        <p className="mt-1 text-base font-semibold text-ink">{title}</p>
        <p className="mt-2 text-xs text-mute max-w-[180px]">
          Real screenshots coming soon — placeholder for now.
        </p>
      </div>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-ink rounded-b-2xl" />
    </div>
  )
}
