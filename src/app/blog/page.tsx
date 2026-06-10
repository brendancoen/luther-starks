import { createClient } from '@/lib/supabase/server';
import type { Post } from '@/lib/posts';
import BlogClient from './BlogClient';

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
