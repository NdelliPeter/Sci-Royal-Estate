type CtaButton = {
  label: string;
  href: string;
  external?: boolean;
  variant?: "filled" | "outline";
};

export default function CtaSection({
  title,
  emphasis,
  subtitle,
  buttons,
}: {
  title: string;
  emphasis: string;
  subtitle: string;
  buttons: CtaButton[];
}) {
  return (
    <section className="bg-[#1F2A2E] px-6 py-24 text-center">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {title} <em className="italic text-[#D4BC85]">{emphasis}</em>
        </h2>
        <p className="mt-4 text-[#D4D8DA]">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target={btn.external ? "_blank" : undefined}
              rel={btn.external ? "noopener noreferrer" : undefined}
              className={
                btn.variant === "outline"
                  ? "border border-white/60 px-8 py-3.5 text-xs font-semibold tracking-widest text-white transition hover:bg-[#B89A5E] hover:border-[#B89A5E]"
                  : "bg-[#B89A5E] px-8 py-3.5 text-xs font-semibold tracking-widest text-white transition hover:bg-[#9E8147]"
              }
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
