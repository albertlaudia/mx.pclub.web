/**
 * HEAL — Terms and Conditions
 *
 * This page is the live, binding contract for any user of the HEAL mobile
 * application ("HEAL", "App", "we", "us"). It is the URL referenced inside
 * the App Store / Play Store metadata.
 *
 * Drafting notes (not part of the legal text):
 *   - This document is intended to be biased in favor of the operator
 *     (positiveness.club / positiveness.club Pte Ltd). Every clause is
 *     drafted to protect the company first; consumer protection is respected
 *     only where required by mandatory law (PDPA Singapore, GDPR EU,
 *     CCPA California).
 *   - This is NOT legal advice. The operator must have a licensed attorney
 *     in its primary jurisdiction (Singapore) review this document before
 *     charging money or shipping to a new market.
 *   - Versions: v1.0  2026-06-30  first publication.
 */

import { CrisisResources } from '@/components/CrisisResources'
import { PlainLegalPage } from '@/components/PlainLegalPage'
import { SITE_URL } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HEAL — Terms and Conditions',
  description:
    'Terms and conditions governing use of the HEAL mobile application. Includes subscription terms, health disclaimers, crisis resources, and limitation of liability.',
  alternates: { canonical: `${SITE_URL}/heal/tnc` },
  robots: { index: true, follow: true },
}

export const dynamic = 'force-static'

// Last-updated is rendered prominently. Bump this when you materially change the document.
const LAST_UPDATED = '2026-06-30'
const VERSION = 'v1.0'

// Table of contents — anchors must match the h2 ids below
const SECTIONS = [
  { id: 'acceptance', title: '1. Acceptance of these Terms' },
  { id: 'definitions', title: '2. Definitions' },
  { id: 'service', title: '3. What HEAL Is (and Is Not)' },
  { id: 'eligibility', title: '4. Eligibility & Age Requirements' },
  { id: 'license', title: '5. License Grant to You' },
  { id: 'restrictions', title: '6. Restrictions on Use' },
  { id: 'ip', title: '7. Intellectual Property Rights' },
  { id: 'user-content', title: '8. User Content' },
  { id: 'health', title: '9. Health, Medical & Safety Disclaimer (CRITICAL)' },
  { id: 'crisis', title: '10. If You Are in Crisis' },
  { id: 'subscriptions', title: '11. Subscriptions, Auto-Renewal & Billing' },
  { id: 'trial', title: '12. Free Trials & Promotional Periods' },
  { id: 'refunds', title: '13. Refunds & Cancellation' },
  { id: 'modifications', title: '14. Modifications to the Service' },
  { id: 'termination', title: '15. Termination & Suspension' },
  { id: 'warranty', title: '16. Disclaimer of Warranties ("AS IS")' },
  { id: 'liability', title: '17. Limitation of Liability' },
  { id: 'indemnification', title: '18. Indemnification by You' },
  { id: 'security', title: '19. No Medical or Professional Advice' },
  { id: 'ai', title: '20. Third-Party Voice, AI & Machine-Learning Notices' },
  { id: 'export', title: '21. Export Controls & Sanctions' },
  { id: 'law', title: '22. Governing Law' },
  { id: 'dispute', title: '23. Dispute Resolution & Arbitration' },
  { id: 'classaction', title: '24. Class Action & Jury-Trial Waiver' },
  { id: 'dmca', title: '25. Copyright Complaints (DMCA / §28 / similar)' },
  { id: 'force', title: '26. Force Majeure' },
  { id: 'severability', title: '27. Severability' },
  { id: 'entire', title: '28. Entire Agreement' },
  { id: 'assignment', title: '29. Assignment' },
  { id: 'notices', title: '30. Notices' },
  { id: 'contact', title: '31. How to Contact Us' },
  { id: 'regional', title: '32. Region-Specific Terms' },
]

export default function HealTermsPage() {
  return (
    <PlainLegalPage
      documentTitle="HEAL — Terms and Conditions"
      version={VERSION}
      lastUpdated={LAST_UPDATED}
      otherDoc={{ label: 'HEAL — Privacy Policy', href: '/heal/policies' }}
      sections={SECTIONS}
    >
      {/* 1 */}
      <h2 id="acceptance">1. Acceptance of these Terms</h2>
      <p>
        These Terms and Conditions (these <strong>"Terms"</strong>) form a binding agreement between
        you and <strong>positiveness.club Pte Ltd</strong> (the
        <strong>"Company"</strong>, <strong>"we"</strong>, <strong>"us"</strong> or
        <strong>"our"</strong>), the operator of the HEAL mobile application (the
        <strong>"App"</strong> or <strong>"HEAL"</strong>).
      </p>
      <p>
        By downloading, installing, accessing or using HEAL — including any of its content, audio
        recordings, written text, or related services made available by the Company (collectively,
        the <strong>"Service"</strong>) — you agree to be bound by these Terms. If you do not agree
        to these Terms in their entirety, do not download, install or use the Service and delete the
        App from your device.
      </p>

      {/* 2 */}
      <h2 id="definitions">2. Definitions</h2>
      <ul>
        <li>
          <strong>"App"</strong> means the HEAL mobile application, including any updates, upgrades,
          patches, fixes, translations, localizations and new releases.
        </li>
        <li>
          <strong>"Audio Content"</strong> means the guided audio sessions, voice recordings,
          narration scripts, music, sound effects and ambient sound design made available through
          the App.
        </li>
        <li>
          <strong>"Content"</strong> means the Audio Content together with all text, graphics,
          images, illustrations, software, source code, designs, trademarks, logos and other
          material made available through the Service.
        </li>
        <li>
          <strong>"Device"</strong> means any compatible mobile phone, tablet, wearable or other
          device on which you install or access the App.
        </li>
        <li>
          <strong>"Store"</strong> means the Apple App Store (operated by Apple Inc.), the Google
          Play Store (operated by Google LLC) or any other distribution platform through which the
          App is made available.
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

      {/* 3 */}
      <h2 id="service">3. What HEAL Is (and Is Not)</h2>
      <p>HEAL is a mobile application that offers guided audio sessions intended to support:</p>
      <ul>
        <li>general relaxation and stress reduction;</li>
        <li>sleep onset and sleep hygiene;</li>
        <li>brief moments of calm during acute everyday stress.</li>
      </ul>
      <p>
        HEAL is currently in <strong>public beta</strong>. Features, audio content, length of
        sessions, supported languages and pricing may change without notice. We may discontinue the
        Service, in whole or in part, at any time.
      </p>

      {/* 4 */}
      <h2 id="eligibility">4. Eligibility & Age Requirements</h2>
      <p>
        You must be at least the age of digital consent in your jurisdiction to use the Service. The
        minimum ages we apply are:
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
          <strong>18 years old</strong> in some U.S. states with stricter protections (e.g.
          California under CCPA).
        </li>
      </ul>
      <p>
        If you are below the applicable age, you may only use the Service with the verifiable
        consent of a parent or legal guardian. By using the Service, you represent and warrant that
        you meet the age requirement in your jurisdiction.
      </p>
      <p>
        You further represent that you are not barred from using the Service under any applicable
        law and that you have the legal capacity to enter into these Terms.
      </p>

      {/* 5 */}
      <h2 id="license">5. License Grant to You</h2>
      <p>
        Subject to your continuing compliance with these Terms, we grant you a
        <strong> limited, non-exclusive, non-transferable, non-sublicensable, revocable </strong>
        license to:
      </p>
      <ul>
        <li>download and install the App on Devices you own or control;</li>
        <li>
          use the App and access the Audio Content solely for your personal, non-commercial use;
        </li>
        <li>stream or download Audio Content for offline listening within the App.</li>
      </ul>
      <p>
        The license is conditional on you not breaching any part of Section 6 or any other provision
        of these Terms, and is automatically revoked upon any breach.
      </p>

      {/* 6 */}
      <h2 id="restrictions">6. Restrictions on Use</h2>
      <p>
        You agree <strong>not</strong> to:
      </p>
      <ol>
        <li>
          reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code
          of the App;
        </li>
        <li>
          modify, adapt, translate, or create derivative works based on the App or the Content, in
          whole or in part;
        </li>
        <li>
          distribute, sublicense, rent, lease, lend, sell, resell or otherwise commercially exploit
          the App or the Content;
        </li>
        <li>
          remove, alter or obscure any copyright, trademark or other proprietary notice appearing in
          or on the App;
        </li>
        <li>
          use the App or the Audio Content for any unlawful purpose or in violation of any
          applicable law;
        </li>
        <li>
          use the App to provide clinical, therapeutic, medical, psychiatric, psychological or other
          professional services to any third party;
        </li>
        <li>
          scrape, crawl, index or otherwise extract data from the App using automated means (other
          than ordinary search engine indexing by public search engines, which is permitted);
        </li>
        <li>
          attempt to circumvent any security measure, access control or rate limit implemented in
          the App;
        </li>
        <li>
          upload, post or transmit any content that is unlawful, infringing, defamatory, obscene,
          harassing or otherwise objectionable;
        </li>
        <li>
          use the App in any way that could damage, disable, overburden or impair our servers or
          networks;
        </li>
        <li>
          use the App while operating a motor vehicle, heavy machinery, or in any other situation in
          which a momentary lapse of attention could result in death or serious injury.
        </li>
      </ol>

      {/* 7 */}
      <h2 id="ip">7. Intellectual Property Rights</h2>
      <p>
        The Service, the App and all Content are and will remain the exclusive property of the
        Company and its licensors. The Company owns all right, title and interest — including all
        intellectual property rights — in and to:
      </p>
      <ul>
        <li>the App's source code, object code, architecture and design;</li>
        <li>
          the Audio Content, including voice recordings, narration scripts and musical compositions;
        </li>
        <li>
          trademarks, logos, service marks and trade dress (including the "HEAL" name and logo);
        </li>
        <li>
          any clinical protocols, scripts and methodologies underlying the Audio Content, including
          those developed in collaboration with clinical consultants.
        </li>
      </ul>
      <p>
        No rights are granted to you except the limited license expressly set out in Section 5. You
        agree not to register, attempt to register, or assist any third party to register any
        trademark, domain name, copyright or other intellectual property right that incorporates or
        is confusingly similar to any mark, name or Content of the Company.
      </p>

      {/* 8 */}
      <h2 id="user-content">8. User Content</h2>
      <p>
        The current version of HEAL does not allow you to post, upload or transmit any content to
        the Service. If we later add such a feature:
      </p>
      <ul>
        <li>you retain ownership of any content you submit;</li>
        <li>
          you grant the Company a worldwide, non-exclusive, royalty-free, perpetual, irrevocable,
          sublicensable license to use, reproduce, modify, distribute, display and create derivative
          works of such content in connection with operating and improving the Service;
        </li>
        <li>
          you represent and warrant that you own or have the necessary rights to the content and
          that it does not violate any law or any third party's rights.
        </li>
      </ul>

      {/* 9 - CRITICAL */}
      <h2 id="health">9. Health, Medical & Safety Disclaimer (CRITICAL — PLEASE READ)</h2>
      <p className="lead">
        <strong>
          HEAL is not a medical device. HEAL does not diagnose, treat, cure, or prevent any disease,
          disorder, or health condition. The Audio Content is for general wellness, relaxation and
          stress-reduction purposes only.
        </strong>
      </p>
      <p>The Audio Content:</p>
      <ol>
        <li>
          <strong>Is not medical advice</strong> and should not be relied upon as a substitute for
          professional medical, psychiatric, psychological or psychological counselling.
        </li>
        <li>
          <strong>Is not intended for</strong> anyone under the active care of a mental-health
          professional for any of the following, unless under such professional's supervision:
          suicidal ideation, acute post-traumatic stress disorder (PTSD), acute psychosis,
          dissociative disorders, severe anxiety disorders, bipolar disorder during a manic or
          depressive episode, schizophrenia, substance-use disorders in active withdrawal.
        </li>
        <li>
          <strong>Should not be used</strong> as the sole intervention for any mental-health
          condition, regardless of severity.
        </li>
        <li>
          <strong>Has not been evaluated</strong> by the U.S. Food and Drug Administration (FDA),
          the European Medicines Agency (EMA), the Health Sciences Authority of Singapore (HSA), the
          Indonesian Food and Drug Authority (BPOM), or any other regulatory body for the treatment
          of any medical condition.
        </li>
        <li>
          <strong>Is not a substitute for</strong> medication, psychotherapy, counselling or other
          forms of professional care. If a healthcare professional has prescribed any treatment for
          you, do not discontinue that treatment in reliance on HEAL.
        </li>
      </ol>

      <h3>9.1 Specific Warnings</h3>
      <ul>
        <li>
          <strong>Operating vehicles / machinery:</strong> Do not use HEAL while driving, cycling,
          or operating any vehicle or machinery. Use only when stationary and able to give your full
          attention to the audio.
        </li>
        <li>
          <strong>Hearing damage:</strong> Listening at high volumes for extended periods can cause
          permanent hearing loss. Begin playback at the lowest comfortable volume. If you experience
          ringing, buzzing, or discomfort, lower the volume or discontinue use and consult a hearing
          specialist.
        </li>
        <li>
          <strong>Seizure precautions:</strong> Although HEAL does not contain flashing lights or
          rapid visual stimuli, if you have ever experienced a seizure, loss of awareness, or other
          neurological symptoms triggered by audio or sensory stimuli, consult a physician before
          use.
        </li>
        <li>
          <strong>Pregnancy & post-natal:</strong> Some relaxation techniques (notably focused
          breathing) may not be appropriate during certain stages of pregnancy or immediately
          post-partum. Consult your obstetrician or midwife if in doubt.
        </li>
        <li>
          <strong>Underlying medical conditions:</strong> If you have a cardiac condition,
          respiratory condition (including asthma or COPD), inner-ear condition, vestibular
          condition, or any neurological condition, consult your physician before use.
        </li>
        <li>
          <strong>Sleep latency:</strong> HEAL sessions are designed to support sleep onset, not to
          treat insomnia as a medical condition. Persistent difficulty falling asleep or staying
          asleep may indicate an underlying sleep disorder; consult a physician.
        </li>
        <li>
          <strong>Medication interactions:</strong> If you are taking any medication affecting mood,
          sleep, attention, heart rate or blood pressure, consult your prescribing physician before
          combining such medication with relaxation audio.
        </li>
      </ul>

      <h3>9.2 No Guarantees</h3>
      <p>
        We do not guarantee that HEAL will produce any particular result. Individual outcomes vary.
        Testimonials presented in the App, on our website or in marketing materials reflect the
        experience of individual users and are not representative of all users; they do not
        constitute guarantees of outcome.
      </p>

      {/* 10 */}
      <h2 id="crisis">10. If You Are in Crisis</h2>
      <p>
        <strong>
          The HEAL App is not a crisis service and is not monitored in real time by the Company.
        </strong>{' '}
        If you — or someone you know — is experiencing suicidal thoughts, self-harm urges, a
        mental-health crisis, or is in immediate physical danger, do not rely on the App. Instead,
        contact one of the free, confidential services listed below — or your local emergency number
        (for example 911 in the U.S., 999 in the U.K. and Singapore, 112 in the EU, 110/118/112 in
        Indonesia, 995 in Singapore).
      </p>
      <CrisisResources variant="inline" showNote={false} />

      {/* 11 */}
      <h2 id="subscriptions">11. Subscriptions, Auto-Renewal & Billing</h2>
      <p>
        HEAL may be offered on a free basis, as a one-time purchase, or as a recurring Subscription.
        If you purchase a Subscription:
      </p>
      <ol>
        <li>
          <strong>Billing.</strong> You authorize the applicable Store to charge your designated
          payment method the Subscription fee (plus any applicable taxes) at the start of each
          billing period.
        </li>
        <li>
          <strong>Auto-renewal.</strong> Your Subscription will automatically renew at the end of
          each billing period unless and until you cancel it. Auto-renewal continues indefinitely
          unless cancelled.
        </li>
        <li>
          <strong>Renewal charge timing.</strong> Your payment method will be charged for renewal
          within 24 hours prior to the end of the current billing period. You will be notified of
          the renewal charge via your Store receipt.
        </li>
        <li>
          <strong>How to cancel.</strong> You may cancel your Subscription at any time, but
          cancellation will only take effect at the end of your then-current billing period. To
          cancel:
          <ul>
            <li>
              <strong>iOS / App Store:</strong> Settings → Apple ID → Subscriptions → HEAL → Cancel
              Subscription (at least 24 hours before the next billing date).
            </li>
            <li>
              <strong>Android / Google Play:</strong> Google Play Store → your profile icon →
              Payments & subscriptions → Subscriptions → HEAL → Cancel subscription (at least 24
              hours before the next billing date).
            </li>
          </ul>
        </li>
        <li>
          <strong>No mid-period cancellation.</strong> No cancellation of the current Subscription
          period is allowed. Once a billing period begins, you continue to have access until the
          period ends and will not receive a pro-rated refund except where required by law.
        </li>
        <li>
          <strong>Price changes.</strong> We may change Subscription fees at any time. Price changes
          will not affect the then-current billing period; the new price will apply to the next
          period after we have notified you in accordance with Section 14.
        </li>
        <li>
          <strong>Currency and taxes.</strong> All prices are displayed in the local Store currency
          and include VAT, GST, sales tax, or other applicable transaction taxes where the Store
          provides them.
        </li>
        <li>
          <strong>App Store purchases.</strong> Purchases made through the Apple App Store are
          subject to Apple's Licensed Application End User License Agreement and to the App Store
          Review Guidelines, including provisions on refund handling. Refund requests for App Store
          purchases are handled by Apple — see Section 13 below.
        </li>
        <li>
          <strong>Play Store purchases.</strong> Purchases made through the Google Play Store are
          subject to the Google Play Terms of Service and to Google Play's refund policies.
        </li>
        <li>
          <strong>Promotional pricing.</strong> Promotional or discounted pricing (including
          introductory offers) converts to the standard Subscription fee at the end of the
          promotional period unless cancelled before then.
        </li>
        <li>
          <strong>Family sharing.</strong> Family Sharing of Subscriptions, where supported by the
          Store, is governed by the Store's family-sharing policies. You are responsible for who in
          your family group accesses the App.
        </li>
      </ol>

      {/* 12 */}
      <h2 id="trial">12. Free Trials & Promotional Periods</h2>
      <p>If you start a free trial or other promotional period:</p>
      <ol>
        <li>You will not be charged during the trial/promotional period.</li>
        <li>
          Unless you cancel before the end of the trial/promotional period, your designated payment
          method will be charged the standard Subscription fee at the start of the next billing
          period.
        </li>
        <li>
          Each User is entitled to <strong>one</strong> free trial per Subscription tier per Store
          account. Subsequent trials for the same tier will not be offered.
        </li>
        <li>
          We may revoke or refuse a free trial or promotional offer at our sole discretion,
          including where we suspect abuse (for example, multiple accounts, repeated
          cancellation-and-resubscription cycles, or use of multiple Stores by the same individual).
        </li>
      </ol>

      {/* 13 */}
      <h2 id="refunds">13. Refunds & Cancellation</h2>
      <p>
        <strong>Store-governed refunds.</strong> Refund handling for Subscriptions purchased through
        a Store is governed by that Store's refund policies:
      </p>
      <ul>
        <li>
          <strong>Apple App Store:</strong> Apple controls refund decisions. To request a refund, go
          to reportaproblem.apple.com and follow Apple's instructions. We are unable to override
          Apple's decision.
        </li>
        <li>
          <strong>Google Play Store:</strong> Google controls refund decisions. To request a refund,
          open Google Play → your profile icon → Payments & subscriptions → Budget & order history →
          select the order → Request refund. We are unable to override Google's decision.
        </li>
      </ul>
      <p>
        <strong>Cooling-off (where applicable).</strong> If mandatory consumer law in your
        jurisdiction (for example, the EU Consumer Rights Directive 2011/83/EU, the UK Consumer
        Contracts Regulations 2013, or Australian Consumer Law) gives you a right to withdraw from a
        digital-content purchase within 14 days, that right is <strong>waived</strong> at the moment
        you expressly consent to immediate performance (i.e. by tapping "Buy" or equivalent). If you
        have not yet consumed any content, you may still be eligible for a refund under your local
        consumer law.
      </p>
      <p>
        <strong>Our additional goodwill policy.</strong> Outside of the above, we may at our sole
        discretion offer a refund of up to 30 days from the original purchase date if you contact us
        at the address listed in Section 31 and explain why the Service did not meet your reasonable
        expectations. We may ask you to describe the issue and may suggest non-monetary remedies
        first.
      </p>
      <p>
        <strong>Free-tier withdrawals.</strong> If you have not paid for the Service and have made
        no in-app purchase, you may stop using the App at any time without notice.
      </p>

      {/* 14 */}
      <h2 id="modifications">14. Modifications to the Service</h2>
      <p>We reserve the right, at any time and from time to time, to:</p>
      <ul>
        <li>
          modify, suspend or discontinue the Service (or any part of it), temporarily or
          permanently;
        </li>
        <li>change the features, content, prices or functionality of the Service;</li>
        <li>
          impose limits on certain features or restrict access to parts or all of the Service.
        </li>
      </ul>
      <p>
        Where the change is material and adverse to active Subscribers, we will use reasonable
        efforts to provide at least 30 days' notice in advance via in-App notification or email to
        the address on file. Continued use after such changes constitutes acceptance of the modified
        Service.
      </p>

      {/* 15 */}
      <h2 id="termination">15. Termination & Suspension</h2>
      <p>
        <strong>By us.</strong> We may suspend or terminate your access to the Service at any time,
        with or without cause, with or without notice, including if we reasonably believe that:
      </p>
      <ul>
        <li>you have breached these Terms;</li>
        <li>you have provided false or misleading information;</li>
        <li>
          your continued use poses a security, legal or operational risk to us or to other Users;
        </li>
        <li>we are required to do so by law, regulation or a Store;</li>
        <li>we discontinue the Service.</li>
      </ul>
      <p>
        <strong>By you.</strong> You may stop using the Service at any time and may delete the App
        from your Devices. Cancellation of a paid Subscription is governed by Section 11.4 and
        Section 13.
      </p>
      <p>
        <strong>Effect of termination.</strong> Upon termination, the license granted to you in
        Section 5 ends immediately. Sections that by their nature should survive termination
        (including those governing intellectual property, disclaimers, limitation of liability,
        indemnification, dispute resolution and governing law) will survive.
      </p>

      {/* 16 */}
      <h2 id="warranty">16. Disclaimer of Warranties ("AS IS")</h2>
      <p>
        <strong>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE, THE APP, THE CONTENT AND
          ALL AUDIO CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTY OF ANY KIND,
          EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF
          MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT,
          QUIET ENJOYMENT, ACCURACY, OR THAT USE WILL BE UNINTERRUPTED OR ERROR-FREE.
        </strong>
      </p>
      <p>
        The Company does not warrant that the Service will meet your requirements, that it will be
        uninterrupted, timely, secure or error-free, that the results obtained from use of the
        Service will be accurate or reliable, that any errors will be corrected, or that the App or
        its servers are free of viruses or other harmful components.
      </p>
      <p>
        No advice or information, whether oral or written, obtained by you from the Company will
        create any warranty not expressly stated in these Terms.
      </p>

      {/* 17 */}
      <h2 id="liability">17. Limitation of Liability</h2>
      <p>
        <strong>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL THE COMPANY, ITS
          AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, CONTRACTORS, LICENSORS, CLINICAL
          CONSULTANTS, PARTNERS OR SUPPLIERS BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR:
        </strong>
      </p>
      <ol>
        <li>any indirect, incidental, consequential, special, exemplary or punitive damages;</li>
        <li>
          any loss of profits, revenue, business, goodwill, anticipated savings, data, use, goodwill
          or other intangible losses;
        </li>
        <li>
          any damages resulting from (a) your access to or use of (or inability to access or use)
          the Service; (b) any conduct or content of any third party on or through the Service; (c)
          any content obtained from the Service; or (d) unauthorized access, use or alteration of
          your transmissions or content;
        </li>
        <li>
          any harm arising from any crisis, suicide attempt, self-harm, mental-health episode or
          medical event, regardless of whether such harm occurred during, after, or in connection
          with, your use of the Service.
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
        The limitations of liability in this Section 17 apply to the maximum extent permitted by
        law. Nothing in these Terms is intended to exclude or limit liability that cannot be
        excluded or limited under applicable law — including liability for fraud, for death or
        personal injury caused by negligence, or for any other liability that cannot be lawfully
        excluded or limited.
      </p>

      {/* 18 */}
      <h2 id="indemnification">18. Indemnification by You</h2>
      <p>
        You agree to defend, indemnify and hold harmless the Company, its affiliates and their
        respective directors, officers, employees, agents, contractors, licensors and clinical
        consultants from and against any and all claims, damages, obligations, losses, liabilities,
        costs or expenses (including reasonable attorneys' fees) arising from:
      </p>
      <ol>
        <li>your access to or use of the Service;</li>
        <li>your violation of these Terms;</li>
        <li>
          your violation of any third-party right, including any intellectual property, privacy, or
          proprietary right;
        </li>
        <li>any claim that your use of the Service has caused harm to a third party;</li>
        <li>any negligent or wrongful act or omission by you in connection with the Service.</li>
      </ol>

      {/* 19 */}
      <h2 id="security">
        19. No Medical or Professional Advice; No Clinician–Patient Relationship
      </h2>
      <p>
        The Audio Content reflects information provided by clinical consultants to the Company and
        is intended for general informational and wellness purposes. The Company is not a licensed
        medical, psychological, psychiatric, or counselling provider. The Audio Content:
      </p>
      <ul>
        <li>
          does <strong>not</strong> create a clinician–patient, therapist–client, doctor–patient or
          any other professional relationship between you and the Company, its employees or its
          consultants;
        </li>
        <li>
          does <strong>not</strong> constitute medical, psychological, psychiatric or counselling
          advice, diagnosis or treatment;
        </li>
        <li>
          is <strong>not</strong> a substitute for professional consultation with a qualified
          healthcare provider.
        </li>
      </ul>
      <p>
        If you have or suspect you have a medical or mental-health condition, consult a qualified
        healthcare provider. Never disregard professional medical advice or delay seeking it because
        of something you have heard in HEAL.
      </p>

      {/* 20 */}
      <h2 id="ai">20. Third-Party Voice, AI & Machine-Learning Notices</h2>
      <p>
        Some Audio Content may be generated, mixed, post-processed or enhanced using third-party
        voice-synthesis, music-generation, audio-mastering or machine-learning tools (including,
        where applicable, services offered by OpenAI, ElevenLabs, PlayHT, Resemble AI, LMNT or
        similar providers). Where this is the case:
      </p>
      <ul>
        <li>
          Any natural-language input processed by such tools is processed under the third-party
          provider's terms and privacy policy.
        </li>
        <li>The Company does not transmit, by default, any personal data to such providers.</li>
        <li>
          You may opt out of AI- or voice-synthesis-enhanced content by switching to the "natural
          human voice" preference in the App settings (where available).
        </li>
        <li>
          The Company does not use your listening behaviour to train AI/ML models, except where you
          have explicitly opted in.
        </li>
      </ul>

      {/* 21 */}
      <h2 id="export">21. Export Controls & Sanctions</h2>
      <p>
        You represent and warrant that you are not located in, under the control of, or a national
        or resident of any country subject to U.S., U.K., EU, U.N. or Singaporean sanctions or
        export-control restrictions, including (without limitation) Cuba, Iran, North Korea, Syria,
        the Crimea, Donetsk and Luhansk regions of Ukraine, and any other country designated from
        time to time. You agree to comply with all applicable export-control and sanctions laws.
      </p>

      {/* 22 */}
      <h2 id="law">22. Governing Law</h2>
      <p>
        These Terms, and any non-contractual obligations arising out of or in connection with them,
        are governed by and construed in accordance with the laws of the Republic of Singapore,
        without regard to its conflict-of-laws principles. The United Nations Convention on
        Contracts for the International Sale of Goods does not apply.
      </p>
      <p>
        Notwithstanding the foregoing, a consumer resident in a country that prohibits the choice of
        Singapore law as governing law (for example, any EU member state that requires the
        application of the consumer's residence law to a contract with a non-EU business operator)
        may rely on the mandatory consumer-protection laws of that country.
      </p>

      {/* 23 */}
      <h2 id="dispute">23. Dispute Resolution & Arbitration</h2>
      <p>
        <strong>Informal resolution first.</strong> We want to address your concerns without
        resorting to formal legal action. Before filing any formal claim, you agree to contact us at
        the address in Section 31 and give us 30 days to resolve the issue informally. Most concerns
        are resolved this way.
      </p>
      <p>
        <strong>Binding arbitration.</strong> Any dispute, claim or controversy arising out of or
        relating to these Terms or the breach, termination, enforcement, interpretation or validity
        thereof — including the determination of the scope or applicability of this agreement to
        arbitrate — will be determined by binding arbitration administered by the Singapore
        International Arbitration Centre (SIAC) under its then-current Arbitration Rules, by a
        single arbitrator appointed in accordance with those Rules. The seat of arbitration will be
        Singapore. The language of arbitration will be English. The award will be final and binding
        and may be entered as a judgment in any court of competent jurisdiction.
      </p>
      <p>
        <strong>Exceptions.</strong> Notwithstanding the above, either party may bring a qualifying
        individual action in a court of competent jurisdiction in the user's country of residence
        for injunctive or other equitable relief to prevent (or stop) an actual or threatened
        infringement or misuse of intellectual property rights. Either party may also bring a
        small-claims action in a court of competent jurisdiction in the user's country of residence
        for any claim within the scope of that court's small-claims jurisdiction.
      </p>

      {/* 24 */}
      <h2 id="classaction">24. Class Action & Jury-Trial Waiver</h2>
      <p>
        <strong>
          TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOU AND THE COMPANY AGREE THAT EACH MAY BRING
          CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF
          OR CLASS MEMBER IN ANY PURPORTED CLASS, CONSOLIDATED, COLLECTIVE OR REPRESENTATIVE ACTION.
        </strong>
      </p>
      <p>
        To the extent a claim proceeds in court rather than arbitration, you and the Company each
        knowingly and irrevocably waive any right to a trial by jury.
      </p>
      <p>
        Notwithstanding the foregoing, this Section does not apply to class-action waivers that are
        unenforceable under the law of the user's jurisdiction (for example, Quebec residents and
        certain EU consumers).
      </p>

      {/* 25 */}
      <h2 id="dmca">25. Copyright Complaints (DMCA / §28 / Similar)</h2>
      <p>
        If you believe that any Content accessible through the Service infringes your copyright,
        please send a written notice to the address in Section 31 that includes:
      </p>
      <ol>
        <li>a physical or electronic signature of the rights holder or authorized agent;</li>
        <li>
          identification of the copyrighted work claimed to have been infringed (or a representative
          list if multiple works);
        </li>
        <li>
          identification of the allegedly infringing material with enough detail for us to locate
          it;
        </li>
        <li>your contact information (address, telephone, email);</li>
        <li>
          a statement that you have a good-faith belief that use of the material in the manner
          complained of is not authorized;
        </li>
        <li>
          a statement, made under penalty of perjury, that the above information is accurate and
          that you are the rights holder or authorized to act on the rights holder's behalf.
        </li>
      </ol>
      <p>
        We will respond to valid notices within the timeframes required by applicable law (e.g. the
        U.S. DMCA, Singapore Copyright Act, EU Information Society Directive).
      </p>

      {/* 26 */}
      <h2 id="force">26. Force Majeure</h2>
      <p>
        The Company will not be liable for any delay or failure to perform any obligation under
        these Terms (excluding the obligation to pay) where the delay or failure is caused by an
        event beyond its reasonable control, including acts of God, natural disasters, pandemics,
        war, terrorism, civil unrest, government action, internet or telecommunications failures,
        power failures, cyberattacks, or labour disputes.
      </p>

      {/* 27 */}
      <h2 id="severability">27. Severability</h2>
      <p>
        If any provision of these Terms is held to be invalid, illegal or unenforceable, that
        provision will be severed from these Terms and the remaining provisions will remain in full
        force and effect. The severed provision will be replaced by a valid provision that most
        closely reflects the original intent.
      </p>

      {/* 28 */}
      <h2 id="entire">28. Entire Agreement</h2>
      <p>
        These Terms, together with the HEAL Privacy Policy (
        <a href="/heal/policy">/heal/policies</a>) and any policies or notices referenced within
        them, constitute the entire agreement between you and the Company with respect to the
        Service and supersede all prior or contemporaneous communications and proposals, whether
        oral or written.
      </p>

      {/* 29 */}
      <h2 id="assignment">29. Assignment</h2>
      <p>
        You may not assign or transfer these Terms or any rights granted under them, in whole or in
        part, without the Company's prior written consent. We may assign these Terms at any time, in
        whole or in part, without notice to you, including in connection with a merger, acquisition,
        corporate reorganization, sale of all or substantially all of our assets, or by operation of
        law.
      </p>

      {/* 30 */}
      <h2 id="notices">30. Notices</h2>
      <p>Notices to you may be delivered:</p>
      <ul>
        <li>via in-App notification;</li>
        <li>via email to the address you provided to the Store;</li>
        <li>by posting a notice on our website at positiveness.club.</li>
      </ul>
      <p>
        Notices are deemed received within 24 hours of delivery by email or posting, or upon display
        in the App.
      </p>

      {/* 31 */}
      <h2 id="contact">31. How to Contact Us</h2>
      <p>
        For any questions about these Terms, complaints, claims or to provide a
        copyright-infringement notice, contact:
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

      {/* 32 */}
      <h2 id="regional">32. Region-Specific Terms</h2>
      <p>
        The following supplementary terms apply to Users in the listed jurisdictions. In case of
        conflict between these Region-Specific Terms and the main body of these Terms, the
        Region-Specific Terms prevail for Users in the listed jurisdiction.
      </p>

      <h3>32.1 European Economic Area (EEA), United Kingdom, Switzerland</h3>
      <ul>
        <li>
          Consumers retain all mandatory rights under EU consumer law and the EU Digital Content
          Directive (2019/770) and the EU Sale of Goods Directive (2019/771), including the right of
          conformity and the right to remedy of defects.
        </li>
        <li>
          The European Commission's Online Dispute Resolution platform is available at{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
            ec.europa.eu/consumers/odr
          </a>{' '}
          for consumers who wish to resolve a dispute out of court.
        </li>
        <li>
          The mandatory 14-day right of withdrawal for digital content is waived only at the moment
          you give express consent and acknowledge the loss of withdrawal right, as set out in
          Section 13 above.
        </li>
      </ul>

      <h3>32.2 United States — California</h3>
      <ul>
        <li>
          This Agreement is intended to cover only Users who use the Service for personal, family or
          household purposes. To the maximum extent permitted by California Civil Code § 1542, you
          waive any right to claim any damages not expressly identified in Section 17.
        </li>
        <li>
          Under the California Consumer Privacy Act (CCPA) / California Privacy Rights Act (CPRA),
          see the HEAL Privacy Policy for details on personal information collection, "sale" /
          "sharing" opt-outs and Sensitive Personal Information handling.
        </li>
      </ul>

      <h3>32.3 United States — Other States</h3>
      <ul>
        <li>
          Some U.S. states have consumer protection statutes (for example, the New Jersey Consumer
          Fraud Act, the Massachusetts Consumer Protection Act) that may not be waived. Nothing in
          these Terms limits any statutory consumer rights you may have under such laws.
        </li>
      </ul>

      <h3>32.4 Australia</h3>
      <ul>
        <li>
          Under the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010
          (Cth)), you have rights that cannot be excluded, including the guarantee of acceptable
          quality and the guarantee that services are provided with due care and skill. Nothing in
          these Terms is intended to override those rights.
        </li>
        <li>
          Disputes may be referred to the Australian Competition and Consumer Commission or the
          relevant state/territory fair trading body.
        </li>
      </ul>

      <h3>32.5 Indonesia</h3>
      <ul>
        <li>
          For Users in Indonesia, the personal-data processing aspects of this Agreement are also
          governed by the Indonesian Personal Data Protection Law (Undang-Undang Nomor 27 Tahun 2022
          tentang Pelindungan Data Pribadi).
        </li>
        <li>
          For the avoidance of doubt, the dispute-resolution provisions in Section 23 (binding
          arbitration in Singapore) apply except where prohibited by mandatory Indonesian law.
        </li>
      </ul>

      <h3>32.6 Singapore</h3>
      <ul>
        <li>
          Nothing in these Terms is intended to affect your rights under the Singapore Consumer
          Protection (Fair Trading) Act 2003 or the Singapore Personal Data Protection Act 2012.
        </li>
      </ul>

      <h3>32.7 United Kingdom</h3>
      <ul>
        <li>
          The Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013
          and the Consumer Rights Act 2015 apply to consumers in the U.K. and are not waived except
          as expressly permitted by those statutes.
        </li>
      </ul>
    </PlainLegalPage>
  )
}
