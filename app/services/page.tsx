import Image from "next/image";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Services | SCI Royal Estate",
  description:
    "Development, property management, hospitality operations, construction, security and investment advisory — six disciplines delivered by the SCI Royal Estate group.",
};

const DISCIPLINES = [
  {
    id: "development",
    number: "01",
    eyebrow: "Development",
    title: "From land to",
    emphasis: "handover.",
    lead: "SCI Développement acquires land, coordinates design, secures permits and delivers finished properties — for our own portfolio and, selectively, for third-party owners.",
    items: [
      { label: "Site acquisition", description: "sourcing and underwriting land" },
      { label: "Design coordination", description: "briefing architects, reviewing schemes" },
      { label: "Permitting & approvals", description: "end-to-end regulatory process" },
      { label: "Project delivery", description: "construction oversight, quality assurance, handover" },
    ],
    image: "/images/svc-development.jpg",
    reverse: false,
    bg: "ivory",
  },
  {
    id: "management",
    number: "02",
    eyebrow: "Property Management",
    title: "We manage what we own —",
    emphasis: "and what you own.",
    lead: "SCI Gestion handles day-to-day operations for residential and commercial assets: leasing, maintenance, tenant relations and financial reporting.",
    items: [
      { label: "Leasing & tenant acquisition", description: "marketing, screening, negotiation" },
      { label: "Facilities & maintenance", description: "scheduled and responsive" },
      { label: "Rent collection & accounting", description: "monthly owner reporting" },
      { label: "Compliance & renewals", description: "lease administration" },
    ],
    image: "/images/svc-management.jpg",
    reverse: true,
    bg: "cream",
  },
  {
    id: "hospitality",
    number: "03",
    eyebrow: "Hospitality Operations",
    title: "Serviced residences,",
    emphasis: "operated in-house.",
    lead: "Résidence L'écrin is operated end-to-end by our team — housekeeping, concierge, laundry, security and guest services — to an international standard.",
    items: [
      { label: "Reservations & revenue", description: "dynamic pricing, OTA and direct" },
      { label: "Housekeeping & concierge", description: "daily service standards" },
      { label: "Food & beverage coordination", description: "in-residence hospitality" },
      { label: "Guest experience", description: "trained staff, measured outcomes" },
    ],
    image: "/images/svc-hospitality.jpg",
    reverse: false,
    bg: "ivory",
  },
];

const ADVISORY = {
  id: "advisory",
  number: "06",
  eyebrow: "Investment Advisory",
  title: "Counsel grounded in",
  emphasis: "ownership.",
  lead: "SCI Advisory is our engagement with institutional and private investors entering or expanding in Central African real estate. Our perspective is operator-led — not transactional.",
  items: [
    { label: "Market entry", description: "structure, partners, first-asset sourcing" },
    { label: "Asset strategy", description: "hold, operate, reposition or exit" },
    { label: "Operator selection", description: "sourcing and onboarding managers" },
    { label: "Co-investment", description: "selective joint ventures with the group" },
  ],
  image: "/images/svc-advisory.jpg",
  reverse: true,
  bg: "ivory",
};

const SUPPORT_UNITS = [
  {
    id: "construction",
    number: "04",
    eyebrow: "Construction",
    title: "SCI Construction",
    description:
      "In-house general contracting, finishing and renovation — for our developments and for third parties. Delivering quality is easier when your own reputation is on the line.",
    items: [
      "New-build residential & commercial",
      "Major renovations & fit-outs",
      "Specialist finishing",
    ],
  },
  {
    id: "security",
    number: "05",
    eyebrow: "Security",
    title: "SCI Sécurité",
    description:
      "Professional, 24/7 security for residential, hospitality and commercial assets. Uniformed officers, vetted recruitment, and continuous training.",
    items: [
      "Staffed residential & commercial security",
      "Visitor management & access control",
      "CCTV monitoring & incident response",
    ],
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Listen",
    description:
      "We begin by understanding your goal — tenancy, investment, development, or advisory.",
  },
  {
    num: "02",
    title: "Match",
    description:
      "We propose the properties, services or partnership structures that fit — and we say no when they don't.",
  },
  {
    num: "03",
    title: "Deliver",
    description:
      "Our operating companies execute — whether that is moving a family in or closing a joint venture.",
  },
  {
    num: "04",
    title: "Steward",
    description:
      "We stay involved. Long after the contract is signed, we are still the party accountable for the outcome.",
  },
];

function Eyebrow({
  children,
  color = "#D4BC85",
}: {
  children: string;
  color?: string;
}) {
  return (
    <p
      className="text-xs font-semibold tracking-[0.3em]"
      style={{ color }}
    >
      {children}
    </p>
  );
}

function bgClass(bg: "ivory" | "cream") {
  return bg === "ivory" ? "bg-[#FAF8F3]" : "bg-[#F7F3EC]";
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="WHAT WE DO"
          title="Six disciplines, delivered"
          emphasis="by one group."
          subtitle="Each service is tested daily on our own assets — so when we extend it to a client, it has already worked."
        />

        {DISCIPLINES.slice(0, 2).map((d) => (
          <section key={d.id} id={d.id} className={`${bgClass(d.bg as "ivory" | "cream")} px-6 py-20`}>
            <div className="mx-auto max-w-6xl">
              <div
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2`}
              >
                <div
                  className={`relative aspect-[4/3] w-full ${
                    d.reverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={d.image}
                    alt={d.eyebrow}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={d.reverse ? "lg:order-1" : "lg:order-2"}>
                  <Eyebrow color="#9E8147">{`${d.number} · ${d.eyebrow}`}</Eyebrow>
                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                    <span className="text-[#1A1A1A]">{d.title}</span>{" "}
                    <span className="text-[#9E8147]">{d.emphasis}</span>
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-[#3A3F42]">
                    {d.lead}
                  </p>
                  <ul className="mt-6 divide-y divide-[#E3DDD1] border-t border-[#E3DDD1]">
                    {d.items.map((item) => (
                      <li key={item.label} className="py-3 text-sm text-[#3A3F42]">
                        <strong className="font-semibold text-[#1A1A1A]">
                          {item.label}
                        </strong>{" "}
                        · {item.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}

        {DISCIPLINES.slice(2).map((d) => (
          <section key={d.id} id={d.id} className={`${bgClass(d.bg as "ivory" | "cream")} px-6 py-20`}>
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div
                  className={`relative aspect-[4/3] w-full ${
                    d.reverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={d.image}
                    alt={d.eyebrow}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={d.reverse ? "lg:order-1" : "lg:order-2"}>
                  <Eyebrow color="#9E8147">{`${d.number} · ${d.eyebrow}`}</Eyebrow>
                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                    <span className="text-[#1A1A1A]">{d.title}</span>{" "}
                    <span className="text-[#9E8147]">{d.emphasis}</span>
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-[#3A3F42]">
                    {d.lead}
                  </p>
                  <ul className="mt-6 divide-y divide-[#E3DDD1] border-t border-[#E3DDD1]">
                    {d.items.map((item) => (
                      <li key={item.label} className="py-3 text-sm text-[#3A3F42]">
                        <strong className="font-semibold text-[#1A1A1A]">
                          {item.label}
                        </strong>{" "}
                        · {item.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="bg-[#F7F3EC] px-6 py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
            {SUPPORT_UNITS.map((unit) => (
              <div
                key={unit.id}
                id={unit.id}
                className="border border-[#E3DDD1] bg-white p-10"
              >
                <Eyebrow color="#9E8147">{`${unit.number} · ${unit.eyebrow}`}</Eyebrow>
                <h3 className="mt-3 text-2xl font-bold text-[#1A1A1A]">
                  {unit.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#3A3F42]">
                  {unit.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {unit.items.map((item) => (
                    <li key={item} className="text-sm text-[#3A3F42]">
                      · {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id={ADVISORY.id} className="bg-[#FAF8F3] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="relative aspect-[4/3] w-full lg:order-2">
                <Image
                  src={ADVISORY.image}
                  alt={ADVISORY.eyebrow}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:order-1">
                <Eyebrow color="#9E8147">{`${ADVISORY.number} · ${ADVISORY.eyebrow}`}</Eyebrow>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  <span className="text-[#1A1A1A]">{ADVISORY.title}</span>{" "}
                  <span className="text-[#9E8147]">{ADVISORY.emphasis}</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-[#3A3F42]">
                  {ADVISORY.lead}
                </p>
                <ul className="mt-6 divide-y divide-[#E3DDD1] border-t border-[#E3DDD1]">
                  {ADVISORY.items.map((item) => (
                    <li key={item.label} className="py-3 text-sm text-[#3A3F42]">
                      <strong className="font-semibold text-[#1A1A1A]">
                        {item.label}
                      </strong>{" "}
                      · {item.description}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="mt-6 inline-block bg-[#B89A5E] px-8 py-3.5 text-xs font-semibold tracking-widest text-white transition hover:bg-[#9E8147]"
                >
                  SPEAK TO OUR ADVISORY TEAM &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1F2A2E] px-6 py-20 text-center">
          <Eyebrow>How We Work</Eyebrow>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            A considered process, not a hurried one.
          </h2>
          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step) => (
              <div
                key={step.num}
                className="border border-[#B89A5E]/40 p-6"
              >
                <span className="text-2xl font-normal text-[#B89A5E]">
                  {step.num}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A8ADB0]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#FAF8F3] px-6 py-24 text-center">
          <div className="mx-auto max-w-2xl">
            <Eyebrow color="#9E8147">Engage</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
              Tell us what you need, and we will direct you to the right
              team.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3A3F42]">
              Whether it&apos;s a tenancy enquiry, a construction brief, an
              advisory request or an investor conversation — we respond
              within one business day.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block bg-[#B89A5E] px-8 py-3.5 text-xs font-semibold tracking-widest text-white transition hover:bg-[#9E8147]"
            >
              GET IN TOUCH &rarr;
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
