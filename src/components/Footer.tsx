import Link from 'next/link';

const footerLinks = [
  {
    heading: 'Navigate',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Luther' },
      { href: '/specialties', label: 'Specialties' },
      { href: '/case-studies', label: 'Case Studies' },
    ],
  },
  {
    heading: 'Explore',
    links: [
      { href: '/blog', label: 'Insights' },
      { href: '/contact', label: 'Connect' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#060912] border-t border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <span className="flex items-center justify-center w-8 h-8 border border-[#D4AF37]/60 text-[#D4AF37] font-display text-xs font-bold tracking-tight">
                LS
              </span>
              <span className="text-white font-display text-lg font-semibold tracking-wide">
                Luther <span className="text-[#D4AF37]">Starks</span>
              </span>
            </Link>
            <p className="text-[#E8EAF0]/50 text-sm leading-relaxed max-w-sm">
              VP of Acquiring and BaaS at Priority. Fintech strategist, payments innovator, and business builder with 15+ years driving growth across banking and embedded finance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/luther-starks-64723223/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]/60 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#E8EAF0]/50 text-sm hover:text-[#E8EAF0] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#E8EAF0]/30 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Luther Starks. All rights reserved.
          </p>
          <p className="text-[#E8EAF0]/20 text-xs">
            Payments &bull; Banking &bull; Fintech &bull; Embedded Finance
          </p>
        </div>
      </div>
    </footer>
  );
}
