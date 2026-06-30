/**
 * CrisisResources — global mental health emergency contacts.
 *
 * Used on legal pages (/heal/tnc, /heal/policies) so users in distress
 * always see actionable help. Sticky rendering, no client JS.
 *
 * CRITICAL: this is information many users will need during their worst moments.
 * Mobile-first, no tiny text, no external links (only tel: and https to hotlines).
 *
 * If you add a region, keep the formatting uniform: country flag emoji + name,
 * service name, primary number, optional secondary contact, and hours.
 *
 * Last verified: 2026-06-30.
 * Before relying on these in production, verify with each region's official
 * crisis-services directory (IASP, findahelpline.com, etc.).
 */

type Resource = {
  flag: string
  country: string
  name: string
  contact: string
  secondary?: string
  type: "call" | "text" | "link"
  hours: string
}

const RESOURCES: Resource[] = [
  {
    flag: "🌏",
    country: "International",
    name: "findahelpline.com",
    contact: "findahelpline.com",
    type: "link",
    hours: "24/7 directory",
  },
  {
    flag: "🇸🇬",
    country: "Singapore",
    name: "Samaritans of Singapore (SOS)",
    contact: "+65 1-767",
    secondary: "+65 6367 6868",
    type: "call",
    hours: "24/7",
  },
  {
    flag: "🇸🇬",
    country: "Singapore (text)",
    name: "SOS Care Text",
    contact: "chat.sos.org.sg",
    type: "link",
    hours: "Daily 16:00–00:00 SGT",
  },
  {
    flag: "🇸🇬",
    country: "Singapore (emergency)",
    name: "SCDF Ambulance / Fire",
    contact: "995",
    type: "call",
    hours: "24/7 emergency",
  },
  {
    flag: "🇺🇸",
    country: "United States",
    name: "988 Suicide & Crisis Lifeline",
    contact: "988",
    secondary: "988lifeline.org",
    type: "call",
    hours: "24/7",
  },
  {
    flag: "🇺🇸",
    country: "US (text)",
    name: "Crisis Text Line",
    contact: "Text HOME to 741741",
    type: "text",
    hours: "24/7",
  },
  {
    flag: "🇺🇸",
    country: "US (emergency)",
    name: "Emergency Services",
    contact: "911",
    type: "call",
    hours: "24/7 emergency",
  },
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    name: "Samaritans",
    contact: "116 123",
    secondary: "samaritans.org",
    type: "call",
    hours: "24/7 free",
  },
  {
    flag: "🇬🇧",
    country: "UK (emergency)",
    name: "Emergency Services",
    contact: "999",
    type: "call",
    hours: "24/7 emergency",
  },
  {
    flag: "🇪🇺",
    country: "European Union",
    name: "112 (single emergency number)",
    contact: "112",
    type: "call",
    hours: "24/7 emergency",
  },
  {
    flag: "🇦🇺",
    country: "Australia",
    name: "Lifeline Australia",
    contact: "13 11 14",
    secondary: "lifeline.org.au",
    type: "call",
    hours: "24/7",
  },
  {
    flag: "🇮🇩",
    country: "Indonesia",
    name: "Into The Light Indonesia",
    contact: "119 ext 8",
    secondary: "+62 21 720 8680",
    type: "call",
    hours: "24/7",
  },
  {
    flag: "🇮🇩",
    country: "Indonesia (emergency)",
    name: "Emergency Services",
    contact: "110 / 118 / 112",
    type: "call",
    hours: "24/7 emergency",
  },
  {
    flag: "🇲🇾",
    country: "Malaysia",
    name: "Befrienders KL",
    contact: "+60 3 7956 8145",
    secondary: "befrienders.org.my",
    type: "call",
    hours: "Daily 15:00–00:00 MYT",
  },
  {
    flag: "🇵🇭",
    country: "Philippines",
    name: "Hopeline Philippines",
    contact: "+63 2 8804 4673",
    secondary: "hopeline.org.ph",
    type: "call",
    hours: "24/7",
  },
  {
    flag: "🇹🇼",
    country: "Taiwan",
    name: "1925 Lifeline (安心專線)",
    contact: "1925",
    type: "call",
    hours: "24/7",
  },
  {
    flag: "🇭🇰",
    country: "Hong Kong",
    name: "The Samaritans (撒瑪利亞防止自殺會)",
    contact: "+852 2389 2222",
    secondary: "samaritans.org.hk",
    type: "call",
    hours: "24/7",
  },
  {
    flag: "🇯🇵",
    country: "Japan",
    name: "TELL Lifeline",
    contact: "+81 3 5774 0992",
    secondary: "telljp.com",
    type: "call",
    hours: "Daily 09:00–23:00 JST",
  },
  {
    flag: "🇰🇷",
    country: "South Korea",
    name: "Suicide Prevention Hotline",
    contact: "1393",
    type: "call",
    hours: "24/7",
  },
  {
    flag: "🇮🇳",
    country: "India",
    name: "AASRA",
    contact: "+91 9820 466 727",
    secondary: "aasra.info",
    type: "call",
    hours: "24/7",
  },
  {
    flag: "🇦🇺",
    country: "Australia (LGBTIQ+)",
    name: "QLife",
    contact: "1800 184 527",
    secondary: "qlife.org.au",
    type: "call",
    hours: "Daily 15:00–midnight AEST",
  },
  {
    flag: "🌈",
    country: "Worldwide LGBTIQ+",
    name: "The Trevor Project (US) / LGBT+ hotlines",
    contact: "theTrevorProject.org",
    type: "link",
    hours: "24/7 (US) · directory worldwide",
  },
  {
    flag: "🧒",
    country: "Child / Youth (US)",
    name: "Childhelp",
    contact: "+1 800 422 4453",
    type: "call",
    hours: "24/7",
  },
  {
    flag: "🧒",
    country: "Child / Youth (UK)",
    name: "Childline",
    contact: "0800 1111",
    type: "call",
    hours: "Daily 09:00–midnight",
  },
] as const

interface CrisisResourcesProps {
  variant?: "card" | "inline"
  heading?: string
  showNote?: boolean
}

export function CrisisResources({
  variant = "card",
  heading = "If you are in crisis or someone you know is",
  showNote = true,
}: CrisisResourcesProps) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    variant === "card" ? (
      <div className="card border-coral/40 bg-coral/5">{children}</div>
    ) : (
      <div className="rounded-2xl border border-coral/30 bg-coral/5 p-5">{children}</div>
    )

  return (
    <Wrapper>
      <div className="text-base font-semibold mb-2 text-coral">{heading}</div>
      {showNote && (
        <p className="text-sm text-mute mb-4 leading-relaxed">
          These are free, confidential services staffed by trained counsellors. The HEAL app is
          not a substitute for professional mental-health care, and is not monitored in real
          time. <strong>If you are in immediate danger, contact your local emergency number
          first.</strong>
        </p>
      )}
      <div className="grid gap-2 sm:grid-cols-2">
        {RESOURCES.map((r) => {
          const href =
            r.type === "call"
              ? `tel:${r.contact.replace(/\s|-|\(|\)|\+/g, "")}`
              : r.type === "text"
                ? null
                : r.contact.startsWith("http")
                  ? r.contact
                  : `https://${r.contact}`

          return (
            <div
              key={`${r.country}-${r.name}`}
              className="rounded-lg bg-card border border-line p-2.5 text-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-medium truncate">
                  {r.flag} {r.country}
                </span>
                <span className="text-xs text-mute shrink-0">{r.hours}</span>
              </div>
              <div className="text-ink mt-0.5">
                <span className="text-xs text-mute">{r.name}: </span>
                {href ? (
                  <a
                    href={href}
                    className="font-semibold text-coral hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {r.contact}
                  </a>
                ) : (
                  <span className="font-semibold">{r.contact}</span>
                )}
              </div>
              {r.secondary && (
                <div className="text-xs text-mute mt-0.5">
                  {r.type === "call" ? "alt: " : "web: "}
                  {r.secondary.startsWith("http") ? (
                    <a
                      href={r.secondary}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-coral"
                    >
                      {r.secondary.replace(/^https?:\/\//, "")}
                    </a>
                  ) : (
                    <a href={`tel:${r.secondary.replace(/\s|-|\(|\)|\+/g, "")}`} className="underline">
                      {r.secondary}
                    </a>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}