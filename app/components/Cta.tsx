export default function Cta() {
  return (
    <section className="bg-[#1F2A2E] px-6 py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.22em] text-[#D4BC85]">
          WORK WITH US
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Whether you are looking for a home or a partner — we would be
          delighted to meet you.
        </h2>
        <p className="mt-6 text-base text-[#D4D8DA]">
          Visit our residences, enquire about availability, or speak with
          our investment team about co-investment and advisory engagements.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact"
            className="inline-block bg-[#B89A5E] px-8 py-3 text-sm font-semibold tracking-widest text-white transition hover:bg-[#9E8147]"
          >
            SCHEDULE A VISIT &rarr;
          </a>
          <a
            href="/contact"
            className="inline-block border border-white/60 px-8 py-3 text-sm font-semibold tracking-widest text-white transition hover:bg-[#B89A5E] hover:border-[#B89A5E]"
          >
            INVESTOR ENQUIRIES
          </a>
        </div>
      </div>
    </section>
  );
}
