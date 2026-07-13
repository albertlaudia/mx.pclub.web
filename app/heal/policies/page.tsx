/**
 * HEAL — Privacy Policy
 *
 * This page is the live, binding privacy notice for the HEAL mobile app. It is
 * the URL referenced inside the App Store / Play Store metadata.
 *
 * Drafting notes (not part of the legal text):
 *   - This document is structured to satisfy the App Store "Privacy Policy URL"
 *     requirement, the Google Play Store data-safety disclosure, and the
 *     substantive disclosure requirements of:
 *       - EU GDPR (Regulation (EU) 2016/679) and ePrivacy Directive 2002/58/EC
 *       - UK GDPR and Data Protection Act 2018
 *       - California CCPA (Cal. Civ. Code §1798.100) and CPRA
 *       - Singapore PDPA (Act 26 of 2012)
 *       - Brazil LGPD (Lei 13.709/2018)
 *       - Indonesia PDP Law (UU 27/2022)
 *       - Australia Privacy Act 1988 (Cth) and the Notifiable Data Breaches scheme
 *       - Quebec Law 25 (Law 64 on modernizing privacy)
 *   - The Company must obtain legal review by a licensed attorney in each
 *     jurisdiction in which the App is marketed before going live.
 *   - Versions: v1.0  2026-06-30  first publication.
 */

import { CrisisResources } from '@/components/CrisisResources'
import { SITE_URL } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HEAL — Privacy Policy',
  description:
    'How HEAL handles your data. Local-first, no analytics, no tracking, no crash reporting. Built for privacy by design.',
  alternates: { canonical: `${SITE_URL}/heal/policies` },
  robots: { index: true, follow: true },
}

export const dynamic = 'force-static'

const LAST_UPDATED = '2026-06-30'
const VERSION = 'v1.0'

const SECTIONS = [
  { id: 'summary', title: '1. Plain-English Summary' },
  { id: 'controller', title: '2. Data Controller & Contact' },
  { id: 'scope', title: '3. Scope of this Policy' },
  { id: 'what-we-collect', title: '4. What Data We Collect' },
  { id: 'what-we-do-not-collect', title: '5. What Data We Do NOT Collect' },
  { id: 'how-we-use', title: '6. How We Use Data' },
  { id: 'legal-basis', title: '7. Legal Basis for Processing (GDPR)' },
  { id: 'storage', title: '8. On-Device Storage' },
  { id: 'third-parties', title: '9. Third Parties We Share Data With' },
  { id: 'international-transfers', title: '10. International Data Transfers' },
  { id: 'retention', title: '11. Data Retention' },
  { id: 'security', title: '12. Security Measures' },
  { id: 'breach', title: '13. Breach Notification' },
  { id: 'your-rights', title: '14. Your Rights & How to Exercise Them' },
  { id: 'right-to-delete', title: '15. Right to Delete (in-app mechanism)' },
  { id: 'minor', title: '16. Children & Minors' },
  { id: 'sensitive', title: '17. Sensitive Information & Health Data' },
  { id: 'ai-ml', title: '18. AI, Machine Learning & Voice Synthesis' },
  { id: 'tracking-att', title: '19. App Tracking Transparency (iOS)' },
  { id: 'ccpa', title: '20. California Residents — CCPA / CPRA' },
  { id: 'lgpd', title: '21. Brazil — LGPD' },
  { id: 'pdpa', title: '22. Singapore — PDPA' },
  { id: 'indonesia', title: '23. Indonesia — UU PDP' },
  { id: 'european', title: '24. EEA / UK — GDPR' },
  { id: 'australia', title: '25. Australia — Privacy Act' },
  { id: 'automated', title: '26. Automated Decision-Making & Profiling' },
  { id: 'sale', title: '27. "Sale" or "Sharing" of Personal Information' },
  { id: 'changes', title: '28. Changes to this Policy' },
  { id: 'contact', title: '29. Contact & DPO' },
]

export default function HealPoliciesPage() {
  return (
    <main className="container-narrow py-12 md:py-20">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="chip">HEAL</span>
          <span className="chip">Privacy</span>
        </div>
        <h1 className="text-display-md md:text-display-lg font-bold tracking-tight mb-3">
          HEAL — Privacy Policy
        </h1>
        <p className="text-mute text-lg mb-2">
          Short version: <strong>we do not collect, transmit, or sell your data.</strong> The App
          runs on your device. Below are the details.
        </p>
        <p className="text-sm text-mute">
          Version <span className="font-mono">{VERSION}</span> · Last updated{' '}
          <time dateTime={LAST_UPDATED}>{LAST_UPDATED}</time> · Effective immediately
        </p>
        <p className="text-sm text-mute mt-2">
          Looking for the user agreement?{' '}
          <Link href="/heal/terms" className="text-coral underline">
            See HEAL — Terms and Conditions
          </Link>
          .
        </p>
      </header>

      {/* Summary card */}
      <section id="summary" className="mb-12 rounded-2xl border border-line bg-card p-6">
        <h2 className="text-xl font-semibold mb-3">1. Plain-English Summary</h2>
        <ul className="space-y-2 text-sm leading-relaxed">
          <li>
            ✅ HEAL runs locally on your phone. Your listening history, preferences and settings
            never leave your device.
          </li>
          <li>
            ✅ The App contains no analytics SDK, no crash reporter, no advertising SDK, no
            fingerprinting library.
          </li>
          <li>
            ✅ We do not collect your name, email, location, contact list, microphone audio, photo,
            health metrics or device identifier.
          </li>
          <li>
            ✅ Purchases go through Apple or Google. We see your Subscription status (renewing /
            expired / cancelled) but not your card number.
          </li>
          <li>
            ✅ Crash reports: there are none — by design. If the App crashes, we don't know about it
            unless you email us.
          </li>
          <li>
            ✅ You can delete everything from the App at any time, including from inside Settings.
          </li>
          <li>
            ⚠️ <strong>If you opt in</strong> to email magnet delivery on the positiveness.club
            website, that <em>website</em>'s privacy policy applies — not this one.
          </li>
        </ul>
      </section>

      <nav className="mb-12 rounded-2xl border border-line bg-card p-6">
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
        <h2 id="controller">2. Data Controller & Contact</h2>
        <p>
          For the purposes of applicable data-protection law, the data controller for the Service
          is:
        </p>
        <ul>
          <li>
            Legal entity: <strong>positiveness.club Pte Ltd</strong>
          </li>
          <li>
            Registered address: [to be confirmed by counsel — Singapore], Republic of Singapore
          </li>
          <li>
            Privacy contact:{' '}
            <a href="mailto:privacy@positiveness.club">privacy@positiveness.club</a>
          </li>
          <li>
            EU representative (GDPR Art. 27): to be appointed before launch in any EEA jurisdiction.
            Until appointed, the data controller above acts as contact.
          </li>
          <li>UK representative (UK GDPR): to be appointed before launch in the UK.</li>
        </ul>

        <h2 id="scope">3. Scope of this Policy</h2>
        <p>
          This Policy applies to the HEAL mobile application distributed under the bundle
          identifiers <code>com.pclub.heal</code> (iOS) and <code>com.pclub.heal</code> (Android)
          and operated by the Company. It does <strong>not</strong> cover:
        </p>
        <ul>
          <li>
            third-party services reached by tapping a link in the App (e.g. crisis hotlines, our
            website positiveness.club);
          </li>
          <li>
            the platform-level privacy policy at <Link href="/privacy">/privacy</Link>, which covers
            the positiveness.club marketing website;
          </li>
          <li>
            the App Store (Apple) or Play Store (Google) — those operators have their own privacy
            policies.
          </li>
        </ul>

        <h2 id="what-we-collect">4. What Data We Collect</h2>
        <p>
          By default, <strong>we collect nothing</strong>. The App operates entirely offline after
          first launch, with the optional exceptions below:
        </p>
        <ol>
          <li>
            <strong>Subscription verification:</strong> a token issued by the Store that proves you
            have an active Subscription. The token contains a Store-generated identifier (not your
            real account ID or email) and an entitlement string such as "heal_pro". The token is
            stored only on your device; we never see it ourselves.
          </li>
          <li>
            <strong>In-App receipt validation (Apple only):</strong> when you make a purchase, the
            App performs a local cryptographic check on the receipt returned by the Store. This
            check involves Apple's App Store server but does not transmit your personal data to the
            Company.
          </li>
          <li>
            <strong>Optional error reports:</strong> if you choose to email us about a problem (for
            example via the in-App "Send feedback" button), we receive whatever you type plus
            standard email metadata.
          </li>
          <li>
            <strong>Email magnet delivery (positiveness.club website, not the App):</strong> if you
            submit the free-audio-pack form on the website, the Company receives your email and
            stores it in PocketBase. See the platform-level privacy policy at{' '}
            <Link href="/privacy">/privacy</Link>.
          </li>
        </ol>
        <p>
          <strong>We do not</strong> collect your name, phone number, email address, mailing
          address, IP address, GPS location, contact list, microphone recordings, photos, health
          metrics, browser fingerprint, or any device-identifying advertising ID.
        </p>

        <h2 id="what-we-do-not-collect">5. What Data We Do NOT Collect</h2>
        <p>
          For transparency, here is a non-exhaustive list of data the App does <strong>not</strong>{' '}
          collect:
        </p>
        <ul>
          <li>no IP address or approximate location;</li>
          <li>no device advertising identifier (IDFA on iOS, GAID on Android);</li>
          <li>no microphone audio data — we cannot and do not listen to your sessions;</li>
          <li>no biometric data;</li>
          <li>no contact list, calendar, photos, or other device data;</li>
          <li>no browsing history inside the App;</li>
          <li>no crash dumps or performance telemetry;</li>
          <li>
            no analytics events whatsoever (no Firebase Analytics, Amplitude, Mixpanel, Segment,
            Heap, Plausible, Google Analytics);
          </li>
          <li>no third-party advertising or remarketing identifiers.</li>
        </ul>

        <h2 id="how-we-use">6. How We Use Data</h2>
        <p>
          We do not use any data for profiling, advertising, or sale. The limited data that may be
          in our possession (email magnet signups, support emails) is used solely for:
        </p>
        <ul>
          <li>delivering the email magnet you requested;</li>
          <li>responding to your support inquiries;</li>
          <li>complying with legal obligations (e.g. tax, accounting);</li>
          <li>
            aggregated, fully-anonymized product analytics that contain no personally-identifiable
            information and to which you have separately consented (where required by law).
          </li>
        </ul>

        <h2 id="legal-basis">7. Legal Basis for Processing (GDPR)</h2>
        <p>
          For Users in the EEA / UK, the Company relies on the following legal bases under Article 6
          GDPR:
        </p>
        <ul>
          <li>
            <strong>Performance of contract (Art. 6(1)(b))</strong> — to deliver the App, validate
            your Subscription, and provide the Audio Content.
          </li>
          <li>
            <strong>Legitimate interests (Art. 6(1)(f))</strong> — for security, fraud prevention,
            and the limited, non-marketing support communications described in this Policy, where
            the Company's interests are not overridden by your rights and freedoms.
          </li>
          <li>
            <strong>Consent (Art. 6(1)(a))</strong> — for any processing of email magnet signups or
            for processing sensitive health-related information that you choose to share with us in
            support communications.
          </li>
          <li>
            <strong>Legal obligation (Art. 6(1)(c))</strong> — for tax, accounting, and
            law-enforcement disclosure obligations.
          </li>
        </ul>
        <p>
          Where consent is the legal basis, you may withdraw it at any time, without affecting the
          lawfulness of processing prior to withdrawal.
        </p>

        <h2 id="storage">8. On-Device Storage</h2>
        <p>
          The App stores the following data locally on your Device using encrypted storage (iOS Data
          Protection class &ldquo;complete&rdquo;; Android EncryptedSharedPreferences with
          AES-256-GCM):
        </p>
        <ul>
          <li>
            subscription status (a flag derived from a locally-validated receipt, not raw receipt
            data);
          </li>
          <li>your in-app preferences (theme, audio quality, default voice, language);</li>
          <li>
            your download history (so the App knows which Audio Content to keep available offline);
          </li>
          <li>
            encrypted audio files that you have downloaded for offline listening, protected with iOS
            / Android file-level encryption.
          </li>
        </ul>
        <p>
          This local data never leaves your Device unless you explicitly export it (for example, by
          transferring to a new Device via your operating system's standard migration tooling).
        </p>

        <h2 id="third-parties">9. Third Parties We Share Data With</h2>
        <p>
          We do not sell, rent, lease or otherwise commercially share your personal data with any
          third party. The only parties that ever receive any data related to your use of the App
          are:
        </p>
        <ol>
          <li>
            <strong>Apple Inc.</strong> — for App Store purchase processing, receipt validation and
            fraud prevention. See Apple's{' '}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>Google LLC</strong> — for Play Store purchase processing and fraud prevention.
            See Google's{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>Apple Push Notification Service (APNs)</strong> / Firebase Cloud Messaging
            (Android) — only if you enable reminder notifications. Tokens are random and cannot be
            tied to your identity without your Apple or Google account.
          </li>
          <li>
            <strong>Hosting providers</strong> for our email-infrastructure, if you email us:
            web-hosting services that process email on our behalf under strict processor agreements.
          </li>
        </ol>
        <p>
          We <strong>do not</strong> use third-party analytics, advertising networks, A/B-testing
          platforms, session-replay tools, marketing pixels, social-login providers, or biometric
          processors.
        </p>

        <h2 id="international-transfers">10. International Data Transfers</h2>
        <p>
          Because the App processes almost all data locally on your Device, "transfers" of personal
          data out of your country are minimal. However, where support emails are sent to us, those
          emails may be transmitted to and stored on servers located in Singapore, the European
          Union, or the United States — whichever jurisdiction our hosting provider uses at the
          time.
        </p>
        <p>
          For transfers from the EEA / UK / Switzerland to a third country, the Company relies on
          European Commission Standard Contractual Clauses (SCCs) or the EU–U.S. / Swiss–U.S. Data
          Privacy Framework, as applicable.
        </p>

        <h2 id="retention">11. Data Retention</h2>
        <p>
          We retain personal data for the minimum period necessary for the purposes set out in this
          Policy, after which it is deleted or anonymized, as follows:
        </p>
        <ul>
          <li>
            <strong>Support emails:</strong> up to 24 months from the last interaction, unless
            retention is required by law (for example tax records).
          </li>
          <li>
            <strong>Email magnet signups (positiveness.club website):</strong> until you
            unsubscribe, with a maximum of 24 months of inactivity after which the record is
            anonymized.
          </li>
          <li>
            <strong>Backups of either of the above:</strong> up to 90 days.
          </li>
          <li>
            <strong>On-device data:</strong> retained until you delete the App or clear App data in
            the Device settings.
          </li>
        </ul>

        <h2 id="security">12. Security Measures</h2>
        <p>
          The Company implements technical and organizational measures appropriate to the risk of
          the processing, including:
        </p>
        <ul>
          <li>encryption at rest (AES-256-GCM where possible) and in transit (TLS 1.2+);</li>
          <li>
            the principle of data minimization — we collect the smallest possible amount of data;
          </li>
          <li>
            the principle of local-first — most processing happens on the Device, not on our
            servers;
          </li>
          <li>
            access controls on internal systems, including multi-factor authentication for
            employees;
          </li>
          <li>regular security reviews of our hosting infrastructure;</li>
          <li>incident-response procedures.</li>
        </ul>

        <h2 id="breach">13. Breach Notification</h2>
        <p>
          In the event of a personal-data breach likely to result in a high risk to your rights and
          freedoms, the Company will notify the relevant supervisory authority and affected Users
          without undue delay and, where feasible, within 72 hours of becoming aware of the breach,
          in accordance with GDPR Article 33–34, the PDPA Notification of Data Breaches regime, and
          similar laws.
        </p>
        <p>
          To report a security vulnerability, please email{' '}
          <a href="mailto:security@positiveness.club">security@positiveness.club</a> with a
          description and any proof-of-concept. We commit to acknowledge reports within 5 business
          days.
        </p>

        <h2 id="your-rights">14. Your Rights & How to Exercise Them</h2>
        <p>
          Depending on your jurisdiction, you may have some or all of the following rights with
          respect to your personal data:
        </p>
        <ol>
          <li>
            <strong>Right of access</strong> — request a copy of the personal data we hold about
            you.
          </li>
          <li>
            <strong>Right to rectification</strong> — request correction of inaccurate or incomplete
            data.
          </li>
          <li>
            <strong>Right to erasure ("right to be forgotten")</strong> — request deletion of your
            personal data.
          </li>
          <li>
            <strong>Right to restriction of processing</strong> — request that we limit how we
            process your data.
          </li>
          <li>
            <strong>Right to data portability</strong> — receive your data in a structured,
            machine-readable format.
          </li>
          <li>
            <strong>Right to object</strong> — object to processing based on legitimate interests or
            for direct marketing.
          </li>
          <li>
            <strong>Right not to be subject to automated decision-making</strong> — including
            profiling.
          </li>
          <li>
            <strong>Right to withdraw consent</strong> — at any time, where processing is based on
            consent.
          </li>
          <li>
            <strong>Right to lodge a complaint with a supervisory authority</strong> — see Section
            24.
          </li>
        </ol>
        <p>
          To exercise any of these rights, email{' '}
          <a href="mailto:privacy@positiveness.club">privacy@positiveness.club</a>. We will respond
          within 30 days. We may need to verify your identity before fulfilling your request.
        </p>

        <h2 id="right-to-delete">15. Right to Delete (In-App Mechanism)</h2>
        <p>
          The App provides an in-App delete action: <em>Settings → Account → Delete all my data</em>
          . Tapping this clears all on-device data, downloaded Audio Content, preferences, and
          subscription flags.
        </p>
        <p>
          For data we hold outside the App (e.g. email magnet signups), email{' '}
          <a href="mailto:privacy@positiveness.club">privacy@positiveness.club</a> from the address
          you used to sign up, and we will delete your record within 30 days.
        </p>

        <h2 id="minor">16. Children & Minors</h2>
        <p>
          The App is not directed to children under the age of digital consent in their jurisdiction
          (13 in most countries, 14 in Indonesia/South Korea, 16 in the EEA / UK / Singapore — see
          the corresponding section of the Terms for the full table). We do not knowingly collect
          personal data from children below that age.
        </p>
        <p>
          If you believe we have collected personal data from a child below the applicable age in
          violation of this Policy, please contact us at{' '}
          <a href="mailto:privacy@positiveness.club">privacy@positiveness.club</a> and we will
          delete the data as soon as possible.
        </p>

        <h2 id="sensitive">17. Sensitive Information & Health Data</h2>
        <p>
          Under various laws (GDPR Article 9, California CPRA, Singapore PDPA, etc.) certain
          categories of personal data — including data concerning health, mental health,
          biometric/genetic data and sexual orientation — are considered "sensitive" and require
          additional safeguards.
        </p>
        <p>
          The App does <strong>not</strong> collect sensitive health data. However, we recognize
          that the very nature of the Audio Content (anxiety, sleep, overwhelm) means that, in
          voluntary support communications, you may choose to share sensitive information with us.
          Where you do so, you explicitly consent to that processing for the narrow purpose of
          responding to your support request. We will:
        </p>
        <ul>
          <li>limit access to the smallest team that needs it;</li>
          <li>
            delete the data after resolving your request, unless retention is required by law;
          </li>
          <li>never use it to train AI/ML models or for any form of automated decision-making.</li>
        </ul>
        <p>
          The Company is <strong>not a HIPAA covered entity</strong>, and HEAL is not a
          HIPAA-covered service. If you are a U.S. clinician seeking HIPAA-compliant tools, this App
          is not designed for that use.
        </p>

        <h2 id="ai-ml">18. AI, Machine Learning & Voice Synthesis</h2>
        <p>
          The App does not currently use artificial intelligence or machine-learning models to make
          decisions about you. Some Audio Content may be generated or post-processed using
          third-party voice-synthesis tools. Where this is the case:
        </p>
        <ul>
          <li>no personal data is transmitted to such providers by default;</li>
          <li>
            you may opt out of any AI-enhanced or synthesised content from the App settings, where
            available;
          </li>
          <li>
            your listening behaviour is <strong>never</strong> used to train AI/ML models, except
            where you have explicitly consented.
          </li>
        </ul>
        <p>
          If we add a feature that uses your data to train or personalise an AI/ML model, we will
          obtain your explicit prior consent and update this Policy.
        </p>

        <h2 id="tracking-att">19. App Tracking Transparency (iOS)</h2>
        <p>
          The App does <strong>not</strong> request Apple's App Tracking Transparency (ATT)
          authorization, because the App does not perform any tracking for advertising or
          cross-application behavioural analysis. We do not use IDFA or any other device-level
          identifier that would constitute "tracking" under Apple's guidelines.
        </p>

        <h2 id="ccpa">20. California Residents — CCPA / CPRA</h2>
        <p>
          This Section applies to California residents under the California Consumer Privacy Act
          (CCPA) and the California Privacy Rights Act (CPRA).
        </p>
        <p>
          <strong>Categories of personal information collected.</strong> By default,{' '}
          <strong>none</strong>. If you choose to contact us by email or submit the email-magnet
          form on our website, the categories we may collect are: identifiers (email address) and
          inferences (the topic of your support request).
        </p>
        <p>
          <strong>Categories of sources.</strong> Directly from you.
        </p>
        <p>
          <strong>Business or commercial purposes.</strong> Responding to your inquiry; delivering
          the email magnet you requested.
        </p>
        <p>
          <strong>"Sale" or "sharing" of personal information.</strong> We do not sell or share your
          personal information for cross-context behavioural advertising. We have not sold or shared
          personal information in the past 12 months.
        </p>
        <p>
          <strong>Retention.</strong> See Section 11.
        </p>
        <p>
          <strong>Your CCPA rights.</strong> You have the right to know, delete, correct, and limit
          the use of sensitive personal information about you. To exercise these rights, email{' '}
          <a href="mailto:privacy@positiveness.club">privacy@positiveness.club</a> with "CCPA
          Request" in the subject line.
        </p>
        <p>
          <strong>Authorized agent.</strong> You may designate an authorized agent to make a CCPA
          request on your behalf. We will verify the request by contacting you at the email address
          on file.
        </p>
        <p>
          <strong>Non-discrimination.</strong> We will not discriminate against you for exercising
          your CCPA rights.
        </p>
        <p>
          <strong>Shine the Light (Cal. Civ. Code §1798.83).</strong> California residents may
          request information about categories of personal information disclosed to third parties
          for those parties' direct-marketing purposes. We do not disclose personal information to
          third parties for their direct-marketing purposes.
        </p>

        <h2 id="lgpd">21. Brazil — LGPD</h2>
        <p>
          For Users in Brazil, the Company acts as <em>controlador</em> under the Lei Geral de
          Proteção de Dados (Law 13.709/2018). Data Subjects have the rights described in Articles
          18 and 19 LGPD, including confirmation of the existence of processing, access, correction,
          anonymization, portability, deletion, consent withdrawal and opposition. To exercise these
          rights, contact <a href="mailto:privacy@positiveness.club">privacy@positiveness.club</a>.
          Complaints may also be lodged with the Autoridade Nacional de Proteção de Dados (ANPD).
        </p>

        <h2 id="pdpa">22. Singapore — PDPA</h2>
        <p>
          For Users in Singapore, the Company is subject to the Personal Data Protection Act 2012
          (Act 26 of 2012). We have designated a Data Protection Officer (DPO) who can be contacted
          at <a href="mailto:dpo@positiveness.club">dpo@positiveness.club</a>. You may also contact
          the Personal Data Protection Commission (PDPC) at{' '}
          <a href="https://www.pdpc.gov.sg" target="_blank" rel="noopener noreferrer">
            pdpc.gov.sg
          </a>{' '}
          if you believe we have breached the PDPA.
        </p>

        <h2 id="indonesia">23. Indonesia — UU PDP</h2>
        <p>
          For Users in Indonesia, the Company is subject to Undang-Undang Nomor 27 Tahun 2022
          tentang Pelindungan Data Pribadi. Pelindungan data pribadi subjek data Indonesia diawasi
          oleh Kementerian Komunikasi dan Informatika. Complaints may be submitted to the relevant
          authority via{' '}
          <a href="https://www.kominfo.go.id" target="_blank" rel="noopener noreferrer">
            kominfo.go.id
          </a>
          .
        </p>

        <h2 id="european">24. EEA / UK — GDPR</h2>
        <p>
          For Users in the EEA / UK, you have the right to lodge a complaint with your local
          data-protection authority. Examples:
        </p>
        <ul>
          <li>
            EU Residents — your national DPA: list available at
            edpb.europa.eu/about-edpb/about-edpb/members.
          </li>
          <li>UK Residents — Information Commissioner's Office (ICO) at ico.org.uk.</li>
          <li>
            German Residents — Bundesbeauftragter für den Datenschutz und die Informationsfreiheit
            (BfDI).
          </li>
        </ul>

        <h2 id="australia">25. Australia — Privacy Act</h2>
        <p>
          For Users in Australia, complaints may be lodged with the Office of the Australian
          Information Commissioner (OAIC) at{' '}
          <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">
            oaic.gov.au
          </a>
          . We will respond to complaints within 30 days.
        </p>

        <h2 id="automated">26. Automated Decision-Making & Profiling</h2>
        <p>
          The App does not perform any automated decision-making or profiling that produces legal or
          similarly significant effects on you (GDPR Article 22). The Company does not use your data
          to evaluate, predict or score aspects of your personality, behaviour or health.
        </p>

        <h2 id="sale">27. "Sale" or "Sharing" of Personal Information</h2>
        <p>
          The Company has not sold, shared or otherwise disclosed personal information for monetary
          or other valuable consideration in the preceding 12 months. We do not knowingly sell or
          share personal information of consumers under 16 years of age.
        </p>

        <h2 id="changes">28. Changes to this Policy</h2>
        <p>
          We may update this Policy from time to time. If we make material changes that affect your
          rights, we will give you notice via:
        </p>
        <ul>
          <li>in-App notification at next launch;</li>
          <li>an email to the address you have provided to the Store (where applicable);</li>
          <li>a notice on positiveness.club.</li>
        </ul>
        <p>
          The "Last updated" date at the top of this document reflects the current version. Your
          continued use of the App after a change indicates your acceptance of the updated Policy,
          except for material adverse changes — for which we will seek your renewed consent where
          required by law.
        </p>

        <h2 id="contact">29. Contact & DPO</h2>
        <p>
          For any privacy-related question, complaint or to exercise any of your rights, contact:
        </p>
        <ul>
          <li>
            Privacy team: <a href="mailto:privacy@positiveness.club">privacy@positiveness.club</a>
          </li>
          <li>
            DPO (Singapore / Asia-Pacific):{' '}
            <a href="mailto:dpo@positiveness.club">dpo@positiveness.club</a>
          </li>
          <li>
            EU / UK representative (once appointed): to be listed here before launch in those
            jurisdictions.
          </li>
          <li>
            Postal: positiveness.club Pte Ltd, [registered Singapore address, TBC by counsel],
            Republic of Singapore
          </li>
        </ul>
        <p>
          We aim to acknowledge privacy inquiries within 5 business days, and to respond
          substantively within 30 days. If your complaint is not resolved to your satisfaction, you
          may lodge it with your local data-protection authority (see Sections 20–25).
        </p>
      </article>

      <hr className="my-16 border-line" />

      <section className="mb-12">
        <CrisisResources variant="card" heading="If you or someone you know is in crisis" />
      </section>

      <footer className="text-sm text-mute">
        <p className="mb-4">
          <strong>Document control:</strong> Version {VERSION} · Effective {LAST_UPDATED} · Owner:
          positiveness.club Pte Ltd.
        </p>
        <p className="mb-4">
          <strong>Not legal advice.</strong> This document was drafted as a starting template. It
          has <strong>not</strong> been reviewed by licensed counsel. Before shipping HEAL to any
          market in which the App will be marketed or to any User whose data is processed under
          non-Singaporean data-protection law, the Company must have a licensed attorney in the
          relevant jurisdiction review and approve this Policy.
        </p>
        <p>
          Questions or comments? Email{' '}
          <a href="mailto:privacy@positiveness.club" className="text-coral underline">
            privacy@positiveness.club
          </a>
          .
        </p>
      </footer>
    </main>
  )
}
