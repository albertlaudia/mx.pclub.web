/**
 * Riseup — Terms and Conditions
 *
 * Live URL referenced from App Store / Play Store metadata for the Riseup app.
 *
 * Riseup is a habit / morning-routine app. The legal posture is:
 *   - Local-first, no analytics
 *   - No medical / mental-health claims (it's a habit tracker, not a therapy app)
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
  title: 'Riseup — Terms and Conditions',
  description:
    'Terms and conditions governing use of the Riseup habit / morning-routine app. Includes subscription terms, no-medical-advice disclaimer, limitation of liability, and Singapore governing law.',
  alternates: { canonical: `${SITE_URL}/riseup/terms` },
  robots: { index: true, follow: true },
}

export const dynamic = 'force-static'

const LAST_UPDATED = '2026-07-13'
const VERSION = 'v1.0'

const SECTIONS = [
  { id: 'acceptance', title: '1. Acceptance of these Terms' },
  { id: 'definitions', title: '2. Definitions' },
  { id: 'service', title: '3. What Riseup Is (and Is Not)' },
  { id: 'eligibility', title: '4. Eligibility & Age Requirements' },
  { id: 'tiers', title: '5. Free Tier and Pro Tier' },
  { id: 'license', title: '6. License Grant to You' },
  { id: 'restrictions', title: '7. Restrictions on Use' },
  { id: 'ip', title: '8. Intellectual Property Rights' },
  { id: 'noadvice', title: '9. Books Are Not Professional Advice' },
  { id: 'voice', title: '10. Voice Talent & Audio Production' },
  { id: 'subscriptions', title: '11. Subscriptions, Auto-Renewal & Billing' },
  { id: 'trial', title: '12. Free Trials & Promotional Periods' },
  { id: 'refunds', title: '13. Refunds & Cancellation' },
  { id: 'modifications', title: '14. Modifications to the Service' },
  { id: 'termination', title: '15. Termination & Suspension' },
  { id: 'warranty', title: '16. Disclaimer of Warranties ("AS IS")' },
  { id: 'liability', title: '17. Limitation of Liability' },
  { id: 'indemnification', title: '18. Indemnification by You' },
  { id: 'export', title: '19. Export Controls & Sanctions' },
  { id: 'law', title: '20. Governing Law' },
  { id: 'dispute', title: '21. Dispute Resolution & Arbitration' },
  { id: 'classaction', title: '22. Class Action & Jury-Trial Waiver' },
  { id: 'force', title: '23. Force Majeure' },
  { id: 'severability', title: '24. Severability' },
  { id: 'entire', title: '25. Entire Agreement' },
  { id: 'assignment', title: '26. Assignment' },
  { id: 'notices', title: '27. Notices' },
  { id: 'contact', title: '28. How to Contact Us' },
  { id: 'regional', title: '29. Region-Specific Terms' },
]

export default function RiseupTermsPage() {
  return (
    <main className="container-narrow py-12 md:py-20">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="chip">Riseup</span>
          <span className="chip">Legal</span>
        </div>
        <h1 className="text-display-md md:text-display-lg font-bold tracking-tight mb-3">
          Riseup — Terms and Conditions
        </h1>
        <p className="text-mute text-lg mb-2">
          These terms govern your use of the Riseup mobile application. Read them carefully — they
          affect your legal rights, including waivers of class-action and jury-trial rights.
        </p>
        <p className="text-sm text-mute">
          Version <span className="font-mono">{VERSION}</span> · Last updated{' '}
          <time dateTime={LAST_UPDATED}>{LAST_UPDATED}</time> · Effective immediately
        </p>
        <p className="text-sm text-mute mt-2">
          Looking for the privacy policy?{' '}
          <Link href="/riseup/policy" className="text-coral underline">
            See Riseup — Privacy Policy
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
          the Riseup mobile application (the <strong>"App"</strong> or <strong>"Riseup"</strong>).
        </p>
        <p>
          By downloading, installing, accessing or using Riseup — including any of its morning
          routine prompts, habit tracking, journal entries, or related services made available by
          the Company (collectively, the <strong>"Service"</strong>) — you agree to be bound by
          these Terms. If you do not agree, do not download, install or use the Service.
        </p>

        <h2 id="definitions">2. Definitions</h2>
        <ul>
          <li>
            <strong>"App"</strong> means the Riseup mobile application, including any updates,
            upgrades, patches, fixes, translations, and localizations.
          </li>
          <li>
            <strong>"Content"</strong> means all audio, text, images, graphics, music, software,
            source code, designs, trademarks, logos and other material made available through the
            Service.
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
            <strong>"Free Tier"</strong> means the limited free tier of the Service.
          </li>
          <li>
            <strong>"Pro Tier"</strong> means the paid tier that includes unlimited access to all
            features.
          </li>
          <li>
            <strong>"User"</strong>, <strong>"you"</strong>, <strong>"your"</strong> means any
            individual who downloads, installs, accesses or uses the App.
          </li>
        </ul>

        <h2 id="service">3. What Riseup Is (and Is Not)</h2>
        <p>Riseup is a mobile application that provides:</p>
        <ol>
          <li>morning routine prompts and reminders (configurable by the User);</li>
          <li>habit tracking with streak counters (locally stored on your device by default);</li>
          <li>optional journal entries (locally stored on your device by default);</li>
          <li>short audio coaching sessions (read or listened to within the App);</li>
          <li>progress visualisation and motivational nudges.</li>
        </ol>
        <p>
          Riseup is intended as a <strong>self-coaching and accountability tool</strong> for
          generally healthy adults. It is <strong>not</strong> medical treatment, mental-health
          care, professional coaching, or any other professional service.
        </p>
        <p>
          Riseup is currently in <strong>public beta</strong>. Features, prompt count, supported
          languages, and pricing may change without notice.
        </p>
        <p>
          <strong>Riseup is not:</strong>
        </p>
        <ul>
          <li>medical, mental-health, or psychological treatment;</li>
          <li>professional life, business, or executive coaching;</li>
          <li>a substitute for accountability partners, mentors, or therapists;</li>
          <li>a diagnostic or assessment tool;</li>
          <li>covered by health insurance unless we explicitly state otherwise.</li>
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
            <strong>15 years old</strong> in the Czech Republic.
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
          guardian. If you are in active mental-health crisis or have a severe mental-health
          condition, please consult a clinician before using Riseup.
        </p>

        <h2 id="tiers">5. Free Tier and Pro Tier</h2>
        <p>Riseup is offered in two tiers:</p>
        <ol>
          <li>
            <strong>Free Tier</strong> — A fixed number of free routines and habit slots (for
            example, three routines and three habits), which may be revised at our discretion.
          </li>
          <li>
            <strong>Pro Tier</strong> — A paid Subscription (see §11) that grants unlimited
            routines, unlimited habits, full access to the audio library, and offline downloads.
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
          <li>use the App and access the Content solely for your personal, non-commercial use;</li>
          <li>stream or download Content for offline use within the App;</li>
          <li>
            quote brief excerpts of audio transcripts (when available) in your own original writing,
            provided that you (a) attribute the quote to Riseup and the original creator, and (b) do
            not reproduce more than 100 words.
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
            use the audio coaching to train, fine-tune, or evaluate any AI/ML model, voice-clone, or
            speech-synthesis system (see §10);
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
            the App;
          </li>
          <li>
            use the App while operating a vehicle, or in any other situation requiring your full
            attention;
          </li>
          <li>use the App in a way that interferes with safety-critical systems;</li>
          <li>use the App in a way that encourages others to harm themselves or others.</li>
        </ol>

        <h2 id="ip">8. Intellectual Property Rights</h2>
        <p>
          The Service, the App, the audio Content, the transcripts, the brand, and the trade dress
          are and will remain the exclusive property of the Company and our licensors (including
          voice talent, script writers, and music licensors). No rights are granted to you except
          the limited license expressly set out in §6.
        </p>
        <p>
          The Company respects the intellectual-property rights of others. See §20 for our
          copyright-complaints procedure if you believe any Content infringes your copyright.
        </p>

        <h2 id="noadvice">9. No Professional Advice</h2>
        <p>
          Audio coaching, transcripts, and educational content within Riseup reflect the authors'
          professional opinions and are not a substitute for:
        </p>
        <ul>
          <li>medical, psychiatric, or psychological care from a licensed provider;</li>
          <li>professional life, business, or executive coaching from a qualified coach;</li>
          <li>legal, tax, financial, or insurance advice;</li>
          <li>any other professional service tailored to your specific circumstances.</li>
        </ul>
        <p>
          If you are currently working with a clinician, coach, or other professional, follow their
          guidance. If content in Riseup conflicts with their advice, follow your professional.
        </p>

        <h2 id="voice">10. Voice Talent &amp; Audio Production</h2>
        <p>Riseup's audio sessions are produced by:</p>
        <ul>
          <li>
            <strong>In-house voice actors</strong> under direct contract with the Company;
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
          Voice-talent agreements are concluded directly between the Company and the talent or
          agency. <strong>You may not</strong> use any Riseup audio to train, fine-tune, evaluate,
          or clone any AI/ML model or voice-synthesis system.
        </p>

        <h2 id="subscriptions">11. Subscriptions, Auto-Renewal &amp; Billing</h2>
        <p>
          Riseup is offered under a Free Tier (limited features) and a paid Pro Subscription. If you
          purchase a Pro Subscription:
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

        <h2 id="trial">12. Free Trials &amp; Promotional Periods</h2>
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

        <h2 id="refunds">13. Refunds &amp; Cancellation</h2>
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
          in §28 and explain why the Service did not meet your reasonable expectations.
        </p>

        <h2 id="modifications">14. Modifications to the Service</h2>
        <p>
          We reserve the right, at any time and from time to time, to modify, suspend or discontinue
          the Service (or any part of it), temporarily or permanently; change the features, content,
          prices, or functionality of the Service (including the Free Tier feature set); and impose
          limits on certain features or restrict access to parts or all of the Service. Where the
          change is material and adverse to active Subscribers, we will provide at least 30 days'
          notice via in-App notification or email.
        </p>

        <h2 id="termination">15. Termination &amp; Suspension</h2>
        <p>
          <strong>By us.</strong> We may suspend or terminate your access to the Service at any
          time, with or without cause, including if we reasonably believe that you have breached
          these Terms.
        </p>
        <p>
          <strong>By you.</strong> You may stop using the Service at any time and may delete the App
          from your Devices. Cancellation of a paid Subscription is governed by §11.4 and §13.
        </p>
        <p>
          <strong>Effect of termination.</strong> Upon termination, the license granted to you in §6
          ends immediately. Sections that by their nature should survive termination will survive.
        </p>

        <h2 id="warranty">16. Disclaimer of Warranties ("AS IS")</h2>
        <p>
          <strong>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE, THE APP, THE CONTENT AND
            ALL AUDIO SESSIONS ARE PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTY OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF
            MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE,
            NON-INFRINGEMENT, QUIET ENJOYMENT, ACCURACY, OR THAT USE WILL BE UNINTERRUPTED OR
            ERROR-FREE.
          </strong>
        </p>
        <p>
          We do not warrant that any habit-tracking feature will produce any specific outcome (e.g.
          improved productivity, better sleep, weight loss). Individual results may vary.
        </p>

        <h2 id="liability">17. Limitation of Liability</h2>
        <p>
          <strong>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL THE COMPANY, ITS
            AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, CONTRACTORS, LICENSORS, COACHES,
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
          or limited under applicable law — including liability for fraud, for death or personal
          injury caused by negligence, or for any other liability that cannot be lawfully excluded
          or limited.
        </p>

        <h2 id="indemnification">18. Indemnification by You</h2>
        <p>
          You agree to defend, indemnify and hold harmless the Company, its affiliates and their
          respective directors, officers, employees, agents, contractors, licensors, coaches, voice
          talent and suppliers from and against any and all claims, damages, obligations, losses,
          liabilities, costs or expenses (including reasonable attorneys' fees) arising from your
          access to or use of the Service, your violation of these Terms, or your negligent or
          wrongful act or omission.
        </p>

        <h2 id="export">19. Export Controls &amp; Sanctions</h2>
        <p>
          You represent and warrant that you are not located in, under the control of, or a national
          or resident of any country subject to U.S., U.K., EU, U.N. or Singaporean sanctions or
          export-control restrictions. You agree to comply with all applicable export-control and
          sanctions laws.
        </p>

        <h2 id="law">20. Governing Law</h2>
        <p>
          These Terms, and any non-contractual obligations arising out of or in connection with
          them, are governed by and construed in accordance with the laws of the Republic of
          Singapore, without regard to its conflict-of-laws principles. The United Nations
          Convention on Contracts for the International Sale of Goods does not apply.
        </p>

        <h2 id="dispute">21. Dispute Resolution &amp; Arbitration</h2>
        <p>
          <strong>Informal resolution first.</strong> Before filing any formal claim, you agree to
          contact us at the address in §28 and give us 30 days to resolve the issue informally.
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

        <h2 id="classaction">22. Class Action &amp; Jury-Trial Waiver</h2>
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

        <h2 id="force">23. Force Majeure</h2>
        <p>
          The Company will not be liable for any delay or failure to perform any obligation under
          these Terms (excluding the obligation to pay) where caused by an event beyond its
          reasonable control, including acts of God, natural disasters, pandemics, war, terrorism,
          civil unrest, government action, internet or telecommunications failures, power failures,
          cyberattacks, or labour disputes.
        </p>

        <h2 id="severability">24. Severability</h2>
        <p>
          If any provision of these Terms is held to be invalid, illegal or unenforceable, that
          provision will be severed and the remaining provisions will remain in full force and
          effect.
        </p>

        <h2 id="entire">25. Entire Agreement</h2>
        <p>
          These Terms, together with the{' '}
          <Link href="/riseup/policy" className="text-coral underline">
            Riseup Privacy Policy
          </Link>{' '}
          and any policies referenced within them, constitute the entire agreement between you and
          the Company with respect to the Service.
        </p>

        <h2 id="assignment">26. Assignment</h2>
        <p>
          You may not assign or transfer these Terms or any rights granted under them without the
          Company's prior written consent. We may assign these Terms at any time, including in
          connection with a merger, acquisition, corporate reorganization, sale of all or
          substantially all of our assets, or by operation of law.
        </p>

        <h2 id="notices">27. Notices</h2>
        <p>
          Notices to you may be delivered via in-App notification, email to the address provided to
          the Store, or by posting a notice on our website at positiveness.club. Notices are deemed
          received within 24 hours of delivery by email or posting, or upon display in the App.
        </p>

        <h2 id="contact">28. How to Contact Us</h2>
        <p>
          For any questions about these Terms, complaints, claims, or copyright-infringement
          notices, contact:
        </p>
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

        <h2 id="regional">29. Region-Specific Terms</h2>
        <p>The following supplementary terms apply to Users in the listed jurisdictions.</p>

        <h3>29.1 European Economic Area (EEA), United Kingdom, Switzerland</h3>
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

        <h3>29.2 United States — California</h3>
        <ul>
          <li>
            To the maximum extent permitted by California Civil Code § 1542, you waive any right to
            claim any damages not expressly identified in §17.
          </li>
          <li>
            Under the CCPA/CPRA, see the Riseup Privacy Policy for personal-information handling.
          </li>
        </ul>

        <h3>29.3 Australia</h3>
        <ul>
          <li>
            Under the Australian Consumer Law, you have rights that cannot be excluded, including
            the guarantee of acceptable quality. Nothing in these Terms is intended to override
            those rights.
          </li>
        </ul>

        <h3>29.4 Singapore</h3>
        <ul>
          <li>
            Nothing in these Terms is intended to affect your rights under the Singapore Consumer
            Protection (Fair Trading) Act 2003 or the Singapore Personal Data Protection Act 2012.
          </li>
        </ul>

        <h3>29.5 Indonesia</h3>
        <ul>
          <li>
            The dispute-resolution provisions in §21 apply except where prohibited by mandatory
            Indonesian law.
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
