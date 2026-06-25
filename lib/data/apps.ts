/**
 * App metadata for the pclub ecosystem.
 *
 * v1: static. Production: replace with PocketBase query in `lib/pb.ts`.
 * Schema mirrors the `apps` collection in docs/ARCHITECTURE.md §7.
 */

export type AppCategory = 'books' | 'wellness' | 'habits' | 'music'
export type AppSlug = '1perc' | 'heal' | 'riseup' | 'resonate'

export interface AppFaqItem {
  q: string
  a: string
}

export interface AppTestimonial {
  quote: string
  author: string
  source: string
}

export interface PclubApp {
  slug: AppSlug
  name: string
  tagline: string
  description: string
  longDescription: string
  icon: string
  hero: string
  screenshots: string[]
  accentColor: string
  accentBgClass: string
  category: AppCategory
  categoryLabel: string
  keywords: string[]
  iosUrl: string
  androidUrl: string
  appStoreId: string
  bundleId: string
  leadMagnetSlug: string | null
  ctaHeadline: string
  ctaSubtext: string
  bullets: string[]
  faq: AppFaqItem[]
  testimonials: AppTestimonial[]
  status: 'live' | 'coming-soon'
  sortOrder: number
  features: { title: string; description: string; icon: string }[]
}

export const apps: PclubApp[] = [
  {
    slug: '1perc',
    name: '1perc',
    tagline: 'One book a day. 5 minutes. A little smarter.',
    description:
      'Bite-sized book summaries that fit your day. Read or listen — gain a year of knowledge in minutes.',
    longDescription:
      "1perc turns the world's best books into 5-minute daily reads and listens. We distill 300-page books into the 7 ideas that actually matter, narrated in warm human voices. Whether you're on the train, in line for coffee, or winding down at night — a little smarter every day.",
    icon: '/apps/1perc/icon.png',
    hero: '/apps/1perc/hero.png',
    screenshots: [
      '/apps/1perc/screen-1.png',
      '/apps/1perc/screen-2.png',
      '/apps/1perc/screen-3.png',
    ],
    accentColor: '#F5A623',
    accentBgClass: 'bg-amber-50 dark:bg-amber-950/30',
    category: 'books',
    categoryLabel: 'Books · Learning',
    keywords: ['book summary', 'book insights', 'blinkist alternative', 'daily learning', '5 min read'],
    iosUrl: 'https://apps.apple.com/app/id-coming-soon',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.pclub.1perc',
    appStoreId: '',
    bundleId: 'com.pclub.1perc',
    leadMagnetSlug: '1perc-7day-pack',
    ctaHeadline: 'Start learning in 5 minutes',
    ctaSubtext: 'Free for 7 days. No card required.',
    bullets: [
      '7 hand-picked book summaries every week',
      'Listen on the go with warm human narration',
      'Spaced-repetition insights you actually remember',
      'Offline reading — your library goes where you go',
    ],
    faq: [
      {
        q: 'How long is each summary?',
        a: 'Most summaries are 4-7 minutes to read or listen. Designed for a coffee break, not a Saturday afternoon.',
      },
      {
        q: 'How is this different from Blinkist?',
        a: "1perc focuses on the 7 ideas that actually change how you think — not 20 bullet points to skim and forget. Plus, our insights come back to you throughout the week so the ideas stick.",
      },
      {
        q: 'Can I listen offline?',
        a: "Yes. Download any summary to read or listen without a connection. Perfect for flights, subways, and the beach.",
      },
      {
        q: 'Is there a free trial?',
        a: 'Yes — 7 days free, no credit card required. You can read 3 summaries per day during the trial.',
      },
    ],
    testimonials: [
      {
        quote: "I've read more books in 3 months than the last 3 years. The 5-minute format is the unlock.",
        author: 'Maya R.',
        source: 'App Store',
      },
      {
        quote: "The audio quality is genuinely warm. Doesn't feel like AI narration.",
        author: 'James L.',
        source: 'App Store',
      },
    ],
    status: 'coming-soon',
    sortOrder: 1,
    features: [
      {
        title: 'Daily drop',
        description: 'A new book every morning, ready when you are.',
        icon: 'Sparkles',
      },
      {
        title: 'Audio + text',
        description: 'Read or listen — whichever fits the moment.',
        icon: 'Headphones',
      },
      {
        title: 'Insights that stick',
        description: 'Key ideas revisit you throughout the week.',
        icon: 'Lightbulb',
      },
      {
        title: 'Offline-first',
        description: 'Your library goes where you go.',
        icon: 'Download',
      },
    ],
  },
  {
    slug: 'heal',
    name: 'HEAL',
    tagline: 'Quiet your mind in 3 minutes.',
    description:
      'Audio therapy for anxiety, sleep, and overwhelm. Guided resets you can do anywhere — no app ritual, just press play.',
    longDescription:
      "HEAL is a pocket therapist for the moments you need one. 3-minute audio resets for anxiety spikes, racing thoughts at 2am, pre-meeting jitters, and the long exhale after a hard day. Designed with clinical psychologists, voiced in calm human warmth.",
    icon: '/apps/heal/icon.png',
    hero: '/apps/heal/hero.png',
    screenshots: [
      '/apps/heal/screen-1.png',
      '/apps/heal/screen-2.png',
      '/apps/heal/screen-3.png',
    ],
    accentColor: '#7FB069',
    accentBgClass: 'bg-green-50 dark:bg-green-950/30',
    category: 'wellness',
    categoryLabel: 'Wellness · Calm',
    keywords: ['anxiety relief', 'meditation', 'sleep sounds', 'guided breathing', 'calm alternative'],
    iosUrl: 'https://apps.apple.com/app/id-coming-soon',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.pclub.heal',
    appStoreId: '',
    bundleId: 'com.pclub.heal',
    leadMagnetSlug: 'heal-3min-reset',
    ctaHeadline: 'Take 3 minutes for yourself',
    ctaSubtext: 'Free starter pack. No subscription to start.',
    bullets: [
      '3-minute audio resets for anxiety, sleep, and overwhelm',
      'Designed with clinical psychologists',
      'Voiced in warm human warmth — never AI-stiff',
      'Works offline — relief when you need it most',
    ],
    faq: [
      {
        q: 'Is this a meditation app?',
        a: "It's broader than that. HEAL covers anxiety spikes, sleeplessness, burnout, and overwhelm — the moments when 'sit and observe your breath' is the last thing you can do.",
      },
      {
        q: 'How long are the sessions?',
        a: 'Most are 2-5 minutes. Designed for in-the-moment use, not hour-long rituals.',
      },
      {
        q: 'Does it work offline?',
        a: 'Yes. All sessions can be downloaded for offline use.',
      },
      {
        q: 'Will it replace therapy?',
        a: "No — and we don't claim to. HEAL is a tool for everyday moments, not a substitute for professional care.",
      },
    ],
    testimonials: [
      {
        quote: "The 3am panic session got me through the worst night in months. I'm a believer.",
        author: 'Anon, beta tester',
        source: 'Private beta',
      },
    ],
    status: 'coming-soon',
    sortOrder: 2,
    features: [
      {
        title: '3-minute resets',
        description: 'For the moment you need it, not 20-minute rituals.',
        icon: 'Clock',
      },
      {
        title: 'Clinically informed',
        description: 'Designed with real psychologists, not wellness clichés.',
        icon: 'Stethoscope',
      },
      {
        title: 'Warm human voice',
        description: 'Calm guidance that sounds like a person, not a robot.',
        icon: 'Mic',
      },
      {
        title: 'Truly private',
        description: 'Your sessions stay on your device. No tracking, ever.',
        icon: 'Shield',
      },
    ],
  },
  {
    slug: 'riseup',
    name: 'Riseup',
    tagline: 'Rise with intention. One small win a day.',
    description:
      'A morning ritual app that actually fits your life. 5 minutes, one tiny win, evidence-based — not another 47-step routine.',
    longDescription:
      "Most morning routine apps are written by people who wake up at 4am and have a cold plunge. Riseup is for the rest of us. One tiny win before you check your phone. 5 minutes. No streak-shaming. No 17-step checklist. Just a small, evidence-based move toward being a little more yourself today.",
    icon: '/apps/riseup/icon.png',
    hero: '/apps/riseup/hero.png',
    screenshots: [
      '/apps/riseup/screen-1.png',
      '/apps/riseup/screen-2.png',
      '/apps/riseup/screen-3.png',
    ],
    accentColor: '#E07856',
    accentBgClass: 'bg-orange-50 dark:bg-orange-950/30',
    category: 'habits',
    categoryLabel: 'Habits · Routine',
    keywords: ['morning routine', 'habit tracker', '5am club', 'intention setting', 'daily ritual'],
    iosUrl: 'https://apps.apple.com/app/id-coming-soon',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.pclub.riseup',
    appStoreId: '',
    bundleId: 'com.pclub.riseup',
    leadMagnetSlug: 'riseup-7day-template',
    ctaHeadline: 'Start with one small win',
    ctaSubtext: 'Free for the first 7 mornings.',
    bullets: [
      'One tiny win a day — no 47-step checklists',
      'Evidence-based: backed by habit research, not hustle culture',
      '5 minutes max — fits before you check your phone',
      'Gentle, never shame-based — no streak-breaking guilt',
    ],
    faq: [
      {
        q: "I'm not a morning person. Is this for me?",
        a: "Especially for you. Riseup doesn't require 4am wake-ups. Pick a time that works — even 11am counts as a 'morning' if that's your morning.",
      },
      {
        q: "What if I miss a day?",
        a: "Nothing happens. No streak broken, no red X, no guilt email. The app simply waits for you to come back.",
      },
      {
        q: "Is this another habit tracker?",
        a: "No — habit trackers measure what you did. Riseup designs what to do. The science is in the prompt, not the log.",
      },
    ],
    testimonials: [],
    status: 'coming-soon',
    sortOrder: 3,
    features: [
      {
        title: 'One tiny win',
        description: 'A 5-minute prompt that actually moves the needle.',
        icon: 'Target',
      },
      {
        title: 'Evidence-based',
        description: 'Built on habit research, not hustle influencers.',
        icon: 'BookOpen',
      },
      {
        title: 'No streak shame',
        description: 'Miss a day, the app doesn’t even notice.',
        icon: 'Heart',
      },
      {
        title: 'Works offline',
        description: 'Your routine, always available.',
        icon: 'WifiOff',
      },
    ],
  },
  {
    slug: 'resonate',
    name: 'Resonate',
    tagline: 'Tune with confidence. No tracking, ever.',
    description:
      'A precision guitar tuner that does one thing perfectly. Beautiful to look at, gentle on the ears, and respects your privacy completely.',
    longDescription:
      "Resonate is a chromatic tuner for guitar, bass, ukulele, and violin. Studio-grade accuracy, a visualizer that feels like a living thing, and an absolute promise: zero telemetry, zero analytics, zero 'crash reporting'. The only network call Resonate ever makes is the one you don't see.",
    icon: '/apps/resonate/icon.png',
    hero: '/apps/resonate/hero.png',
    screenshots: [
      '/apps/resonate/screen-1.png',
      '/apps/resonate/screen-2.png',
      '/apps/resonate/screen-3.png',
    ],
    accentColor: '#C46A4A',
    accentBgClass: 'bg-rose-50 dark:bg-rose-950/30',
    category: 'music',
    categoryLabel: 'Music · Tools',
    keywords: ['guitar tuner', 'chromatic tuner', 'free tuner', 'instrument tuner', 'bass tuner'],
    iosUrl: 'https://apps.apple.com/app/id-coming-soon',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.solverwatch.guitartuner',
    appStoreId: '',
    bundleId: 'com.solverwatch.guitartuner',
    leadMagnetSlug: null,
    ctaHeadline: 'Tune with confidence',
    ctaSubtext: 'Free. Forever. No tracking.',
    bullets: [
      'Studio-grade accuracy across guitar, bass, ukulele, violin',
      'Visualizer that feels alive — actually pleasant to look at',
      'Zero telemetry, zero analytics, zero crash reporting',
      'Works fully offline — your privacy is a feature, not a footnote',
    ],
    faq: [
      {
        q: 'Is it really free?',
        a: 'Yes, completely. No ads, no in-app purchases, no "pro" tier. We made it because we wanted to use it.',
      },
      {
        q: 'What instruments does it support?',
        a: 'Guitar (6 & 7 string), bass (4, 5, 6 string), ukulele, violin, and any custom tuning you want to set.',
      },
      {
        q: 'Does it work offline?',
        a: "Yes. Resonate makes zero network calls. The app is the same size whether you're on Wi-Fi or in airplane mode.",
      },
      {
        q: 'Why no analytics?',
        a: "A tuner doesn't need to know who you are. We think that's the right default — and we're proving a privacy-first app can still be beautiful.",
      },
    ],
    testimonials: [
      {
        quote: "By far the most beautiful tuner I've used. And the privacy thing is genuinely the point.",
        author: 'Tom K.',
        source: 'App Store',
      },
    ],
    status: 'coming-soon',
    sortOrder: 4,
    features: [
      {
        title: 'Studio accuracy',
        description: '±0.5 cent precision. The pros use it.',
        icon: 'Crosshair',
      },
      {
        title: 'Beautiful visualizer',
        description: 'Tuning feedback that actually feels good.',
        icon: 'Waves',
      },
      {
        title: 'Zero tracking',
        description: 'No analytics, no crash reports, no network calls.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Forever free',
        description: 'No ads, no in-app purchases, no "pro" tier.',
        icon: 'Gift',
      },
    ],
  },
]

export function getApp(slug: string): PclubApp | undefined {
  return apps.find((a) => a.slug === slug) as PclubApp | undefined
}

export function getLiveApps(): PclubApp[] {
  return apps.filter((a) => a.status === 'live')
}

export function getOtherApps(slug: string, n = 3): PclubApp[] {
  return apps.filter((a) => a.slug !== slug).slice(0, n)
}
