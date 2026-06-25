import type { SVGProps } from 'react'
import { cn } from '@/lib/utils'

/**
 * Hand-crafted app icons. Each is a unique, on-brand mark — not a stock glyph.
 *
 * Use the named exports for specific apps, or `<AppIcon slug="..." />` for data-driven.
 */

const SIZES = {
  sm: 32,
  md: 48,
  lg: 72,
  xl: 96,
  '2xl': 128,
} as const

type IconSize = keyof typeof SIZES

interface AppIconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  slug: '1perc' | 'heal' | 'riseup' | 'resonate'
  size?: IconSize | number
  rounded?: boolean
}

export function AppIcon({ slug, size = 'lg', rounded = true, className, ...rest }: AppIconProps) {
  const px = typeof size === 'number' ? size : SIZES[size]
  const Comp = ICONS[slug]
  return (
    <Comp
      width={px}
      height={px}
      className={cn(rounded && 'rounded-[22%]', 'shrink-0', className)}
      {...rest}
    />
  )
}

const ICONS = {
  '1perc': (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="bg-1perc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#bg-1perc)" />
      <path
        d="M30 38 C30 34, 33 32, 36 32 L52 32 C55 32, 58 34, 58 38 L58 86 L36 86 C33 86, 30 84, 30 80 Z"
        fill="white"
        opacity="0.95"
      />
      <path
        d="M90 38 C90 34, 87 32, 84 32 L68 32 C65 32, 62 34, 62 38 L62 86 L84 86 C87 86, 90 84, 90 80 Z"
        fill="white"
        opacity="0.7"
      />
      <circle cx="78" cy="28" r="6" fill="white" />
      <circle cx="78" cy="28" r="2" fill="#F59E0B" />
    </svg>
  ),
  heal: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="bg-heal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="100%" stopColor="#4ADE80" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#bg-heal)" />
      <path
        d="M60 90 C60 90, 30 70, 30 50 C30 38, 38 30, 48 30 C54 30, 58 33, 60 38 C62 33, 66 30, 72 30 C82 30, 90 38, 90 50 C90 70, 60 90, 60 90 Z"
        fill="white"
        opacity="0.95"
      />
      <path
        d="M45 52 C45 46, 50 42, 55 44 M75 52 C75 46, 70 42, 65 44"
        stroke="#4ADE80"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  ),
  riseup: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="bg-riseup" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
        <linearGradient id="sun-riseup" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FDBA74" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#bg-riseup)" />
      <circle cx="60" cy="62" r="20" fill="url(#sun-riseup)" />
      <rect x="0" y="74" width="120" height="20" fill="#7C2D12" opacity="0.4" />
      <path
        d="M0 74 L120 74"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <circle cx="86" cy="38" r="2" fill="white" opacity="0.8" />
      <circle cx="34" cy="42" r="1.5" fill="white" opacity="0.7" />
      <circle cx="92" cy="50" r="1" fill="white" opacity="0.6" />
    </svg>
  ),
  resonate: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="bg-resonate" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="100%" stopColor="#9F1239" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#bg-resonate)" />
      <g stroke="white" strokeWidth="4" strokeLinecap="round" fill="none">
        <line x1="20" y1="60" x2="20" y2="60" opacity="0" />
        <line x1="32" y1="50" x2="32" y2="70" />
        <line x1="44" y1="38" x2="44" y2="82" />
        <line x1="56" y1="28" x2="56" y2="92" />
        <line x1="68" y1="40" x2="68" y2="80" />
        <line x1="80" y1="50" x2="80" y2="70" />
        <line x1="92" y1="44" x2="92" y2="76" />
      </g>
      <circle cx="56" cy="60" r="3" fill="white" />
    </svg>
  ),
}