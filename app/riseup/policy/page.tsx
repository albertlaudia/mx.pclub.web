/**
 * Riseup — Privacy Policy
 *
 * Live URL referenced from App Store / Play Store metadata for the Riseup app.
 *
 * Drafting notes:
 *   - Riseup is a habit/morning-routine app. No clinical claims.
 *   - Local-first: habit lists, journal entries, streaks all on-device.
 *   - Subscription data via Apple/Google (masked receipts only).
 *   - Not legal advice.
 *   - Version: v1.0  2026-07-13
 */

import { SITE_URL } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Riseup — Privacy Policy',
  description:
    'Privacy policy for the Riseup habit / morning-routine app. Local-first storage of habits, journal, and streaks; no analytics; regional rights under GDPR, CCPA, PDPA, LGPD; and how to exercise your data rights.',
  alternates: { canonical: `${SITE_URL}/riseup/policy` },
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

export default function RiseupPolicyPage() {
  return (
    <main className="container-narrow py-12 md:py-20">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="chip">Riseup</span>
          <span className="chip">Privacy</span>
        </div>
        <h1 className="text-display-md md:text-display-lg font-bold tracking-tight mb-3">
          Riseup — Privacy Policy
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
          <Link href="/riseup/terms" className="text-coral underline">
            See Riseup — Terms and Conditions
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
            ✅ Your habits, journal entries, and streak counts are stored{' '}
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
            <strong>What we do not collect:</strong> Your habits, journal entries, streak history,
            location, contacts, photos, microphone audio, biometrics, advertising IDs, or any
            "special category" data under GDPR Art. 9.
          </li>
          <li>
            <strong>Where your data lives:</strong> On your device. By default we do not upload your
            habit data to any server.
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
          in those jurisdictions. Until then, contact the Company directly at the address above.
        </p>

        <h2 id="scope">3. What This Policy Covers</h2>
        <p>This Policy describes:</p>
        <ul>
          <li>
            the personal data the Company collects from Users through the Riseup App and related
            services (the <strong>"Service"</strong>);
          </li>
          <li>how the Company uses that data;</li>
          <li>with whom the Company shares that data;</li>
          <li>how long the Company keeps that data;</li>
          <li>the rights Users have over their data;</li>
          <li>how Users can exercise those rights.</li>
        </ul>
        <p>
          This Policy does <strong>not</strong> cover data you submit to Apple, Google, or to any
          coaching, therapy, or wellness service outside Riseup.
        </p>

        <h2 id="what">4. What We (Don't) Collect</h2>
        <p>We believe in collecting the minimum data necessary to deliver the Service.</p>

        <h3>4.1 What we collect (with reason)</h3>
        <ul>
          <li>
            <strong>App version, device model, OS version, locale.</strong> Reason: deliver a
            routine in your language and to a compatible format.
          </li>
          <li>
            <strong>Subscription status (masked receipt from the Store).</strong> Reason: know
            whether you have access to Pro features.
          </li>
          <li>
            <strong>Aggregated crash logs (with your explicit consent).</strong> Reason: diagnose
            and fix crashes. Off by default.
          </li>
          <li>
            <strong>Support emails and attachments.</strong> Reason: respond to your request. Stored
            in our helpdesk.
          </li>
          <li>
            <strong>Newsletter signup email (if you submit it).</strong> Reason: deliver the
            newsletter. Unsubscribe any time via the link in every email or via /unsubscribe.
          </li>
        </ul>

        <h3>4.2 What we DO NOT collect (and never have)</h3>
        <ul>
          <li>
            Your name, address, phone number, or date of birth (unless you provide it in support
            correspondence).
          </li>
          <li>Your habit list, journal entries, or streak history (kept on-device).</li>
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

        <h2 id="where">5. Where Your Data Lives (Local-First)</h2>
        <p>
          By default, <strong>everything you do in Riseup stays on your device</strong>. This
          includes your habits, journal entries, streak counters, downloaded sessions, and
          preferences. This data is stored in an encrypted SQLite database on your device.{' '}
          <strong>
            No backup to iCloud, no backup to Google Drive, no backup to the Company's servers
          </strong>{' '}
          unless you explicitly enable an opt-in cloud sync.
        </p>
        <p>
          If you uninstall the App without exporting your data first, that data is deleted. The
          Company cannot recover it.
        </p>

        <h2 id="baselegal">6. Legal Basis for Processing</h2>
        <p>Under the EU GDPR, our legal bases are:</p>
        <ul>
          <li>
            <strong>Performance of a contract</strong> (Art. 6(1)(b)) — to provide the Service.
          </li>
          <li>
            <strong>Legitimate interest</strong> (Art. 6(1)(f)) — to operate, secure, and improve
            the Service.
          </li>
          <li>
            <strong>Consent</strong> (Art. 6(1)(a)) — for optional features.
          </li>
          <li>
            <strong>Legal obligation</strong> (Art. 6(1)(c)) — to comply with applicable law.
          </li>
        </ul>

        <h2 id="children">7. Children</h2>
        <p>
          Riseup is not directed to children under the age thresholds in §4 of our Terms. If we
          learn that we have inadvertently collected personal data from a child below the threshold,
          we will delete it as soon as possible.
        </p>

        <h2 id="sharing">8. Who We Share With (and Why)</h2>
        <p>We do not sell, rent or lease your personal data to anyone. We share data only with:</p>
        <ol>
          <li>
            <strong>Apple Inc.</strong> and <strong>Google LLC</strong>, as the operator of the
            Store through which you purchased your Subscription.
          </li>
          <li>
            <strong>Cloud infrastructure providers</strong> (Cloudflare and Supabase for backend
            storage and authenticated cloud sync if you opt in).
          </li>
          <li>
            <strong>Email infrastructure providers</strong> (Resend Inc., based in the U.S.) for
            transactional emails.
          </li>
          <li>
            <strong>Helpdesk and support tools</strong> (Zoho Mail / Google Workspace) to respond to
            support inquiries.
          </li>
          <li>
            <strong>Voice-synthesis providers</strong> for audio rendering at synthesis time only.
          </li>
          <li>
            <strong>Legal and law-enforcement requests.</strong> We disclose personal data when we
            reasonably believe it is necessary to comply with law, regulation, court order, or valid
            request from a public authority.
          </li>
          <li>
            <strong>Business transfers.</strong> In the event of a merger, acquisition, financing,
            reorganisation, bankruptcy, or sale of all or part of our business.
          </li>
        </ol>
        <p>Because we collect minimal data, most requests will return no usable information.</p>

        <h2 id="international">9. International Data Transfers</h2>
        <p>
          The Company is based in Singapore. Where data is transferred to a country that has not
          been deemed adequate by the European Commission, the UK ICO or other relevant authority,
          we rely on the European Commission's Standard Contractual Clauses (SCCs), the UK
          International Data Transfer Addendum, or other lawful transfer mechanisms.
        </p>

        <h2 id="retention">10. How Long We Keep Your Data</h2>
        <ul>
          <li>
            <strong>On-device data:</strong> Until you delete the App or clear app data.
          </li>
          <li>
            <strong>Subscription receipt:</strong> For as long as you hold a Pro Subscription, plus
            7 years for tax/audit.
          </li>
          <li>
            <strong>Support correspondence:</strong> Up to 3 years from last contact, then deleted
            or anonymised.
          </li>
          <li>
            <strong>Crash logs (opt-in):</strong> Up to 90 days, then deleted or fully anonymised.
          </li>
          <li>
            <strong>Newsletter signup:</strong> Until you unsubscribe, plus a 30-day grace period.
          </li>
        </ul>

        <h2 id="security">11. How We Protect Your Data</h2>
        <p>
          We take reasonable steps to protect your data, including TLS 1.2+ in transit, AES-256 at
          rest, end-to-end encryption for any future cloud sync feature, least-privilege access
          controls, no analytics or third-party trackers, and a documented incident-response plan
          with 72-hour breach notification where required by law.
        </p>
        <p>No system is perfectly secure. Please protect your device with a PIN / biometrics.</p>

        <h2 id="rights">12. Your Rights and Choices</h2>
        <p>
          Depending on your jurisdiction, you have some or all of the following rights:{' '}
          <strong>
            right of access, right of rectification, right of erasure, right to restrict processing,
            right to data portability, right to object, right to withdraw consent, and right to
            lodge a complaint with a supervisory authority.
          </strong>{' '}
          You can exercise most of these rights directly in the App (Settings → Privacy → Manage my
          data). For anything else, email{' '}
          <a href="mailto:privacy@positiveness.club">privacy@positiveness.club</a> with proof of
          identity and we will respond within 30 days.
        </p>

        <h2 id="gdpr">13. EEA, UK &amp; Swiss Users — GDPR / UK-GDPR / FADP</h2>
        <p>
          If you are in the EEA, the United Kingdom, or Switzerland, you have the rights set out in
          §12. Our legal bases for processing are set out in §6. We are required to lodge the
          contact details of our EU and UK Article 27 representatives with you{' '}
          <strong>before</strong> we market the Service in those regions. See §2 — appointment is
          pending and will be notified by email and in-App. We do not make decisions based solely on
          automated processing that have legal or similarly significant effects on you (Art. 22
          GDPR).
        </p>

        <h2 id="us">14. U.S. Users — CCPA / CPRA / State Laws</h2>
        <p>
          If you are a California resident, the CCPA and CPRA give you the following rights:{' '}
          <strong>
            right to know, right to delete, right to correct, right to opt out of sale or sharing,
            right to limit use of Sensitive Personal Information, right to non-discrimination, and
            the "Shine the Light" right.
          </strong>{' '}
          We do not sell or share your personal information for cross-context behavioural
          advertising. We do not collect SPI in the first place. Other U.S. states (Colorado,
          Connecticut, Delaware, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska,
          New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, Virginia,
          Washington) have similar laws; we extend those rights to all U.S. residents regardless of
          state.
        </p>

        <h2 id="australia">15. Australian Users — Privacy Act 1988</h2>
        <p>
          If you are in Australia, the Privacy Act 1988 (Cth) and the Australian Privacy Principles
          (APPs) apply. The Notifiable Data Breaches scheme applies. You may complain to the Office
          of the Australian Information Commissioner (OAIC).
        </p>

        <h2 id="canada">16. Canadian Users — PIPEDA &amp; Quebec Law 25</h2>
        <p>
          If you are in Canada, PIPEDA applies. In Quebec, Law 25 adds additional requirements,
          including designating a privacy officer, conducting privacy impact assessments, and
          implementing governance over the personal information of Quebec residents. You may
          complain to the Office of the Privacy Commissioner of Canada or the Commission d'accès à
          l'information du Québec.
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
          2022 tentang Pelindungan Data Pribadi, "UU PDP") applies. You have the right to access,
          correct, delete your personal data, withdraw consent, object to automated decision-making,
          and lodge a complaint. We will appoint a local representative as required by the UU PDP
          before marketing the Service in Indonesia.
        </p>

        <h2 id="brazil">19. Brazilian Users — LGPD</h2>
        <p>
          If you are in Brazil, the Lei Geral de Proteção de Dados (LGPD, Law No. 13.709/2018)
          applies. You have rights similar to those under the GDPR. We will appoint an "encarregado"
          (data protection officer) in Brazil before marketing the Service there.
        </p>

        <h2 id="thailand">20. Thai Users — PDPA Thailand</h2>
        <p>
          If you are in Thailand, the Personal Data Protection Act B.E. 2562 (2019) applies. You
          have rights similar to those under the GDPR.
        </p>

        <h2 id="korea">21. Korean Users — PIPA</h2>
        <p>
          If you are in the Republic of Korea, the Personal Information Protection Act ("PIPA")
          applies. We will appoint a local representative as required by PIPA before marketing the
          Service in Korea.
        </p>

        <h2 id="japan">22. Japanese Users — APPI</h2>
        <p>
          If you are in Japan, the Act on the Protection of Personal Information ("APPI") applies.
          You may complain to the Personal Information Protection Commission.
        </p>

        <h2 id="india">23. Indian Users — DPDP Act</h2>
        <p>
          If you are in India, the Digital Personal Data Protection Act 2023 ("DPDP Act") applies
          once it comes into force.
        </p>

        <h2 id="changes">24. Changes to This Policy</h2>
        <p>
          We may update this Policy from time to time. When we do, we will post the revised Policy
          in the App and at positiveness.club, update the "Last updated" date, and notify you by
          in-App notification or email of any material changes.
        </p>

        <h2 id="dpo">25. Data Protection Officer</h2>
        <p>
          Our Data Protection Officer can be reached at{' '}
          <a href="mailto:dpo@positiveness.club">dpo@positiveness.club</a> or at the postal address
          in §29.
        </p>

        <h2 id="complaints">26. How to Complain</h2>
        <p>
          If you have a concern about how we handle your data, please contact us first at{' '}
          <a href="mailto:privacy@positiveness.club">privacy@positiveness.club</a> — we will respond
          within 30 days and try to resolve the issue informally. If we cannot resolve your concern,
          you have the right to complain to your local data-protection authority (a list of EU, UK,
          U.S. California, Australia, Canada, Quebec, Singapore, Indonesia, Brazil, Thailand, Korea,
          Japan, and India authorities is provided in our HEAL Privacy Policy §26, which is
          incorporated by reference).
        </p>

        <h2 id="ai">27. AI, Machine Learning &amp; Voice Synthesis</h2>
        <p>
          Riseup uses AI tools as editorial assistants for session production, voice synthesis for
          audio, and (in future) for personalisation. We are committed to:
        </p>
        <ul>
          <li>
            <strong>Not using your personal data to train AI models.</strong>
          </li>
          <li>
            <strong>Not transmitting your personal data to voice-synthesis providers.</strong>
          </li>
          <li>
            <strong>Not using audio sessions to clone voices.</strong> You may not use any Content
            to train, fine-tune, evaluate or clone any voice (see{' '}
            <Link href="/riseup/terms" className="text-coral underline">
              Riseup Terms §10
            </Link>
            ).
          </li>
          <li>
            <strong>Transparency.</strong> Where a session is generated with significant AI
            assistance, we will indicate this.
          </li>
        </ul>

        <h2 id="third">28. Third-Party Services We Use</h2>
        <p>The Service relies on:</p>
        <ul>
          <li>
            <strong>Apple Inc.</strong> (App Store) — privacy policy at{' '}
            <a href="https://www.apple.com/legal/privacy" target="_blank" rel="noopener noreferrer">
              apple.com/legal/privacy
            </a>
            .
          </li>
          <li>
            <strong>Google LLC</strong> (Play Store) — privacy policy at{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              policies.google.com/privacy
            </a>
            .
          </li>
          <li>
            <strong>Cloudflare, Inc.</strong> (CDN, edge) — privacy policy at{' '}
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
            <strong>Supabase, Inc.</strong> (authenticated backend) — privacy policy at{' '}
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
              supabase.com/privacy
            </a>
            .
          </li>
          <li>
            <strong>Resend, Inc.</strong> (transactional email) — privacy policy at{' '}
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
            <strong>Zoho / Google Workspace</strong> (helpdesk) — privacy policy at{' '}
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
            <strong>ElevenLabs / PlayHT (or in-house)</strong> (voice synthesis). Used only at
            synthesis time; we do not transmit personal data to them.
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
            Email (Data Subject Access Request):{' '}
            <a href="mailto:dsar@positiveness.club">dsar@positiveness.club</a>
          </li>
          <li>
            Postal: positiveness.club Pte Ltd, attn: Privacy, [registered address, Singapore — to be
            confirmed by counsel], Republic of Singapore
          </li>
        </ul>
        <p>
          See the{' '}
          <Link href="/riseup/terms" className="text-coral underline">
            Riseup Terms and Conditions
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
