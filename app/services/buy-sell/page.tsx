import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Buy & Sell Property | SCI Royal Estate",
  description:
    "Our sales office in Yaoundé assists clients to buy and sell property in Cameroon and abroad.",
};

export default function BuySellPage() {
  return (
    <>
      <Header />
      <main className="bg-[#1F2A2E]">
        <PageHero
          eyebrow="SERVICES"
          title="Buy & Sell"
          emphasis="Property"
          subtitle="Our sales office in Yaoundé assists clients to buy and sell property in Cameroon and abroad."
        />

        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Buy <em className="italic text-[#D4BC85]">Property</em>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#D4D8DA]">
                We assist clients to buy property in Cameroon — homes,
                apartments, and land. We also assist clients to buy property
                in foreign jurisdictions and markets for investment or
                immigration purposes (Golden Visa). Purchases can be our own
                property or property sourced for our managed clients.
              </p>
              <p className="mt-4 flex items-center gap-3 text-sm text-[#D4D8DA]/80">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B89A5E]" />
                Golden Visa opportunities available
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">
                Sell <em className="italic text-[#D4BC85]">Property</em>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#D4D8DA]">
                We assist clients to sell property in Cameroon. Our sales
                office in Yaoundé handles the process from listing to
                closing.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="bg-[#B89A5E] px-8 py-3.5 text-xs font-semibold tracking-widest text-white transition hover:bg-[#9E8147]"
            >
              VISIT OUR SALES OFFICE
            </a>
            <a
              href="/contact"
              className="border border-white/60 px-8 py-3.5 text-xs font-semibold tracking-widest text-white transition hover:bg-[#B89A5E] hover:border-[#B89A5E]"
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
