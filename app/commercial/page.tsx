import Image from "next/image";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Commercial Properties | SCI Royal Estate",
  description:
    "SCI Royal Estate develops and manages commercial real estate in Cameroon.",
};

const SPACE_TYPES = ["Shops", "Offices", "Warehouses"];

export default function CommercialPage() {
  return (
    <>
      <Header />
      <main className="bg-[#1F2A2E]">
        <PageHero
          eyebrow="PROPERTIES"
          title="Commercial"
          emphasis="Properties"
          subtitle="SCI Royal Estate develops and manages commercial real estate in Cameroon."
        />

        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#D4BC85]">
                FEATURED PROPERTY
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white">
                Douala Farmers Club{" "}
                <em className="italic text-[#D4BC85]">Commercial Centre</em>
              </h2>
              <p className="mt-6 text-[#D4D8DA]">
                <span className="font-semibold text-white">
                  Location:
                </span>{" "}
                Bonamoussadi, Douala
              </p>
              <p className="mt-4 text-[#D4D8DA]">
                Commercial real estate comprising shops, offices, and
                warehouses.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {SPACE_TYPES.map((type) => (
                  <div
                    key={type}
                    className="rounded-sm border border-white/15 p-4 text-center"
                  >
                    <span className="mx-auto mb-2 block h-1.5 w-1.5 rounded-full bg-[#B89A5E]" />
                    <span className="text-sm text-[#D4D8DA]/80">{type}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="/contact"
                  className="bg-[#B89A5E] px-8 py-3.5 text-xs font-semibold tracking-widest text-white transition hover:bg-[#9E8147]"
                >
                  ENQUIRE ABOUT SPACES
                </a>
                <a
                  href="/contact"
                  className="border border-white/60 px-8 py-3.5 text-xs font-semibold tracking-widest text-white transition hover:bg-[#B89A5E] hover:border-[#B89A5E]"
                >
                  CONTACT US
                </a>
              </div>
            </div>

            <div className="relative h-[500px] w-full">
              <Image
                src="/images/commercial-detail-Cxmrp8F8.jpg"
                alt="Commercial property"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
