/**
 * Resonate — Terms and Conditions
 *
 * Live URL referenced from App Store / Play Store metadata for the Resonate app.
 *
 * Resonate is a guitar / stringed-instrument tuner and (in future) a music-learning
 * companion. Key legal considerations differ from HEAL/1perc/Riseup:
 *   - No medical / mental-health claims at all
 *   - Microphone permissions: the App needs mic access to analyse pitch. We
 *     process audio in real time on-device and do not record, store, or
 *     transmit your audio.
 *   - Music content: chord charts, scales, songs, backing tracks — all
 *     subject to copyright. We license where required and rely on
 *     public-domain and original/CC-licensed content.
 *   - Subscription tiers (Free / Pro Monthly / Pro Yearly)
 *   - Singapore governing law + SIAC arbitration
 *
 * Not legal advice — must be reviewed by licensed counsel.
 * Version: v1.0  2026-07-13
 */

import { SITE_URL } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resonate — Terms and Conditions',
  description:
    'Terms and conditions governing use of the Resonate instrument tuner and music-learning app. Microphone-data handling, music-content licensing, subscription terms, and limitation of liability.',
  alternates: { canonical: `${SITE_URL}/resonate/terms` },
  robots: { index: true, follow: true },
}

export const dynamic = 'force-static'

const LAST_UPDATED = '2026-07-13'
const VERSION = 'v1.0'

const SECTIONS = [
  { id: 'acceptance', title: '1. Acceptance of these Terms' },
  { id: 'definitions', title: '2. Definitions' },
  { id: 'service', title: '3. What Resonate Is (and Is Not)' },
  { id: 'eligibility', title: '4. Eligibility & Age Requirements' },
  { id: 'tiers', title: '5. Free Tier and Pro Tier' },
  { id: 'license', title: '6. License Grant to You' },
  { id: 'restrictions', title: '7. Restrictions on Use' },
  { id: 'ip', title: '8. Intellectual Property Rights' },
  { id: 'music', title: '9. Music, Chords, Tabs & Backing Tracks' },
  { id: 'voice', title: '10. Voice Talent & Audio Production' },
  { id: 'mic', title: '11. Microphone Permission & On-Device Audio Processing' },
  { id: 'subscriptions', title: '12. Subscriptions, Auto-Renewal & Billing' },
  { id: 'trial', title: '13. Free Trials & Promotional Periods' },
  { id: 'refunds', title: '14. Refunds & Cancellation' },
  { id: 'modifications', title: '15. Modifications to the Service' },
  { id: 'termination', title: '16. Termination & Suspension' },
  { id: 'warranty', title: '17. Disclaimer of Warranties ("AS IS")' },
  { id: 'liability', title: '18. Limitation of Liability' },
  { id: 'indemnification', title: '19. Indemnification by You' },
  { id: 'export', title: '20. Export Controls & Sanctions' },
  { id: 'law', title: '21. Governing Law' },
  { id: 'dispute', title: '22. Dispute Resolution & Arbitration' },
  { id: 'classaction', title: '23. Class Action & Jury-Trial Waiver' },
  { id: 'force', title: '24. Force Majeure' },
  { id: 'severability', title: '25. Severability' },
  { id: 'entire', title: '26. Entire Agreement' },
  { id: 'assignment', title: '27. Assignment' },
  { id: 'notices', title: '28. Notices' },
  { id: 'contact', title: '29. How to Contact Us' },
  { id: 'regional', title: '30. Region-Specific Terms' },
]

export default function ResonateTermsPage() {
  return (
    <main className="container-narrow py-12 md:py-20">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="chip">Resonate</span>
          <span className="chip">Legal</span>
        </div>
        <h1 className="text-display-md md:text-display-lg font-bold tracking-tight mb-3">
          Resonate — Terms and Conditions
        </h1>
        <p className="text-mute text-lg mb-2">
          These terms govern your use of the Resonate mobile application. Read them carefully — they
          affect your legal rights, including waivers of class-action and jury-trial rights.
        </p>
        <p className="text-sm text-mute">
          Version <span className="font-mono">{VERSION}</span> · Last updated{' '}
          <time dateTime={LAST_UPDATED}>{LAST_UPDATED}</time> · Effective immediately
        </p>
        <p className="text-sm text-mute mt-2">
          Looking for the privacy policy?{' '}
          <Link href="/resonate/policy" className="text-coral underline">
            See Resonate — Privacy Policy
          </Link>
          .
        </p>
      </header>

      <nav
        className="mb-12 rounded-2xl border border-line bg-card p-6"
        aria-label="Table of contents"
      >
        <p className="font-semibold mb-3">Contents</p>
        <ol className="grid gap-1 sm:grid-cols-2 text-sm">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-coral hover:underline">
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2 prose-a:text-coral">
        <h2 id="acceptance">1. Acceptance of these Terms</h2>
        <p>
          These Terms and Conditions (these <strong>"Terms"</strong>) form a binding agreement
          between you and <strong>positiveness.club Pte Ltd</strong> (the <strong>"Company"</strong>
          ,<strong>"we"</strong>, <strong>"us"</strong> or <strong>"our"</strong>), the operator of
          the Resonate mobile application (the <strong>"App"</strong> or <strong>"Resonate"</strong>
          ).
        </p>
        <p>
          By downloading, installing, accessing or using Resonate — including the tuner, the music
          library, the chord catalogue, the lesson videos, the backing tracks, or any related
          services (collectively, the <strong>"Service"</strong>) — you agree to be bound by these
          Terms. If you do not agree, do not download, install or use the Service.
        </p>

        <h2 id="definitions">2. Definitions</h2>
        <ul>
          <li>
            <strong>"App"</strong> means the Resonate mobile application, including any updates,
            upgrades, patches, fixes, translations, and localizations.
          </li>
          <li>
            <strong>"Content"</strong> means all audio, video, MIDI, transcriptions, chord charts,
            tablature, lyrics, sheet music, images, graphics, software, source code, designs,
            trademarks, logos, and other material made available through the Service.
          </li>
          <li>
            <strong>"Device"</strong> means any compatible mobile phone, tablet, wearable, smart
            speaker, web client or other device on which you install or access the App.
          </li>
          <li>
            <strong>"Store"</strong> means the Apple App Store (operated by Apple Inc.) or the
            Google Play Store (operated by Google LLC) through which the App is distributed.
          </li>
          <li>
            <strong>"Subscription"</strong> means any paid recurring access to the Service, offered
            through a Store, the App or otherwise.
          </li>
          <li>
            <strong>"Free Tier"</strong> means the limited free tier of the Service (e.g. basic
            tuner only).
          </li>
          <li>
            <strong>"Pro Tier"</strong> means the paid tier that includes unlimited access to
            advanced tunings, the full chord and lesson library, backing tracks, and offline
            downloads.
          </li>
          <li>
            <strong>"User"</strong>, <strong>"you"</strong>, <strong>"your"</strong> means any
            individual who downloads, installs, accesses or uses the App.
          </li>
        </ul>

        <h2 id="service">3. What Resonate Is (and Is Not)</h2>
        <p>Resonate is a mobile application that provides:</p>
        <ol>
          <li>
            a chromatic tuner for stringed instruments (guitar, bass, ukulele, mandolin, banjo,
            violin, cello, and others);
          </li>
          <li>a chord library with fingering, voicing, and capo suggestions;</li>
          <li>
            interactive lessons (video, audio, on-screen tablature) — added incrementally as Content
            is licensed or produced;
          </li>
          <li>
            backing tracks for practice — either original recordings, CC-licensed tracks, or tracks
            for which the Company has obtained a direct license from the rights-holder;
          </li>
          <li>progress tracking (locally stored on your device by default).</li>
        </ol>
        <p>
          Resonate is intended as a <strong>music-education and practice tool</strong>. It is{' '}
          <strong>not</strong>:
        </p>
        <ul>
          <li>
            medical treatment, mental-health care, or a substitute for any professional service;
          </li>
          <li>a guarantee of learning outcomes, exam results, or any specific skill level;</li>
          <li>
            licensed to perform music publicly on your behalf. If you wish to perform music publicly
            (concerts, venues, livestreams, monetised videos), you are responsible for obtaining the
            necessary public-performance licences from the relevant collecting society in your
            jurisdiction (ASCAP, BMI, SESAC, GEMA, JASRAC, PRS, MCPS, APRA AMCOS, MACP, etc.).
          </li>
        </ul>

        <h2 id="eligibility">4. Eligibility &amp; Age Requirements</h2>
        <p>
          You must be at least the age of digital consent in your jurisdiction to use the Service.
          The minimum ages we apply are:
        </p>
        <ul>
          <li>
            <strong>13 years old</strong> in countries not listed below.
          </li>
          <li>
            <strong>14 years old</strong> in Indonesia, South Korea.
          </li>
          <li>
            <strong>16 years old</strong> in the European Economic Area (EEA), United Kingdom,
            Singapore, Thailand.
          </li>
          <li>
            <strong>18 years old</strong> in some U.S. states with stricter protections.
          </li>
        </ul>
        <p>
          Users under 18 should only use the Service with the involvement of a parent or legal
          guardian.
        </p>

        <h2 id="tiers">5. Free Tier and Pro Tier</h2>
        <p>Resonate is offered in two tiers:</p>
        <ol>
          <li>
            <strong>Free Tier</strong> — A free chromatic tuner with standard tunings (standard E,
            drop D, open G, DADGAD, etc.), basic chord library, and a limited set of lessons.
          </li>
          <li>
            <strong>Pro Tier</strong> — A paid Subscription (see §12) that grants full access to the
            chord and lesson library, advanced tunings (DADGAD, alternate bass tunings, historical
            lute tunings, etc.), backing tracks, offline downloads, and (in future) personalised
            practice plans.
          </li>
        </ol>
        <p>
          Features available on each tier are subject to change. Existing Subscribers will be given
          reasonable notice before material changes.
        </p>

        <h2 id="license">6. License Grant to You</h2>
        <p>
          Subject to your continuing compliance with these Terms, we grant you a{' '}
          <strong>limited, non-exclusive, non-transferable, non-sublicensable, revocable</strong>{' '}
          license to:
        </p>
        <ul>
          <li>download and install the App on Devices you own or control;</li>
          <li>
            use the App and access the Content solely for your personal, non-commercial
            music-practice use;
          </li>
          <li>stream or download Content for offline use within the App;</li>
          <li>
            quote brief excerpts of chord progressions or tablature in your own original
            compositions or teaching materials, provided that you (a) attribute the source to the
            original creator and Resonate, and (b) do not reproduce more than 8 bars of a
            copyrighted work or more than 100 words of lyrics.
          </li>
        </ul>

        <h2 id="restrictions">7. Restrictions on Use</h2>
        <p>
          You agree <strong>not</strong> to:
        </p>
        <ol>
          <li>
            reproduce, redistribute, republish, retransmit, sell, sublicense, rent, lease or lend
            any Content, in whole or in part;
          </li>
          <li>
            use the audio Content, transcriptions, chord charts, or lessons to train, fine-tune, or
            evaluate any AI/ML model, music-generation system, or voice/instrument-clone system (see
            §10);
          </li>
          <li>
            use the App in a way that infringes any third party's intellectual property rights
            (copyright, trademark, trade secret, privacy, publicity, or other);
          </li>
          <li>
            use Content for public performance, broadcast, livestream monetisation, or commercial
            distribution without obtaining the necessary licences from the relevant collecting
            society (ASCAP/BMI/SESAC in the U.S., PRS/MCPS in the U.K., GEMA in Germany, JASRAC in
            Japan, APRA AMCOS in Australia, MACP in Malaysia, etc.);
          </li>
          <li>
            reverse engineer, decompile, disassemble, or attempt to derive the source code of the
            App;
          </li>
          <li>
            remove, alter or obscure any copyright, trademark, attribution or other proprietary
            notice;
          </li>
          <li>use the App in any unlawful manner or in violation of any applicable law;</li>
          <li>
            scrape, crawl, archive or otherwise extract data from the App using automated means;
          </li>
          <li>
            attempt to circumvent any security measure, access control or rate limit implemented in
            the App.
          </li>
        </ol>

        <h2 id="ip">8. Intellectual Property Rights</h2>
        <p>
          The Service, the App, the audio Content, the chord charts, the transcriptions, the backing
          tracks, the lessons, the brand, and the trade dress are and will remain the exclusive
          property of the Company and our licensors (including music publishers, performing-rights
          organisations, voice talent, and instructors). No rights are granted to you except the
          limited license expressly set out in §6.
        </p>
        <p>Music-licensing structure:</p>
        <ul>
          <li>
            <strong>Original Content</strong> — Written, recorded, and produced in-house by the
            Company. All rights reserved.
          </li>
          <li>
            <strong>CC-licensed Content</strong> — Made available under Creative Commons licences
            (typically CC BY 4.0, CC BY-SA 4.0, or CC0). Attribution is provided in the App and in
            the metadata for each piece of Content. You may re-use such Content under the terms of
            the relevant CC licence.
          </li>
          <li>
            <strong>Directly licensed Content</strong> — Licensed from the rights-holder under a
            specific written agreement. Use is restricted to the personal practice purposes
            described in §6.
          </li>
          <li>
            <strong>Public-domain Content</strong> — Where the underlying composition is in the
            public domain in your jurisdiction, the recording and any added arrangements may still
            be copyrighted by the Company or by a third party.
          </li>
        </ul>
        <p>
          The Company respects the intellectual-property rights of others. See §28 for our
          copyright-complaints procedure if you believe any Content infringes your copyright.
        </p>

        <h2 id="music">9. Music, Chords, Tabs &amp; Backing Tracks</h2>
        <p>
          Resonate's music library is curated carefully. Chord progressions, voicings, and
          fingerings are based on common-practice musical conventions. Tablature and transcriptions
          are either:
        </p>
        <ul>
          <li>produced in-house by our instructional team;</li>
          <li>
            licensed from a third-party publisher (e.g. Hal Leonard, Alfred Music) under a per-track
            royalty arrangement;
          </li>
          <li>
            transcribed by users and submitted under a Contributor Agreement (see §10.2) that
            transfers all rights to the Company; or
          </li>
          <li>explicitly in the public domain in the user's jurisdiction.</li>
        </ul>
        <p>
          <strong>Lyrics.</strong> Where lyrics are included, we use only:
        </p>
        <ul>
          <li>lyrics we have licensed from the relevant music publisher;</li>
          <li>
            lyrics in the public domain in your jurisdiction (typically 70 years after the author's
            death, or per the law of your jurisdiction);
          </li>
          <li>
            lyrics in the <strong>U.S. only</strong> that are unambiguously in the public domain
            under U.S. copyright law (17 U.S.C. § 304).
          </li>
        </ul>
        <p>
          The Company does <strong>not</strong> assert that lyrics are public domain in your
          jurisdiction merely because they are public domain in the U.S.
        </p>

        <h2 id="voice">10. Voice Talent &amp; Audio Production</h2>
        <p>Resonate's spoken and sung audio Content is produced by:</p>
        <ul>
          <li>
            <strong>In-house voice talent</strong> under direct contract with the Company;
          </li>
          <li>
            <strong>Third-party voice talent</strong> through agencies or platforms;
          </li>
          <li>
            <strong>Voice-synthesis providers</strong> for fully synthesised voices that are not
            based on a real person's biometric data without consent.
          </li>
        </ul>
        <p>
          <strong>You may not</strong> use any Resonate audio (including lessons, intros,
          narrations, or backing-track performances) to train, fine-tune, evaluate, or clone any
          AI/ML model, music-generation system, or voice/instrument-synthesis system. This includes
          (without limitation) training a model that produces chord charts, transcriptions, or music
          in the style of Resonate Content.
        </p>

        <h3>10.2 User contributions (in future versions)</h3>
        <p>
          If we release a feature that lets you submit your own chord progressions, transcriptions,
          or recordings ("<strong>User Contributions</strong>"), you must first agree to a
          Contributor Agreement that assigns or licenses your User Contributions to the Company.
          Until then, the App does not accept User Contributions.
        </p>

        <h2 id="mic">11. Microphone Permission &amp; On-Device Audio Processing</h2>
        <p>
          The tuner feature requires access to your Device's microphone. The App processes the audio
          signal <strong>in real time, on your Device</strong>, to detect the fundamental frequency
          of the played note. Specifically:
        </p>
        <ol>
          <li>
            <strong>No recording.</strong> The App does not record, save, buffer, encode, compress,
            or store the audio signal beyond what is needed for instantaneous pitch detection.
          </li>
          <li>
            <strong>No transmission.</strong> The App does not transmit the audio signal, or any
            feature extracted from it, to the Company's servers, to a third-party, or to any AI/ML
            system.
          </li>
          <li>
            <strong>No aggregation.</strong> The App does not send aggregate "people are tuning to
            442 Hz this week" statistics to us.
          </li>
          <li>
            <strong>User control.</strong> You can revoke microphone permission at any time in your
            Device's privacy settings. The tuner will then stop working; all other features (chord
            library, lessons, etc.) continue to work.
          </li>
          <li>
            <strong>Apple &amp; Google disclosures.</strong> Our iOS and Android privacy labels
            reflect that microphone data is processed on-device and is not linked to your identity.
          </li>
        </ol>
        <p>
          By granting microphone permission, you confirm that the audio you analyse is your own
          playing (or that of a consenting third party in your private space). The App is not
          designed to capture or analyse conversations.
        </p>

        <h2 id="subscriptions">12. Subscriptions, Auto-Renewal &amp; Billing</h2>
        <p>
          Resonate is offered under a Free Tier (limited features) and a paid Pro Subscription. If
          you purchase a Pro Subscription:
        </p>
        <ol>
          <li>
            <strong>Billing.</strong> You authorise the Store to charge your designated payment
            method the Subscription fee (plus any applicable taxes) at the start of each billing
            period.
          </li>
          <li>
            <strong>Auto-renewal.</strong> Your Subscription will automatically renew at the end of
            each billing period unless and until you cancel it. Auto-renewal continues indefinitely
            unless cancelled.
          </li>
          <li>
            <strong>Renewal charge timing.</strong> Your payment method will be charged for renewal
            within 24 hours prior to the end of the current billing period.
          </li>
          <li>
            <strong>How to cancel.</strong> Cancel via your Store's subscription management at least
            24 hours before the next billing date.
          </li>
          <li>
            <strong>No mid-period cancellation.</strong> Once a billing period begins, you continue
            to have access until the period ends and will not receive a pro-rated refund except
            where required by law.
          </li>
          <li>
            <strong>Price changes.</strong> We may change Subscription fees at any time. Price
            changes will not affect the then-current billing period.
          </li>
          <li>
            <strong>Promotional pricing.</strong> Promotional or discounted pricing converts to the
            standard Subscription fee at the end of the promotional period unless cancelled.
          </li>
        </ol>

        <h2 id="trial">13. Free Trials &amp; Promotional Periods</h2>
        <p>If you start a free trial or other promotional period:</p>
        <ol>
          <li>You will not be charged during the trial / promotional period.</li>
          <li>
            Unless you cancel before the end of the trial / promotional period, your designated
            payment method will be charged the standard Subscription fee at the start of the next
            billing period.
          </li>
          <li>
            Each User is entitled to <strong>one</strong> free trial per Subscription tier per Store
            account.
          </li>
          <li>We may revoke or refuse a free trial or promotional offer at our sole discretion.</li>
        </ol>

        <h2 id="refunds">14. Refunds &amp; Cancellation</h2>
        <p>
          <strong>Store-governed refunds.</strong> Refund handling is governed by the Store's
          policies:
        </p>
        <ul>
          <li>
            <strong>Apple App Store:</strong> Refund requests are handled by Apple at{' '}
            <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
              reportaproblem.apple.com
            </a>
            .
          </li>
          <li>
            <strong>Google Play Store:</strong> Refund requests are handled by Google Play.
          </li>
        </ul>
        <p>
          <strong>Cooling-off (where applicable).</strong> If mandatory consumer law gives you a
          14-day right of withdrawal, that right is <strong>waived</strong> at the moment you
          expressly consent to immediate performance (i.e. by tapping "Buy").
        </p>
        <p>
          <strong>Our additional goodwill policy.</strong> We may at our sole discretion offer a
          refund of up to 30 days from the original purchase date if you contact us at the address
          in §29 and explain why the Service did not meet your reasonable expectations.
        </p>

        <h2 id="modifications">15. Modifications to the Service</h2>
        <p>
          We reserve the right, at any time and from time to time, to modify, suspend or discontinue
          the Service (or any part of it), temporarily or permanently; change the features, content,
          prices, or functionality of the Service (including the Free Tier feature set); and impose
          limits on certain features or restrict access to parts or all of the Service. Where the
          change is material and adverse to active Subscribers, we will provide at least 30 days'
          notice via in-App notification or email.
        </p>

        <h2 id="termination">16. Termination &amp; Suspension</h2>
        <p>
          <strong>By us.</strong> We may suspend or terminate your access to the Service at any
          time, with or without cause, including if we reasonably believe that you have breached
          these Terms.
        </p>
        <p>
          <strong>By you.</strong> You may stop using the Service at any time and may delete the App
          from your Devices. Cancellation of a paid Subscription is governed by §12.4 and §14.
        </p>
        <p>
          <strong>Effect of termination.</strong> Upon termination, the license granted to you in §6
          ends immediately. Sections that by their nature should survive termination will survive.
        </p>

        <h2 id="warranty">17. Disclaimer of Warranties ("AS IS")</h2>
        <p>
          <strong>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE, THE APP, THE CONTENT AND
            ALL AUDIO SESSIONS, CHORD CHARTS, TRANSCRIPTIONS AND BACKING TRACKS ARE PROVIDED "AS IS"
            AND "AS AVAILABLE", WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
            WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF MERCHANTABILITY, SATISFACTORY QUALITY,
            FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, QUIET ENJOYMENT, ACCURACY, OR THAT
            USE WILL BE UNINTERRUPTED OR ERROR-FREE.
          </strong>
        </p>
        <p>
          We do not warrant that the tuner will detect any specific instrument, tuning, or pitch to
          within any specific accuracy threshold. Tuning accuracy depends on the Device's
          microphone, ambient noise, instrument pickup, and pitch-detection algorithm. We do our
          best but cannot guarantee ±0.1 cent accuracy on any Device.
        </p>

        <h2 id="liability">18. Limitation of Liability</h2>
        <p>
          <strong>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL THE COMPANY, ITS
            AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, CONTRACTORS, LICENSORS, INSTRUCTORS,
            VOICE TALENT OR SUPPLIERS BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY INDIRECT,
            INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES; ANY LOSS OF PROFITS,
            REVENUE, BUSINESS, GOODWILL, ANTICIPATED SAVINGS, DATA, USE, OR OTHER INTANGIBLE LOSSES;
            OR ANY DAMAGES RESULTING FROM YOUR ACCESS TO OR USE OF (OR INABILITY TO ACCESS OR USE)
            THE SERVICE.
          </strong>
        </p>
        <p>
          <strong>
            IN ANY EVENT, THE AGGREGATE LIABILITY OF THE COMPANY AND ITS AFFILIATES, LICENSORS AND
            SUPPLIERS WILL NOT EXCEED THE GREATER OF (A) THE TOTAL FEES PAID BY YOU IN THE TWELVE
            (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED U.S.
            DOLLARS (USD 100).
          </strong>
        </p>
        <p>
          Nothing in these Terms is intended to exclude or limit liability that cannot be excluded
          or limited under applicable law.
        </p>

        <h2 id="indemnification">19. Indemnification by You</h2>
        <p>
          You agree to defend, indemnify and hold harmless the Company, its affiliates and their
          respective directors, officers, employees, agents, contractors, licensors, instructors,
          voice talent and suppliers from and against any and all claims, damages, obligations,
          losses, liabilities, costs or expenses (including reasonable attorneys' fees) arising from
          your access to or use of the Service, your violation of these Terms, or your negligent or
          wrongful act or omission.
        </p>

        <h2 id="export">20. Export Controls &amp; Sanctions</h2>
        <p>
          You represent and warrant that you are not located in, under the control of, or a national
          or resident of any country subject to U.S., U.K., EU, U.N. or Singaporean sanctions or
          export-control restrictions. You agree to comply with all applicable export-control and
          sanctions laws.
        </p>

        <h2 id="law">21. Governing Law</h2>
        <p>
          These Terms, and any non-contractual obligations arising out of or in connection with
          them, are governed by and construed in accordance with the laws of the Republic of
          Singapore, without regard to its conflict-of-laws principles. The United Nations
          Convention on Contracts for the International Sale of Goods does not apply.
        </p>

        <h2 id="dispute">22. Dispute Resolution &amp; Arbitration</h2>
        <p>
          <strong>Informal resolution first.</strong> Before filing any formal claim, you agree to
          contact us at the address in §29 and give us 30 days to resolve the issue informally.
        </p>
        <p>
          <strong>Binding arbitration.</strong> Any dispute arising out of or relating to these
          Terms will be determined by binding arbitration administered by the Singapore
          International Arbitration Centre (SIAC) under its then-current Arbitration Rules, by a
          single arbitrator. The seat of arbitration will be Singapore. The language of arbitration
          will be English.
        </p>
        <p>
          <strong>Exceptions.</strong> Either party may bring (a) an action for injunctive relief in
          a court of competent jurisdiction to prevent (or stop) an actual or threatened
          infringement of intellectual property rights, or (b) a small-claims action within the
          scope of that court's small-claims jurisdiction.
        </p>

        <h2 id="classaction">23. Class Action &amp; Jury-Trial Waiver</h2>
        <p>
          <strong>
            TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOU AND THE COMPANY AGREE THAT EACH MAY BRING
            CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF
            OR CLASS MEMBER IN ANY PURPORTED CLASS, CONSOLIDATED, COLLECTIVE OR REPRESENTATIVE
            ACTION.
          </strong>
        </p>
        <p>
          To the extent a claim proceeds in court rather than arbitration, you and the Company each
          knowingly and irrevocably waive any right to a trial by jury. This does not apply where
          unenforceable (e.g. Quebec residents, certain EU consumers).
        </p>

        <h2 id="force">24. Force Majeure</h2>
        <p>
          The Company will not be liable for any delay or failure to perform any obligation under
          these Terms (excluding the obligation to pay) where caused by an event beyond its
          reasonable control.
        </p>

        <h2 id="severability">25. Severability</h2>
        <p>
          If any provision of these Terms is held to be invalid, illegal or unenforceable, that
          provision will be severed and the remaining provisions will remain in full force and
          effect.
        </p>

        <h2 id="entire">26. Entire Agreement</h2>
        <p>
          These Terms, together with the{' '}
          <Link href="/resonate/policy" className="text-coral underline">
            Resonate Privacy Policy
          </Link>{' '}
          and any policies referenced within them, constitute the entire agreement between you and
          the Company with respect to the Service.
        </p>

        <h2 id="assignment">27. Assignment</h2>
        <p>
          You may not assign or transfer these Terms or any rights granted under them without the
          Company's prior written consent. We may assign these Terms at any time.
        </p>

        <h2 id="notices">28. Notices &amp; Copyright Complaints</h2>
        <p>
          Notices to you may be delivered via in-App notification, email to the address provided to
          the Store, or by posting a notice on our website at positiveness.club. Notices are deemed
          received within 24 hours of delivery by email or posting, or upon display in the App.
        </p>
        <p>
          <strong>DMCA / copyright complaints.</strong> If you believe any Content infringes your
          copyright, send a written notice to{' '}
          <a href="mailto:legal@positiveness.club">legal@positiveness.club</a> containing:
        </p>
        <ol>
          <li>identification of the copyrighted work claimed to have been infringed;</li>
          <li>
            identification of the material that is claimed to be infringing or to be the subject of
            infringing activity, with information sufficient to permit us to locate the material;
          </li>
          <li>your contact information (name, address, telephone number, email);</li>
          <li>
            a statement that you have a good-faith belief that use of the material in the manner
            complained of is not authorised;
          </li>
          <li>
            a statement, made under penalty of perjury, that the above information is accurate and
            that you are the copyright owner or authorised to act on the copyright owner's behalf;
          </li>
          <li>your physical or electronic signature.</li>
        </ol>
        <p>
          We will respond to valid DMCA notices within 10 business days and may remove or disable
          access to the allegedly infringing Content while we investigate.
        </p>

        <h2 id="contact">29. How to Contact Us</h2>
        <p>For any questions about these Terms, complaints, or claims, contact:</p>
        <ul>
          <li>
            Email: <a href="mailto:legal@positiveness.club">legal@positiveness.club</a>
          </li>
          <li>
            Postal: positiveness.club Pte Ltd, [registered address, Singapore — to be confirmed by
            counsel], Republic of Singapore
          </li>
        </ul>
        <p>We aim to acknowledge all written inquiries within 30 days.</p>

        <h2 id="regional">30. Region-Specific Terms</h2>
        <p>The following supplementary terms apply to Users in the listed jurisdictions.</p>

        <h3>30.1 European Economic Area (EEA), United Kingdom, Switzerland</h3>
        <ul>
          <li>
            Consumers retain all mandatory rights under EU consumer law and the EU Digital Content
            Directive (2019/770).
          </li>
          <li>
            The European Commission's Online Dispute Resolution platform is available at{' '}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              ec.europa.eu/consumers/odr
            </a>
            .
          </li>
        </ul>

        <h3>30.2 United States — California</h3>
        <ul>
          <li>
            To the maximum extent permitted by California Civil Code § 1542, you waive any right to
            claim any damages not expressly identified in §18.
          </li>
        </ul>

        <h3>30.3 Australia</h3>
        <ul>
          <li>
            Under the Australian Consumer Law, you have rights that cannot be excluded, including
            the guarantee of acceptable quality. Nothing in these Terms is intended to override
            those rights.
          </li>
        </ul>

        <h3>30.4 Singapore</h3>
        <ul>
          <li>
            Nothing in these Terms is intended to affect your rights under the Singapore Consumer
            Protection (Fair Trading) Act 2003 or the Singapore Personal Data Protection Act 2012.
          </li>
        </ul>
      </article>

      <hr className="my-16 border-line" />

      <footer className="text-sm text-mute">
        <p className="mb-4">
          <strong>Document control:</strong> Version {VERSION} · Effective {LAST_UPDATED} · Owner:
          positiveness.club Pte Ltd.
        </p>
        <p className="mb-4">
          <strong>Not legal advice.</strong> This document was drafted by the Company as a starting
          template. It has <strong>not</strong> been reviewed by licensed counsel. Before charging
          money for the Service or shipping to a new jurisdiction, the Company must have a licensed
          attorney in the relevant jurisdiction review and approve this document.
        </p>
        <p>
          Questions or comments? Email{' '}
          <a href="mailto:legal@positiveness.club" className="text-coral underline">
            legal@positiveness.club
          </a>
          .
        </p>
      </footer>
    </main>
  )
}
