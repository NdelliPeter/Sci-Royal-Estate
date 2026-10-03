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
    <section className="bg-[#121212] px-6 py-24 text-center">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-[#E8E5E0] sm:text-4xl">
          {title} <em className="italic text-[#C9A549]">{emphasis}</em>
        </h2>
        <p className="mt-4 text-[#8C8781]">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target={btn.external ? "_blank" : undefined}
              rel={btn.external ? "noopener noreferrer" : undefined}
              className={
                btn.variant === "outline"
                  ? "border border-[#2E2E2E] px-8 py-3.5 text-xs font-semibold tracking-widest text-[#E8E5E0] transition hover:border-[#C9A549] hover:text-[#C9A549]"
                  : "bg-[#C9A549] px-8 py-3.5 text-xs font-semibold tracking-widest text-[#121212] transition hover:bg-[#b8943f]"
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
