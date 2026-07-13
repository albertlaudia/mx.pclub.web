/**
 * HEAL — Terms and Conditions (URL: /heal/terms)
 *
 * This is the canonical / preferred URL for the HEAL T&C.
 * The legacy /heal/tnc route renders the same content for backwards
 * compatibility with already-shared App Store / Play Store links.
 *
 * Drafting notes:
 *   - HEAL is a clinical mental-health-adjacent app — the CYA clauses
 *     are heavier than for a generic app.
 *   - Crisis resources are referenced but not rendered (the footer on
 *     /apps/heal/privacy already has them).
 *   - Singapore governing law + SIAC arbitration + class-action waiver.
 *   - Not legal advice — must be reviewed by licensed counsel.
 *   - Version: v1.0  2026-07-13
 */

import { SITE_URL } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HEAL — Terms and Conditions',
  description:
    'Terms and conditions governing use of the HEAL app. Includes subscription terms, health disclaimer, medical advice disclaimer, crisis resources, limitation of liability, Singapore governing law, and SIAC arbitration.',
  alternates: { canonical: `${SITE_URL}/heal/terms` },
  robots: { index: true, follow: true },
}

export const dynamic = 'force-static'

const LAST_UPDATED = '2026-07-13'
const VERSION = 'v1.0'

const SECTIONS = [
  { id: 'acceptance', title: '1. Acceptance of these Terms' },
  { id: 'definitions', title: '2. Definitions' },
  { id: 'service', title: '3. What HEAL Is (and Is Not)' },
  { id: 'eligibility', title: '4. Eligibility & Age Requirements' },
  { id: 'license', title: '5. License Grant to You' },
  { id: 'restrictions', title: '6. Restrictions on Use' },
  { id: 'ip', title: '7. Intellectual Property Rights' },
  { id: 'health', title: '8. Health, Clinical & Medical Disclaimers' },
  { id: 'crisis', title: '9. Crisis Resources' },
  { id: 'noadvice', title: '10. No Professional Advice' },
  { id: 'voice', title: '11. Voice Talent & Audio Production' },
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
  { id: 'telehealth', title: '31. Telemedicine & Cross-Border Health' },
  { id: 'research', title: '32. Research, Outcomes & De-identified Data' },
]

export default function HealTermsPage() {
  return (
    <main className="container-narrow py-12 md:py-20">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="chip">HEAL</span>
          <span className="chip">Legal</span>
        </div>
        <h1 className="text-display-md md:text-display-lg font-bold tracking-tight mb-3">
          HEAL — Terms and Conditions
        </h1>
        <p className="text-mute text-lg mb-2">
          These terms govern your use of the HEAL mobile application. Read them carefully — they
          affect your legal rights, including waivers of class-action and jury-trial rights.
        </p>
        <p className="text-sm text-mute">
          Version <span className="font-mono">{VERSION}</span> · Last updated{' '}
          <time dateTime={LAST_UPDATED}>{LAST_UPDATED}</time> · Effective immediately
        </p>
        <p className="text-sm text-mute mt-2">
          Looking for the privacy policy?{' '}
          <Link href="/heal/policy" className="text-coral underline">
            See HEAL — Privacy Policy
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
          the HEAL mobile application (the <strong>"App"</strong> or <strong>"HEAL"</strong>).
        </p>
        <p>
          By downloading, installing, accessing or using HEAL — including any of its guided audio,
          breathwork sessions, mood-tracking, journaling features, or related services made
          available by the Company (collectively, the <strong>"Service"</strong>) — you agree to be
          bound by these Terms. If you do not agree to these Terms in their entirety, do not
          download, install or use the Service and delete the App from your device.
        </p>
        <p>
          If you are accepting these Terms on behalf of an organization (e.g. as its employee or
          contractor), you represent that you have the authority to bind that organization, in which
          case <strong>"you"</strong> refers to that organization.
        </p>

        <h2 id="definitions">2. Definitions</h2>
        <ul>
          <li>
            <strong>"App"</strong> means the HEAL mobile application, including any updates,
            upgrades, patches, fixes, translations and localizations.
          </li>
          <li>
            <strong>"Content"</strong> means all audio recordings, voice narration scripts, text,
            images, graphics, music, software, source code, designs, trademarks, logos and other
            material made available through the Service.
          </li>
          <li>
            <strong>"Device"</strong> means any compatible mobile phone, tablet, wearable, smart
            speaker, web client or other device on which you install or access the App.
          </li>
          <li>
            <strong>"Emergency"</strong> means an imminent risk of harm to yourself or another
            person, including but not limited to suicidal ideation, self-harm, harm to others, or
            acute medical crisis.
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
            <strong>"User"</strong>, <strong>"you"</strong>, <strong>"your"</strong> means any
            individual who downloads, installs, accesses or uses the App.
          </li>
        </ul>

        <h2 id="service">3. What HEAL Is (and Is Not)</h2>
        <p>HEAL is a mobile application that provides:</p>
        <ol>
          <li>
            short (typically 3–10 minute) guided audio sessions combining breathwork, body scan,
            grounding, and other relaxation techniques;
          </li>
          <li>optional mood and symptom tracking (locally stored on your device by default);</li>
          <li>optional journaling (locally stored on your device by default);</li>
          <li>educational content about stress, anxiety, sleep, and related topics;</li>
          <li>access to crisis hotlines and resources for the country you select.</li>
        </ol>
        <p>
          HEAL is intended as a <strong>self-care support tool</strong> for generally healthy adults
          experiencing everyday stress, anxiety or sleep difficulty. It is <strong>not</strong> a
          substitute for medical care, mental-health treatment, crisis intervention, or any other
          professional service.
        </p>
        <p>
          HEAL is currently in <strong>public beta</strong>. Features, session count, supported
          languages, and pricing may change without notice. We may discontinue the Service, in whole
          or in part, at any time.
        </p>
        <p>
          <strong>HEAL is not:</strong>
        </p>
        <ul>
          <li>medical or mental-health treatment;</li>
          <li>a crisis service or suicide-prevention hotline (see §9 for crisis resources);</li>
          <li>a diagnostic tool;</li>
          <li>covered by health insurance unless we explicitly state otherwise;</li>
          <li>
            a substitute for a clinician, therapist, psychiatrist, or other licensed professional;
          </li>
          <li>prescribed, recommended or endorsed by any government health authority.</li>
        </ul>

        <h2 id="eligibility">4. Eligibility & Age Requirements</h2>
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
          HEAL is designed for adults. Users under 18 should only use the Service with the
          involvement of a parent or legal guardian. If you are in active mental-health crisis or
          have a diagnosis of a severe mental-health condition (e.g. schizophrenia, bipolar I
          disorder, severe PTSD, active eating disorder, active substance-use disorder), please
          consult a clinician before using HEAL.
        </p>

        <h2 id="license">5. License Grant to You</h2>
        <p>
          Subject to your continuing compliance with these Terms, we grant you a{' '}
          <strong>limited, non-exclusive, non-transferable, non-sublicensable, revocable</strong>{' '}
          license to:
        </p>
        <ul>
          <li>download and install the App on Devices you own or control;</li>
          <li>use the App and access the Content solely for your personal, non-commercial use;</li>
          <li>stream or download Content for offline listening within the App;</li>
          <li>
            quote brief excerpts of audio transcripts (when available) in your own original writing
            (for example, a book review or social media post), provided that you (a) attribute the
            quote to HEAL and the original creator, (b) do not reproduce more than 100 words, and
            (c) do not use the quote in advertising.
          </li>
        </ul>

        <h2 id="restrictions">6. Restrictions on Use</h2>
        <p>
          You agree <strong>not</strong> to:
        </p>
        <ol>
          <li>
            use HEAL during an Emergency — call your local emergency number (e.g. 911, 999, 112,
            119) or a crisis hotline (§9) instead;
          </li>
          <li>rely on HEAL as a substitute for medical or mental-health care;</li>
          <li>
            redistribute, republish, retransmit, sell, sublicense or commercially exploit any audio,
            transcript or other Content;
          </li>
          <li>
            use audio recordings to train, fine-tune, or evaluate any AI/ML model, voice-clone, or
            speech-synthesis system (see §11);
          </li>
          <li>reverse engineer, decompile, or attempt to derive the source code of the App;</li>
          <li>
            remove or alter any copyright, trademark, attribution or other proprietary notice;
          </li>
          <li>use the App in any unlawful manner or in violation of any applicable law;</li>
          <li>
            use the App while operating a vehicle, or in any other situation requiring your full
            attention;
          </li>
          <li>
            use the App in a way that interferes with safety-critical systems (e.g. while piloting,
            or in a medical setting);
          </li>
          <li>attempt to circumvent any security, rate-limit, or access control;</li>
          <li>
            use the App to record, transcribe, or derive training data for any model without our
            express written consent.
          </li>
        </ol>

        <h2 id="ip">7. Intellectual Property Rights</h2>
        <p>
          The Service, the App, the audio Content, the transcripts, the brand and trade dress are
          and will remain the exclusive property of the Company and our licensors (including voice
          talent, script writers, sound designers, and music licensors). No rights are granted to
          you except the limited license expressly set out in §5.
        </p>

        <h2 id="health">8. Health, Clinical & Medical Disclaimers</h2>
        <p>
          <strong>You acknowledge and agree as follows:</strong>
        </p>
        <ol>
          <li>
            HEAL is <strong>not a medical device</strong> within the meaning of the U.S. Federal
            Food, Drug, and Cosmetic Act, the EU Medical Device Regulation (MDR 2017/745), or any
            analogous law.
          </li>
          <li>
            HEAL is <strong>not a clinical service</strong>. The Company is{' '}
            <strong>not a HIPAA covered entity</strong>, <strong>not a Business Associate</strong>{' '}
            of any HIPAA covered entity, and{' '}
            <strong>
              not licensed to practice medicine, psychology, psychiatry, counseling, social work, or
              any other regulated health profession
            </strong>
            .
          </li>
          <li>
            No clinician-patient, therapist-patient, or other professional relationship is created
            between you and the Company, or between you and any individual contributor (script
            writer, voice talent, sound designer, advisor) by your use of HEAL.
          </li>
          <li>
            The Content is for <strong>general educational and self-care purposes only</strong>. It
            is not intended to diagnose, treat, cure, or prevent any disease or condition, and is
            not a substitute for professional medical advice, diagnosis, or treatment.
          </li>
          <li>
            <strong>Always seek the advice of a qualified healthcare provider</strong> with any
            questions you may have regarding a medical or mental-health condition. Never disregard
            professional medical advice or delay in seeking it because of something you have heard,
            read, or experienced in HEAL.
          </li>
          <li>
            If you think you may have a medical or mental-health emergency, call your local
            emergency number or go to the nearest hospital.
          </li>
          <li>
            Individual results may vary. We do not claim that HEAL will produce any specific health
            outcome for any specific user.
          </li>
        </ol>

        <h2 id="crisis">9. Crisis Resources</h2>
        <p>
          If you are in crisis, in immediate danger, or having thoughts of harming yourself or
          others:
        </p>
        <ol>
          <li>
            <strong>Call your local emergency number</strong> (e.g. 911 in the U.S., 999 in the UK,
            112 in the EU, 119 in Indonesia, 995 in Singapore).
          </li>
          <li>
            <strong>Contact a crisis hotline.</strong> The Company publishes a list of crisis
            hotlines for 24 jurisdictions in the App's Resources section, in the{' '}
            <Link href="/heal/policy" className="text-coral underline">
              HEAL Privacy Policy
            </Link>
            , and on our website at{' '}
            <Link href="/apps/heal" className="text-coral underline">
              positiveness.club/apps/heal
            </Link>
            .
          </li>
          <li>
            <strong>Go to the nearest hospital emergency department.</strong>
          </li>
          <li>
            <strong>Tell a trusted person.</strong> Let a family member, friend, or colleague know
            what you are experiencing so they can support you.
          </li>
        </ol>
        <p>
          HEAL is not a crisis service, and the Company does not monitor the App in real time. We
          will not see your journal entries, mood logs, or distress signals, and we will not contact
          emergency services on your behalf.
        </p>

        <h2 id="noadvice">10. No Professional Advice</h2>
        <p>
          Audio sessions, transcripts, and educational content within HEAL are written and produced
          by qualified professionals. They reflect the authors' professional opinions and are not a
          substitute for:
        </p>
        <ul>
          <li>medical, psychiatric, or psychological care from a licensed provider;</li>
          <li>legal, tax, financial, or insurance advice;</li>
          <li>any other professional service tailored to your specific circumstances.</li>
        </ul>
        <p>
          If you are currently in treatment with a clinician, follow your clinician's guidance. If a
          session in HEAL conflicts with your clinician's advice, follow your clinician.
        </p>

        <h2 id="voice">11. Voice Talent &amp; Audio Production</h2>
        <p>HEAL's audio sessions are produced by:</p>
        <ul>
          <li>
            <strong>In-house voice actors</strong> under direct contract with the Company;
          </li>
          <li>
            <strong>Third-party voice talent</strong> through agencies or platforms (e.g.
            Voices.com, Fiverr);
          </li>
          <li>
            <strong>Voice-synthesis providers</strong> (e.g. ElevenLabs, PlayHT, Resemble AI) for
            fully synthesized voices that are not based on a real person's biometric data without
            consent.
          </li>
        </ul>
        <p>
          Voice-talent agreements are concluded directly between the Company and the talent or
          agency. Voice talent retain rights of attribution and may request the removal of their
          voice from new Content.
        </p>
        <p>
          <strong>You may not</strong> use any HEAL audio to train, fine-tune, evaluate, or clone
          any AI/ML model or voice-synthesis system.
        </p>

        <h2 id="subscriptions">12. Subscriptions, Auto-Renewal &amp; Billing</h2>
        <p>
          HEAL is offered under a free tier (limited sessions, with cooldown) and a paid Pro
          Subscription. If you purchase a Pro Subscription:
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
            <strong>How to cancel.</strong> Cancel via your Store's subscription management (Apple
            ID → Subscriptions → HEAL → Cancel, or Google Play → Subscriptions → HEAL → Cancel) at
            least 24 hours before the next billing date.
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
            <strong>Promotional pricing.</strong> Promotional or discounted pricing (including
            introductory offers) converts to the standard Subscription fee at the end of the
            promotional period unless cancelled.
          </li>
          <li>
            <strong>Family Sharing.</strong> Where supported by the Store, family sharing is
            governed by the Store's family-sharing policies.
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
          <li>
            We may revoke or refuse a free trial or promotional offer at our sole discretion,
            including where we suspect abuse.
          </li>
          <li>
            Free-tier users are not charged and may stop using the App at any time without notice.
          </li>
        </ol>

        <h2 id="refunds">14. Refunds &amp; Cancellation</h2>
        <p>
          <strong>Store-governed refunds.</strong> Refund handling for Subscriptions purchased
          through a Store is governed by that Store's refund policies:
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
          <strong>Cooling-off (where applicable).</strong> If mandatory consumer law in your
          jurisdiction (e.g. EU Consumer Rights Directive 2011/83/EU, UK Consumer Contracts
          Regulations 2013, Australian Consumer Law) gives you a right to withdraw within 14 days,
          that right is <strong>waived</strong> at the moment you expressly consent to immediate
          performance (i.e. by tapping "Buy").
        </p>
        <p>
          <strong>Our additional goodwill policy.</strong> Outside of the above, we may at our sole
          discretion offer a refund of up to 30 days from the original purchase date if you contact
          us and explain why the Service did not meet your reasonable expectations.
        </p>

        <h2 id="modifications">15. Modifications to the Service</h2>
        <p>We reserve the right, at any time and from time to time, to:</p>
        <ul>
          <li>
            modify, suspend or discontinue the Service (or any part of it), temporarily or
            permanently;
          </li>
          <li>
            change the features, content, prices, or functionality of the Service (including the
            free-tier session allowance);
          </li>
          <li>
            impose limits on certain features or restrict access to parts or all of the Service.
          </li>
        </ul>
        <p>
          Where the change is material and adverse to active Subscribers, we will provide at least
          30 days' notice in advance via in-App notification or email to the address on file.
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
          <strong>Effect of termination.</strong> Upon termination, the license granted to you in §5
          ends immediately. Sections that by their nature should survive termination will survive.
        </p>

        <h2 id="warranty">17. Disclaimer of Warranties ("AS IS")</h2>
        <p>
          <strong>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE, THE APP, THE CONTENT AND
            ALL SESSIONS ARE PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTY OF ANY KIND,
            EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF
            MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE,
            NON-INFRINGEMENT, QUIET ENJOYMENT, ACCURACY, OR THAT USE WILL BE UNINTERRUPTED OR
            ERROR-FREE.
          </strong>
        </p>
        <p>
          The Company does not warrant that the Service will meet your requirements, that any
          session will be effective for any particular purpose, that the Service will be
          uninterrupted, timely, secure or error-free, that any errors will be corrected, or that
          the App or its servers are free of viruses or other harmful components.
        </p>
        <p>
          No advice or information obtained by you from the Company will create any warranty not
          expressly stated in these Terms.
        </p>

        <h2 id="liability">18. Limitation of Liability</h2>
        <p>
          <strong>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL THE COMPANY, ITS
            AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, CONTRACTORS, LICENSORS, CLINICAL OR
            SCIENTIFIC ADVISORS, VOICE TALENT, OR SUPPLIERS BE LIABLE TO YOU OR TO ANY THIRD PARTY
            FOR:
          </strong>
        </p>
        <ol>
          <li>any indirect, incidental, consequential, special, exemplary or punitive damages;</li>
          <li>
            any loss of profits, revenue, business, goodwill, anticipated savings, data, use, or
            other intangible losses;
          </li>
          <li>
            any damages resulting from (a) your access to or use of (or inability to access or use)
            the Service; (b) any conduct or content of any third party; (c) any content obtained
            from the Service; or (d) unauthorized access or alteration of your transmissions or
            content;
          </li>
          <li>any harm arising from your reliance on (or failure to verify) any Content;</li>
          <li>
            any mental-health, medical, or wellness outcome, including any deterioration of a
            pre-existing condition.
          </li>
        </ol>
        <p>
          <strong>
            IN ANY EVENT, THE AGGREGATE LIABILITY OF THE COMPANY AND ITS AFFILIATES, LICENSORS AND
            SUPPLIERS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE WILL NOT EXCEED THE
            GREATER OF (A) THE TOTAL FEES PAID BY YOU TO THE COMPANY IN THE TWELVE (12) MONTHS
            PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS (USD 100).
          </strong>
        </p>
        <p>
          Nothing in these Terms is intended to exclude or limit liability that cannot be excluded
          or limited under applicable law — including liability for fraud, for death or personal
          injury caused by negligence, or for any other liability that cannot be lawfully excluded
          or limited.
        </p>

        <h2 id="indemnification">19. Indemnification by You</h2>
        <p>
          You agree to defend, indemnify and hold harmless the Company, its affiliates and their
          respective directors, officers, employees, agents, contractors, licensors, clinical or
          scientific advisors, voice talent and suppliers from and against any and all claims,
          damages, obligations, losses, liabilities, costs or expenses (including reasonable
          attorneys' fees) arising from your access to or use of the Service, your violation of
          these Terms, or your negligent or wrongful act or omission.
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
          <strong>Binding arbitration.</strong> Any dispute, claim or controversy arising out of or
          relating to these Terms will be determined by binding arbitration administered by the
          Singapore International Arbitration Centre (SIAC) under its then-current Arbitration
          Rules, by a single arbitrator. The seat of arbitration will be Singapore. The language of
          arbitration will be English. The award will be final and binding and may be entered as a
          judgment in any court of competent jurisdiction.
        </p>
        <p>
          <strong>Exceptions.</strong> Either party may bring (a) an action for injunctive or other
          equitable relief in a court of competent jurisdiction to prevent (or stop) an actual or
          threatened infringement of intellectual property rights, or (b) a small-claims action for
          any claim within the scope of that court's small-claims jurisdiction.
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
          knowingly and irrevocably waive any right to a trial by jury. This does not apply to
          class-action waivers that are unenforceable under the law of the user's jurisdiction (e.g.
          Quebec residents, certain EU consumers).
        </p>

        <h2 id="force">24. Force Majeure</h2>
        <p>
          The Company will not be liable for any delay or failure to perform any obligation under
          these Terms (excluding the obligation to pay) where caused by an event beyond its
          reasonable control, including acts of God, natural disasters, pandemics, war, terrorism,
          civil unrest, government action, internet or telecommunications failures, power failures,
          cyberattacks, or labour disputes.
        </p>

        <h2 id="severability">25. Severability</h2>
        <p>
          If any provision of these Terms is held to be invalid, illegal or unenforceable, that
          provision will be severed and the remaining provisions will remain in full force and
          effect. The severed provision will be replaced by a valid provision that most closely
          reflects the original intent.
        </p>

        <h2 id="entire">26. Entire Agreement</h2>
        <p>
          These Terms, together with the{' '}
          <Link href="/heal/policy" className="text-coral underline">
            HEAL Privacy Policy
          </Link>{' '}
          and any policies or notices referenced within them, constitute the entire agreement
          between you and the Company with respect to the Service.
        </p>

        <h2 id="assignment">27. Assignment</h2>
        <p>
          You may not assign or transfer these Terms or any rights granted under them without the
          Company's prior written consent. We may assign these Terms at any time, including in
          connection with a merger, acquisition, corporate reorganization, sale of all or
          substantially all of our assets, or by operation of law.
        </p>

        <h2 id="notices">28. Notices</h2>
        <p>
          Notices to you may be delivered via in-App notification, email to the address provided to
          the Store, or by posting a notice on our website at positiveness.club. Notices are deemed
          received within 24 hours of delivery by email or posting, or upon display in the App.
        </p>

        <h2 id="contact">29. How to Contact Us</h2>
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
          <li>
            Under the CCPA/CPRA, see the HEAL Privacy Policy for personal-information handling.
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

        <h3>30.5 Indonesia</h3>
        <ul>
          <li>
            The dispute-resolution provisions in §22 apply except where prohibited by mandatory
            Indonesian law.
          </li>
        </ul>

        <h2 id="telehealth">31. Telemedicine &amp; Cross-Border Health</h2>
        <p>
          HEAL does not provide telemedicine. The Company is not licensed to provide medical,
          mental-health, or any other regulated health service in any jurisdiction. Use of HEAL does
          not establish a clinical relationship with a provider in your jurisdiction. If you reside
          in a country that prohibits the use of unlicensed digital mental-health tools, do not use
          HEAL.
        </p>

        <h2 id="research">32. Research, Outcomes &amp; De-identified Data</h2>
        <p>
          We may from time to time conduct voluntary research on the use and effectiveness of HEAL.
          Participation in any research is always opt-in. If you opt in, we may use de-identified
          (irreversibly anonymized) data for research purposes only. We never sell your data. See
          the{' '}
          <Link href="/heal/policy" className="text-coral underline">
            HEAL Privacy Policy
          </Link>{' '}
          for our full data-handling practices.
        </p>
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
