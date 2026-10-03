import Image from "next/image";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaSection from "../components/CtaSection";

export const metadata: Metadata = {
  title: "Gated Communities | SCI Royal Estate",
  description:
    "Secure gated residential communities designed for homeowners who require a higher standard of security, privacy, and community living.",
};

const SECURITY_FEATURES = [
  "24/7 manned security",
  "CCTV surveillance",
  "Controlled access points",
];

const AMENITIES = [
  "Swimming pool",
  "Clubhouse",
  "Gym and fitness facilities",
  "Children's play areas",
  "Landscaped gardens and green spaces",
];

export default function GatedCommunitiesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#121212]">
        <PageHero
          eyebrow="PROPERTIES"
          title="Gated"
          emphasis="Communities"
          subtitle="Secure gated residential communities designed for homeowners who require a higher standard of security, privacy, and community living."
        />

        <section className="mx-auto max-w-6xl px-6 py-24">
          <p className="max-w-3xl text-base leading-relaxed text-[#8C8781]">
            SCI Royal Estate is developing secure gated residential
            communities in Cameroon. Homes within our gated communities are
            designed and built by SCI Royal Estate&apos;s architectural and
            construction team.
          </p>

          <div className="mt-16 grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#C9A549]">
                SECURITY &amp; ACCESS
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#E8E5E0]">
                Built Around{" "}
                <em className="italic text-[#C9A549]">Security</em>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#8C8781]">
                Every SCI Royal Estate gated community is built around
                security. Residents benefit from 24/7 manned security, CCTV
                surveillance across the estate, and controlled access
                points.
              </p>
              <ul className="mt-6 space-y-3">
                {SECURITY_FEATURES.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A549]" />
                    <span className="text-sm text-[#E8E5E0]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[400px] w-full">
              <Image
                src="/images/gated-detail-kGvQIA0V.jpg"
                alt="Gated community entrance"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#C9A549]">
                AMENITIES
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#E8E5E0]">
                Community{" "}
                <em className="italic text-[#C9A549]">Amenities</em>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#8C8781]">
                Our gated communities include shared amenities for
                residents:
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {AMENITIES.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A549]" />
                    <span className="text-sm text-[#E8E5E0]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#C9A549]">
                MANAGEMENT
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#E8E5E0]">
                Estate{" "}
                <em className="italic text-[#C9A549]">Management</em>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#8C8781]">
                Each community is supported by a dedicated estate management
                and maintenance team responsible for the upkeep of common
                areas, security operations, and day-to-day estate
                administration.
              </p>
              <p className="mt-4 flex items-center gap-3 text-sm text-[#E8E5E0]/80">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A549]" />
                Dedicated management team
              </p>
            </div>
          </div>
        </section>

        <CtaSection
          title="Secure Your"
          emphasis="Home"
          subtitle=""
          buttons={[
            { label: "REGISTER INTEREST", href: "/contact" },
            { label: "CONTACT US", href: "/contact", variant: "outline" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
