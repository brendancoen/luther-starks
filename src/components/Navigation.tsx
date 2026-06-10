'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/specialties', label: 'Specialties' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Connect' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0E1A]/95 backdrop-blur-md border-b border-[#D4AF37]/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="flex items-center justify-center w-9 h-9 border border-[#D4AF37]/60 text-[#D4AF37] font-display text-sm font-bold tracking-tight transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-[#0A0E1A]">
              LS
            </span>
            <span className="text-white font-display text-lg font-semibold tracking-wide">
              Luther <span className="text-[#D4AF37]">Starks</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                    isActive ? 'text-[#D4AF37]' : 'text-[#E8EAF0]/70 hover:text-[#E8EAF0]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 text-sm font-medium tracking-wider uppercase border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0E1A] transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#E8EAF0] transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#E8EAF0] transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#E8EAF0] transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0A0E1A]/98 backdrop-blur-md border-t border-[#D4AF37]/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium tracking-wider uppercase py-2 border-b border-white/5 transition-colors duration-200 ${
                  isActive ? 'text-[#D4AF37]' : 'text-[#E8EAF0]/70 hover:text-[#E8EAF0]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
