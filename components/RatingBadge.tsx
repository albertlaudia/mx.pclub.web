import { Star } from 'lucide-react'

/**
 * App rating badge. v1 is a static display.
 * Production: ISR refresh from App Store / Play Store APIs.
 */

interface RatingBadgeProps {
  appName: string
  rating: number
  count: number
  source?: string
  className?: string
}

export function RatingBadge({
  appName,
  rating,
  count,
  source = 'App Store',
  className,
}: RatingBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 text-sm text-mute ${className || ''}`}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < Math.floor(rating) ? 'fill-amber-400 text-amber-400' : 'text-line'}
          />
        ))}
      </div>
      <span className="font-medium text-ink">{rating.toFixed(1)}</span>
      <span>
        · {count >= 1000 ? `${(count / 1000).toFixed(0)}k` : count} on {source}
      </span>
    </div>
  )
}
