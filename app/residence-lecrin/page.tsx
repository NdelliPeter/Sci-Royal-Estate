import Image from "next/image";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaSection from "../components/CtaSection";

export const metadata: Metadata = {
  title: "Résidence L'écrin | SCI Royal Estate",
  description:
    "Our luxury hospitality brand. Each property is a mixed-use residential building focused on luxury accommodation in Cameroon's major cities.",
};

const OFFERINGS = [
  "Luxury apartment hotel",
  "Apartments for sale",
  "Retail spaces for lease",
  "Meeting facility",
  "Fitness center",
  "Rooftop restaurant and lounge",
];

const LOCATIONS = [
  { name: "L'écrin – Mimboman, Yaoundé", status: "OPERATIONAL" },
  { name: "L'écrin – Mfandena, Yaoundé", status: "UNDER CONSTRUCTION" },
  { name: "L'écrin – Dragage, Yaoundé", status: "PRE-PLANNING" },
  { name: "L'écrin – Mfou", status: "OPERATIONAL" },
];

function StatusBadge({ status }: { status: string }) {
  const isOperational = status === "OPERATIONAL";
  return (
    <span
      className={`mt-2 inline-block rounded-sm px-3 py-1 text-xs font-semibold tracking-widest ${
        isOperational
          ? "bg-[#B89A5E]/20 text-[#D4BC85]"
          : "bg-[#2D3A3F] text-[#A8ADB0]"
      }`}
    >
      {status}
    </span>
  );
}

export default function ResidenceLecrinPage() {
  return (
    <>
      <Header />
      <main className="bg-[#1F2A2E]">
        <PageHero
          eyebrow="HOSPITALITY"
          title="Résidence"
          emphasis="L'écrin"
          subtitle="Our luxury hospitality brand. Each property is a mixed-use residential building focused on luxury accommodation in Cameroon's major cities."
        />

        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#D4BC85]">
                WHAT WE OFFER
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                A Typical L&apos;écrin{" "}
                <em className="italic text-[#D4BC85]">Property</em>
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {OFFERINGS.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-sm border border-white/15 p-3"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B89A5E]" />
                    <span className="text-sm text-[#D4D8DA]/80">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-[#A8ADB0]">
                Website:{" "}
                <a
                  href="https://www.residencelecrin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4BC85] hover:underline"
                >
                  www.residencelecrin.com
                </a>
              </p>
            </div>
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/lecrin-hotel-BO5DoFhF.jpg"
                alt="Résidence L'écrin interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-white/15 bg-[#2D3A3F] px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.3em] text-[#D4BC85]">
                LOCATIONS
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Our <em className="italic text-[#D4BC85]">Properties</em>
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
              {LOCATIONS.map((loc) => (
                <div
                  key={loc.name}
                  className="border border-white/15 p-8 transition-colors hover:border-[#B89A5E]"
                >
                  <h3 className="text-xl text-white">{loc.name}</h3>
                  <StatusBadge status={loc.status} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection
          title="Experience"
          emphasis="L'écrin"
          subtitle="Book a stay or explore our properties."
          buttons={[
            {
              label: "BOOK A STAY",
              href: "https://www.residencelecrin.com",
              external: true,
            },
            { label: "CONTACT US", href: "/contact", variant: "outline" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
