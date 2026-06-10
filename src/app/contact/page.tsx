'use client';

import { useState } from 'react';
import Image from 'next/image';

const contactReasons = [
  'Strategic Partnership Opportunity',
  'Speaking Engagement',
  'Advisory or Board Role',
  'Media or Press Inquiry',
  'General Inquiry',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    reason: contactReasons[0],
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0A0E1A] text-[#E8EAF0]">
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-[#D4AF37] tracking-[0.3em] text-sm uppercase mb-6">
            Let&apos;s Connect
          </p>
          <h1 className="font-[Playfair_Display] text-5xl md:text-7xl font-bold leading-tight">
            Start a{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F0D060] to-[#B8941F] bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>
          <p className="mt-8 text-lg text-[#A0A6B8] max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re exploring a strategic partnership, seeking advisory
            expertise, or building the next chapter in payments and embedded finance,
            I welcome the conversation.
          </p>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl">
          <div className="relative aspect-[16/9]">
            <Image
              src="/luther-starks-contact.jpg"
              alt="Luther Starks"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/70 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="p-8 rounded-2xl bg-[#0D1225] border border-[#1E2742]">
              <h3 className="font-[Playfair_Display] text-2xl font-bold mb-4">
                Direct Channels
              </h3>
              <p className="text-[#A0A6B8] leading-relaxed mb-6">
                For partnership and advisory inquiries, the fastest path is a direct
                note. I personally review every message.
              </p>
              <a
                href="https://www.linkedin.com/in/luther-starks-64723223/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[#D4AF37] hover:text-[#F0D060] transition-colors font-medium"
              >
                Connect on LinkedIn
                <span aria-hidden>&rarr;</span>
              </a>
            </div>
            <div className="p-8 rounded-2xl bg-[#0D1225] border border-[#1E2742]">
              <h3 className="font-[Playfair_Display] text-2xl font-bold mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 text-[#A0A6B8]">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">01</span>
                  A personal response within two business days.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">02</span>
                  A focused discovery conversation aligned to your goals.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">03</span>
                  Clear, actionable next steps&mdash;no obligation.
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="p-12 rounded-2xl bg-[#0D1225] border border-[#D4AF37]/40 text-center">
                <div className="text-[#D4AF37] text-5xl mb-6">&#10003;</div>
                <h3 className="font-[Playfair_Display] text-3xl font-bold mb-4">
                  Message Received
                </h3>
                <p className="text-[#A0A6B8] leading-relaxed">
                  Thank you, {form.name || 'there'}. Your message has been noted and
                  I&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 md:p-10 rounded-2xl bg-[#0D1225] border border-[#1E2742] space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#A0A6B8] mb-2">Name</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0A0E1A] border border-[#1E2742] focus:border-[#D4AF37] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#A0A6B8] mb-2">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0A0E1A] border border-[#1E2742] focus:border-[#D4AF37] outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#A0A6B8] mb-2">Company</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0E1A] border border-[#1E2742] focus:border-[#D4AF37] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#A0A6B8] mb-2">
                    Reason for Reaching Out
                  </label>
                  <select
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0E1A] border border-[#1E2742] focus:border-[#D4AF37] outline-none transition-colors"
                  >
                    {contactReasons.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[#A0A6B8] mb-2">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0E1A] border border-[#1E2742] focus:border-[#D4AF37] outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-[#D4AF37] via-[#F0D060] to-[#B8941F] text-[#0A0E1A] font-semibold tracking-wide hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
