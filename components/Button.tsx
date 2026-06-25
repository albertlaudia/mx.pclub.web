import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'link'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary: 'bg-coral text-white hover:bg-coral-hover shadow-sm shadow-black/5',
  secondary:
    'border border-line bg-card text-ink hover:bg-canvas',
  ghost: 'text-ink hover:bg-line/30',
  link: 'text-coral underline-offset-4 hover:underline',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-12 px-6 text-base',
}

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap'

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonProps =
  | (CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' })
  | (CommonProps &
      Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
        as: 'link'
        href: string
      })

export function Button(props: ButtonProps) {
  const variant = props.variant ?? 'primary'
  const size = props.size ?? 'md'
  const className = cn(
    baseClass,
    variants[variant],
    variant !== 'link' && sizes[size],
    props.className,
  )

  if (props.as === 'link') {
    const { variant: _v, size: _s, as: _as, className: _c, href, children, ...rest } = props
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    )
  }

  const { variant: _v, size: _s, as: _as, className: _c, children, ...rest } = props as CommonProps &
    ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  )
}