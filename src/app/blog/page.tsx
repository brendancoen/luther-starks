import { createClient } from '@/lib/supabase/server';
import type { Post } from '@/lib/posts';
import BlogClient from './BlogClient';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Industry insights from Luther Starks on payments, merchant acquiring, Banking-as-a-Service, embedded finance, and the future of fintech.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Insights | Luther Starks',
    description:
      'Perspectives on payments, acquiring, BaaS, and the future of fintech.',
    url: '/blog',
  },
};

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  let posts: Post[] = [];

  try {
    const supabase = createClient();
    const { data } = await supabase
      .from('posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });
    if (data) posts = data as Post[];
  } catch {
    // If Supabase is not configured yet, render with no posts.
    posts = [];
  }

  return <BlogClient posts={posts} />;
}
