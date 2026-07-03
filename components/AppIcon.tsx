import { cn } from '@/lib/utils'
import type { SVGProps } from 'react'

/**
 * Hand-crafted app icons. Each is a unique, on-brand mark — not a stock glyph.
 *
 * Design language per app (so the four feel like a *family*, not a random pile):
 *   - 1perc     — Amber/Coral, OPEN BOOK + 1%  → knowledge, daily ritual
 *   - HEAL      — Teal/Mint,  BREATH HEART    → calm, exhale, 3-min reset
 *   - Riseup    — Pink/Coral, SUN OVER PEAKS  → morning, ascent, ignition
 *   - Resonate  — Indigo,    CONCENTRIC RINGS → frequency, tuning, focus
 *
 * The "silhouette test" passes: even at 16px, you can tell them apart by
 * shape language alone. Color reinforces, never substitutes.
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

/* ─────────────────────────────────────────────────────────────────────
   1perc — Warm Amber. Open book + 1%.
   The book is symmetric, slightly tilted upward to the right (energy).
   A single "%" sits in the book's gutter like a bookmark.
   ───────────────────────────────────────────────────────────────────── */
const OnepercIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="bg-1perc" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="55%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
      <linearGradient id="page-1perc" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#FEF3C7" />
      </linearGradient>
      <radialGradient id="glow-1perc" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Background */}
    <rect width="120" height="120" rx="26" fill="url(#bg-1perc)" />

    {/* Soft warm glow behind the book */}
    <ellipse cx="60" cy="68" rx="44" ry="30" fill="url(#glow-1perc)" />

    {/* Right page (back) — slightly transparent to suggest depth */}
    <path d="M60 38 L100 30 L100 88 L60 96 Z" fill="url(#page-1perc)" opacity="0.75" />
    <line
      x1="68"
      y1="48"
      x2="92"
      y2="44"
      stroke="#D97706"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />
    <line
      x1="68"
      y1="56"
      x2="92"
      y2="52"
      stroke="#D97706"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />
    <line
      x1="68"
      y1="64"
      x2="92"
      y2="60"
      stroke="#D97706"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />
    <line
      x1="68"
      y1="72"
      x2="86"
      y2="68"
      stroke="#D97706"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />

    {/* Left page (front) — fully opaque, slightly larger to dominate */}
    <path d="M60 38 L20 30 L20 88 L60 96 Z" fill="url(#page-1perc)" />
    <line
      x1="28"
      y1="46"
      x2="52"
      y2="42"
      stroke="#F97316"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.65"
    />
    <line
      x1="28"
      y1="56"
      x2="52"
      y2="52"
      stroke="#F97316"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.65"
    />
    <line
      x1="28"
      y1="66"
      x2="52"
      y2="62"
      stroke="#F97316"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.65"
    />
    <line
      x1="28"
      y1="76"
      x2="44"
      y2="72"
      stroke="#F97316"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.65"
    />

    {/* Spine — dark amber line where pages meet */}
    <line x1="60" y1="38" x2="60" y2="96" stroke="#92400E" strokeWidth="1.5" opacity="0.35" />

    {/* The "1%" mark — sits in the open gutter like a bookmark/growth indicator */}
    <g transform="translate(60 17)">
      <rect x="-12" y="-10" width="24" height="20" rx="5" fill="#FFFFFF" />
      <text
        x="0"
        y="4.5"
        fontFamily="ui-sans-serif, system-ui, -apple-system, 'SF Pro Display', sans-serif"
        fontSize="13"
        fontWeight="800"
        fill="#DC2626"
        textAnchor="middle"
        letterSpacing="-0.5"
      >
        1%
      </text>
    </g>
  </svg>
)

/* ─────────────────────────────────────────────────────────────────────
   HEAL — Deep Teal. Breath heart.
   A heart shape formed by 3 concentric rounded "ripples".
   Each ripple suggests a slow exhale. Calm, never urgent.
   ───────────────────────────────────────────────────────────────────── */
const HealIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="bg-heal" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0F766E" />
        <stop offset="60%" stopColor="#14B8A6" />
        <stop offset="100%" stopColor="#5EEAD4" />
      </linearGradient>
      <radialGradient id="breath-core" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.6" />
      </radialGradient>
    </defs>

    {/* Background */}
    <rect width="120" height="120" rx="26" fill="url(#bg-heal)" />

    {/* Subtle wave at the bottom — calm horizon */}
    <path d="M0 96 Q30 90 60 96 T120 96 L120 120 L0 120 Z" fill="#FFFFFF" opacity="0.08" />

    {/* Ripple 3 — outermost, faintest (exhale) */}
    <path
      d="M60 100 C60 100, 18 76, 18 50 C18 32, 30 22, 42 22 C50 22, 56 26, 60 32 C64 26, 70 22, 78 22 C90 22, 102 32, 102 50 C102 76, 60 100, 60 100 Z"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.25"
    />

    {/* Ripple 2 — middle ring (slower, larger) */}
    <path
      d="M60 92 C60 92, 28 72, 28 52 C28 38, 38 30, 48 30 C54 30, 58 33, 60 38 C62 33, 66 30, 72 30 C82 30, 92 38, 92 52 C92 72, 60 92, 60 92 Z"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.55"
    />

    {/* Ripple 1 — innermost, the solid heart itself (the breath) */}
    <path
      d="M60 84 C60 84, 38 68, 38 54 C38 44, 46 38, 54 38 C57 38, 59 39, 60 42 C61 39, 63 38, 66 38 C74 38, 82 44, 82 54 C82 68, 60 84, 60 84 Z"
      fill="url(#breath-core)"
    />

    {/* Center — a tiny bright dot, the inhale point */}
    <circle cx="60" cy="56" r="2" fill="#0F766E" opacity="0.4" />
  </svg>
)

/* ─────────────────────────────────────────────────────────────────────
   Riseup — Sunrise Pink-Red. Mountain peaks with rising sun.
   Three geometric peaks form an ascending arrow.
   A bold sun sits in the V between peaks 2 and 3 — about to crest.
   ───────────────────────────────────────────────────────────────────── */
const RiseupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="bg-riseup" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FB7185" />
        <stop offset="55%" stopColor="#F43F5E" />
        <stop offset="100%" stopColor="#BE123C" />
      </linearGradient>
      <radialGradient id="sun-riseup" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#FEF3C7" />
        <stop offset="70%" stopColor="#FED7AA" />
        <stop offset="100%" stopColor="#FB923C" />
      </radialGradient>
      <linearGradient id="peak-front" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1E1B4B" />
        <stop offset="100%" stopColor="#312E81" />
      </linearGradient>
      <linearGradient id="peak-back" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4338CA" />
        <stop offset="100%" stopColor="#6366F1" />
      </linearGradient>
    </defs>

    {/* Background — sunrise gradient */}
    <rect width="120" height="120" rx="26" fill="url(#bg-riseup)" />

    {/* Sun rays — three clean lines pointing up-outward */}
    <g stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" opacity="0.55">
      <line x1="60" y1="14" x2="60" y2="22" />
      <line x1="36" y1="22" x2="40" y2="28" />
      <line x1="84" y1="22" x2="80" y2="28" />
    </g>

    {/* The sun — large and rising, partially behind the front peak */}
    <circle cx="60" cy="62" r="18" fill="url(#sun-riseup)" />

    {/* Sun glow */}
    <circle cx="60" cy="62" r="22" fill="#FED7AA" opacity="0.3" />

    {/* Back peak (left, smaller, behind) */}
    <path d="M0 120 L34 70 L60 96 L60 120 Z" fill="url(#peak-back)" opacity="0.7" />

    {/* Front peak (right, dominant) — a sharp triangle whose apex is just below the sun */}
    <path d="M28 120 L72 50 L120 120 Z" fill="url(#peak-front)" />

    {/* Subtle snowcap on the dominant peak */}
    <path d="M64 60 L72 50 L80 60 L77 62 L72 56 L67 62 Z" fill="#FFFFFF" opacity="0.85" />

    {/* Tiny ascending arrow at the very top — sun-ray extension */}
    <path
      d="M60 36 L60 42 M55 39 L60 34 L65 39"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.85"
    />
  </svg>
)

/* ─────────────────────────────────────────────────────────────────────
   Resonate — Deep Indigo. Concentric resonance rings.
   A central node with rings emanating outward, like a tuning fork struck.
   A single white diagonal cut suggests sound bars.
   ───────────────────────────────────────────────────────────────────── */
const ResonateIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="bg-resonate" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="60%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#A21CAF" />
      </linearGradient>
      <radialGradient id="core-resonate" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#C7D2FE" />
      </radialGradient>
    </defs>

    {/* Background */}
    <rect width="120" height="120" rx="26" fill="url(#bg-resonate)" />

    {/* Star-field accents in the corners — like a quiet night sky */}
    <circle cx="22" cy="22" r="1.2" fill="#FFFFFF" opacity="0.55" />
    <circle cx="98" cy="28" r="0.9" fill="#FFFFFF" opacity="0.45" />
    <circle cx="18" cy="92" r="1" fill="#FFFFFF" opacity="0.45" />
    <circle cx="100" cy="100" r="1.4" fill="#FFFFFF" opacity="0.55" />

    {/* Concentric resonance rings, expanding from center */}
    <g fill="none" stroke="#FFFFFF" strokeLinecap="round">
      <circle cx="60" cy="60" r="42" strokeWidth="1.2" opacity="0.18" />
      <circle cx="60" cy="60" r="32" strokeWidth="1.8" opacity="0.32" />
      <circle cx="60" cy="60" r="22" strokeWidth="2.2" opacity="0.55" />
      <circle cx="60" cy="60" r="13" strokeWidth="2.6" opacity="0.85" />
    </g>

    {/* Sound bars crossing the rings — suggests "tuning" */}
    <g stroke="#FFFFFF" strokeLinecap="round" opacity="0.92">
      <line x1="44" y1="60" x2="44" y2="60" strokeWidth="0" />
      <line x1="36" y1="50" x2="36" y2="70" strokeWidth="3" />
      <line x1="48" y1="42" x2="48" y2="78" strokeWidth="3" />
      <line x1="60" y1="34" x2="60" y2="86" strokeWidth="3.6" />
      <line x1="72" y1="42" x2="72" y2="78" strokeWidth="3" />
      <line x1="84" y1="50" x2="84" y2="70" strokeWidth="3" />
    </g>

    {/* Core — bright node at the heart of the resonance */}
    <circle cx="60" cy="60" r="7" fill="url(#core-resonate)" />

    {/* Highlight glint — gives the core a "live" spark */}
    <circle cx="58" cy="58" r="2" fill="#FFFFFF" opacity="0.9" />
  </svg>
)

const ICONS = {
  '1perc': OnepercIcon,
  heal: HealIcon,
  riseup: RiseupIcon,
  resonate: ResonateIcon,
} as const
