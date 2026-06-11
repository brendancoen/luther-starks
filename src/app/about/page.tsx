import Link from 'next/link';
import Image from 'next/image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Luther',
  description:
    'Learn about Luther Starks, VP of Acquiring and Banking-as-a-Service at Priority — a payments and fintech leader with a track record of building merchant acquiring and BaaS programs.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Luther | Luther Starks',
    description:
      'Payments and fintech leader specializing in merchant acquiring and Banking-as-a-Service at Priority.',
    url: '/about',
  },
};

const timeline = [
  {
    period: '2022 — Present',
    role: 'VP of Acquiring and BaaS',
    company: 'Priority',
    description: 'Leading strategic direction for acquiring and Banking-as-a-Service divisions. Architecting embedded finance solutions and driving platform growth across priority payment verticals.',
  },
  {
    period: '2015 — 2022',
    role: 'Director of Commercial Payments',
    company: 'First National Bank of Omaha',
    description: 'Drove 25% YoY growth in fee income and doubled portfolio size over three years. Led FNBO to become the 12th-largest ACH debit originator in the country and the 6th-largest payroll processor among peer banks.',
  },
];

const values = [
  { icon: '◈', title: 'Strategic Vision', desc: 'Long-range thinking that anticipates market shifts and positions organizations ahead of the curve.' },
  { icon: '◉', title: 'Execution Excellence', desc: 'Translating strategy into measurable results through disciplined operational focus and team leadership.' },
  { icon: '◐', title: 'Innovation Drive', desc: 'Continuously exploring emerging technologies and payment rails to unlock new value for partners and clients.' },
  { icon: '◑', title: 'Partnership Depth', desc: 'Building lasting relationships grounded in trust, mutual value creation, and shared success.' },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0A0E1A] min-h-screen pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#D4AF37]/4 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">About Luther</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#E8EAF0] leading-tight mb-6 max-w-3xl">
            Payments Leader.{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #D4AF37, #F0D060)' }}>
              Fintech Strategist.
            </span>
            <br />Business Builder.
          </h1>
          <p className="text-[#E8EAF0]/60 text-xl leading-relaxed max-w-2xl">
            Luther Starks is a recognized leader in payments, banking, and fintech with a proven track record of building high-growth businesses and driving innovation across the financial services ecosystem.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="aspect-[4/5] bg-[#0D1225] border border-[#D4AF37]/15 relative overflow-hidden">
                <Image
                  src="/luther-starks.jpg"
                  alt="Luther Starks, VP of Acquiring and BaaS at Priority"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/40" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/40" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/40" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/40" />
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-[#E8EAF0] mb-6">
                A Career Built on{' '}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #D4AF37, #F0D060)' }}>Results</span>
              </h2>
              <div className="space-y-4 text-[#E8EAF0]/60 leading-relaxed">
                <p>With over 15 years at the intersection of payments, banking, and financial technology, Luther Starks has built a reputation as a forward-thinking executive who consistently turns strategic vision into measurable business growth.</p>
                <p>Currently serving as VP of Acquiring and BaaS at Priority, Luther leads the strategic direction for the company&apos;s acquiring and Banking-as-a-Service divisions, architecting platforms that power next-generation embedded finance solutions for clients across multiple verticals.</p>
                <p>Prior to Priority, Luther served as Director of Commercial Payments at First National Bank of Omaha, where he drove consistent 25% year-over-year growth in fee income, doubled the portfolio size over three years, and positioned FNBO as the 12th-largest ACH debit originator in the country.</p>
                <p>Luther&apos;s expertise spans the full spectrum of payment and banking infrastructure — from acquiring and card processing to ACH, payroll, embedded finance, and BaaS platforms.</p>
              </div>
              <div className="mt-8 flex gap-4">
                <Link href="/case-studies" className="px-6 py-3 bg-[#D4AF37] text-[#0A0E1A] font-semibold text-sm tracking-wider uppercase hover:bg-[#F0D060] transition-colors duration-300">View Case Studies</Link>
                <Link href="/contact" className="px-6 py-3 border border-[#D4AF37]/40 text-[#D4AF37] font-semibold text-sm tracking-wider uppercase hover:border-[#D4AF37] transition-colors duration-300">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0D1225]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">Career Journey</span>
            </div>
            <h2 className="font-display text-4xl font-bold text-[#E8EAF0]">Professional Timeline</h2>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/40 via-[#D4AF37]/20 to-transparent ml-4 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className="md:pl-16 relative">
                  <div className="hidden md:flex absolute left-0 top-2 w-9 h-9 border border-[#D4AF37]/40 bg-[#0A0E1A] items-center justify-center">
                    <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
                  </div>
                  <div className="p-8 border border-[#D4AF37]/10 bg-[#0A0E1A]/60 hover:border-[#D4AF37]/25 transition-colors duration-300">
                    <div className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-2">{item.period}</div>
                    <h3 className="font-display text-2xl font-bold text-[#E8EAF0] mb-1">{item.role}</h3>
                    <div className="text-[#D4AF37]/70 text-sm font-medium mb-4">{item.company}</div>
                    <p className="text-[#E8EAF0]/60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">Core Principles</span>
            </div>
            <h2 className="font-display text-4xl font-bold text-[#E8EAF0]">What Drives Success</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 border border-[#D4AF37]/10 hover:border-[#D4AF37]/25 bg-[#0D1225]/60 transition-colors duration-300">
                <div className="text-[#D4AF37] text-2xl mb-4">{v.icon}</div>
                <h3 className="font-display text-lg font-bold text-[#E8EAF0] mb-3">{v.title}</h3>
                <p className="text-[#E8EAF0]/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
