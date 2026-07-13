/**
 * HEAL — Privacy Policy (URL: /heal/policy)
 *
 * This is the canonical / preferred URL for the HEAL privacy policy.
 * The legacy /heal/policies route renders the same content for backwards
 * compatibility with already-shared App Store / Play Store links.
 *
 * Drafting notes:
 *   - HEAL is local-first by design. No analytics, no third-party trackers,
 *     no advertising SDKs, no fingerprinting.
 *   - Subscription data is handled by Apple/Google (we see only masked receipts).
 *   - Regional rights: GDPR/UK-GDPR, CCPA/CPRA, PDPA Singapore, LGPD, UU PDP,
 *     PDPA Thailand, PIPA Korea, APPI Japan, DPDP India, etc.
 *   - Not legal advice — must be reviewed by licensed counsel.
 *   - Version: v1.0  2026-07-13
 */

import { SITE_URL } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HEAL — Privacy Policy',
  description:
    'Privacy policy for the HEAL app. Covers local-first storage of mood, journal, and listening data; no analytics; regional rights under GDPR, CCPA, PDPA, LGPD; and how to exercise your data rights.',
  alternates: { canonical: `${SITE_URL}/heal/policy` },
  robots: { index: true, follow: true },
}

export const dynamic = 'force-static'

const LAST_UPDATED = '2026-07-13'
const VERSION = 'v1.0'

const SECTIONS = [
  { id: 'summary', title: '1. Plain-language Summary' },
  { id: 'controller', title: '2. Who Decides What We Do With Your Data (Controller)' },
  { id: 'scope', title: '3. What This Policy Covers' },
  { id: 'what', title: "4. What We (Don't) Collect" },
  { id: 'where', title: '5. Where Your Data Lives (Local-First)' },
  { id: 'baselegal', title: '6. Legal Basis for Processing' },
  { id: 'children', title: '7. Children' },
  { id: 'sharing', title: '8. Who We Share With (and Why)' },
  { id: 'international', title: '9. International Data Transfers' },
  { id: 'retention', title: '10. How Long We Keep Your Data' },
  { id: 'security', title: '11. How We Protect Your Data' },
  { id: 'rights', title: '12. Your Rights and Choices' },
  { id: 'gdpr', title: '13. EEA, UK & Swiss Users — GDPR / UK-GDPR / FADP' },
  { id: 'us', title: '14. U.S. Users — CCPA / CPRA / State Laws' },
  { id: 'australia', title: '15. Australian Users — Privacy Act 1988' },
  { id: 'canada', title: '16. Canadian Users — PIPEDA & Quebec Law 25' },
  { id: 'singapore', title: '17. Singapore Users — PDPA' },
  { id: 'indonesia', title: '18. Indonesian Users — UU PDP' },
  { id: 'brazil', title: '19. Brazilian Users — LGPD' },
  { id: 'thailand', title: '20. Thai Users — PDPA Thailand' },
  { id: 'korea', title: '21. Korean Users — PIPA' },
  { id: 'japan', title: '22. Japanese Users — APPI' },
  { id: 'india', title: '23. Indian Users — DPDP Act' },
  { id: 'changes', title: '24. Changes to This Policy' },
  { id: 'dpo', title: '25. Data Protection Officer' },
  { id: 'complaints', title: '26. How to Complain' },
  { id: 'ai', title: '27. AI, Machine Learning & Voice Synthesis' },
  { id: 'third', title: '28. Third-Party Services We Use' },
  { id: 'contact', title: '29. How to Contact Us' },
]

export default function HealPolicyPage() {
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
          What we collect, what we don't, where your data lives, and how to control it.
        </p>
        <p className="text-sm text-mute">
          Version <span className="font-mono">{VERSION}</span> · Last updated{' '}
          <time dateTime={LAST_UPDATED}>{LAST_UPDATED}</time> · Effective immediately
        </p>
        <p className="text-sm text-mute mt-2">
          Looking for the Terms?{' '}
          <Link href="/heal/terms" className="text-coral underline">
            See HEAL — Terms and Conditions
          </Link>
          .
        </p>
      </header>

      <section
        className="rounded-2xl border-2 border-coral/30 bg-coral/5 p-6 mb-12"
        aria-label="Privacy at a glance"
      >
        <h2 className="font-semibold mb-3 text-lg">Privacy at a glance</h2>
        <ul className="space-y-2 text-sm">
          <li>
            ✅ Your mood logs, journal entries, and listening history are stored{' '}
            <strong>locally on your device</strong> by default. We do not upload them.
          </li>
          <li>
            ✅ Cloud sync (if enabled in future) will be <strong>end-to-end encrypted</strong> with
            a key only you hold.
          </li>
          <li>
            ✅ We use <strong>no analytics</strong>, no third-party trackers, no advertising SDKs.
          </li>
          <li>
            ✅ Your subscription is managed by Apple or Google. We see a masked receipt identifier —
            not your card.
          </li>
          <li>
            ✅ Audio sessions are downloaded and cached on your device. We do not collect listening
            events unless you opt in to "Share listening stats to improve sessions".
          </li>
          <li>
            ✅ You can <strong>delete everything we hold about you</strong> at any time, in-app or
            via privacy@positiveness.club.
          </li>
        </ul>
      </section>

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
        <h2 id="summary">1. Plain-language Summary</h2>
        <p>This is a one-page overview. The full text follows below.</p>
        <ul>
          <li>
            <strong>What we collect:</strong> Almost nothing. We collect only what is necessary to
            run the App — your subscription status (delivered by Apple or Google), optional error
            logs (only with your consent), and any data you explicitly submit (e.g. support emails).
          </li>
          <li>
            <strong>What we do not collect:</strong> Your mood logs, journal entries, listening
            history, location, contacts, photos, microphone audio (beyond an opt-in voice-input
            feature in future versions), biometrics, advertising IDs, or any "special category" data
            under GDPR Art. 9.
          </li>
          <li>
            <strong>Where your data lives:</strong> On your device. By default we do not upload your
            health, mood, journal, or listening data to any server.
          </li>
          <li>
            <strong>Where decisions about your data are made:</strong> Singapore (see §2).
          </li>
          <li>
            <strong>How to reach us:</strong> privacy@positiveness.club. We reply within 30 days.
          </li>
        </ul>

        <h2 id="controller">2. Who Decides What We Do With Your Data (Controller)</h2>
        <p>The data controller responsible for your personal data is:</p>
        <ul>
          <li>
            <strong>positiveness.club Pte Ltd</strong>
          </li>
          <li>Registered in Singapore</li>
          <li>Principal place of business: [to be confirmed by counsel], Singapore</li>
          <li>
            Email: <a href="mailto:privacy@positiveness.club">privacy@positiveness.club</a>
          </li>
        </ul>
        <p>
          <strong>EU and UK representatives.</strong> For Users in the EEA and the UK, we will
          appoint an Article 27 representative under the GDPR before we begin marketing the Service
          in those jurisdictions. The representative's details will be added here and notified to
          Users by email and in-App. Until then, contact the Company directly at the address above.
        </p>
        <p>
          <strong>Local-counsel review.</strong> This policy must be reviewed by a licensed attorney
          in the user's country of residence before being relied upon to defend any claim. Until
          then, treat this document as an internal policy, not legal advice.
        </p>

        <h2 id="scope">3. What This Policy Covers</h2>
        <p>This Policy describes:</p>
        <ul>
          <li>
            the personal data the Company collects from Users through the HEAL App and related
            services (the <strong>"Service"</strong>);
          </li>
          <li>how the Company uses that data;</li>
          <li>with whom the Company shares that data;</li>
          <li>how long the Company keeps that data;</li>
          <li>the rights Users have over their data;</li>
          <li>how Users can exercise those rights.</li>
        </ul>
        <p>
          This Policy does <strong>not</strong> cover:
        </p>
        <ul>
          <li>
            Data you submit to Apple's App Store or Google's Play Store — those are governed by
            Apple's and Google's privacy policies.
          </li>
          <li>
            Data you submit to voice-talent agencies if you independently contact them to inquire
            about narrating for HEAL.
          </li>
          <li>
            Data you submit to clinical professionals, therapists, or any health service outside
            HEAL.
          </li>
        </ul>

        <h2 id="what">4. What We (Don't) Collect</h2>
        <p>
          We believe in collecting the minimum data necessary to deliver the Service. The table
          below summarises what we collect and what we deliberately don't.
        </p>

        <h3>4.1 What we collect (with reason)</h3>
        <ul>
          <li>
            <strong>App version, device model, OS version, locale.</strong> Reason: deliver a
            session in your language and to a compatible format. Stored locally; we see aggregated
            counts only.
          </li>
          <li>
            <strong>Subscription status (masked receipt from the Store).</strong> Reason: know
            whether you have access to Pro-tier sessions. The receipt is delivered by Apple or
            Google and contains no card details.
          </li>
          <li>
            <strong>
              Aggregated crash logs (with your explicit consent in Settings → "Help us fix bugs").
            </strong>{' '}
            Reason: diagnose and fix crashes. Logs are stripped of identifiers before submission.
            Off by default.
          </li>
          <li>
            <strong>Support emails and attachments you send us.</strong> Reason: respond to your
            request. Stored in our helpdesk (currently Zoho Mail / Google Workspace).
          </li>
          <li>
            <strong>Newsletter signup email (if you submit it via positiveness.club).</strong>{' '}
            Reason: deliver the newsletter. You can unsubscribe via the link in every email or via
            /unsubscribe.
          </li>
        </ul>

        <h3>4.2 What we DO NOT collect (and never have)</h3>
        <ul>
          <li>
            Your name, address, phone number, or date of birth (unless you provide it to us in
            support correspondence).
          </li>
          <li>Your mood logs, journal entries, or session notes (kept on-device).</li>
          <li>
            Your listening history, audio playback position, or voice preferences (kept on-device).
          </li>
          <li>
            Your contact list, address book, photos, microphone audio (other than an opt-in
            voice-input feature in future versions).
          </li>
          <li>
            Your precise or coarse location, IP address (except transiently for rate-limiting), or
            device advertising IDs (IDFA, GAID, OAID).
          </li>
          <li>
            Your biometric data, mental-health data, sexual-orientation data, racial or ethnic data,
            or any other "special category" data under GDPR Art. 9.
          </li>
          <li>App Tracking Transparency (ATT) prompt data — we never trigger the ATT prompt.</li>
        </ul>

        <h3>4.3 Optional: "Share listening stats" (off by default)</h3>
        <p>
          If you opt in to <em>Settings → Privacy → Share listening stats to improve sessions</em>,
          we collect:
        </p>
        <ul>
          <li>
            the session identifier (e.g. <code>breathwork-morning-014</code>);
          </li>
          <li>whether you finished the session and your progress percent;</li>
          <li>whether you listened or paused partway;</li>
          <li>
            an opaque, rotating, salted identifier that does not link back to you across sessions.
          </li>
        </ul>
        <p>
          This data is used only to improve which sessions we recommend and how we pace them. You
          can revoke this consent at any time and we will stop collecting further data.
        </p>

        <h2 id="where">5. Where Your Data Lives (Local-First)</h2>
        <p>
          By default, <strong>everything you do in HEAL stays on your device</strong>. This
          includes:
        </p>
        <ul>
          <li>your mood and emotion logs;</li>
          <li>your journal entries and notes;</li>
          <li>your listening history and session playback position;</li>
          <li>your downloaded sessions (cached audio + transcripts);</li>
          <li>your preferences (theme, voice choice, session length).</li>
        </ul>
        <p>
          This data is stored in an encrypted SQLite database on your device (using sqlcipher or the
          platform's secure enclave, depending on platform).
        </p>
        <p>
          <strong>
            No backup to iCloud, no backup to Google Drive, no backup to the Company's servers
          </strong>{' '}
          unless you explicitly enable an opt-in cloud sync (described in §5.1).
        </p>
        <p>
          If you uninstall the App without exporting your data first, that data is deleted. The
          Company cannot recover it.
        </p>

        <h3>5.1 Optional end-to-end encrypted cloud sync (future feature, opt-in)</h3>
        <p>
          We may offer an optional cloud-sync feature in a future version of the App. When we do:
        </p>
        <ul>
          <li>
            Sync will be <strong>end-to-end encrypted</strong> using libsodium XChaCha20-Poly1305
            with a key derived from your password and stored only on your devices.
          </li>
          <li>
            The Company will have{' '}
            <strong>no technical ability to read your mood, journal, or notes</strong>.
          </li>
          <li>You can export, import, and wipe your data from the App at any time.</li>
          <li>Sync is off by default and requires explicit opt-in.</li>
        </ul>

        <h2 id="baselegal">6. Legal Basis for Processing</h2>
        <p>Under the EU General Data Protection Regulation (GDPR), our legal bases are:</p>
        <ul>
          <li>
            <strong>Performance of a contract</strong> (Art. 6(1)(b)) — to provide the Service you
            have signed up for, including processing your subscription status.
          </li>
          <li>
            <strong>Legitimate interest</strong> (Art. 6(1)(f)) — to operate, secure and improve the
            Service, prevent abuse, and respond to legal requests. We balance our legitimate
            interest against your rights and freedoms.
          </li>
          <li>
            <strong>Consent</strong> (Art. 6(1)(a)) — for optional features like "Share listening
            stats", for storing cookies, and for processing any sensitive personal data you choose
            to share with us in support correspondence.
          </li>
          <li>
            <strong>Legal obligation</strong> (Art. 6(1)(c)) — to comply with applicable law (e.g.
            tax, accounting, anti-fraud).
          </li>
          <li>
            <strong>Vital interests</strong> (Art. 6(1)(d)) — only in the narrow case where you have
            requested that we share data with a crisis service and we need to share that minimum
            data to protect your life. (See{' '}
            <Link href="/heal/terms" className="text-coral underline">
              HEAL Terms §9
            </Link>
            .)
          </li>
        </ul>
        <p>Where we rely on legitimate interest, you have the right to object (see §12).</p>

        <h2 id="children">7. Children</h2>
        <p>
          HEAL is not directed to children under the age thresholds in §4 of our Terms. We do not
          knowingly collect personal data from children below those thresholds. If we learn that we
          have inadvertently collected personal data from a child below the threshold, we will
          delete it as soon as possible.
        </p>
        <p>
          If you believe we have collected data from a child below the applicable age, please
          contact us at <a href="mailto:privacy@positiveness.club">privacy@positiveness.club</a> and
          we will respond within 5 business days.
        </p>

        <h2 id="sharing">8. Who We Share With (and Why)</h2>
        <p>We do not sell, rent or lease your personal data to anyone. We share data only with:</p>
        <ol>
          <li>
            <strong>Apple Inc.</strong> (iOS) and <strong>Google LLC</strong> (Android), as the
            operator of the Store through which you purchased your Subscription. Apple/Google's use
            of your data is governed by their privacy policies.
          </li>
          <li>
            <strong>Cloud infrastructure providers</strong> (currently Cloudflare and Supabase for
            backend storage and authenticated cloud sync if you opt in). All transfers are encrypted
            in transit and at rest. Bound by data-processing addenda.
          </li>
          <li>
            <strong>Email infrastructure providers</strong> (currently Resend Inc., based in the
            U.S.) for transactional emails (e.g. support replies, opt-in confirmations). Used only
            when you submit your email to us.
          </li>
          <li>
            <strong>Helpdesk and support tools</strong> (currently Zoho Mail / Google Workspace) to
            respond to support inquiries.
          </li>
          <li>
            <strong>Voice-synthesis providers</strong> (e.g. ElevenLabs, PlayHT, or in-house). Used
            only for audio rendering at synthesis time; we do not transmit your personal data to
            them.
          </li>
          <li>
            <strong>Legal and law-enforcement requests.</strong> We disclose personal data when we
            reasonably believe it is necessary to comply with law, regulation, court order, or valid
            request from a public authority. See §8.1.
          </li>
          <li>
            <strong>Business transfers.</strong> In the event of a merger, acquisition, financing,
            reorganisation, bankruptcy, or sale of all or part of our business, personal data may be
            transferred as part of that transaction. You will be notified by email and in-App.
          </li>
        </ol>

        <h3>8.1 Law-enforcement requests</h3>
        <p>On receipt of a request from law enforcement or a public authority, we will:</p>
        <ul>
          <li>verify the legal basis and authenticity of the request;</li>
          <li>
            challenge requests that are overbroad, vague, or that do not comply with applicable law;
          </li>
          <li>notify the affected User (where lawful) before disclosing data;</li>
          <li>publish aggregate statistics on requests received, where permitted.</li>
        </ul>
        <p>Because we collect minimal data, most requests will return no usable information.</p>

        <h2 id="international">9. International Data Transfers</h2>
        <p>
          The Company is based in Singapore. Where data is transferred to a country that has not
          been deemed adequate by the European Commission, the UK ICO or other relevant authority,
          we rely on:
        </p>
        <ul>
          <li>
            the European Commission's Standard Contractual Clauses (SCCs) Module 2 or Module 3, as
            applicable;
          </li>
          <li>the UK International Data Transfer Addendum to the EU SCCs (where applicable);</li>
          <li>the EU-U.S. Data Privacy Framework (where applicable);</li>
          <li>or other lawful transfer mechanisms.</li>
        </ul>
        <p>
          Where data is stored on your device, it never leaves your jurisdiction in the normal
          course. Cloud-sync (opt-in) routes through the nearest edge location.
        </p>

        <h2 id="retention">10. How Long We Keep Your Data</h2>
        <ul>
          <li>
            <strong>On-device data:</strong> Until you delete the App or clear app data.
          </li>
          <li>
            <strong>Subscription receipt:</strong> For as long as you hold a Pro Subscription, plus
            7 years for tax/audit (where required by law).
          </li>
          <li>
            <strong>Support correspondence:</strong> Up to 3 years from last contact, then deleted
            or anonymised.
          </li>
          <li>
            <strong>Crash logs (opt-in):</strong> Up to 90 days, then deleted or fully anonymised.
          </li>
          <li>
            <strong>Listening stats (opt-in):</strong> Up to 24 months in aggregate form, then
            deleted or fully anonymised.
          </li>
          <li>
            <strong>Newsletter signup:</strong> Until you unsubscribe, plus a 30-day grace period
            for confirmation of unsubscribe.
          </li>
        </ul>
        <p>Where law requires longer retention, we keep the data only for the period required.</p>

        <h2 id="security">11. How We Protect Your Data</h2>
        <p>We take reasonable steps to protect your data, including:</p>
        <ul>
          <li>
            <strong>Encryption in transit.</strong> TLS 1.2+ (TLS 1.3 where supported) for all
            communications between the App and our servers.
          </li>
          <li>
            <strong>Encryption at rest.</strong> AES-256 on all production data stores.
          </li>
          <li>
            <strong>End-to-end encryption</strong> for any future cloud sync feature.
          </li>
          <li>
            <strong>Least-privilege access controls</strong> for our team. Only a small number of
            authorised staff can access production data, and only for specific purposes (responding
            to your support request, fixing a crash, processing a deletion).
          </li>
          <li>
            <strong>No analytics, no third-party trackers, no advertising SDKs.</strong> Smaller
            attack surface, fewer vendors to trust.
          </li>
          <li>
            <strong>Regular security review.</strong> We review our security posture at least
            annually, or more often when we make material changes.
          </li>
          <li>
            <strong>Incident response.</strong> We have an incident-response plan and will notify
            affected Users and relevant regulators of any material breach within 72 hours of
            discovery (where required by law).
          </li>
        </ul>
        <p>
          No system is perfectly secure. We do our best, but we cannot guarantee absolute security.
          Please protect your device with a PIN / biometrics, and do not share your account
          credentials.
        </p>

        <h2 id="rights">12. Your Rights and Choices</h2>
        <p>Depending on your jurisdiction, you have some or all of the following rights:</p>
        <ul>
          <li>
            <strong>Right of access.</strong> Request a copy of the personal data we hold about you.
          </li>
          <li>
            <strong>Right of rectification.</strong> Correct inaccurate or incomplete data.
          </li>
          <li>
            <strong>Right of erasure ("right to be forgotten").</strong> Ask us to delete your data,
            subject to exceptions.
          </li>
          <li>
            <strong>Right to restrict processing.</strong> Limit how we use your data.
          </li>
          <li>
            <strong>Right to data portability.</strong> Receive your data in a machine-readable
            format (where technically feasible).
          </li>
          <li>
            <strong>Right to object.</strong> Object to processing based on legitimate interest or
            for direct marketing.
          </li>
          <li>
            <strong>Right to withdraw consent.</strong> Where processing is based on consent, you
            can withdraw it at any time without affecting prior lawful processing.
          </li>
          <li>
            <strong>Right to lodge a complaint with a supervisory authority.</strong> See §26.
          </li>
        </ul>
        <p>
          You can exercise most of these rights <strong>directly in the App</strong> (Settings →
          Privacy → Manage my data). For anything else, email{' '}
          <a href="mailto:privacy@positiveness.club">privacy@positiveness.club</a> with proof of
          identity and we will respond within 30 days.
        </p>

        <h2 id="gdpr">13. EEA, UK &amp; Swiss Users — GDPR / UK-GDPR / FADP</h2>
        <p>
          If you are in the European Economic Area (EEA), the United Kingdom, or Switzerland, you
          have the rights set out in §12. Our legal bases for processing are set out in §6.
        </p>
        <p>
          We are required to lodge the contact details of our EU and UK Article 27 representatives
          with you <strong>before</strong> we market the Service in those regions. See §2 —
          appointment is pending and will be notified by email and in-App.
        </p>
        <p>
          Where we transfer your data outside the EEA, UK or Switzerland, we rely on the safeguards
          described in §9.
        </p>
        <p>
          <strong>Automated decision-making.</strong> We do not make decisions based solely on
          automated processing that have legal or similarly significant effects on you (Art. 22
          GDPR).
        </p>

        <h2 id="us">14. U.S. Users — CCPA / CPRA / State Laws</h2>
        <p>
          If you are a California resident, the California Consumer Privacy Act (CCPA) and the
          California Privacy Rights Act (CPRA) give you the following rights:
        </p>
        <ul>
          <li>
            <strong>Right to know</strong> what personal information we collect, the categories of
            sources, the business or commercial purpose, and the categories of third parties to whom
            we disclose it.
          </li>
          <li>
            <strong>Right to delete</strong> your personal information, subject to exceptions.
          </li>
          <li>
            <strong>Right to correct</strong> inaccurate personal information.
          </li>
          <li>
            <strong>Right to opt out of sale or sharing.</strong> We do not sell or share your
            personal information for cross-context behavioural advertising. There is no opt-out to
            give because no sale/sharing happens.
          </li>
          <li>
            <strong>Right to limit use of Sensitive Personal Information (SPI).</strong> We do not
            collect SPI in the first place.
          </li>
          <li>
            <strong>Right to non-discrimination</strong> for exercising your rights.
          </li>
          <li>
            <strong>"Shine the Light"</strong> (Cal. Civ. Code § 1798.83). California residents may
            request information about the categories of personal information disclosed to third
            parties for those third parties' direct marketing purposes. We do not disclose personal
            information to third parties for their direct marketing purposes.
          </li>
        </ul>
        <p>
          Other U.S. states (Colorado, Connecticut, Delaware, Indiana, Iowa, Kentucky, Maryland,
          Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee,
          Texas, Utah, Virginia, Washington) have similar laws. Most require the same rights as
          California's; we extend those rights to all U.S. residents regardless of state.
        </p>
        <p>
          <strong>Notice of financial incentives.</strong> We do not currently offer financial
          incentives (e.g. discounts in exchange for personal data).
        </p>

        <h2 id="australia">15. Australian Users — Privacy Act 1988</h2>
        <p>
          If you are in Australia, the Privacy Act 1988 (Cth) and the Australian Privacy Principles
          (APPs) apply.
        </p>
        <ul>
          <li>
            <strong>Notifiable Data Breaches scheme.</strong> If we suffer an eligible data breach
            that is likely to result in serious harm, we will notify the Office of the Australian
            Information Commissioner (OAIC) and affected individuals as soon as practicable.
          </li>
          <li>
            <strong>Overseas recipients.</strong> Where we transfer personal data overseas, we take
            reasonable steps to ensure the recipient handles it in accordance with the APPs (see
            §9).
          </li>
          <li>
            <strong>Right to complain to the OAIC.</strong> See §26.
          </li>
        </ul>

        <h2 id="canada">16. Canadian Users — PIPEDA &amp; Quebec Law 25</h2>
        <p>
          If you are in Canada, the Personal Information Protection and Electronic Documents Act
          (PIPEDA) applies. In Quebec, the Act respecting the protection of personal information in
          the private sector (Law 25) adds additional requirements, including:
        </p>
        <ul>
          <li>designating a privacy officer responsible for compliance;</li>
          <li>conducting privacy impact assessments for new projects;</li>
          <li>implementing governance over the personal information of Quebec residents.</li>
        </ul>
        <p>
          See §26 for complaint rights to the Office of the Privacy Commissioner of Canada (OPC) or
          the Commission d'accès à l'information du Québec (CAI).
        </p>

        <h2 id="singapore">17. Singapore Users — PDPA</h2>
        <p>
          If you are in Singapore, the Personal Data Protection Act 2012 ("PDPA") applies. We have
          designated a Data Protection Officer — see §25. You may also complain to the Personal Data
          Protection Commission (PDPC).
        </p>

        <h2 id="indonesia">18. Indonesian Users — UU PDP</h2>
        <p>
          If you are in Indonesia, the Personal Data Protection Law (Undang-Undang Nomor 27 Tahun
          2022 tentang Pelindungan Data Pribadi, "UU PDP") applies. You have the right to:
        </p>
        <ul>
          <li>access your personal data;</li>
          <li>correct or update your personal data;</li>
          <li>delete your personal data;</li>
          <li>withdraw consent to processing;</li>
          <li>object to automated decision-making;</li>
          <li>lodge a complaint with the Minister or relevant supervisory authority.</li>
        </ul>
        <p>
          We will appoint a local representative as required by the UU PDP before marketing the
          Service in Indonesia.
        </p>

        <h2 id="brazil">19. Brazilian Users — LGPD</h2>
        <p>
          If you are in Brazil, the Lei Geral de Proteção de Dados (LGPD, Law No. 13.709/2018)
          applies. You have rights similar to those under the GDPR. We will appoint an "encarregado"
          (data protection officer) in Brazil before marketing the Service there.
        </p>
        <p>You may complain to the Autoridade Nacional de Proteção de Dados (ANPD).</p>

        <h2 id="thailand">20. Thai Users — PDPA Thailand</h2>
        <p>
          If you are in Thailand, the Personal Data Protection Act B.E. 2562 (2019) ("PDPA
          Thailand") applies. You have rights similar to those under the GDPR, including the right
          to withdraw consent and to lodge a complaint with the Personal Data Protection Committee
          (PDPC).
        </p>

        <h2 id="korea">21. Korean Users — PIPA</h2>
        <p>
          If you are in the Republic of Korea, the Personal Information Protection Act ("PIPA")
          applies. You may file a complaint with the Personal Information Protection Commission
          (PIPC). We will appoint a local representative as required by PIPA before marketing the
          Service in Korea.
        </p>

        <h2 id="japan">22. Japanese Users — APPI</h2>
        <p>
          If you are in Japan, the Act on the Protection of Personal Information ("APPI") applies.
          You have the right to request disclosure, correction, suspension of use, and deletion of
          personal information. You may complain to the Personal Information Protection Commission.
        </p>

        <h2 id="india">23. Indian Users — DPDP Act</h2>
        <p>
          If you are in India, the Digital Personal Data Protection Act 2023 ("DPDP Act") applies
          once it comes into force. You have rights to access, correction, erasure, grievance
          redressal, and the right to nominate another individual to exercise your rights in the
          event of your death or incapacity.
        </p>

        <h2 id="changes">24. Changes to This Policy</h2>
        <p>We may update this Policy from time to time. When we do, we will:</p>
        <ul>
          <li>post the revised Policy in the App and at positiveness.club;</li>
          <li>update the "Last updated" date at the top;</li>
          <li>
            notify you by in-App notification or email (where we have your address on file) of any
            material changes;
          </li>
          <li>
            where required by law, request your renewed consent before the change takes effect.
          </li>
        </ul>
        <p>
          Where the change is required by law (for example, to comply with a new statute), the
          change takes effect immediately on publication.
        </p>

        <h2 id="dpo">25. Data Protection Officer</h2>
        <p>Our Data Protection Officer can be reached at:</p>
        <ul>
          <li>
            Email: <a href="mailto:dpo@positiveness.club">dpo@positiveness.club</a>
          </li>
          <li>
            Postal: positiveness.club Pte Ltd, attn: DPO, [registered address, Singapore — to be
            confirmed by counsel], Republic of Singapore
          </li>
        </ul>

        <h2 id="complaints">26. How to Complain</h2>
        <p>
          If you have a concern about how we handle your data, please contact us first at{' '}
          <a href="mailto:privacy@positiveness.club">privacy@positiveness.club</a> — we will respond
          within 30 days and try to resolve the issue informally.
        </p>
        <p>
          If we cannot resolve your concern, you have the right to complain to your local
          data-protection authority:
        </p>
        <ul>
          <li>
            <strong>EU:</strong> Your national Data Protection Authority (a list is at{' '}
            <a
              href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
              target="_blank"
              rel="noopener noreferrer"
            >
              edpb.europa.eu
            </a>
            ).
          </li>
          <li>
            <strong>UK:</strong> Information Commissioner's Office (ICO) at{' '}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
              ico.org.uk
            </a>
            .
          </li>
          <li>
            <strong>U.S. — California:</strong> California Privacy Protection Agency (CPPA) at{' '}
            <a href="https://cppa.ca.gov" target="_blank" rel="noopener noreferrer">
              cppa.ca.gov
            </a>
            .
          </li>
          <li>
            <strong>Australia:</strong> Office of the Australian Information Commissioner (OAIC) at{' '}
            <a href="https://oaic.gov.au" target="_blank" rel="noopener noreferrer">
              oaic.gov.au
            </a>
            .
          </li>
          <li>
            <strong>Canada:</strong> Office of the Privacy Commissioner of Canada at{' '}
            <a href="https://priv.gc.ca" target="_blank" rel="noopener noreferrer">
              priv.gc.ca
            </a>
            .
          </li>
          <li>
            <strong>Quebec:</strong> Commission d'accès à l'information du Québec (CAI) at{' '}
            <a href="https://cai.gouv.qc.ca" target="_blank" rel="noopener noreferrer">
              cai.gouv.qc.ca
            </a>
            .
          </li>
          <li>
            <strong>Singapore:</strong> Personal Data Protection Commission (PDPC) at{' '}
            <a href="https://pdpc.gov.sg" target="_blank" rel="noopener noreferrer">
              pdpc.gov.sg
            </a>
            .
          </li>
          <li>
            <strong>Indonesia:</strong> Kementerian Komunikasi dan Informatika (KOMINFO).
          </li>
          <li>
            <strong>Brazil:</strong> Autoridade Nacional de Proteção de Dados (ANPD) at{' '}
            <a href="https://gov.br/anpd" target="_blank" rel="noopener noreferrer">
              gov.br/anpd
            </a>
            .
          </li>
          <li>
            <strong>Thailand:</strong> Personal Data Protection Committee (PDPC).
          </li>
          <li>
            <strong>Korea:</strong> Personal Information Protection Commission (PIPC) at{' '}
            <a href="https://pipc.go.kr" target="_blank" rel="noopener noreferrer">
              pipc.go.kr
            </a>
            .
          </li>
          <li>
            <strong>Japan:</strong> Personal Information Protection Commission (PPC) at{' '}
            <a href="https://ppc.go.jp" target="_blank" rel="noopener noreferrer">
              ppc.go.jp
            </a>
            .
          </li>
          <li>
            <strong>India:</strong> Data Protection Board of India (once constituted).
          </li>
        </ul>

        <h2 id="ai">27. AI, Machine Learning &amp; Voice Synthesis</h2>
        <p>
          HEAL uses AI tools as editorial assistants for session production, voice synthesis for
          audio, and (in future) for personalisation. We are committed to:
        </p>
        <ul>
          <li>
            <strong>Not using your personal data to train AI models.</strong> Your mood logs,
            journal entries, and listening history are not transmitted to any model provider for
            training.
          </li>
          <li>
            <strong>Not transmitting your personal data to voice-synthesis providers.</strong> Audio
            rendering happens in our pipeline using synthetic voices that are licensed separately.
          </li>
          <li>
            <strong>Not using audio sessions to clone voices.</strong> You may not use any Content
            to train, fine-tune, evaluate or clone any voice (see{' '}
            <Link href="/heal/terms" className="text-coral underline">
              HEAL Terms §11
            </Link>
            ).
          </li>
          <li>
            <strong>Transparency.</strong> Where a session is generated with significant AI
            assistance, we will indicate this in the App and at the start of the session.
          </li>
          <li>
            <strong>Human editorial control.</strong> Every published session is reviewed and
            approved by a qualified human editor (with clinical or scientific credentials) before
            release.
          </li>
        </ul>

        <h2 id="third">28. Third-Party Services We Use</h2>
        <p>
          The Service relies on the following third parties. Each is bound by a written
          data-processing agreement or by the equivalent standard contractual clauses:
        </p>
        <ul>
          <li>
            <strong>Apple Inc.</strong> — App Store distribution, in-App purchase billing. Privacy
            policy at{' '}
            <a href="https://www.apple.com/legal/privacy" target="_blank" rel="noopener noreferrer">
              apple.com/legal/privacy
            </a>
            .
          </li>
          <li>
            <strong>Google LLC</strong> — Play Store distribution, in-App purchase billing. Privacy
            policy at{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              policies.google.com/privacy
            </a>
            .
          </li>
          <li>
            <strong>Cloudflare, Inc.</strong> — CDN, edge functions, DDoS protection. Privacy policy
            at{' '}
            <a
              href="https://www.cloudflare.com/privacypolicy"
              target="_blank"
              rel="noopener noreferrer"
            >
              cloudflare.com/privacypolicy
            </a>
            .
          </li>
          <li>
            <strong>Supabase, Inc.</strong> — Authenticated backend (only used for the optional
            cloud-sync feature, when enabled). Privacy policy at{' '}
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
              supabase.com/privacy
            </a>
            .
          </li>
          <li>
            <strong>Resend, Inc.</strong> — Transactional email delivery. Privacy policy at{' '}
            <a
              href="https://resend.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              resend.com/legal/privacy-policy
            </a>
            .
          </li>
          <li>
            <strong>Zoho / Google Workspace</strong> — Helpdesk / email. Privacy policy at{' '}
            <a
              href="https://workspace.google.com/terms/user_features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              workspace.google.com
            </a>
            .
          </li>
          <li>
            <strong>ElevenLabs / PlayHT (or in-house)</strong> — Voice synthesis for audio sessions.
            Used only at synthesis time; we do not transmit personal data to them.
          </li>
        </ul>

        <h2 id="contact">29. How to Contact Us</h2>
        <p>
          For any questions about this Policy, to exercise your rights, or to lodge a complaint:
        </p>
        <ul>
          <li>
            Email: <a href="mailto:privacy@positiveness.club">privacy@positiveness.club</a>
          </li>
          <li>
            Email (GDPR/CCPA Data Subject Access Request):{' '}
            <a href="mailto:dsar@positiveness.club">dsar@positiveness.club</a>
          </li>
          <li>
            Postal: positiveness.club Pte Ltd, attn: Privacy, [registered address, Singapore — to be
            confirmed by counsel], Republic of Singapore
          </li>
        </ul>
        <p>
          See the{' '}
          <Link href="/heal/terms" className="text-coral underline">
            HEAL Terms and Conditions
          </Link>{' '}
          for the legal terms governing the Service.
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
          template. It has <strong>not</strong> been reviewed by licensed counsel. Before shipping
          the Service to Users in any jurisdiction, the Company must have a licensed attorney in the
          relevant jurisdiction review and approve this document.
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
