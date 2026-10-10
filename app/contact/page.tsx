import Image from "next/image";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Contact | SCI Royal Estate",
  description:
    "Whether you're interested in our properties, need advisory, or want to commission a building project — our team is ready to help.",
};

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="CONTACT US"
          title="Get in"
          emphasis="Touch"
          subtitle="Whether you're interested in our properties, need advisory, or want to commission a building project — our team is ready to help."
        />

        <section className="mx-auto max-w-6xl bg-[#FAF8F3] px-6 py-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold tracking-widest text-[#9E8147]">
                CONTACT DETAILS
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A]">
                We&apos;d Love to Hear From You
              </h2>
              <div className="mt-4 h-px w-16 bg-[#9E8147]" />

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#E3DDD1] text-[#9E8147]">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold tracking-widest text-[#6E7478]">
                      EMAIL
                    </p>
                    <a
                      href="mailto:fofeyin@sciroyalestates.com"
                      className="text-sm text-[#1A1A1A] hover:text-[#9E8147]"
                    >
                      fofeyin@sciroyalestates.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#E3DDD1] text-[#9E8147]">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold tracking-widest text-[#6E7478]">
                      PHONE
                    </p>
                    <a
                      href="tel:+18702101317"
                      className="text-sm text-[#1A1A1A] hover:text-[#9E8147]"
                    >
                      +1 870 210-1317
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 border border-white/10 bg-[#2D3A3F] p-6">
                <p className="mb-2 text-xs font-semibold tracking-widest text-[#D4BC85]">
                  MANAGING DIRECTOR
                </p>
                <p className="text-lg font-semibold text-white">
                  Fofeyin Bonito Fai-Yengo
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </section>

        <section id="careers" className="bg-[#FAF8F3] px-6 py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-widest text-[#9E8147]">
                CAREERS
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
                We recruit slowly, and we train thoroughly.
              </h2>
              <div className="mt-4 h-px w-16 bg-[#9E8147]" />
              <p className="mt-6 text-base leading-relaxed text-[#3A3F42]">
                The group is always interested in speaking with talented
                people — construction professionals, property managers,
                hospitality leaders, accountants, and graduates starting
                their careers.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#3A3F42]">
                Send your CV and a short note about where you see yourself
                contributing to{" "}
                <a
                  href="mailto:careers@sciroyalestate.com"
                  className="font-semibold text-[#1A1A1A] hover:text-[#9E8147]"
                >
                  careers@sciroyalestate.com
                </a>
                .
              </p>
              <a
                href="mailto:careers@sciroyalestate.com"
                className="mt-6 inline-block border border-[#1F2A2E] px-8 py-3 text-sm font-semibold tracking-widest text-[#1F2A2E] transition hover:bg-[#1F2A2E] hover:text-white"
              >
                SEND US YOUR CV &rarr;
              </a>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/careers.jpg"
                alt="Careers at SCI Royal Estate"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
