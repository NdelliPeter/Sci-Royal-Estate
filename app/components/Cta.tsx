export default function Cta() {
  return (
    <section className="bg-[#121212] px-6 py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#C9A549]">
          WORK WITH US
        </p>
        <h2 className="mt-4 text-3xl font-bold text-[#E8E5E0] sm:text-4xl">
          Whether you are looking for a home or a partner — we would be
          delighted to meet you.
        </h2>
        <p className="mt-6 text-base text-[#8C8781]">
          Visit our residences, enquire about availability, or speak with
          our investment team about co-investment and advisory engagements.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact"
            className="inline-block bg-[#C9A549] px-8 py-3 text-sm font-semibold tracking-widest text-[#121212] transition hover:bg-[#b8943f]"
          >
            SCHEDULE A VISIT &rarr;
          </a>
          <a
            href="/contact"
            className="inline-block border border-[#E8E5E0] px-8 py-3 text-sm font-semibold tracking-widest text-[#E8E5E0] transition hover:bg-[#E8E5E0] hover:text-[#121212]"
          >
            INVESTOR ENQUIRIES
          </a>
        </div>
      </div>
    </section>
  );
}
