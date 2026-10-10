import Image from "next/image";

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Properties", href: "/#divisions" },
  { label: "Our Services", href: "/services/buy-sell" },
  { label: "Contact Us", href: "/contact" },
];

const PROPERTIES_LINKS = [
  { label: "Résidence L'écrin", href: "/residence-lecrin" },
  { label: "Residential Estates", href: "/residential-estates" },
  { label: "Gated Communities", href: "/gated-communities" },
  { label: "Commercial Properties", href: "/commercial" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1F2A2E] px-6 pt-16 pb-8 text-[#C8CCCF]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Image
            src="/images/logo-sci.png"
            alt="SCI Royal Estate"
            width={85}
            height={56}
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            A family-owned real estate investment and management company
            redefining luxury living in Cameroon.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#D4BC85]">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {COMPANY_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-[#B89A5E]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#D4BC85]">Properties</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {PROPERTIES_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-[#B89A5E]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#D4BC85]">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="mailto:fofeyin@sciroyalestates.com"
                className="hover:text-[#B89A5E]"
              >
                fofeyin@sciroyalestates.com
              </a>
            </li>
            <li>
              <a href="tel:+18702101317" className="hover:text-[#B89A5E]">
                +1 870 210-1317
              </a>
            </li>
            <li>Sales Office: Yaoundé, Cameroon</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-[#A8ADB0]">
        © 2026 SCI Royal Estate. All rights reserved. | Privacy Policy |
        Terms of Use
      </div>
    </footer>
  );
}
