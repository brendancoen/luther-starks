import { createClient } from '@/lib/supabase/server';
import type { Post } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const dynamic = 'force-dynamic';

export default async function InsightPage({
  params,
}: {
  params: { slug: string };
}) {
  let post: Post | null = null;
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', params.slug)
      .eq('published', true)
      .single();
    post = (data as Post) || null;
  } catch {
    post = null;
  }

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#0A0E1A] min-h-screen pt-28 pb-28">
      <article className="max-w-3xl mx-auto px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-10 hover:text-[#F0D060] transition-colors"
        >
          <span>&larr;</span> Back to Insights
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase border border-[#D4AF37]/25 text-[#D4AF37]">
            {post.category}
          </span>
          {post.display_date && (
            <span className="text-[#E8EAF0]/30 text-xs">{post.display_date}</span>
          )}
          {post.read_time && (
            <span className="text-[#E8EAF0]/30 text-xs">&middot; {post.read_time}</span>
          )}
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#E8EAF0] leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-[#E8EAF0]/60 text-lg leading-relaxed mb-12 pb-12 border-b border-[#D4AF37]/10">
          {post.excerpt}
        </p>

        {post.content ? (
          <div className="markdown-body text-[#E8EAF0]/80 leading-relaxed space-y-6">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: (props) => (
                  <h2 className="font-display text-3xl font-bold text-[#E8EAF0] mt-12 mb-4" {...props} />
                ),
                h2: (props) => (
                  <h2 className="font-display text-2xl font-bold text-[#E8EAF0] mt-10 mb-4" {...props} />
                ),
                h3: (props) => (
                  <h3 className="font-display text-xl font-bold text-[#E8EAF0] mt-8 mb-3" {...props} />
                ),
                p: (props) => (
                  <p className="text-[#E8EAF0]/75 text-base leading-8 mb-6" {...props} />
                ),
                a: (props) => (
                  <a className="text-[#D4AF37] underline underline-offset-2 hover:text-[#F0D060] transition-colors" target="_blank" rel="noopener noreferrer" {...props} />
                ),
                ul: (props) => (
                  <ul className="list-disc pl-6 space-y-2 mb-6 text-[#E8EAF0]/75" {...props} />
                ),
                ol: (props) => (
                  <ol className="list-decimal pl-6 space-y-2 mb-6 text-[#E8EAF0]/75" {...props} />
                ),
                li: (props) => <li className="leading-7" {...props} />,
                blockquote: (props) => (
                  <blockquote className="border-l-2 border-[#D4AF37]/40 pl-5 italic text-[#E8EAF0]/60 my-6" {...props} />
                ),
                strong: (props) => (
                  <strong className="text-[#E8EAF0] font-semibold" {...props} />
                ),
                code: (props) => (
                  <code className="bg-[#0D1225] border border-[#D4AF37]/15 px-1.5 py-0.5 text-[#F0D060] text-sm" {...props} />
                ),
                hr: () => <hr className="border-[#D4AF37]/15 my-10" />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        ) : (
          <p className="text-[#E8EAF0]/40">This article is coming soon.</p>
        )}
      </article>
    </main>
  );
}
