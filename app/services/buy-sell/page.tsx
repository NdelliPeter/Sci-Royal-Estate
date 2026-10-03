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
      <main className="bg-[#121212]">
        <PageHero
          eyebrow="SERVICES"
          title="Buy & Sell"
          emphasis="Property"
          subtitle="Our sales office in Yaoundé assists clients to buy and sell property in Cameroon and abroad."
        />

        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-[#E8E5E0]">
                Buy <em className="italic text-[#C9A549]">Property</em>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#8C8781]">
                We assist clients to buy property in Cameroon — homes,
                apartments, and land. We also assist clients to buy property
                in foreign jurisdictions and markets for investment or
                immigration purposes (Golden Visa). Purchases can be our own
                property or property sourced for our managed clients.
              </p>
              <p className="mt-4 flex items-center gap-3 text-sm text-[#E8E5E0]/80">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A549]" />
                Golden Visa opportunities available
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E8E5E0]">
                Sell <em className="italic text-[#C9A549]">Property</em>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#8C8781]">
                We assist clients to sell property in Cameroon. Our sales
                office in Yaoundé handles the process from listing to
                closing.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="bg-[#C9A549] px-8 py-3.5 text-xs font-semibold tracking-widest text-[#121212] transition hover:bg-[#b8943f]"
            >
              VISIT OUR SALES OFFICE
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
