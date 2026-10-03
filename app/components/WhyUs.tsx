import Image from "next/image";

const SERVICES = [
  {
    num: "01",
    title: "Development",
    description:
      "Acquiring land, designing and delivering residential & hospitality assets.",
  },
  {
    num: "02",
    title: "Property Management",
    description:
      "Leasing, tenant relations, maintenance and financial stewardship of owned & third-party properties.",
  },
  {
    num: "03",
    title: "Hospitality Operations",
    description:
      "Operating serviced residences and suites to an international standard.",
  },
  {
    num: "04",
    title: "Investment Advisory",
    description:
      "Counsel for institutional and private investors on Central African real estate.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#FAF8F3] px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[3/4] w-full lg:order-1">
          <Image
            src="/images/what-we-do-services.jpg"
            alt="SCI Royal Estate services"
            fill
            className="object-cover"
          />
        </div>

        <div className="lg:order-2">
          <p className="text-sm font-semibold tracking-widest text-[#9E8147]">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
            Six disciplines, under one roof.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#3A3F42]">
            Because we own what we build and manage what we own, every
            service our group offers is tested daily on our own assets
            before we extend it to third-party clients.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <div
                key={service.num}
                className="flex flex-col gap-3 border border-[#E3DDD1] bg-white p-6 transition-colors hover:border-[#B89A5E] hover:bg-[#FAF8F3]"
              >
                <span className="text-2xl font-normal text-[#B89A5E]">
                  {service.num}
                </span>
                <h3 className="text-xl font-semibold text-[#1F2A2E]">
                  {service.title}
                </h3>
                <p className="text-sm text-[#3A3F42]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/services"
            className="mt-6 inline-block text-sm font-semibold text-[#1F2A2E] transition hover:text-[#9E8147]"
          >
            All services &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
