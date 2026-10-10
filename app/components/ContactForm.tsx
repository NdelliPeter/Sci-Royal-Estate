"use client";

import { useState } from "react";

const SUBJECTS = [
  "General Enquiry",
  "Property Purchase",
  "Property Rental",
  "Selling Property",
  "Commercial Lease",
  "Architectural & Construction",
  "Technology Solutions",
  "Other",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-[#E3DDD1] p-8 text-center">
        <p className="text-lg font-semibold text-[#1A1A1A]">
          Thank you — your message has been sent.
        </p>
        <p className="mt-2 text-sm text-[#6E7478]">
          Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-semibold tracking-widest text-[#6E7478]">
            FULL NAME
          </label>
          <input
            type="text"
            required
            className="w-full border-b border-[#E3DDD1] bg-transparent py-3 text-[#1A1A1A] outline-none transition-colors focus:border-[#B89A5E]"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold tracking-widest text-[#6E7478]">
            EMAIL ADDRESS
          </label>
          <input
            type="email"
            required
            className="w-full border-b border-[#E3DDD1] bg-transparent py-3 text-[#1A1A1A] outline-none transition-colors focus:border-[#B89A5E]"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold tracking-widest text-[#6E7478]">
          PHONE NUMBER
        </label>
        <input
          type="tel"
          className="w-full border-b border-[#E3DDD1] bg-transparent py-3 text-[#1A1A1A] outline-none transition-colors focus:border-[#B89A5E]"
        />
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold tracking-widest text-[#6E7478]">
          SUBJECT
        </label>
        <select
          required
          defaultValue=""
          className="w-full border-b border-[#E3DDD1] bg-transparent py-3 text-[#1A1A1A] outline-none transition-colors focus:border-[#B89A5E]"
        >
          <option value="" disabled>
            Select a subject...
          </option>
          {SUBJECTS.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold tracking-widest text-[#6E7478]">
          YOUR MESSAGE
        </label>
        <textarea
          required
          rows={4}
          className="w-full resize-none border-b border-[#E3DDD1] bg-transparent py-3 text-[#1A1A1A] outline-none transition-colors focus:border-[#B89A5E]"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-[#B89A5E] px-10 py-4 text-xs font-semibold tracking-widest text-white transition hover:bg-[#9E8147]"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}
