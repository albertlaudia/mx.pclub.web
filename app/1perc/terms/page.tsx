/**
 * 1perc — Terms and Conditions (alias route)
 *
 * Live URL referenced from App Store / Play Store metadata for the 1perc app.
 *
 * Drafting notes (not part of the legal text):
 *   - 1perc is a book-summary app, not a medical/wellness app — so the
 *     protective clauses look different from /heal/tnc:
 *       * No clinical disclaimer; instead, "books are not advice" + IP/fair-use
 *       * Crisis resources NOT in primary position (only at bottom)
 *       * Strong copyright notice + DMCA-style complaints procedure
 *       * Voice-talent + audio-production license terms
 *       * Free-tier vs. Pro-tier (monthly / yearly) terms
 *   - Operator-biased language (capped liability, AS IS, Singapore law,
 *     SIAC arbitration, class-action waiver).
 *   - Must be reviewed by licensed counsel before charging money.
 *   - Version: v1.0  2026-07-01
 */

import { SITE_URL } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '1perc — Terms and Conditions (alias route)',
  description:
    'Terms and conditions governing use of the 1perc book-summary app. Includes subscription terms, fair-use / copyright position, voice-talent notices, and limitation of liability.',
  alternates: { canonical: `${SITE_URL}/1perc/terms` },
  robots: { index: true, follow: true },
}

export const dynamic = 'force-static'

const LAST_UPDATED = '2026-07-01'
const VERSION = 'v1.0'

const SECTIONS = [
  { id: 'acceptance', title: '1. Acceptance of these Terms' },
  { id: 'definitions', title: '2. Definitions' },
  { id: 'service', title: '3. What 1perc Is (and Is Not)' },
  { id: 'eligibility', title: '4. Eligibility & Age Requirements' },
  { id: 'tiers', title: '5. Free Tier and Pro Tier' },
  { id: 'license', title: '6. License Grant to You' },
  { id: 'restrictions', title: '7. Restrictions on Use' },
  { id: 'ip', title: '8. Intellectual Property Rights' },
  { id: 'fairuse', title: '9. Our Position on Book Summaries & Fair Use' },
  { id: 'booksnotadvice', title: '10. Books Are Not Professional Advice' },
  { id: 'voice', title: '11. Voice Talent & Audio Production' },
  { id: 'subscriptions', title: '12. Subscriptions, Auto-Renewal & Billing' },
  { id: 'trial', title: '13. Free Trials & Promotional Periods' },
  { id: 'refunds', title: '14. Refunds & Cancellation' },
  { id: 'modifications', title: '15. Modifications to the Service' },
  { id: 'termination', title: '16. Termination & Suspension' },
  { id: 'warranty', title: '17. Disclaimer of Warranties ("AS IS")' },
  { id: 'liability', title: '18. Limitation of Liability' },
  { id: 'indemnification', title: '19. Indemnification by You' },
  { id: 'dmca', title: '20. Copyright Complaints (DMCA / §28 / Similar)' },
  { id: 'ai', title: '21. AI, Machine Learning & Voice Synthesis' },
  { id: 'export', title: '22. Export Controls & Sanctions' },
  { id: 'law', title: '23. Governing Law' },
  { id: 'dispute', title: '24. Dispute Resolution & Arbitration' },
  { id: 'classaction', title: '25. Class Action & Jury-Trial Waiver' },
  { id: 'force', title: '26. Force Majeure' },
  { id: 'severability', title: '27. Severability' },
  { id: 'entire', title: '28. Entire Agreement' },
  { id: 'assignment', title: '29. Assignment' },
  { id: 'notices', title: '30. Notices' },
  { id: 'contact', title: '31. How to Contact Us' },
  { id: 'regional', title: '32. Region-Specific Terms' },
]

export default function OnepercTermsPage() {
  return (
    <main className="container-narrow py-12 md:py-20">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="chip">1perc</span>
          <span className="chip">Legal</span>
        </div>
        <h1 className="text-display-md md:text-display-lg font-bold tracking-tight mb-3">
          1perc — Terms and Conditions (alias route)
        </h1>
        <p className="text-mute text-lg mb-2">
          These terms govern your use of the 1perc mobile application. Read them carefully — they
          affect your legal rights.
        </p>
        <p className="text-sm text-mute">
          Version <span className="font-mono">{VERSION}</span> · Last updated{' '}
          <time dateTime={LAST_UPDATED}>{LAST_UPDATED}</time> · Effective immediately
        </p>
        <p className="text-sm text-mute mt-2">
          Looking for the privacy policy?{' '}
          <Link href="/1perc/policies" className="text-coral underline">
            See 1perc — Privacy Policy
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
          These Terms(these <strong>"Terms"</strong>) form a binding agreement between you and{' '}
          <strong>positiveness.club Pte Ltd</strong> (the <strong>"Company"</strong>,
          <strong>"we"</strong>, <strong>"us"</strong> or <strong>"our"</strong>), the operator of
          the 1perc mobile application (the <strong>"App"</strong> or <strong>"1perc"</strong>).
        </p>
        <p>
          By downloading, installing, accessing or using 1perc — including any of its book
          summaries, audio narrations, written text, or related services made available by the
          Company (collectively, the <strong>"Service"</strong>) — you agree to be bound by these
          Terms. If you do not agree to these Terms in their entirety, do not download, install or
          use the Service and delete the App from your device.
        </p>

        <h2 id="definitions">2. Definitions</h2>
        <ul>
          <li>
            <strong>"App"</strong> means the 1perc mobile application, including any updates,
            upgrades, patches, fixes, translations, localizations and new releases.
          </li>
          <li>
            <strong>"Source Book"</strong> means any book, essay, article, podcast transcript,
            speech or other published work summarised in the App.
          </li>
          <li>
            <strong>"Summary"</strong> means each condensed analysis, outline, key-point list, audio
            narration or other derivative work created by the Company in respect of a Source Book
            and made available through the App.
          </li>
          <li>
            <strong>"Content"</strong> means the Summaries together with all text, graphics, images,
            illustrations, audio recordings, voice narration scripts, music, software, source code,
            designs, trademarks, logos and other material made available through the Service.
          </li>
          <li>
            <strong>"Device"</strong> means any compatible mobile phone, tablet, wearable, smart
            speaker, web client or other device on which you install or access the App.
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
            <strong>"Free Tier"</strong> means the limited-access free tier of the Service that
            includes a fixed number of free Summaries per calendar period, as updated from time to
            time.
          </li>
          <li>
            <strong>"Pro Tier"</strong> means the paid tier that includes unlimited access to the
            Summaries catalog and the audio narration feature, subject to these Terms.
          </li>
          <li>
            <strong>"User"</strong>, <strong>"you"</strong>, <strong>"your"</strong> means any
            individual who downloads, installs, accesses or uses the App.
          </li>
        </ul>

        <h2 id="service">3. What 1perc Is (and Is Not)</h2>
        <p>
          1perc is a mobile application that offers condensed summaries of published books (and
          similar works). A typical Summary is 4–7 minutes to read or 5–10 minutes to listen to. We
          aim to surface the <em>ideas that matter</em> from each Source Book, not to reproduce it.
        </p>
        <p>
          1perc is intended to <strong>supplement</strong>, not <strong>replace</strong>, reading
          the Source Book in full. We encourage users to read the books they find valuable in their
          entirety.
        </p>
        <p>
          1perc is currently in <strong>public beta</strong>. Features, summary count, audio
          narration availability, supported languages and pricing may change without notice. We may
          discontinue the Service, in whole or in part, at any time.
        </p>
        <p>
          <strong>1perc is not:</strong>
        </p>
        <ul>
          <li>a substitute for reading the underlying Source Book;</li>
          <li>a replacement for formal education, courses, certifications or academic credit;</li>
          <li>a publishing house, library or archive of any Source Book in full;</li>
          <li>a professional advice service (see §10).</li>
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
            <strong>18 years old</strong> in some U.S. states with stricter protections (e.g.
            California under CCPA).
          </li>
        </ul>
        <p>
          If you are below the applicable age, you may only use the Service with the verifiable
          consent of a parent or legal guardian. By using the Service, you represent and warrant
          that you meet the age requirement in your jurisdiction.
        </p>

        <h2 id="tiers">5. Free Tier and Pro Tier</h2>
        <p>1perc is offered in two tiers:</p>
        <ol>
          <li>
            <strong>Free Tier</strong> — A fixed number of free Summaries per calendar period (for
            example, three (3) per week), which may be revised at our discretion. The Free Tier is
            provided at no charge and without any warranty or guarantee of availability.
          </li>
          <li>
            <strong>Pro Tier</strong> — A paid Subscription (see §12) that grants access to the full
            catalogue of Summaries, the audio narration feature, and offline downloads. The Pro Tier
            is sold under the billing terms described in §12 and §13.
          </li>
        </ol>
        <p>
          Features available on each tier are subject to change without notice. The Company may add,
          remove or modify tier features at any time. Existing Subscribers will be given reasonable
          notice before material changes take effect.
        </p>

        <h2 id="license">6. License Grant to You</h2>
        <p>
          Subject to your continuing compliance with these Terms, we grant you a
          <strong>limited, non-exclusive, non-transferable, non-sublicensable, revocable</strong>{' '}
          license to:
        </p>
        <ul>
          <li>download and install the App on Devices you own or control;</li>
          <li>use the App and access the Content solely for your personal, non-commercial use;</li>
          <li>stream or download Content for offline reading or listening within the App;</li>
          <li>
            quote brief excerpts of a Summary in your own original writing (for example, a book
            review or social media post), provided that you (a) attribute the quote to the Source
            Book's title and author and to 1perc, (b) do not reproduce more than 100 words from any
            single Summary, and (c) do not use the quote in any advertising or commercial promotion.
          </li>
        </ul>
        <p>
          The license is conditional on you not breaching any part of Section 7 or any other
          provision of these Terms, and is automatically revoked upon any breach.
        </p>

        <h2 id="restrictions">7. Restrictions on Use</h2>
        <p>
          You agree <strong>not</strong> to:
        </p>
        <ol>
          <li>
            reproduce, redistribute, republish, retransmit, sell, sublicense, rent, lease or lend
            any Summary or other Content, in whole or in part, in any form or by any means
            (including but not limited to: screenshots, audio recordings, OCR, screen-capture,
            dictation, copy-paste at scale, or use of automated bots/scrapers);
          </li>
          <li>
            make summaries available on any third-party platform (including Telegram channels,
            Discord servers, archive sites, file-sharing services, or competing book-summary
            services);
          </li>
          <li>
            use the App or Content for commercial purposes, including paid newsletters, paid
            courses, or commercial book-review services, without our prior written consent;
          </li>
          <li>
            use the audio narration feature to train, fine-tune, or evaluate any AI/ML model,
            voice-clone, or speech-synthesis system, including but not limited to using the audio as
            input to OpenAI Whisper, ElevenLabs Voice Library, Resemble AI, or similar services;
          </li>
          <li>
            reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code
            of the App;
          </li>
          <li>
            remove, alter or obscure any copyright, trademark, attribution or other proprietary
            notice appearing in or on the App or the Content;
          </li>
          <li>use the App in any unlawful manner or in violation of any applicable law;</li>
          <li>
            scrape, crawl, archive or otherwise extract data from the App using automated means
            (other than ordinary search-engine indexing of public web pages, which is permitted);
          </li>
          <li>
            attempt to circumvent any security measure, access control or rate limit implemented in
            the App;
          </li>
          <li>
            use the App while operating a vehicle or in any other situation where a momentary lapse
            of attention could cause harm (we recommend using the audio only when you can give it
            your full attention);
          </li>
          <li>
            reproduce the summaries using generative AI tools and pass them off as your own original
            analysis.
          </li>
        </ol>

        <h2 id="ip">8. Intellectual Property Rights</h2>
        <p>
          The Service, the App, the Summaries and all Content are and will remain the exclusive
          property of the Company, our licensors, and (where applicable) the authors and publishers
          of Source Books. We and our licensors own all right, title and interest — including all
          intellectual property rights — in and to:
        </p>
        <ul>
          <li>the App's source code, object code, architecture and design;</li>
          <li>
            the Summaries, including editorial selection, condensation, key-point framing, narration
            scripts and language choices;
          </li>
          <li>
            the audio recordings, including voice performances by talent we engage and produce;
          </li>
          <li>
            trademarks, logos, service marks and trade dress (including the "1perc" name and logo);
          </li>
          <li>
            the underlying Source Books — we do not claim copyright over them; they remain the
            property of their respective authors and publishers. We use them only under fair-use /
            fair-dealing principles (see §9) and any express licences we obtain.
          </li>
        </ul>
        <p>
          No rights are granted to you except the limited license expressly set out in §6. You agree
          not to register, attempt to register, or assist any third party to register any trademark,
          domain name, copyright or other intellectual property right that incorporates or is
          confusingly similar to any mark, name or Content of the Company.
        </p>

        <h2 id="fairuse">9. Our Position on Book Summaries &amp; Fair Use</h2>
        <p>
          1perc is built on a foundation of respect for authors and publishers. We work with the
          following principles:
        </p>
        <ol>
          <li>
            <strong>Summaries are transformative.</strong> Each Summary is a new work — a condensed
            analysis in our editorial voice — and not a copy of the underlying Source Book. We never
            reproduce full chapters, pages or extended passages.
          </li>
          <li>
            <strong>Word budget per Summary.</strong> Each Summary is independently edited to stay
            within a target of approximately 1,000–1,500 words. We avoid substituting, replacing or
            paraphrasing long passages verbatim.
          </li>
          <li>
            <strong>Attribution.</strong> Every Summary prominently displays the Source Book's
            title, author, year of publication, and a link to purchase the Source Book from the
            publisher's preferred retailer (typically Amazon, Apple Books, or the publisher's own
            store).
          </li>
          <li>
            <strong>No substitutes for the book.</strong> We strongly encourage users to read each
            Source Book in full. The App includes a "Buy the book" link on every Summary.
          </li>
          <li>
            <strong>Removal on request.</strong> If an author or rights holder requests that a
            Summary be removed, we will do so promptly. See §20.
          </li>
          <li>
            <strong>Fair-use / fair-dealing.</strong> We believe each Summary falls within fair use
            (17 U.S.C. § 107) and the corresponding fair-dealing exceptions in the copyright laws of
            Canada, the United Kingdom, Singapore, Australia, and the EU. Where the law of the
            User's jurisdiction provides broader protection, we rely on that broader protection.
          </li>
          <li>
            <strong>Licensing where possible.</strong> For Source Books where a license is required
            or available (including books published under Creative Commons licenses whose terms
            permit summarisation), we obtain such licences on commercially reasonable terms.
          </li>
        </ol>
        <p>
          Nothing in this section is legal advice to a User, and nothing in this section waives any
          rights held by authors or publishers.
        </p>

        <h2 id="booksnotadvice">10. Books Are Not Professional Advice</h2>
        <p>
          1perc is a book-summary app. Books discussed in 1perc may include topics that overlap
          with:
        </p>
        <ul>
          <li>health, medicine and nutrition;</li>
          <li>mental health and psychology;</li>
          <li>law, tax, accounting and financial planning;</li>
          <li>investments, securities, cryptocurrencies and other financial instruments;</li>
          <li>relationships, parenting and personal development;</li>
          <li>religion, philosophy and ethics.</li>
        </ul>
        <p>
          <strong>
            The Summaries are summaries of the opinions, observations and arguments of the Source
            Book's author, not professional advice.
          </strong>{' '}
          The Company is not:
        </p>
        <ul>
          <li>a licensed medical, psychological, or psychiatric provider;</li>
          <li>a licensed attorney, tax adviser, accountant, or financial adviser;</li>
          <li>a licensed nutritionist, dietitian, or fitness trainer;</li>
          <li>a licensed financial adviser, broker-dealer, or investment adviser.</li>
        </ul>
        <p>
          If a Source Book discusses a topic that requires professional advice (for example, a book
          on managing diabetes), you must consult a qualified professional before acting on any
          information in that Summary.{' '}
          <strong>
            Do not rely on Summaries as a substitute for professional advice tailored to your
            circumstances.
          </strong>
        </p>

        <h2 id="voice">11. Voice Talent &amp; Audio Production</h2>
        <p>
          1perc's audio narration feature uses voices produced by professional voice talent and/or
          voice-synthesis providers (for example, ElevenLabs, PlayHT, Resemble AI, or the Company's
          own in-house production). Voice-talent agreements are concluded directly between the
          Company and the talent or the talent's agency.
        </p>
        <ul>
          <li>
            Voice performances are licensed to the Company on an exclusive or non-exclusive basis as
            agreed with each voice actor. The license permits us to distribute the audio as part of
            the 1perc Service for the duration of the relevant agreement.
          </li>
          <li>
            Voice talent retain rights of attribution and may request the removal of their voice
            from new Content. Past narrations may continue to be available.
          </li>
          <li>
            <strong>You may not</strong> use the audio narration to clone, train, fine-tune, or
            evaluate any AI/ML model or speech-synthesis system (see §7.3).
          </li>
          <li>
            If you are a voice actor and wish to inquire about narrating for 1perc, contact{' '}
            <a href="mailto:hello@positiveness.club">hello@positiveness.club</a>.
          </li>
        </ul>

        <h2 id="subscriptions">12. Subscriptions, Auto-Renewal &amp; Billing</h2>
        <p>
          1perc Pro Tier is offered as a recurring Subscription through the Stores. If you purchase
          a Subscription:
        </p>
        <ol>
          <li>
            <strong>Billing.</strong> You authorise the applicable Store to charge your designated
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
                <strong>iOS / App Store:</strong> Settings → Apple ID → Subscriptions → 1perc →
                Cancel Subscription (at least 24 hours before the next billing date).
              </li>
              <li>
                <strong>Android / Google Play:</strong> Google Play Store → your profile icon →
                Payments &amp; subscriptions → Subscriptions → 1perc → Cancel subscription (at least
                24 hours before the next billing date).
              </li>
            </ul>
          </li>
          <li>
            <strong>No mid-period cancellation.</strong> No cancellation of the current Subscription
            period is allowed. Once a billing period begins, you continue to have access until the
            period ends and will not receive a pro-rated refund except where required by law.
          </li>
          <li>
            <strong>Price changes.</strong> We may change Subscription fees at any time. Price
            changes will not affect the then-current billing period; the new price will apply to the
            next period after we have notified you in accordance with §15.
          </li>
          <li>
            <strong>Currency and taxes.</strong> All prices are displayed in the local Store
            currency and include VAT, GST, sales tax, or other applicable transaction taxes where
            the Store provides them.
          </li>
          <li>
            <strong>App Store purchases.</strong> Purchases made through the Apple App Store are
            subject to Apple's Licensed Application End User License Agreement and to the App Store
            Review Guidelines, including provisions on refund handling. Refund requests for App
            Store purchases are handled by Apple — see §14.
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
            Store, is governed by the Store's family-sharing policies.
          </li>
          <li>
            <strong>Promo codes.</strong> Promotional codes (e.g. for beta testers or journalists)
            are issued at the Company's sole discretion, may be time-limited, and are
            non-transferable and non-refundable.
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
            account. Subsequent trials for the same tier will not be offered.
          </li>
          <li>
            We may revoke or refuse a free trial or promotional offer at our sole discretion,
            including where we suspect abuse.
          </li>
          <li>
            Free Tier users are not charged and may stop using the App at any time without notice.
          </li>
        </ol>

        <h2 id="refunds">14. Refunds &amp; Cancellation</h2>
        <p>
          <strong>Store-governed refunds.</strong> Refund handling for Subscriptions purchased
          through a Store is governed by that Store's refund policies:
        </p>
        <ul>
          <li>
            <strong>Apple App Store:</strong> Apple controls refund decisions. To request a refund,
            go to{' '}
            <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
              reportaproblem.apple.com
            </a>{' '}
            and follow Apple's instructions. We are unable to override Apple's decision.
          </li>
          <li>
            <strong>Google Play Store:</strong> Google controls refund decisions. To request a
            refund, open Google Play → your profile icon → Payments &amp; subscriptions → Budget
            &amp; order history → select the order → Request refund. We are unable to override
            Google's decision.
          </li>
        </ul>
        <p>
          <strong>Cooling-off (where applicable).</strong> If mandatory consumer law in your
          jurisdiction (for example, the EU Consumer Rights Directive 2011/83/EU, the UK Consumer
          Contracts Regulations 2013, or Australian Consumer Law) gives you a right to withdraw from
          a digital-content purchase within 14 days, that right is <strong>waived</strong> at the
          moment you expressly consent to immediate performance (i.e. by tapping "Buy" or
          equivalent). If you have not yet consumed any content, you may still be eligible for a
          refund under your local consumer law.
        </p>
        <p>
          <strong>Our additional goodwill policy.</strong> Outside of the above, we may at our sole
          discretion offer a refund of up to 30 days from the original purchase date if you contact
          us at the address listed in §31 and explain why the Service did not meet your reasonable
          expectations. We may ask you to describe the issue and may suggest non-monetary remedies
          first.
        </p>
        <p>
          <strong>Free Tier cancellations.</strong> If you have not paid for the Service and have
          made no in-app purchase, you may stop using the App at any time without notice.
        </p>

        <h2 id="modifications">15. Modifications to the Service</h2>
        <p>We reserve the right, at any time and from time to time, to:</p>
        <ul>
          <li>
            modify, suspend or discontinue the Service (or any part of it), temporarily or
            permanently;
          </li>
          <li>
            change the features, content, prices or functionality of the Service (including the Free
            Tier quota);
          </li>
          <li>
            remove or replace any Summary in the catalogue, including where a Source Book's
            publisher or author has requested removal;
          </li>
          <li>
            impose limits on certain features or restrict access to parts or all of the Service.
          </li>
        </ul>
        <p>
          Where the change is material and adverse to active Subscribers, we will use reasonable
          efforts to provide at least 30 days' notice in advance via in-App notification or email to
          the address on file. Continued use after such changes constitutes acceptance of the
          modified Service.
        </p>

        <h2 id="termination">16. Termination &amp; Suspension</h2>
        <p>
          <strong>By us.</strong> We may suspend or terminate your access to the Service at any
          time, with or without cause, with or without notice, including if we reasonably believe
          that:
        </p>
        <ul>
          <li>you have breached these Terms (including the restrictions in §7);</li>
          <li>you have provided false or misleading information;</li>
          <li>
            your continued use poses a security, legal or operational risk to us or to other Users;
          </li>
          <li>we are required to do so by law, regulation or a Store;</li>
          <li>we discontinue the Service.</li>
        </ul>
        <p>
          <strong>By you.</strong> You may stop using the Service at any time and may delete the App
          from your Devices. Cancellation of a paid Subscription is governed by §12.4 and §14.
        </p>
        <p>
          <strong>Effect of termination.</strong> Upon termination, the license granted to you in §6
          ends immediately. Sections that by their nature should survive termination (including
          those governing intellectual property, disclaimers, limitation of liability,
          indemnification, dispute resolution and governing law) will survive.
        </p>

        <h2 id="warranty">17. Disclaimer of Warranties ("AS IS")</h2>
        <p>
          <strong>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE, THE APP, THE CONTENT AND
            ALL SUMMARIES ARE PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTY OF ANY KIND,
            EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF
            MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE,
            NON-INFRINGEMENT, QUIET ENJOYMENT, ACCURACY, OR THAT USE WILL BE UNINTERRUPTED OR
            ERROR-FREE.
          </strong>
        </p>
        <p>
          The Company does not warrant that the Service will meet your requirements, that Summaries
          will be accurate or complete, that the Service will be uninterrupted, timely, secure or
          error-free, that any errors will be corrected, or that the App or its servers are free of
          viruses or other harmful components.
        </p>
        <p>
          Summaries are written by human editors. The Company does not warrant that any particular
          idea, claim, statistic or recommendation in a Summary is accurate, complete, or applicable
          to your circumstances. You should verify any important claim against the underlying Source
          Book before relying on it.
        </p>
        <p>
          No advice or information, whether oral or written, obtained by you from the Company will
          create any warranty not expressly stated in these Terms.
        </p>

        <h2 id="liability">18. Limitation of Liability</h2>
        <p>
          <strong>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL THE COMPANY, ITS
            AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, CONTRACTORS, LICENSORS, EDITORIAL
            CONTRIBUTORS, VOICE TALENT, PUBLISHERS, PARTNERS OR SUPPLIERS BE LIABLE TO YOU OR TO ANY
            THIRD PARTY FOR:
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
            the Service; (b) any conduct or content of any third party on or through the Service;
            (c) any content obtained from the Service; or (d) unauthorized access, use or alteration
            of your transmissions or content;
          </li>
          <li>
            any claim of intellectual-property infringement by any third party arising from your use
            of the Service in violation of these Terms;
          </li>
          <li>
            any harm arising from your reliance on (or failure to verify) the accuracy, completeness
            or applicability of any Summary or any opinion, recommendation or statement in a
            Summary.
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
          The limitations of liability in this Section 18 apply to the maximum extent permitted by
          law. Nothing in these Terms is intended to exclude or limit liability that cannot be
          excluded or limited under applicable law — including liability for fraud, for death or
          personal injury caused by negligence, or for any other liability that cannot be lawfully
          excluded or limited.
        </p>

        <h2 id="indemnification">19. Indemnification by You</h2>
        <p>
          You agree to defend, indemnify and hold harmless the Company, its affiliates and their
          respective directors, officers, employees, agents, contractors, licensors, editorial
          contributors, voice talent and suppliers from and against any and all claims, damages,
          obligations, losses, liabilities, costs or expenses (including reasonable attorneys' fees)
          arising from:
        </p>
        <ol>
          <li>your access to or use of the Service;</li>
          <li>your violation of these Terms (including the restrictions in §7);</li>
          <li>
            your violation of any third-party right, including any intellectual-property, privacy,
            or proprietary right;
          </li>
          <li>any claim that your use of the Service has caused harm to a third party;</li>
          <li>
            any claim arising from your redistribution or republication of Content in violation of
            these Terms;
          </li>
          <li>any negligent or wrongful act or omission by you in connection with the Service.</li>
        </ol>

        <h2 id="dmca">20. Copyright Complaints (DMCA / §28 / Similar)</h2>
        <p>
          If you are an author, publisher or other rights holder and believe that a Summary in the
          App infringes your copyright, please send a written notice to the address in §31 that
          includes:
        </p>
        <ol>
          <li>a physical or electronic signature of the rights holder or authorized agent;</li>
          <li>
            identification of the copyrighted work claimed to have been infringed (or a
            representative list if multiple works);
          </li>
          <li>
            identification of the allegedly infringing Summary (with URL or in-App identifier) with
            enough detail for us to locate it;
          </li>
          <li>your contact information (address, telephone, email);</li>
          <li>
            a statement that you have a good-faith belief that the Summary is not authorized by you
            as the rights holder, your agent, or the law;
          </li>
          <li>
            a statement, made under penalty of perjury, that the above information is accurate and
            that you are the rights holder or authorised to act on the rights holder's behalf.
          </li>
        </ol>
        <p>Upon receipt of a valid notice, we will:</p>
        <ol>
          <li>remove or disable access to the identified Summary within 5 business days;</li>
          <li>notify the User who created the account (if applicable);</li>
          <li>
            provide a counter-notification mechanism if the User believes the removal was in error.
          </li>
        </ol>
        <p>
          We will respond to valid notices within the timeframes required by applicable law (e.g.
          the U.S. DMCA, Singapore Copyright Act, EU Information Society Directive).
        </p>

        <h2 id="ai">21. AI, Machine Learning &amp; Voice Synthesis</h2>
        <p>
          1perc uses human editors as the primary authors of Summaries. We may, at our discretion,
          use AI tools (such as large language models) as <strong>editorial assistants</strong> for
          tasks like outline generation, grammar review, and translation. All Summaries are reviewed
          and edited by a human before publication.
        </p>
        <p>
          Some audio narration may be produced using voice-synthesis technology. Where this is the
          case:
        </p>
        <ul>
          <li>
            the synthesised voice is licensed from a third-party provider or produced in-house;
          </li>
          <li>
            the synthesised voice is not based on any real person's biometric data without their
            consent;
          </li>
          <li>
            your use of the audio does not transmit any personal data to voice-synthesis providers.
          </li>
        </ul>
        <p>
          You may opt out of AI-enhanced or synthesised content from the App settings, where
          available.
        </p>
        <p>
          You agree <strong>not</strong> to use any Content — including audio narration — to train,
          fine-tune, evaluate, or improve any AI/ML model, voice-clone, or speech-synthesis system.
          This restriction is perpetual, worldwide and survives termination of these Terms.
        </p>

        <h2 id="export">22. Export Controls &amp; Sanctions</h2>
        <p>
          You represent and warrant that you are not located in, under the control of, or a national
          or resident of any country subject to U.S., U.K., EU, U.N. or Singaporean sanctions or
          export-control restrictions, including (without limitation) Cuba, Iran, North Korea,
          Syria, the Crimea, Donetsk and Luhansk regions of Ukraine, and any other country
          designated from time to time. You agree to comply with all applicable export-control and
          sanctions laws.
        </p>

        <h2 id="law">23. Governing Law</h2>
        <p>
          These Terms, and any non-contractual obligations arising out of or in connection with
          them, are governed by and construed in accordance with the laws of the Republic of
          Singapore, without regard to its conflict-of-laws principles. The United Nations
          Convention on Contracts for the International Sale of Goods does not apply.
        </p>
        <p>
          Notwithstanding the foregoing, a consumer resident in a country that prohibits the choice
          of Singapore law as governing law may rely on the mandatory consumer-protection laws of
          that country.
        </p>

        <h2 id="dispute">24. Dispute Resolution &amp; Arbitration</h2>
        <p>
          <strong>Informal resolution first.</strong> We want to address your concerns without
          resorting to formal legal action. Before filing any formal claim, you agree to contact us
          at the address in §31 and give us 30 days to resolve the issue informally. Most concerns
          are resolved this way.
        </p>
        <p>
          <strong>Binding arbitration.</strong> Any dispute, claim or controversy arising out of or
          relating to these Terms or the breach, termination, enforcement, interpretation or
          validity thereof — including the determination of the scope or applicability of this
          agreement to arbitrate — will be determined by binding arbitration administered by the
          Singapore International Arbitration Centre (SIAC) under its then-current Arbitration
          Rules, by a single arbitrator appointed in accordance with those Rules. The seat of
          arbitration will be Singapore. The language of arbitration will be English. The award will
          be final and binding and may be entered as a judgment in any court of competent
          jurisdiction.
        </p>
        <p>
          <strong>Exceptions.</strong> Notwithstanding the above, either party may bring a
          qualifying individual action in a court of competent jurisdiction in the user's country of
          residence for injunctive or other equitable relief to prevent (or stop) an actual or
          threatened infringement or misuse of intellectual property rights. Either party may also
          bring a small-claims action in a court of competent jurisdiction in the user's country of
          residence for any claim within the scope of that court's small-claims jurisdiction.
        </p>

        <h2 id="classaction">25. Class Action &amp; Jury-Trial Waiver</h2>
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
          knowingly and irrevocably waive any right to a trial by jury.
        </p>
        <p>
          Notwithstanding the foregoing, this Section does not apply to class-action waivers that
          are unenforceable under the law of the user's jurisdiction (for example, Quebec residents
          and certain EU consumers).
        </p>

        <h2 id="force">26. Force Majeure</h2>
        <p>
          The Company will not be liable for any delay or failure to perform any obligation under
          these Terms (excluding the obligation to pay) where the delay or failure is caused by an
          event beyond its reasonable control, including acts of God, natural disasters, pandemics,
          war, terrorism, civil unrest, government action, internet or telecommunications failures,
          power failures, cyberattacks, or labour disputes.
        </p>

        <h2 id="severability">27. Severability</h2>
        <p>
          If any provision of these Terms is held to be invalid, illegal or unenforceable, that
          provision will be severed from these Terms and the remaining provisions will remain in
          full force and effect. The severed provision will be replaced by a valid provision that
          most closely reflects the original intent.
        </p>

        <h2 id="entire">28. Entire Agreement</h2>
        <p>
          These Terms, together with the 1perc Privacy Policy (
          <Link href="/1perc/policies">/1perc/policies</Link>) and any policies or notices
          referenced within them, constitute the entire agreement between you and the Company with
          respect to the Service and supersede all prior or contemporaneous communications and
          proposals, whether oral or written.
        </p>

        <h2 id="assignment">29. Assignment</h2>
        <p>
          You may not assign or transfer these Terms or any rights granted under them, in whole or
          in part, without the Company's prior written consent. We may assign these Terms at any
          time, in whole or in part, without notice to you, including in connection with a merger,
          acquisition, corporate reorganization, sale of all or substantially all of our assets, or
          by operation of law.
        </p>

        <h2 id="notices">30. Notices</h2>
        <p>Notices to you may be delivered:</p>
        <ul>
          <li>via in-App notification;</li>
          <li>via email to the address you provided to the Store;</li>
          <li>by posting a notice on our website at positiveness.club.</li>
        </ul>
        <p>
          Notices are deemed received within 24 hours of delivery by email or posting, or upon
          display in the App.
        </p>

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
            Directive (2019/770) and the EU Sale of Goods Directive (2019/771), including the right
            of conformity and the right to remedy of defects.
          </li>
          <li>
            The European Commission's Online Dispute Resolution platform is available at{' '}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              ec.europa.eu/consumers/odr
            </a>{' '}
            for consumers who wish to resolve a dispute out of court.
          </li>
          <li>
            The mandatory 14-day right of withdrawal for digital content is waived only at the
            moment you give express consent and acknowledge the loss of withdrawal right, as set out
            in §14 above.
          </li>
        </ul>

        <h3>32.2 United States — California</h3>
        <ul>
          <li>
            This Agreement is intended to cover only Users who use the Service for personal, family
            or household purposes. To the maximum extent permitted by California Civil Code § 1542,
            you waive any right to claim any damages not expressly identified in §18.
          </li>
          <li>
            Under the California Consumer Privacy Act (CCPA) / California Privacy Rights Act (CPRA),
            see the 1perc Privacy Policy for details on personal information collection, "sale" /
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
        </ul>

        <h3>32.5 Indonesia</h3>
        <ul>
          <li>
            For Users in Indonesia, the personal-data processing aspects of this Agreement are also
            governed by the Indonesian Personal Data Protection Law (Undang-Undang Nomor 27 Tahun
            2022 tentang Pelindungan Data Pribadi).
          </li>
          <li>
            The dispute-resolution provisions in §24 (binding arbitration in Singapore) apply except
            where prohibited by mandatory Indonesian law.
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
            The Consumer Contracts (Information, Cancellation and Additional Charges) Regulations
            2013 and the Consumer Rights Act 2015 apply to consumers in the U.K. and are not waived
            except as expressly permitted by those statutes.
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
