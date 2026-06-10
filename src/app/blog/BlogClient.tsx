'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Post } from '@/lib/posts';

const categories = ['All', 'BaaS', 'Payments', 'Embedded Finance', 'Strategy', 'ACH', 'Leadership'];

export default function BlogClient({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === activeCategory);

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
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={'px-4 py-2 text-xs font-semibold tracking-widest uppercase whitespace-nowrap transition-all duration-200 ' + (isActive ? 'bg-[#D4AF37] text-[#0A0E1A]' : 'border border-[#D4AF37]/20 text-[#E8EAF0]/50 hover:border-[#D4AF37]/40 hover:text-[#E8EAF0]/80')}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <p className="text-[#E8EAF0]/40 text-center py-20">No insights in this category yet. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const cardInner = (
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-5">
                      <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase border border-[#D4AF37]/25 text-[#D4AF37]">
                        {post.category}
                      </span>
                      <span className="text-[#E8EAF0]/30 text-xs">{post.display_date}</span>
                    </div>
                    <h2 className="font-display text-xl font-bold text-[#E8EAF0] leading-tight mb-4 group-hover:text-[#F0D060] transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-[#E8EAF0]/50 text-sm leading-relaxed flex-1 mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-5 border-t border-[#D4AF37]/10">
                      <span className="text-[#E8EAF0]/30 text-xs">{post.read_time}</span>
                      {post.url ? (
                        <span className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">Read More &rarr;</span>
                      ) : (
                        <span className="text-[#E8EAF0]/25 text-xs font-semibold tracking-wider uppercase">Coming Soon</span>
                      )}
                    </div>
                  </div>
                );
                const cardClass =
                  'group border border-[#D4AF37]/10 bg-[#0D1225]/60 transition-all duration-300 flex flex-col ' +
                  (post.url ? 'hover:border-[#D4AF37]/25 cursor-pointer' : 'hover:border-[#D4AF37]/20');
                return post.url ? (
                  <a
                    key={post.id}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {cardInner}
                  </a>
                ) : (
                  <article key={post.id} className={cardClass}>
                    {cardInner}
                  </article>
                );
              })}
            </div>
          )}

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
