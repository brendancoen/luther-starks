import Link from 'next/link';
import Image from 'next/image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Selected case studies from Luther Starks \u2014 measurable results in merchant acquiring, Banking-as-a-Service, and payments growth.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Case Studies | Luther Starks',
    description:
      'Measurable results in merchant acquiring, BaaS, and payments growth.',
    url: '/case-studies',
  },
};

const featured = {
  tag: 'Banking-as-a-Service',
  company: 'Nezz \u00d7 Priority',
  year: '2022 \u2013 Present',
  title: 'Building the Banking Infrastructure Behind a Real-Time Settlement Fintech',
  pressRelease:
    'https://prioritycommerce.com/resource-center/nezz-priority-banking-infrastructure-real-time-settlement/',
  summaryStart:
    'As Vice President of Acquiring and Banking-as-a-Service at ',
  summaryMid:
    ', I worked with ',
  summaryAfterLink:
    ', an emerging fintech focused on transforming how businesses execute and settle high-value transactions. The company had developed an innovative approach to real-time settlement but required regulated banking infrastructure, payment capabilities, and strategic banking partnerships to bring its vision to market.',
  summaryRest: [
    "By leveraging Priority's Banking-as-a-Service platform and embedded payments infrastructure, we helped Nezz launch a scalable solution that enables businesses to move funds with greater speed, transparency, and certainty while reducing reliance on traditional escrow and manual settlement processes.",
  ],
  challengeIntro:
    'Nezz identified a significant problem within the movement of high-value funds. Traditional settlement methods often rely on wire transfers, fragmented payment systems, manual reconciliation, and third-party escrow arrangements. These processes can create:',
  challengePoints: [
    'Delayed settlement timelines',
    'Limited visibility into funds in transit',
    'Operational inefficiencies',
    'Increased transaction risk',
    'Idle capital and lost interest opportunities',
    'Complex reconciliation workflows',
  ],
  challengeOutro:
    'To bring their platform to market, Nezz needed a banking partner capable of supporting account issuance, payment orchestration, regulatory oversight, and real-time money movement through modern payment rails.',
  roleIntro:
    "I led the commercial and strategic engagement between Priority and Nezz, working across product, banking, compliance, operations, and executive leadership teams to design a solution that aligned with Nezz's business model and growth objectives. My responsibilities included:",
  rolePoints: [
    'Structuring the Banking-as-a-Service relationship',
    'Aligning sponsor bank and compliance requirements',
    'Designing the account and payment infrastructure',
    'Coordinating cross-functional implementation teams',
    'Developing the commercial framework for growth',
    'Establishing a scalable roadmap for future expansion',
  ],
  solution: [
    {
      title: 'Regulated Banking Infrastructure',
      body:
        "Businesses onboarded to accounts provisioned through Priority's banking ecosystem, providing a secure and compliant framework for holding and moving funds.",
    },
    {
      title: 'Real-Time Payment Enablement',
      body:
        'The platform was designed to support emerging real-time payment networks, including RTP and FedNow, allowing transactions to move more efficiently than traditional settlement methods.',
    },
    {
      title: 'Account-to-Account Settlement',
      body:
        'Rather than relying on traditional escrow structures, funds remained within regulated bank accounts and moved based on transaction instructions established by the participating parties. This created greater transparency and control throughout the settlement lifecycle.',
    },
    {
      title: 'Embedded Financial Infrastructure',
      body:
        'By integrating banking and payments directly into the Nezz platform, users gained access to a seamless experience without needing to navigate multiple providers or disconnected systems.',
    },
  ],
  impactIntro:
    'The partnership enabled Nezz to accelerate its go-to-market strategy while providing the banking foundation necessary to support enterprise-grade transaction workflows. Key outcomes included:',
  impactPoints: [
    'Successfully launched a banking-enabled settlement platform',
    'Reduced complexity associated with high-value transaction processing',
    'Created a scalable framework for future transaction growth',
    'Enabled access to modern real-time payment rails',
    'Improved transparency throughout the settlement process',
    'Established a regulated banking model capable of supporting enterprise customers',
  ],
  strategicValue: [
    'This engagement highlights the power of combining Banking-as-a-Service infrastructure with modern payment technologies. By aligning fintech innovation with regulated banking capabilities, we helped Nezz bring a differentiated settlement solution to market while maintaining the controls, compliance, and scalability required for long-term success.',
    'For me, this project represents the type of partnership I enjoy most\u2014bringing together banks, fintech innovators, payment networks, and technology teams to solve complex money movement challenges and create entirely new opportunities within the financial ecosystem.',
  ],
};

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

      {/* Featured Case Study \u2014 Nezz */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-[#D4AF37] text-[#0A0E1A]">Featured</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
          </div>

          <div className="border border-[#D4AF37]/20 bg-[#0D1225]/70">
            {/* Header */}
            <div className="p-8 md:p-12 border-b border-[#D4AF37]/10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase border border-[#D4AF37]/30 text-[#D4AF37]">{featured.tag}</span>
                  <span className="text-[#E8EAF0]/30 text-sm">{featured.year}</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://nezzapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-md bg-black border border-[#D4AF37]/15 px-4 py-2.5 hover:border-[#D4AF37]/40 transition-colors duration-300"
                    aria-label="Visit Nezz website"
                  >
                    <Image src="/nezz-logo.png" alt="Nezz" width={108} height={42} className="h-9 w-auto object-contain" />
                  </a>
                  <a
                    href="https://prioritycommerce.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-md bg-[#04261C] border border-[#D4AF37]/15 px-3 py-2 hover:border-[#D4AF37]/40 transition-colors duration-300"
                    aria-label="Visit Priority website"
                  >
                    <Image src="/priority-logo.png" alt="Priority" width={56} height={56} className="h-12 w-auto object-contain" />
                  </a>
                </div>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#E8EAF0] leading-tight max-w-4xl">{featured.title}</h2>
            </div>

            <div className="p-8 md:p-12 space-y-12">
              {/* Executive Summary */}
              <div>
                <h3 className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-4">Executive Summary</h3>
                <div className="space-y-4 text-[#E8EAF0]/70 leading-relaxed max-w-4xl">
                  <p>
                    {featured.summaryStart}
                    <a
                      href="https://prioritycommerce.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4AF37] underline decoration-[#D4AF37]/40 underline-offset-2 hover:decoration-[#D4AF37] transition-colors"
                    >
                      Priority
                    </a>
                    {featured.summaryMid}
                    <a
                      href="https://nezzapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4AF37] underline decoration-[#D4AF37]/40 underline-offset-2 hover:decoration-[#D4AF37] transition-colors"
                    >
                      Nezz
                    </a>
                    {featured.summaryAfterLink}
                  </p>
                  {featured.summaryRest.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* The Challenge */}
              <div>
                <h3 className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-4">The Challenge</h3>
                <p className="text-[#E8EAF0]/70 leading-relaxed max-w-4xl mb-5">{featured.challengeIntro}</p>
                <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 max-w-4xl mb-5">
                  {featured.challengePoints.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[#E8EAF0]/60">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-[#D4AF37]" style={{ transform: 'rotate(45deg)' }} />
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="text-[#E8EAF0]/70 leading-relaxed max-w-4xl">{featured.challengeOutro}</p>
              </div>

              {/* My Role */}
              <div>
                <h3 className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-4">My Role</h3>
                <p className="text-[#E8EAF0]/70 leading-relaxed max-w-4xl mb-5">{featured.roleIntro}</p>
                <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 max-w-4xl">
                  {featured.rolePoints.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-[#E8EAF0]/60">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-[#D4AF37]" style={{ transform: 'rotate(45deg)' }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* The Solution */}
              <div>
                <h3 className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-6">The Solution</h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
                  {featured.solution.map((s) => (
                    <div key={s.title} className="p-6 border border-[#D4AF37]/10 bg-[#0A0E1A]/50">
                      <h4 className="font-display text-lg font-bold text-[#E8EAF0] mb-3">{s.title}</h4>
                      <p className="text-[#E8EAF0]/60 text-sm leading-relaxed">{s.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Impact */}
              <div>
                <h3 className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-4">Business Impact</h3>
                <p className="text-[#E8EAF0]/70 leading-relaxed max-w-4xl mb-5">{featured.impactIntro}</p>
                <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 max-w-4xl">
                  {featured.impactPoints.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[#E8EAF0]/70">
                      <span className="mt-1 text-[#D4AF37]">&#10003;</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strategic Value */}
              <div className="border-t border-[#D4AF37]/10 pt-10">
                <h3 className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-4">Strategic Value Delivered</h3>
                <div className="space-y-4 text-[#E8EAF0]/70 leading-relaxed max-w-4xl">
                  {featured.strategicValue.map((p, i) => (<p key={i}>{p}</p>))}
                </div>
              </div>

              {/* Press Release */}
              <div className="border-t border-[#D4AF37]/10 pt-8">
                <a
                  href={featured.pressRelease}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-[#D4AF37]/40 text-[#D4AF37] font-semibold text-sm tracking-wider uppercase hover:bg-[#D4AF37] hover:text-[#0A0E1A] transition-all duration-300"
                >
                  Read the Official Press Release
                  <span aria-hidden>&rarr;</span>
                </a>
                <p className="text-[#E8EAF0]/30 text-xs mt-3">Published on prioritycommerce.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">More From the Portfolio</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/20 to-transparent" />
          </div>
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
