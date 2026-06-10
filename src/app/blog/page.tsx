import Link from 'next/link';

const posts = [
  {
    category: 'BaaS',
    date: 'May 2025',
    title: 'The BaaS Shakeout: What Survives and What Gets Left Behind',
    excerpt: "The Banking-as-a-Service market is undergoing a painful but necessary correction. Here's how to think about what separates the platforms that will scale from those that won't.",
    readTime: '8 min read',
  },
  {
    category: 'Payments',
    date: 'April 2025',
    title: "Real-Time Payments Are Here. Most Banks Still Aren't Ready.",
    excerpt: 'RTP and FedNow promise to modernize commercial payments, but adoption has been slower than the hype suggests. What is the real barrier, and how do banks get off the sideline?',
    readTime: '6 min read',
  },
  {
    category: 'Embedded Finance',
    date: 'March 2025',
    title: 'Embedded Finance Beyond Lending: The Untapped Opportunity in Payments',
    excerpt: "Everyone talks about embedded lending. But the bigger, stickier opportunity in embedded finance might be payments — and most companies are leaving it on the table.",
    readTime: '7 min read',
  },
  {
    category: 'Strategy',
    date: 'February 2025',
    title: "Why Most Fintech Partnerships Fail (And How to Structure Ones That Don't)",
    excerpt: "Partnership announcements are easy. Partnerships that create lasting, mutual value are hard. After dozens of deals across banking and fintech, here's what I've learned.",
    readTime: '9 min read',
  },
  {
    category: 'ACH',
    date: 'January 2025',
    title: "ACH Is Not Dead. You're Just Not Using It Right.",
    excerpt: "In an era obsessed with card rails and instant payments, ACH continues to dominate commercial transactions. The opportunity is to optimize it, not replace it.",
    readTime: '5 min read',
  },
  {
    category: 'Leadership',
    date: 'December 2024',
    title: 'Building Revenue-Generating Teams in a Cost-Cutting Environment',
    excerpt: 'When organizations are tightening budgets, payments and commercial banking leaders face pressure to do more with less.',
    readTime: '6 min read',
  },
];

const categories = ['All', 'BaaS', 'Payments', 'Embedded Finance', 'Strategy', 'ACH', 'Leadership'];

export default function BlogPage() {
  return (
    <main className="bg-[#0A0E1A] min-h-screen pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#D4AF37]/4 rounded-full blur-3xl -translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">Perspectives</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#E8EAF0] leading-tight mb-6">
            Industry{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #D4AF37, #F0D060)' }}>
              Insights
            </span>
          </h1>
          <p className="text-[#E8EAF0]/60 text-xl leading-relaxed max-w-2xl">
            Perspectives on payments, BaaS, embedded finance, and the evolving business of banking.
          </p>
        </div>
      </section>

      <section className="border-y border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={'px-4 py-2 text-xs font-semibold tracking-widest uppercase whitespace-nowrap transition-all duration-200 ' + (i === 0 ? 'bg-[#D4AF37] text-[#0A0E1A]' : 'border border-[#D4AF37]/20 text-[#E8EAF0]/50 hover:border-[#D4AF37]/40 hover:text-[#E8EAF0]/80')}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article key={i} className="group border border-[#D4AF37]/10 bg-[#0D1225]/60 hover:border-[#D4AF37]/25 transition-all duration-300 flex flex-col">
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase border border-[#D4AF37]/25 text-[#D4AF37]">
                      {post.category}
                    </span>
                    <span className="text-[#E8EAF0]/30 text-xs">{post.date}</span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-[#E8EAF0] leading-tight mb-4 group-hover:text-[#F0D060] transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-[#E8EAF0]/50 text-sm leading-relaxed flex-1 mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-[#D4AF37]/10">
                    <span className="text-[#E8EAF0]/30 text-xs">{post.readTime}</span>
                    <span className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">Read More &rarr;</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 p-10 border border-[#D4AF37]/15 bg-[#0D1225]/60 text-center">
            <h3 className="font-display text-3xl font-bold text-[#E8EAF0] mb-3">Stay Ahead of the Curve</h3>
            <p className="text-[#E8EAF0]/50 mb-8 max-w-lg mx-auto">
              Get Luther&apos;s latest perspectives on payments, BaaS, and embedded finance delivered directly to your inbox.
            </p>
            <Link href="/contact" className="inline-block px-8 py-3 border border-[#D4AF37]/50 text-[#D4AF37] font-semibold text-sm tracking-wider uppercase hover:bg-[#D4AF37] hover:text-[#0A0E1A] transition-all duration-300">
              Subscribe to Insights
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
