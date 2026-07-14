/**
 * Resonate — Privacy Policy
 *
 * Live URL referenced from App Store / Play Store metadata for the Resonate app.
 *
 * Drafting notes:
 *   - Resonate is a music app (tuner + lessons + chord library). No clinical claims.
 *   - Local-first: practice history, tunings, lesson progress, preferences.
 *   - Microphone data is processed on-device only (not transmitted).
 *   - Subscription data via Apple/Google (masked receipts only).
 *   - Not legal advice.
 *   - Version: v1.0  2026-07-13
 */

import { PlainLegalPage } from '@/components/PlainLegalPage'
import { SITE_URL } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resonate — Privacy Policy',
  description:
    'Privacy policy for the Resonate instrument tuner and music-learning app. Microphone-data handled on-device only; no analytics; regional rights under GDPR, CCPA, PDPA, LGPD; and how to exercise your data rights.',
  alternates: { canonical: `${SITE_URL}/resonate/policy` },
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
  { id: 'mic', title: '5. Microphone Data: On-Device Only' },
  { id: 'where', title: '6. Where Your Data Lives (Local-First)' },
  { id: 'baselegal', title: '7. Legal Basis for Processing' },
  { id: 'children', title: '8. Children' },
  { id: 'sharing', title: '9. Who We Share With (and Why)' },
  { id: 'international', title: '10. International Data Transfers' },
  { id: 'retention', title: '11. How Long We Keep Your Data' },
  { id: 'security', title: '12. How We Protect Your Data' },
  { id: 'rights', title: '13. Your Rights and Choices' },
  { id: 'gdpr', title: '14. EEA, UK & Swiss Users — GDPR / UK-GDPR / FADP' },
  { id: 'us', title: '15. U.S. Users — CCPA / CPRA / State Laws' },
  { id: 'australia', title: '16. Australian Users — Privacy Act 1988' },
  { id: 'canada', title: '17. Canadian Users — PIPEDA & Quebec Law 25' },
  { id: 'singapore', title: '18. Singapore Users — PDPA' },
  { id: 'indonesia', title: '19. Indonesian Users — UU PDP' },
  { id: 'brazil', title: '20. Brazilian Users — LGPD' },
  { id: 'thailand', title: '21. Thai Users — PDPA Thailand' },
  { id: 'korea', title: '22. Korean Users — PIPA' },
  { id: 'japan', title: '23. Japanese Users — APPI' },
  { id: 'india', title: '24. Indian Users — DPDP Act' },
  { id: 'changes', title: '25. Changes to This Policy' },
  { id: 'dpo', title: '26. Data Protection Officer' },
  { id: 'complaints', title: '27. How to Complain' },
  { id: 'ai', title: '28. AI, Machine Learning & Voice Synthesis' },
  { id: 'third', title: '29. Third-Party Services We Use' },
  { id: 'contact', title: '30. How to Contact Us' },
]

export default function ResonatePolicyPage() {
  return (
    <PlainLegalPage
      documentTitle="Resonate — Privacy Policy"
      version={VERSION}
      lastUpdated={LAST_UPDATED}
      otherDoc={{ label: 'Resonate — Terms and Conditions', href: '/resonate/terms' }}
      sections={SECTIONS}
    >
      <h2 id="summary">1. Plain-language Summary</h2>
      <p>This is a one-page overview. The full text follows below.</p>
      <ul>
        <li>
          <strong>What we collect:</strong> Almost nothing. We collect only what is necessary to run
          the App — your subscription status (delivered by Apple or Google), optional error logs
          (only with your consent), and any data you explicitly submit (e.g. support emails).
        </li>
        <li>
          <strong>What we do not collect:</strong> Your practice history, tunings, lesson progress,
          microphone audio, location, contacts, photos, biometrics, advertising IDs, or any "special
          category" data under GDPR Art. 9.
        </li>
        <li>
          <strong>Where your data lives:</strong> On your device. By default we do not upload your
          practice data to any server.
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
        <strong>EU and UK representatives.</strong> For Users in the EEA and the UK, we will appoint
        an Article 27 representative under the GDPR before we begin marketing the Service in those
        jurisdictions.
      </p>

      <h2 id="scope">3. What This Policy Covers</h2>
      <p>
        This Policy describes the personal data the Company collects from Users through the Resonate
        App and related services (the <strong>"Service"</strong>); how the Company uses that data;
        with whom the Company shares that data; how long the Company keeps that data; the rights
        Users have over their data; and how Users can exercise those rights.
      </p>

      <h2 id="what">4. What We (Don't) Collect</h2>
      <p>We believe in collecting the minimum data necessary to deliver the Service.</p>

      <h3>4.1 What we collect (with reason)</h3>
      <ul>
        <li>
          <strong>App version, device model, OS version, locale.</strong> Reason: deliver a tuner
          and lessons in your language and to a compatible format.
        </li>
        <li>
          <strong>Subscription status (masked receipt from the Store).</strong> Reason: know whether
          you have access to Pro features.
        </li>
        <li>
          <strong>Aggregated crash logs (with your explicit consent).</strong> Reason: diagnose and
          fix crashes. Off by default.
        </li>
        <li>
          <strong>Support emails and attachments.</strong> Reason: respond to your request.
        </li>
        <li>
          <strong>Newsletter signup email (if you submit it).</strong> Reason: deliver the
          newsletter.
        </li>
      </ul>

      <h3>4.2 What we DO NOT collect (and never have)</h3>
      <ul>
        <li>
          Your name, address, phone number, or date of birth (unless you provide it in support
          correspondence).
        </li>
        <li>
          Your practice history, tunings used, lesson progress, or chord preferences (kept
          on-device).
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

      <h2 id="mic">5. Microphone Data: On-Device Only</h2>
      <p>
        Resonate's tuner requires access to your Device's microphone. The microphone-data handling
        is as follows:
      </p>
      <ol>
        <li>
          <strong>No recording.</strong> The App does not record, save, buffer, encode, compress, or
          store the audio signal beyond what is needed for instantaneous pitch detection.
        </li>
        <li>
          <strong>No transmission.</strong> The App does not transmit the audio signal, or any
          feature extracted from it, to the Company's servers, to a third-party, or to any AI/ML
          system.
        </li>
        <li>
          <strong>No aggregation.</strong> The App does not send aggregate "people are tuning to 442
          Hz this week" statistics to us.
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
      <p>This is a deliberate, on-device-only design. We do not have a server-side tuner.</p>

      <h2 id="where">6. Where Your Data Lives (Local-First)</h2>
      <p>
        By default, <strong>everything you do in Resonate stays on your device</strong>. This
        includes your practice history, tunings used, lesson progress, downloaded lessons, and
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

      <h2 id="baselegal">7. Legal Basis for Processing</h2>
      <p>Under the EU GDPR, our legal bases are:</p>
      <ul>
        <li>
          <strong>Performance of a contract</strong> (Art. 6(1)(b)) — to provide the Service.
        </li>
        <li>
          <strong>Legitimate interest</strong> (Art. 6(1)(f)) — to operate, secure, and improve the
          Service.
        </li>
        <li>
          <strong>Consent</strong> (Art. 6(1)(a)) — for optional features.
        </li>
        <li>
          <strong>Legal obligation</strong> (Art. 6(1)(c)) — to comply with applicable law.
        </li>
      </ul>

      <h2 id="children">8. Children</h2>
      <p>
        Resonate is not directed to children under the age thresholds in §4 of our Terms. If we
        learn that we have inadvertently collected personal data from a child below the threshold,
        we will delete it as soon as possible.
      </p>

      <h2 id="sharing">9. Who We Share With (and Why)</h2>
      <p>We do not sell, rent or lease your personal data to anyone. We share data only with:</p>
      <ol>
        <li>
          <strong>Apple Inc.</strong> and <strong>Google LLC</strong>, as the operator of the Store
          through which you purchased your Subscription.
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
          <strong>Music-licensing intermediaries.</strong> If you play a track through a third-party
          (e.g. backing-track provider), the relevant intermediary may receive a request. The
          intermediary's own privacy policy applies.
        </li>
        <li>
          <strong>Legal and law-enforcement requests.</strong>
        </li>
        <li>
          <strong>Business transfers.</strong>
        </li>
      </ol>
      <p>
        Because we collect minimal data and process microphone data on-device, most requests will
        return no usable information.
      </p>

      <h2 id="international">10. International Data Transfers</h2>
      <p>
        The Company is based in Singapore. Where data is transferred to a country that has not been
        deemed adequate by the European Commission, the UK ICO or other relevant authority, we rely
        on the European Commission's Standard Contractual Clauses (SCCs), the UK International Data
        Transfer Addendum, or other lawful transfer mechanisms.
      </p>

      <h2 id="retention">11. How Long We Keep Your Data</h2>
      <ul>
        <li>
          <strong>On-device data:</strong> Until you delete the App or clear app data.
        </li>
        <li>
          <strong>Subscription receipt:</strong> For as long as you hold a Pro Subscription, plus 7
          years for tax/audit.
        </li>
        <li>
          <strong>Support correspondence:</strong> Up to 3 years from last contact, then deleted or
          anonymised.
        </li>
        <li>
          <strong>Crash logs (opt-in):</strong> Up to 90 days, then deleted or fully anonymised.
        </li>
        <li>
          <strong>Newsletter signup:</strong> Until you unsubscribe, plus a 30-day grace period.
        </li>
      </ul>

      <h2 id="security">12. How We Protect Your Data</h2>
      <p>
        We take reasonable steps to protect your data, including TLS 1.2+ in transit, AES-256 at
        rest, end-to-end encryption for any future cloud sync feature, least-privilege access
        controls, no analytics or third-party trackers, and a documented incident-response plan with
        72-hour breach notification where required by law.
      </p>
      <p>No system is perfectly secure. Please protect your device with a PIN / biometrics.</p>

      <h2 id="rights">13. Your Rights and Choices</h2>
      <p>
        Depending on your jurisdiction, you have some or all of the following rights:{' '}
        <strong>
          right of access, right of rectification, right of erasure, right to restrict processing,
          right to data portability, right to object, right to withdraw consent, and right to lodge
          a complaint with a supervisory authority.
        </strong>{' '}
        You can exercise most of these rights directly in the App (Settings → Privacy → Manage my
        data). For anything else, email{' '}
        <a href="mailto:privacy@positiveness.club">privacy@positiveness.club</a> with proof of
        identity and we will respond within 30 days.
      </p>

      <h2 id="gdpr">14. EEA, UK &amp; Swiss Users — GDPR / UK-GDPR / FADP</h2>
      <p>
        If you are in the EEA, the United Kingdom, or Switzerland, you have the rights set out in
        §13. Our legal bases for processing are set out in §7. We are required to lodge the contact
        details of our EU and UK Article 27 representatives with you <strong>before</strong> we
        market the Service in those regions. See §2 — appointment is pending and will be notified by
        email and in-App. We do not make decisions based solely on automated processing that have
        legal or similarly significant effects on you (Art. 22 GDPR).
      </p>

      <h2 id="us">15. U.S. Users — CCPA / CPRA / State Laws</h2>
      <p>
        If you are a California resident, the CCPA and CPRA give you the following rights:{' '}
        <strong>
          right to know, right to delete, right to correct, right to opt out of sale or sharing,
          right to limit use of Sensitive Personal Information, right to non-discrimination, and the
          "Shine the Light" right.
        </strong>{' '}
        We do not sell or share your personal information for cross-context behavioural advertising.
        We do not collect SPI in the first place. Other U.S. states have similar laws; we extend
        those rights to all U.S. residents regardless of state.
      </p>

      <h2 id="australia">16. Australian Users — Privacy Act 1988</h2>
      <p>
        If you are in Australia, the Privacy Act 1988 (Cth) and the Australian Privacy Principles
        (APPs) apply. The Notifiable Data Breaches scheme applies. You may complain to the Office of
        the Australian Information Commissioner (OAIC).
      </p>

      <h2 id="canada">17. Canadian Users — PIPEDA &amp; Quebec Law 25</h2>
      <p>
        If you are in Canada, PIPEDA applies. In Quebec, Law 25 adds additional requirements. You
        may complain to the Office of the Privacy Commissioner of Canada or the Commission d'accès à
        l'information du Québec.
      </p>

      <h2 id="singapore">18. Singapore Users — PDPA</h2>
      <p>
        If you are in Singapore, the Personal Data Protection Act 2012 ("PDPA") applies. We have
        designated a Data Protection Officer — see §26. You may also complain to the Personal Data
        Protection Commission (PDPC).
      </p>

      <h2 id="indonesia">19. Indonesian Users — UU PDP</h2>
      <p>
        If you are in Indonesia, the Personal Data Protection Law (Undang-Undang Nomor 27 Tahun 2022
        tentang Pelindungan Data Pribadi, "UU PDP") applies. We will appoint a local representative
        as required by the UU PDP before marketing the Service in Indonesia.
      </p>

      <h2 id="brazil">20. Brazilian Users — LGPD</h2>
      <p>
        If you are in Brazil, the Lei Geral de Proteção de Dados (LGPD, Law No. 13.709/2018)
        applies. We will appoint an "encarregado" (data protection officer) in Brazil before
        marketing the Service there.
      </p>

      <h2 id="thailand">21. Thai Users — PDPA Thailand</h2>
      <p>If you are in Thailand, the Personal Data Protection Act B.E. 2562 (2019) applies.</p>

      <h2 id="korea">22. Korean Users — PIPA</h2>
      <p>
        If you are in the Republic of Korea, the Personal Information Protection Act ("PIPA")
        applies. We will appoint a local representative as required by PIPA before marketing the
        Service in Korea.
      </p>

      <h2 id="japan">23. Japanese Users — APPI</h2>
      <p>
        If you are in Japan, the Act on the Protection of Personal Information ("APPI") applies.
      </p>

      <h2 id="india">24. Indian Users — DPDP Act</h2>
      <p>
        If you are in India, the Digital Personal Data Protection Act 2023 ("DPDP Act") applies once
        it comes into force.
      </p>

      <h2 id="changes">25. Changes to This Policy</h2>
      <p>
        We may update this Policy from time to time. When we do, we will post the revised Policy in
        the App and at positiveness.club, update the "Last updated" date, and notify you by in-App
        notification or email of any material changes.
      </p>

      <h2 id="dpo">26. Data Protection Officer</h2>
      <p>
        Our Data Protection Officer can be reached at{' '}
        <a href="mailto:dpo@positiveness.club">dpo@positiveness.club</a> or at the postal address in
        §30.
      </p>

      <h2 id="complaints">27. How to Complain</h2>
      <p>
        If you have a concern about how we handle your data, please contact us first at{' '}
        <a href="mailto:privacy@positiveness.club">privacy@positiveness.club</a> — we will respond
        within 30 days and try to resolve the issue informally. If we cannot resolve your concern,
        you have the right to complain to your local data-protection authority (a list of
        authorities is provided in our HEAL Privacy Policy §26, which is incorporated by reference).
      </p>

      <h2 id="ai">28. AI, Machine Learning &amp; Voice Synthesis</h2>
      <p>
        Resonate uses AI tools as editorial assistants for content production, voice synthesis for
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
          <strong>
            Not using audio lessons, chord charts, transcriptions, or backing tracks to train AI/ML
            models.
          </strong>{' '}
          You may not use any Content to train, fine-tune, evaluate or clone any voice, instrument,
          or music-generation system (see{' '}
          <a href="/resonate/terms" className="text-coral underline">
            Resonate Terms §10
          </a>
          ).
        </li>
        <li>
          <strong>Transparency.</strong> Where a lesson or chart is generated with significant AI
          assistance, we will indicate this.
        </li>
      </ul>

      <h2 id="third">29. Third-Party Services We Use</h2>
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

      <h2 id="contact">30. How to Contact Us</h2>
      <p>For any questions about this Policy, to exercise your rights, or to lodge a complaint:</p>
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
        <a href="/resonate/terms" className="text-coral underline">
          Resonate Terms and Conditions
        </a>{' '}
        for the legal terms governing the Service.
      </p>
    </PlainLegalPage>
  )
}
