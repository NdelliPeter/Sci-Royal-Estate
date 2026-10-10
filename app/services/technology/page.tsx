import Image from "next/image";
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CtaSection from "../../components/CtaSection";

export const metadata: Metadata = {
  title: "Real Estate Technology | SCI Royal Estate",
  description:
    "Technology solutions for the real estate and hospitality sector in Cameroon and Africa.",
};

const SOLUTIONS = [
  {
    title: "Property Management Systems (PMS)",
    description:
      "A PMS handles day-to-day operations of a hotel or serviced apartment — from reservations and guest check-in to housekeeping, billing, and reporting. Our solutions help operators manage properties efficiently and deliver better guest experiences.",
    href: "/services/technology/pms",
  },
  {
    title: "Construction Management Software",
    description:
      "Enables project owners and managers to supervise construction projects. Supports project scheduling, task tracking, progress monitoring, and team coordination — giving stakeholders visibility over every stage.",
    href: "/services/technology/construction-management",
  },
  {
    title: "Real Estate Search",
    description:
      "Platforms connecting property seekers with available listings — whether for rental, purchase, or short-stay accommodation — making it easier for buyers and tenants to find property in Cameroon.",
    href: "/services/technology/real-estate-search",
  },
  {
    title: "Real Estate Marketing Solutions",
    description:
      "Marketing solutions for the property and hospitality sector. Help developers and hotel operators reach their target audience, generate enquiries, and convert interest into bookings or sales.",
    href: "/services/technology/marketing-solutions",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <Header />
      <main className="bg-[#1F2A2E]">
        <PageHero
          eyebrow="SERVICES"
          title="Real Estate"
          emphasis="Technology"
          subtitle="Technology solutions for the real estate and hospitality sector in Cameroon and Africa."
        />

        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="relative h-[400px] w-full lg:order-1">
              <Image
                src="/images/technology-BJeJSFYW.jpg"
                alt="Real estate technology"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:order-2">
              <p className="text-xs font-semibold tracking-[0.3em] text-[#D4BC85]">
                TECHNOLOGY
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Our <em className="italic text-[#D4BC85]">Solutions</em>
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-[#D4D8DA]">
                SCI Royal Estate provides technology solutions for the real
                estate and hospitality sector in Cameroon and Africa. Our
                solutions are built for hotels and hospitality operators.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {SOLUTIONS.map((solution) => (
              <a
                key={solution.href}
                href={solution.href}
                className="group block border border-white/15 p-8 transition-colors hover:border-[#B89A5E]"
              >
                <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[#D4BC85]">
                  {solution.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#D4D8DA]">
                  {solution.description}
                </p>
                <span className="mt-4 inline-block text-xs font-semibold tracking-widest text-[#D4BC85] group-hover:underline">
                  LEARN MORE →
                </span>
              </a>
            ))}
          </div>
        </section>

        <CtaSection
          title="Explore Our"
          emphasis="Solutions"
          subtitle=""
          buttons={[
            { label: "EXPLORE SOLUTIONS", href: "/contact" },
            { label: "CONTACT US", href: "/contact", variant: "outline" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
