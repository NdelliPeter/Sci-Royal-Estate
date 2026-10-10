import Image from "next/image";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import OurGroup from "../components/OurGroup";

export const metadata: Metadata = {
  title: "About | SCI Royal Estate",
  description:
    "A family-owned real estate investment and management company building Cameroon's future.",
};

const CORE_VALUES = [
  {
    title: "Customer Service",
    description:
      "Our customers come first and we go above and beyond to ensure that all of our customers have the best of experiences when dealing with SCI Royal Estate and its subsidiaries.",
  },
  {
    title: "Respect",
    description:
      "Mutual respect is key in all of our business interactions. We maintain a respectful work environment where employees and partners at all levels are treated with the utmost respect.",
  },
  {
    title: "Ethical Integrity",
    description:
      "Our company will always strive to do the right thing; to be honest and fair in all of our dealings with customers, vendors, employees, and the public.",
  },
  {
    title: "Smart Work",
    description:
      "We work hard and smart; always looking for the most efficient way to achieve the best work-quality output while striving for a fun and happy work environment.",
  },
];

const TIMELINE = [
  {
    year: "2005",
    title: "The holding is founded",
    description:
      "SCI Royal Estate SA is incorporated as a family investment vehicle, with its first residential asset in Douala.",
  },
  {
    year: "2010",
    title: "Expansion into Yaoundé",
    description:
      "First properties acquired in Mfandena, Yaoundé — extending the portfolio beyond Douala.",
  },
  {
    year: "2014",
    title: "In-house construction",
    description:
      "SCI Construction is founded to deliver projects directly, controlling quality and timelines end-to-end.",
  },
  {
    year: "2018",
    title: "Résidence L'écrin opens",
    description:
      "Our flagship hospitality asset opens in Bonamoussadi, marking the group's entry into serviced living.",
  },
  {
    year: "2022",
    title: "Villa Mfandena delivered",
    description:
      "A 12-villa private residential development is delivered, reinforcing our design-led residential footprint.",
  },
  {
    year: "2025",
    title: "Advisory practice launched",
    description:
      "SCI Advisory is established to share two decades of operating experience with institutional investors entering Central Africa.",
  },
];

const LEADERSHIP = [
  {
    role: "Founder · Chair",
    name: "[Founder Name]",
    description:
      "Leads the group's long-term strategy and capital stewardship. Has guided the holding since its founding in 2005.",
    image: null,
  },
  {
    role: "Managing Director",
    name: "Fofeyin Bonito Fai-Yengo",
    description:
      "Oversees day-to-day operations across all six operating companies and leads group-wide performance reporting.",
    image: "/images/fofeyin-bonito.jpeg",
  },
  {
    role: "Head of Hospitality",
    name: "[Head Name]",
    description:
      "Leads Résidence L'écrin and hospitality operations, setting service standards across all residences.",
    image: null,
  },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-sm font-semibold tracking-widest text-[#9E8147]">
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="OUR STORY"
          title="Built by a family,"
          emphasis="stewarded for generations."
          subtitle="We are a privately-held Cameroonian group of six companies — patient owners of residential, hospitality and commercial real estate, and partners to those who want to invest alongside us."
        />

        <section className="mx-auto max-w-6xl bg-[#FAF8F3] px-6 py-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>OUR ORIGIN</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
                A quiet beginning in{" "}
                <span className="text-[#9E8147]">Douala, 2005.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#3A3F42]">
                SCI Royal Estate was founded as a single-asset family
                holding — a way to bring discipline and professional
                management to a portfolio that had grown by the decade, not
                by the quarter.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#3A3F42]">
                Twenty years on, the holding has become a group of six
                operating companies, each built around a discipline we
                first learned by running our own properties. We develop, we
                own, we manage — and we only extend our services to third
                parties once they have been proven on our own assets.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#3A3F42]">
                Our approach is rooted in three commitments that have not
                changed since day one:{" "}
                <strong className="font-semibold text-[#1A1A1A]">
                  own the long term
                </strong>
                ,{" "}
                <strong className="font-semibold text-[#1A1A1A]">
                  serve the tenant
                </strong>
                , and{" "}
                <strong className="font-semibold text-[#1A1A1A]">
                  respect the capital
                </strong>
                .
              </p>
            </div>
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/our-origin.jpg"
                alt="SCI Royal Estate — Douala"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#FAF8F3] px-6 py-20">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-2">
            <div>
              <Eyebrow>OUR MISSION</Eyebrow>
              <h3 className="mt-3 text-2xl font-bold text-[#1A1A1A]">
                Driving <span className="text-[#9E8147]">Innovation</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#3A3F42]">
                SCI Royal Estate is a real estate management company that
                exists to provide innovative solutions to the problems that
                exist in the entire real estate vertical in Cameroon.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#3A3F42]">
                We intend to be the leaders in building and operating luxury
                residential apartments, furnished apartments, commercial
                property, and in developing residential estates with homes
                and apartments for sale. We also provide real estate
                advisory services and IT-related services to the real-estate
                and hospitality sector in Cameroon and Africa.
              </p>
            </div>
            <div>
              <Eyebrow>OUR VISION</Eyebrow>
              <h3 className="mt-3 text-2xl font-bold text-[#1A1A1A]">
                Market <span className="text-[#9E8147]">Leadership</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#3A3F42]">
                In the next few years, we hope for SCI Royal Estate and its
                luxury brand, Résidence L&apos;écrin, to become market
                leaders in the real estate industry in Cameroon.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#3A3F42]">
                We intend to build and operate multiple high-end residential
                and furnished apartment complexes in Yaoundé and Douala, as
                well as be a leader in real-estate and hospitality IT
                services in Cameroon and Africa.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#FAF8F3] px-6 py-20 text-center">
          <div className="mx-auto max-w-5xl">
            <Eyebrow>WHAT DRIVES US</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
              Core <span className="text-[#9E8147]">Values</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
              {CORE_VALUES.map((value) => (
                <div
                  key={value.title}
                  className="rounded-sm border border-[#E3DDD1] bg-white p-8 transition-colors hover:border-[#B89A5E]/50"
                >
                  <h4 className="text-lg font-semibold text-[#1A1A1A]">
                    {value.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-[#3A3F42]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FAF8F3] px-6 py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>OUR JOURNEY</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
                Two decades, one trajectory.
              </h2>
              <div className="mt-4 h-px w-16 bg-[#9E8147]" />
              <p className="mt-6 text-base leading-relaxed text-[#3A3F42]">
                A brief look at how the group came to be, and the
                milestones that shaped the way we operate today.
              </p>
            </div>

            <div className="space-y-8 border-l border-[#E3DDD1] pl-8">
              {TIMELINE.map((item) => (
                <div key={item.year}>
                  <p className="text-sm font-semibold tracking-widest text-[#9E8147]">
                    {item.year}
                  </p>
                  <h4 className="mt-1 text-lg font-semibold text-[#1A1A1A]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-[#3A3F42]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F3EC] px-6 py-20 text-center">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>LEADERSHIP</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
              The people who steward the group.
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-[#9E8147]" />

            <div className="mt-12 grid grid-cols-1 gap-8 text-left sm:grid-cols-3">
              {LEADERSHIP.map((leader) => (
                <div key={leader.role}>
                  <div className="relative flex aspect-square w-full items-center justify-center border border-[#E3DDD1] bg-[#EFEBE2]">
                    {leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover object-top"
                      />
                    ) : (
                      <span className="text-xs font-semibold tracking-widest text-[#9E8147]">
                        PHOTO PENDING
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-xs font-semibold tracking-widest text-[#9E8147]">
                    {leader.role}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[#1A1A1A]">
                    {leader.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3A3F42]">
                    {leader.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <OurGroup />

        <section className="bg-[#1F2A2E] px-6 py-20 text-center">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#D4BC85]">
              CAREERS
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Join a group built for the long term.
            </h2>
            <p className="mt-6 text-base text-[#D4D8DA]">
              We recruit slowly and we train thoroughly. If you share our
              commitment to quality, patience and service, we would be
              glad to hear from you.
            </p>
            <a
              href="/contact#careers"
              className="mt-8 inline-block bg-[#B89A5E] px-8 py-3 text-sm font-semibold tracking-widest text-white transition hover:bg-[#9E8147]"
            >
              EXPLORE OPPORTUNITIES &rarr;
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
