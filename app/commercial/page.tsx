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
      <main className="bg-[#121212]">
        <PageHero
          eyebrow="PROPERTIES"
          title="Commercial"
          emphasis="Properties"
          subtitle="SCI Royal Estate develops and manages commercial real estate in Cameroon."
        />

        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#C9A549]">
                FEATURED PROPERTY
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#E8E5E0]">
                Douala Farmers Club{" "}
                <em className="italic text-[#C9A549]">Commercial Centre</em>
              </h2>
              <p className="mt-6 text-[#8C8781]">
                <span className="font-semibold text-[#E8E5E0]">
                  Location:
                </span>{" "}
                Bonamoussadi, Douala
              </p>
              <p className="mt-4 text-[#8C8781]">
                Commercial real estate comprising shops, offices, and
                warehouses.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {SPACE_TYPES.map((type) => (
                  <div
                    key={type}
                    className="rounded-sm border border-[#2E2E2E] p-4 text-center"
                  >
                    <span className="mx-auto mb-2 block h-1.5 w-1.5 rounded-full bg-[#C9A549]" />
                    <span className="text-sm text-[#E8E5E0]/80">{type}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="/contact"
                  className="bg-[#C9A549] px-8 py-3.5 text-xs font-semibold tracking-widest text-[#121212] transition hover:bg-[#b8943f]"
                >
                  ENQUIRE ABOUT SPACES
                </a>
                <a
                  href="/contact"
                  className="border border-[#C9A549] px-8 py-3.5 text-xs font-semibold tracking-widest text-[#C9A549] transition hover:bg-[#C9A549] hover:text-[#121212]"
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
