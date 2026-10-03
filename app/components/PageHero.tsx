import Image from "next/image";
import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  emphasis,
  subtitle,
  image = "/images/hero-building-lGRM6le2.jpg",
}: {
  eyebrow: string;
  title: string;
  emphasis: string;
  subtitle: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative flex h-[60vh] min-h-[400px] items-center justify-center overflow-hidden pt-16">
      <Image src={image} alt={title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm font-semibold tracking-widest text-[#C9A549]">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
          {title} <span className="text-[#C9A549]">{emphasis}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-neutral-100">{subtitle}</p>
      </div>
    </section>
  );
}
