import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        brand: {
          primary: 'rgb(var(--brand-primary) / <alpha-value>)',
          'primary-hover': 'rgb(var(--brand-primary-hover) / <alpha-value>)',
          secondary: 'rgb(var(--brand-secondary) / <alpha-value>)',
          bg: 'rgb(var(--brand-bg) / <alpha-value>)',
          surface: 'rgb(var(--brand-surface) / <alpha-value>)',
          muted: 'rgb(var(--brand-muted) / <alpha-value>)',
          border: 'rgb(var(--brand-border) / <alpha-value>)',
        },
        accent: {
          '1perc': '#F5A623',
          heal: '#7FB069',
          riseup: '#E07856',
          resonate: '#C46A4A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-2xl': [
          '4.5rem',
          { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        'display-xl': [
          '3.75rem',
          { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': [
          '2.25rem',
          { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
        'display-sm': [
          '1.875rem',
          { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
      },
      spacing: {
        18: '4.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'fade-up': 'fadeUp 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
