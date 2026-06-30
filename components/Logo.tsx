import { cn } from '@/lib/utils'
import type { SVGProps } from 'react'

/**
 * The positiveness.club logo mark — a soft, warm wordmark.
 * Hand-drawn coral arc + dot, lowercase "positiveness" wordmark.
 */

interface LogoProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  size?: number
  withWordmark?: boolean
  className?: string
}

export function Logo({ size = 32, withWordmark = true, className, ...rest }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF6B5B" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        <path
          d="M6 22 C6 12, 14 6, 22 8"
          stroke="url(#logo-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="22" cy="8" r="3" fill="url(#logo-grad)" />
      </svg>
      {withWordmark && (
        <span className="font-semibold text-[15px] tracking-tight">positiveness</span>
      )}
    </span>
  )
}
