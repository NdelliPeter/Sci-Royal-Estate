import Image from "next/image";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaSection from "../components/CtaSection";

export const metadata: Metadata = {
  title: "Residential Estates | SCI Royal Estate",
  description:
    "Master-planned suburban housing estates for the middle class in Cameroon and the Cameroonian diaspora.",
};

const AMENITIES = [
  "Green park with gardens",
  "Children's playground",
  "Sports court",
  "Swimming pool",
];

export default function ResidentialEstatesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#1F2A2E]">
        <PageHero
          eyebrow="PROPERTIES"
          title="Residential"
          emphasis="Estates"
          subtitle="Master-planned suburban housing estates for the middle class in Cameroon and the Cameroonian diaspora."
        />

        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#D4BC85]">
                ABOUT THE PROJECT
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Community <em className="italic text-[#D4BC85]">Living</em>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#D4D8DA]">
                SCI Royal Estate develops master-planned suburban housing
                estates. Homes are moderately priced and targeted at the
                middle class in Cameroon as well as the Cameroonian
                diaspora. Each community will have 100+ homes and include
                premium amenities.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#D4D8DA]">
                <span className="font-semibold text-white">
                  Target Location:
                </span>{" "}
                Mbankomo, Yaoundé — on the outskirts of Yaoundé on the main
                highway leading from Douala, about 32 km from the city
                centre.
              </p>

              <p className="mt-10 text-xs font-semibold tracking-[0.3em] text-[#D4BC85]">
                AMENITIES
              </p>
              <h3 className="mt-3 text-2xl font-bold text-white">
                Community <em className="italic text-[#D4BC85]">Amenities</em>
              </h3>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {AMENITIES.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B89A5E]" />
                    <span className="text-sm text-[#D4D8DA]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] w-full">
              <Image
                src="/images/residential-estate-detail-Cevu23go.jpg"
                alt="Residential estate community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <CtaSection
          title="Interested in a"
          emphasis="Home?"
          subtitle="Register your interest or contact our sales office."
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
