"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const PROPERTIES_DROPDOWN = [
  { label: "Résidence L'écrin", href: "/residence-lecrin" },
  { label: "Residential Estates", href: "/residential-estates" },
  { label: "Gated Communities", href: "/gated-communities" },
  { label: "Commercial Properties", href: "/commercial" },
];

const SERVICES_DROPDOWN = [
  { label: "Development", href: "/services#development" },
  { label: "Property Management", href: "/services#management" },
  { label: "Hospitality Operations", href: "/services#hospitality" },
  { label: "Investment Advisory", href: "/services#advisory" },
];

const NAV_ITEMS: {
  label: string;
  href: string;
  dropdown: typeof PROPERTIES_DROPDOWN | null;
}[] = [
  { label: "HOME", href: "/", dropdown: null },
  { label: "ABOUT", href: "/about", dropdown: null },
  { label: "PROPERTIES", href: "/properties", dropdown: PROPERTIES_DROPDOWN },
  { label: "SERVICES", href: "/services", dropdown: SERVICES_DROPDOWN },
  { label: "CONTACT", href: "/contact", dropdown: null },
];

function ChevronDown() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-3 w-3"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null
  );
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href.split("#")[0]) && href !== "/#divisions";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2E2E2E] bg-[#121212]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-sci.png"
            alt="SCI Royal Estate"
            width={73}
            height={48}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 py-6 text-xs font-semibold tracking-widest transition hover:text-[#C9A549] ${
                    isActive(item.href) ? "text-[#C9A549]" : "text-[#E8E5E0]"
                  }`}
                >
                  {item.label}
                  <ChevronDown />
                </Link>

                <div className="invisible absolute left-0 top-full w-64 -translate-y-2 border border-[#2E2E2E] bg-[#1A1A1A] opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-5 py-3 text-xs font-semibold tracking-widest text-[#E8E5E0] transition hover:bg-[#242424] hover:text-[#C9A549]"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-1 text-xs font-semibold tracking-widest transition hover:text-[#C9A549] ${
                  isActive(item.href) ? "text-[#C9A549]" : "text-[#E8E5E0]"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-sm border border-[#C9A549] px-5 py-2.5 text-xs font-semibold tracking-widest text-[#C9A549] transition hover:bg-[#C9A549] hover:text-[#121212] lg:inline-block"
        >
          GET IN TOUCH
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-6 bg-[#E8E5E0]" />
          <span className="h-0.5 w-6 bg-[#E8E5E0]" />
          <span className="h-0.5 w-6 bg-[#E8E5E0]" />
        </button>
      </div>

      {open && (
        <div className="border-t border-[#2E2E2E] bg-[#121212] lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <div className="flex items-center justify-between py-2">
                    <Link
                      href={item.href}
                      className="text-sm font-semibold tracking-widest text-[#E8E5E0]"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      onClick={() =>
                        setOpenMobileSubmenu((v) =>
                          v === item.label ? null : item.label
                        )
                      }
                      className={`p-1 text-[#E8E5E0] transition-transform ${
                        openMobileSubmenu === item.label ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown />
                    </button>
                  </div>
                  {openMobileSubmenu === item.label && (
                    <div className="ml-4 flex flex-col border-l border-[#2E2E2E] pl-4">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="py-2 text-xs font-semibold tracking-widest text-[#8C8781] hover:text-[#C9A549]"
                          onClick={() => setOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="py-2 text-sm font-semibold tracking-widest text-[#E8E5E0]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="mt-2 rounded-sm border border-[#C9A549] px-5 py-2.5 text-center text-xs font-semibold tracking-widest text-[#C9A549]"
              onClick={() => setOpen(false)}
            >
              GET IN TOUCH
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
