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
      <div className="border border-[#2E2E2E] p-8 text-center">
        <p className="text-lg font-semibold text-[#E8E5E0]">
          Thank you — your message has been sent.
        </p>
        <p className="mt-2 text-sm text-[#8C8781]">
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
          <label className="mb-2 block text-xs font-semibold tracking-widest text-[#8C8781]">
            FULL NAME
          </label>
          <input
            type="text"
            required
            className="w-full border-b border-[#2E2E2E] bg-transparent py-3 text-[#E8E5E0] outline-none transition-colors focus:border-[#C9A549]"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold tracking-widest text-[#8C8781]">
            EMAIL ADDRESS
          </label>
          <input
            type="email"
            required
            className="w-full border-b border-[#2E2E2E] bg-transparent py-3 text-[#E8E5E0] outline-none transition-colors focus:border-[#C9A549]"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold tracking-widest text-[#8C8781]">
          PHONE NUMBER
        </label>
        <input
          type="tel"
          className="w-full border-b border-[#2E2E2E] bg-transparent py-3 text-[#E8E5E0] outline-none transition-colors focus:border-[#C9A549]"
        />
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold tracking-widest text-[#8C8781]">
          SUBJECT
        </label>
        <select
          required
          defaultValue=""
          className="w-full border-b border-[#2E2E2E] bg-transparent py-3 text-[#E8E5E0] outline-none transition-colors focus:border-[#C9A549]"
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
        <label className="mb-2 block text-xs font-semibold tracking-widest text-[#8C8781]">
          YOUR MESSAGE
        </label>
        <textarea
          required
          rows={4}
          className="w-full resize-none border-b border-[#2E2E2E] bg-transparent py-3 text-[#E8E5E0] outline-none transition-colors focus:border-[#C9A549]"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-[#C9A549] px-10 py-4 text-xs font-semibold tracking-widest text-[#121212] transition hover:bg-[#b8943f]"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}
