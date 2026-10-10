import Image from "next/image";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="bg-[#FAF8F3] px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-widest text-[#9E8147]">
            Who We Are
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
            A family-owned group, built for the{" "}
            <em className="italic text-[#9E8147]">long term</em>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#3A3F42]">
            SCI Royal Estate is a privately-held investment and management
            company rooted in Cameroon. We develop, own and operate real
            estate assets across residential, hospitality and commercial
            categories — and we do so with the patience of owners, not the
            impatience of intermediaries.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#3A3F42]">
            Our flagship hospitality brand,{" "}
            <strong className="font-semibold text-[#1A1A1A]">
              Résidence L&apos;écrin
            </strong>
            , is recognised for delivering serviced living at an
            international standard. Behind it is a group of six companies
            spanning development, property management, construction,
            security and advisory services — each one built to serve our
            tenants, partners and capital.
          </p>
          <a
            href="/about"
            className="mt-8 inline-block rounded-sm border border-[#1F2A2E] px-8 py-3 text-sm font-semibold tracking-widest text-[#1F2A2E] transition hover:bg-[#1F2A2E] hover:text-white"
          >
            Read Our Story
          </a>
        </div>

        <div className="relative h-[500px] w-full">
          <Image
            src="/images/who-we-are-interior.jpg"
            alt="SCI Royal Estate interior"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
