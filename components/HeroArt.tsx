import type { SVGProps } from 'react'

/**
 * Decorative hero illustrations for app landing pages.
 * Hand-crafted SVGs — abstract, premium, no stock photo feel.
 */

interface HeroArtProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  slug: '1perc' | 'heal' | 'riseup' | 'resonate'
}

export function HeroArt({ slug, className, ...rest }: HeroArtProps) {
  const Comp = HEROES[slug]
  return (
    <Comp
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    />
  )
}

const HEROES = {
  '1perc': (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="g-1perc-bg" cx="0.7" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FFFBEB" />
        </radialGradient>
        <linearGradient id="g-1perc-book" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#g-1perc-bg)" />
      {/* Floating book pages */}
      <g transform="translate(180 200) rotate(-12)">
        <rect width="200" height="280" rx="8" fill="white" stroke="#FCD34D" strokeWidth="1.5" />
        <rect x="20" y="30" width="120" height="6" rx="3" fill="#F59E0B" opacity="0.6" />
        <rect x="20" y="50" width="160" height="3" rx="1.5" fill="#FCD34D" />
        <rect x="20" y="62" width="160" height="3" rx="1.5" fill="#FCD34D" />
        <rect x="20" y="74" width="140" height="3" rx="1.5" fill="#FCD34D" />
        <rect x="20" y="100" width="100" height="6" rx="3" fill="#F59E0B" opacity="0.6" />
        <rect x="20" y="120" width="160" height="3" rx="1.5" fill="#FCD34D" />
        <rect x="20" y="132" width="160" height="3" rx="1.5" fill="#FCD34D" />
        <rect x="20" y="144" width="120" height="3" rx="1.5" fill="#FCD34D" />
        <rect x="20" y="170" width="80" height="6" rx="3" fill="#F59E0B" opacity="0.6" />
        <rect x="20" y="190" width="160" height="3" rx="1.5" fill="#FCD34D" />
      </g>
      <g transform="translate(440 280) rotate(8)">
        <rect width="200" height="280" rx="8" fill="url(#g-1perc-book)" />
        <rect x="20" y="30" width="120" height="6" rx="3" fill="white" opacity="0.9" />
        <rect x="20" y="50" width="160" height="3" rx="1.5" fill="white" opacity="0.6" />
        <rect x="20" y="62" width="160" height="3" rx="1.5" fill="white" opacity="0.6" />
        <rect x="20" y="74" width="140" height="3" rx="1.5" fill="white" opacity="0.6" />
        <rect x="20" y="100" width="100" height="6" rx="3" fill="white" opacity="0.9" />
        <rect x="20" y="120" width="160" height="3" rx="1.5" fill="white" opacity="0.6" />
      </g>
      {/* Sparkles */}
      <g fill="#F59E0B">
        <circle cx="640" cy="160" r="4" opacity="0.7" />
        <circle cx="680" cy="200" r="2" opacity="0.5" />
        <circle cx="120" cy="120" r="3" opacity="0.6" />
        <circle cx="720" cy="380" r="5" opacity="0.5" />
      </g>
    </svg>
  ),
  heal: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="g-heal-bg" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0%" stopColor="#DCFCE7" />
          <stop offset="100%" stopColor="#F0FDF4" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#g-heal-bg)" />
      {/* Breathing waves */}
      <g stroke="#4ADE80" fill="none" opacity="0.5">
        <path d="M100 300 Q200 200, 300 300 T500 300 T700 300" strokeWidth="2" />
        <path d="M100 320 Q200 240, 300 320 T500 320 T700 320" strokeWidth="2.5" opacity="0.6" />
        <path d="M100 340 Q200 280, 300 340 T500 340 T700 340" strokeWidth="3" opacity="0.7" />
        <path d="M100 360 Q200 320, 300 360 T500 360 T700 360" strokeWidth="2.5" opacity="0.6" />
      </g>
      {/* Center leaf */}
      <g transform="translate(400 300)">
        <path
          d="M0 -80 C40 -80, 60 -40, 60 0 C60 40, 40 80, 0 80 C-40 80, -60 40, -60 0 C-60 -40, -40 -80, 0 -80 Z"
          fill="#86EFAC"
          opacity="0.8"
        />
        <path
          d="M0 -60 L0 60 M-30 -30 L0 0 M30 -30 L0 0"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
      {/* Soft floating dots */}
      <g fill="#4ADE80">
        <circle cx="160" cy="160" r="3" opacity="0.4" />
        <circle cx="640" cy="180" r="4" opacity="0.5" />
        <circle cx="120" cy="440" r="3" opacity="0.4" />
        <circle cx="680" cy="420" r="3" opacity="0.4" />
      </g>
    </svg>
  ),
  riseup: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="g-riseup-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FED7AA" />
          <stop offset="60%" stopColor="#FFEDD5" />
          <stop offset="100%" stopColor="#FFF7ED" />
        </linearGradient>
        <radialGradient id="g-riseup-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="60%" stopColor="#FDBA74" />
          <stop offset="100%" stopColor="#FB923C" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#g-riseup-sky)" />
      {/* Sun rising */}
      <circle cx="400" cy="380" r="120" fill="url(#g-riseup-sun)" opacity="0.95" />
      <circle cx="400" cy="380" r="160" fill="#FB923C" opacity="0.15" />
      <circle cx="400" cy="380" r="200" fill="#FB923C" opacity="0.08" />
      {/* Horizon */}
      <rect x="0" y="380" width="800" height="220" fill="#7C2D12" opacity="0.15" />
      {/* Mountains */}
      <path
        d="M0 380 L150 280 L280 340 L420 250 L560 320 L700 270 L800 340 L800 380 Z"
        fill="#9A3412"
        opacity="0.3"
      />
      <path
        d="M0 400 L120 360 L260 400 L400 350 L540 400 L680 360 L800 400 L800 420 L0 420 Z"
        fill="#7C2D12"
        opacity="0.4"
      />
      {/* Stars */}
      <g fill="#7C2D12">
        <circle cx="160" cy="120" r="2" opacity="0.6" />
        <circle cx="240" cy="80" r="1.5" opacity="0.5" />
        <circle cx="600" cy="100" r="2" opacity="0.6" />
        <circle cx="680" cy="160" r="1.5" opacity="0.5" />
        <circle cx="120" cy="200" r="1" opacity="0.4" />
      </g>
    </svg>
  ),
  resonate: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="g-resonate-bg" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0%" stopColor="#FECACA" />
          <stop offset="100%" stopColor="#FFF1F2" />
        </radialGradient>
        <linearGradient id="g-resonate-wave" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="100%" stopColor="#9F1239" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#g-resonate-bg)" />
      {/* Concentric waveform rings */}
      <g stroke="url(#g-resonate-wave)" fill="none" opacity="0.6">
        <circle cx="400" cy="300" r="80" strokeWidth="2" />
        <circle cx="400" cy="300" r="120" strokeWidth="2.5" opacity="0.6" />
        <circle cx="400" cy="300" r="160" strokeWidth="2" opacity="0.5" />
        <circle cx="400" cy="300" r="200" strokeWidth="1.5" opacity="0.4" />
        <circle cx="400" cy="300" r="240" strokeWidth="1" opacity="0.3" />
      </g>
      {/* Center dot */}
      <circle cx="400" cy="300" r="20" fill="#9F1239" />
      <circle cx="400" cy="300" r="8" fill="white" />
      {/* Waveform bars */}
      <g fill="#9F1239">
        <rect x="140" y="290" width="3" height="20" rx="1.5" />
        <rect x="155" y="280" width="3" height="40" rx="1.5" opacity="0.8" />
        <rect x="170" y="270" width="3" height="60" rx="1.5" opacity="0.7" />
        <rect x="620" y="280" width="3" height="40" rx="1.5" />
        <rect x="635" y="290" width="3" height="20" rx="1.5" opacity="0.8" />
        <rect x="650" y="285" width="3" height="30" rx="1.5" opacity="0.6" />
      </g>
    </svg>
  ),
}
