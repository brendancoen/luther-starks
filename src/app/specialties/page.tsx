const specialties = [
  {
    category: 'Core Discipline',
    title: 'Acquiring & Payment Processing',
    description:
      'End-to-end ownership of merchant acquiring strategy\u2014from underwriting and risk to pricing, settlement, and processor relationships that scale profitably.',
    capabilities: [
      'Merchant portfolio growth & retention',
      'Interchange & pricing optimization',
      'Processor & network partnerships',
      'Risk and underwriting frameworks',
    ],
  },
  {
    category: 'Emerging Infrastructure',
    title: 'Banking-as-a-Service (BaaS)',
    description:
      'Building the rails that let brands embed banking. Designing compliant, API-first programs that turn balance sheets into platforms.',
    capabilities: [
      'Sponsor bank program design',
      'Program manager partnerships',
      'Compliance & BSA/AML alignment',
      'Ledger & account infrastructure',
    ],
  },
  {
    category: 'Strategic Growth',
    title: 'Embedded Finance',
    description:
      'Bringing financial services to the point of need\u2014lending, payments, and accounts woven directly into software experiences.',
    capabilities: [
      'Embedded lending & payments',
      'Platform monetization strategy',
      'Go-to-market for fintech products',
      'Partner ecosystem development',
    ],
  },
  {
    category: 'Enterprise Payments',
    title: 'Commercial Payments',
    description:
      'Modernizing B2B money movement\u2014ACH, virtual cards, and payables automation that unlock working capital and fee income.',
    capabilities: [
      'ACH origination at scale',
      'Virtual card & payables programs',
      'Treasury & cash management',
      'Fee income expansion',
    ],
  },
  {
    category: 'Leadership',
    title: 'Strategic Partnerships',
    description:
      'Architecting alliances that compound. Structuring partnerships that align incentives and accelerate distribution.',
    capabilities: [
      'Partnership strategy & structuring',
      'Negotiation & deal leadership',
      'Channel & referral networks',
      'Joint go-to-market execution',
    ],
  },
  {
    category: 'Results',
    title: 'Business Development & Growth',
    description:
      'Translating market insight into revenue\u2014building the pipelines, teams, and playbooks that drive durable, profitable growth.',
    capabilities: [
      'Revenue & pipeline development',
      'Team building & enablement',
      'Market expansion strategy',
      'P&L ownership & forecasting',
    ],
  },
];

export default function SpecialtiesPage() {
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
            <span className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">Areas of Expertise</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#E8EAF0] leading-tight mb-6 max-w-3xl">
            Specialized{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #D4AF37, #F0D060)' }}>
              Domains
            </span>
          </h1>
          <p className="text-[#E8EAF0]/60 text-xl leading-relaxed max-w-2xl">
            Two decades at the intersection of payments, banking, and fintech\u2014distilled into the disciplines where I create the most leverage for ambitious organizations.
          </p>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {specialties.map((s, i) => (
            <div
              key={s.title}
              className="group relative p-8 md:p-10 rounded-2xl bg-[#0D1225] border border-[#1E2742] hover:border-[#D4AF37]/40 transition-all duration-300"
            >
              <div className="absolute top-8 right-8 font-[Playfair_Display] text-5xl font-bold text-[#1E2742] group-hover:text-[#D4AF37]/20 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>
              <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-4">
                {s.category}
              </p>
              <h3 className="font-[Playfair_Display] text-2xl md:text-3xl font-bold mb-4 max-w-[80%]">
                {s.title}
              </h3>
              <p className="text-[#A0A6B8] leading-relaxed mb-6">{s.description}</p>
              <ul className="space-y-2">
                {s.capabilities.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-sm text-[#C8CCDA]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-[#0D1225] to-[#0A0E1A] border border-[#1E2742]">
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-bold mb-6">
            Have a challenge that spans these domains?
          </h2>
          <p className="text-[#A0A6B8] mb-8 max-w-xl mx-auto">
            The most interesting problems live at the intersections. Let&apos;s explore
            where strategy meets execution.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-[#D4AF37] via-[#F0D060] to-[#B8941F] text-[#0A0E1A] font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </main>
  );
}
