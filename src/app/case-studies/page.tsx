import Link from 'next/link';

const caseStudies = [
  {
    tag: 'ACH Origination',
    company: 'First National Bank of Omaha',
    title: 'Scaling FNBO to a Top-12 ACH Debit Originator',
    challenge: 'FNBO needed to dramatically increase its ACH origination volume to compete with larger national banks and capture a greater share of the commercial payments market.',
    approach: 'Luther restructured the commercial payments go-to-market strategy, invested in technology infrastructure, and built strategic partnerships with third-party processors and payroll providers. He repositioned FNBO as a full-service commercial payments partner.',
    results: [
      { metric: '12th', label: 'Largest ACH Debit Originator nationally' },
      { metric: '6th', label: 'Largest payroll processor among peer banks' },
      { metric: '25%', label: 'Year-over-year fee income growth' },
    ],
    year: '2015-2022',
  },
  {
    tag: 'Portfolio Growth',
    company: 'First National Bank of Omaha',
    title: 'Doubling the Commercial Payments Portfolio in 3 Years',
    challenge: 'The commercial payments portfolio had plateaued under a reactive sales model. Growth targets required a fundamentally different approach to client acquisition and product bundling.',
    approach: 'Luther implemented a proactive business development model focused on mid-market and enterprise clients, launched new card and ACH product bundles, and built a dedicated relationship management team.',
    results: [
      { metric: '2x', label: 'Portfolio size within 3 years' },
      { metric: '100+', label: 'Net new commercial relationships added' },
      { metric: '40%', label: 'Increase in average revenue per client' },
    ],
    year: '2017-2020',
  },
  {
    tag: 'BaaS Strategy',
    company: 'Priority',
    title: 'Building a Scalable Banking-as-a-Service Platform',
    challenge: 'Priority needed a BaaS platform strategy that could serve diverse fintech partners while maintaining compliance, managing risk, and generating scalable fee revenue.',
    approach: "Luther led the design of Priority's BaaS commercial framework, structuring program agreements, API integration standards, and risk governance protocols.",
    results: [
      { metric: 'Multi-vertical', label: 'BaaS platform serving diverse fintech partners' },
      { metric: 'Scalable', label: 'Compliance-first onboarding framework' },
      { metric: 'Growth', label: 'Consistent partner portfolio expansion' },
    ],
    year: '2022-Present',
  },
  {
    tag: 'Acquiring Growth',
    company: 'Priority',
    title: 'Expanding the Acquiring Division at Priority',
    challenge: "Priority's acquiring business needed sharper vertical focus, better sales enablement, and stronger technology partnerships to compete against both legacy processors and new fintech entrants.",
    approach: 'Luther developed a vertical-first acquiring strategy and built partnerships with ISVs and technology platforms to create distribution advantages.',
    results: [
      { metric: 'Vertical', label: 'Focus driving higher-value merchant mix' },
      { metric: 'ISV', label: 'Partnerships creating distribution leverage' },
      { metric: 'Improved', label: 'Portfolio margins through strategic pricing' },
    ],
    year: '2022-Present',
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#0A0E1A] min-h-screen pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#D4AF37]/4 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">Proven Results</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#E8EAF0] leading-tight mb-6 max-w-3xl">
            Case Studies That{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #D4AF37, #F0D060)' }}>
              Define a Career
            </span>
          </h1>
          <p className="text-[#E8EAF0]/60 text-xl leading-relaxed max-w-2xl">
            Real challenges. Strategic solutions. Measurable outcomes.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((cs, i) => (
              <div key={i} className="border border-[#D4AF37]/10 bg-[#0D1225]/60 hover:border-[#D4AF37]/20 transition-colors duration-300">
                <div className="p-8 border-b border-[#D4AF37]/10">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase border border-[#D4AF37]/30 text-[#D4AF37]">{cs.tag}</span>
                      <span className="text-[#E8EAF0]/30 text-sm">{cs.year}</span>
                    </div>
                    <span className="text-[#E8EAF0]/40 text-sm">{cs.company}</span>
                  </div>
                  <h2 className="font-display text-3xl font-bold text-[#E8EAF0]">{cs.title}</h2>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                    <div>
                      <h3 className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-3">The Challenge</h3>
                      <p className="text-[#E8EAF0]/60 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-3">The Approach</h3>
                      <p className="text-[#E8EAF0]/60 leading-relaxed">{cs.approach}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-5">Key Results</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {cs.results.map((r, j) => (
                        <div key={j} className="p-5 border border-[#D4AF37]/10 bg-[#0A0E1A]/60">
                          <div className="text-2xl font-display font-bold text-transparent bg-clip-text mb-1" style={{ backgroundImage: 'linear-gradient(135deg, #D4AF37, #F0D060)' }}>{r.metric}</div>
                          <div className="text-[#E8EAF0]/60 text-sm">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent mb-16" />
            <h3 className="font-display text-3xl font-bold text-[#E8EAF0] mb-4">Want to Discuss Your Challenge?</h3>
            <p className="text-[#E8EAF0]/50 mb-8 max-w-lg mx-auto">These results are just the beginning. Let&apos;s explore what&apos;s possible for your business.</p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-[#D4AF37] text-[#0A0E1A] font-semibold text-sm tracking-wider uppercase hover:bg-[#F0D060] transition-colors duration-300">Get in Touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
