import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[720px] items-center justify-center overflow-hidden pt-20"
    >
      <Image
        src="/images/hero-building-lGRM6le2.jpg"
        alt="SCI Royal Estate luxury development"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Luxury Real Estate{" "}
          <span className="text-[#D4BC85]">Development</span> in Cameroon
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-100 sm:text-lg">
          SCI Royal Estate is a real estate investment and management
          company. We develop luxury residential apartments, furnished
          apartment hotels, commercial properties, residential estates, and
          gated communities in Cameroon.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#divisions"
            className="rounded-sm bg-[#B89A5E] px-8 py-3 text-sm font-semibold tracking-widest text-white transition hover:bg-[#9E8147]"
          >
            EXPLORE PROPERTIES
          </a>
          <a
            href="/about"
            className="rounded-sm border border-white/60 px-8 py-3 text-sm font-semibold tracking-widest text-white transition hover:border-[#B89A5E] hover:bg-[#B89A5E]"
          >
            OUR STORY
          </a>
        </div>
      </div>

      <a
        href="#welcome"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs font-semibold tracking-[0.3em] text-white/80"
      >
        SCROLL
      </a>
    </section>
  );
}
