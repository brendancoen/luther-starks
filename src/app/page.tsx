import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const stats = [
  { value: '25%', label: 'YoY Fee Income Growth' },
  { value: '2x', label: 'Portfolio Size in 3 Years' },
  { value: '#6', label: 'Payroll Processor Among Peers' },
];

const expertise = [
  'Acquiring',
  'Banking-as-a-Service',
  'Embedded Finance',
  'Commercial Payments',
  'Strategic Partnerships',
];

const previews = [
  {
    title: 'Acquiring & Processing',
    desc: 'Scaling merchant portfolios with disciplined risk, pricing, and processor strategy.',
  },
  {
    title: 'Banking-as-a-Service',
    desc: 'Building compliant, API-first rails that turn balance sheets into platforms.',
  },
  {
    title: 'Embedded Finance',
    desc: 'Weaving lending, payments, and accounts into the software people use every day.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0E1A] text-[#E8EAF0]">
      <Navigation />

      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.06),transparent_50%)]" />
        <div className="relative max-w-6xl mx-auto pt-32 pb-20 w-full">
          <p className="text-[#D4AF37] tracking-[0.3em] text-sm uppercase mb-8">
            Payments &middot; Banking &middot; Fintech
          </p>
          <h1 className="font-[Playfair_Display] text-5xl md:text-8xl font-bold leading-[1.05] max-w-4xl">
            Architecting the{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F0D060] to-[#B8941F] bg-clip-text text-transparent">
              Future of Finance
            </span>
          </h1>
          <p className="mt-10 text-lg md:text-xl text-[#A0A6B8] max-w-2xl leading-relaxed">
            Luther Starks is a recognized leader in payments, banking, and fintech—
            building high-growth businesses, forging strategic partnerships, and driving
            innovation across acquiring, BaaS, and embedded finance.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#D4AF37] via-[#F0D060] to-[#B8941F] text-[#0A0E1A] font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              Start a Conversation
            </a>
            <a
              href="/about"
              className="px-8 py-4 rounded-lg border border-[#1E2742] text-[#E8EAF0] font-medium hover:border-[#D4AF37]/50 transition-colors"
            >
              About Luther
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-8 rounded-2xl bg-[#0D1225] border border-[#1E2742] text-center"
            >
              <div className="font-[Playfair_Display] text-5xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F0D060] bg-clip-text text-transparent">
                {s.value}
              </div>
              <p className="mt-3 text-sm text-[#A0A6B8]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 border-y border-[#1E2742] bg-[#0D1225]/40">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {expertise.map((e) => (
            <span
              key={e}
              className="text-sm tracking-wide text-[#8088A0] uppercase"
            >
              {e}
            </span>
          ))}
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#D4AF37] tracking-[0.3em] text-sm uppercase mb-6">
              The Operator
            </p>
            <h2 className="font-[Playfair_Display] text-4xl md:text-5xl font-bold leading-tight mb-6">
              A proven track record of durable, profitable growth.
            </h2>
            <p className="text-[#A0A6B8] leading-relaxed mb-6">
              As VP of Acquiring and BaaS at Priority, and previously Director of
              Commercial Payments at First National Bank of Omaha, Luther has
              consistently turned strategy into measurable results—doubling portfolio
              size, expanding fee income, and elevating institutions to national rank.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F0D060] font-medium transition-colors"
            >
              Read the full story <span aria-hidden>&rarr;</span>
            </a>
          </div>
          <div className="p-8 rounded-2xl bg-[#0D1225] border border-[#1E2742]">
            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="text-[#D4AF37] font-[Playfair_Display] text-2xl">01</span>
                <p className="text-[#C8CCDA]">Led FNBO to the 12th-largest ACH debit originator nationally.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#D4AF37] font-[Playfair_Display] text-2xl">02</span>
                <p className="text-[#C8CCDA]">Drove 25% year-over-year growth in fee income.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#D4AF37] font-[Playfair_Display] text-2xl">03</span>
                <p className="text-[#C8CCDA]">Doubled portfolio size within three years.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2 className="font-[Playfair_Display] text-4xl md:text-5xl font-bold">
              Where I create leverage
            </h2>
            <a
              href="/specialties"
              className="text-[#D4AF37] hover:text-[#F0D060] font-medium transition-colors"
            >
              View all specialties &rarr;
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {previews.map((p) => (
              <div
                key={p.title}
                className="p-8 rounded-2xl bg-[#0D1225] border border-[#1E2742] hover:border-[#D4AF37]/40 transition-colors"
              >
                <h3 className="font-[Playfair_Display] text-2xl font-bold mb-4">{p.title}</h3>
                <p className="text-[#A0A6B8] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto text-center p-14 rounded-3xl bg-gradient-to-br from-[#141B30] to-[#0A0E1A] border border-[#1E2742]">
          <h2 className="font-[Playfair_Display] text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s build what&apos;s next.
          </h2>
          <p className="text-[#A0A6B8] mb-10 max-w-xl mx-auto leading-relaxed">
            Whether it&apos;s a partnership, an advisory role, or a bold new venture in
            embedded finance—the best conversations start here.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg bg-gradient-to-r from-[#D4AF37] via-[#F0D060] to-[#B8941F] text-[#0A0E1A] font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
