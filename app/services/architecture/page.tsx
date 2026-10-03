import Image from "next/image";
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Architecture & Construction | SCI Royal Estate",
  description:
    "We handle projects from initial concept through to completed handover across Cameroon.",
};

const PROJECT_CATEGORIES = [
  { title: "Residential homes", description: "Villas, duplexes, and residential buildings" },
  { title: "Commercial buildings", description: "Offices, retail centres, and warehouses" },
  { title: "Hospitality properties", description: "Hotels, guest houses, and serviced apartments" },
  { title: "Renovations", description: "Upgrading and modernising existing structures" },
];

const OFFERINGS = [
  {
    title: "Architectural Design & Drawings",
    description:
      "Full architectural design services including concept development, detailed architectural drawings, and construction documentation.",
  },
  {
    title: "Building Permits & Approvals",
    description:
      "We manage the process of obtaining building permits and regulatory approvals required for construction projects in Cameroon.",
  },
  {
    title: "Construction Management",
    description:
      "We manage construction projects from groundbreaking to completion, including procurement, site supervision, quality control, and project scheduling.",
  },
  {
    title: "Turnkey Delivery",
    description:
      "For clients who want a complete solution, we deliver projects from design through to handover — one team, one contract, from blueprint to keys.",
  },
];

export default function ArchitecturePage() {
  return (
    <>
      <Header />
      <main className="bg-[#121212]">
        <PageHero
          eyebrow="SERVICES"
          title="Architecture &"
          emphasis="Construction"
          subtitle="We handle projects from initial concept through to completed handover across Cameroon."
        />

        <section className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-[#C9A549]">
            WHAT WE BUILD
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold text-[#E8E5E0] sm:text-4xl">
            Project <em className="italic text-[#C9A549]">Categories</em>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PROJECT_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="flex items-start gap-3 rounded-sm border border-[#2E2E2E] p-5"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A549]" />
                <div>
                  <h3 className="font-semibold text-[#E8E5E0]">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#8C8781]">
                    {cat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-10 h-[400px] w-full">
            <Image
              src="/images/architecture-services-BlxEOs2s.jpg"
              alt="Architecture services"
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-20 text-center text-xs font-semibold tracking-[0.3em] text-[#C9A549]">
            OUR SERVICES
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold text-[#E8E5E0] sm:text-4xl">
            What We <em className="italic text-[#C9A549]">Offer</em>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {OFFERINGS.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-[#E8E5E0]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8C8781]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="bg-[#C9A549] px-8 py-3.5 text-xs font-semibold tracking-widest text-[#121212] transition hover:bg-[#b8943f]"
            >
              REQUEST A CONSULTATION
            </a>
            <a
              href="/contact"
              className="border border-[#C9A549] px-8 py-3.5 text-xs font-semibold tracking-widest text-[#C9A549] transition hover:bg-[#C9A549] hover:text-[#121212]"
            >
              CONTACT US
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
