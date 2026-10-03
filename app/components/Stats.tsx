const STATS = [
  { number: "14+", label: "Luxury Apartments" },
  { number: "3", label: "Cities in Cameroon" },
  { number: "100+", label: "Planned Homes" },
  { number: "6", label: "Business Divisions" },
];

export default function Stats() {
  return (
    <section className="bg-[#121212] px-6 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 text-center sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl font-semibold text-[#C9A549] sm:text-5xl">
              {stat.number}
            </p>
            <p className="mt-2 text-xs font-semibold tracking-widest text-[#8C8781] uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
