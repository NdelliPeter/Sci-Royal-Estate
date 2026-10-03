import Image from "next/image";
import Link from "next/link";

const DIVISIONS = [
  {
    title: "Résidence L'écrin",
    image: "/images/rooftop-dining-SaFFU08E.jpg",
    description:
      "Our flagship hospitality brand. Mixed-use luxury buildings featuring furnished apartment hotels, rooftop dining, fitness centres, and retail spaces.",
    cta: "Discover L'écrin",
    href: "/residence-lecrin",
  },
  {
    title: "Residential Estates",
    image: "/images/residential-community-9SypZa_v.jpg",
    description:
      "Master-planned suburban housing estates designed for Cameroon's growing middle class and the Cameroonian diaspora.",
    cta: "View Projects",
    href: "/residential-estates",
  },
  {
    title: "Gated Communities",
    image: "/images/gated-community-D1u0IFn9.jpg",
    description:
      "Exclusive, secure residential developments with controlled access, 24/7 security, premium homes, and resort-style amenities.",
    cta: "Discover Gated Living",
    href: "/gated-communities",
  },
  {
    title: "Commercial Properties",
    image: "/images/commercial-building-DfgLYVbp.jpg",
    description:
      "Retail outlets, office spaces, and warehouse facilities in prime locations across Yaoundé and Douala.",
    cta: "See Spaces",
    href: "/commercial",
  },
  {
    title: "Architecture & Construction",
    image: "/images/architecture-services-BlxEOs2s.jpg",
    description:
      "Complete architectural design and construction services — from concept sketches to turnkey project delivery.",
    cta: "Our Building Services",
    href: "/services/architecture",
  },
  {
    title: "Buy, Sell & Invest",
    image: "/images/buy-sell-DqjfAtqn.jpg",
    description:
      "Whether buying your first home, selling property, or exploring Golden Visa opportunities — our sales office guides you.",
    cta: "Our Services",
    href: "/services/buy-sell",
  },
];

export default function Divisions() {
  return (
    <section id="divisions" className="bg-[#121212] px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#C9A549]">
          What We Do
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#E8E5E0] sm:text-4xl">
          Our <em className="italic text-[#C9A549]">Divisions</em>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
          {DIVISIONS.map((division) => (
            <Link
              key={division.title}
              href={division.href}
              className="group relative block h-[420px] overflow-hidden"
            >
              <Image
                src={division.image}
                alt={division.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white">
                  {division.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-200">
                  {division.description}
                </p>
                <span className="mt-3 inline-block text-xs font-semibold tracking-widest text-[#C9A549] group-hover:underline">
                  {division.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
