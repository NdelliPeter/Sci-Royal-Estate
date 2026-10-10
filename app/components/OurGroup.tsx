const COMPANIES = [
  {
    mark: "L",
    name: "Résidence L'écrin",
    role: "Hospitality",
    description: "Our flagship serviced-residence brand.",
  },
  {
    mark: "D",
    name: "SCI Développement",
    role: "Development",
    description: "Land acquisition, design and project delivery.",
  },
  {
    mark: "C",
    name: "SCI Construction",
    role: "Construction",
    description: "General contracting and finishing works.",
  },
  {
    mark: "G",
    name: "SCI Gestion",
    role: "Property Management",
    description: "Facilities, leasing and tenant services.",
  },
  {
    mark: "S",
    name: "SCI Sécurité",
    role: "Security",
    description: "24/7 residential and commercial security.",
  },
  {
    mark: "A",
    name: "SCI Advisory",
    role: "Investment Advisory",
    description: "Real-estate counsel for private investors.",
  },
];

export default function OurGroup() {
  return (
    <section className="bg-[#F7F3EC] px-6 py-24 text-center">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#9E8147]">
          OUR GROUP
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
          Six companies, one vision.
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-[#9E8147]" />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#3A3F42]">
          Each subsidiary is led independently, with a clear mandate — and
          each contributes to a single portfolio of assets held for the
          long term.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {COMPANIES.map((company) => (
            <div
              key={company.name}
              className="border border-[#E3DDD1] bg-white p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center border border-[#9E8147] text-sm font-semibold text-[#9E8147]">
                {company.mark}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">
                {company.name}
              </h3>
              <p className="mt-1 text-xs font-semibold tracking-widest text-[#9E8147]">
                {company.role.toUpperCase()}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#3A3F42]">
                {company.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
