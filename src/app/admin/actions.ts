'use server'

import { createClient } from '@/lib/supabase/server'
import { slugify } from '@/lib/posts'
import { revalidatePath } from 'next/cache'

export type PostInput = {
  category: string
  title: string
  slug: string
  excerpt: string
  content: string
  read_time: string
  display_date: string
  published: boolean
}

async function requireUser() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()
  if (!data.user) {
    throw new Error('Not authenticated')
  }
  return supabase
}

function buildSlug(input: PostInput) {
  const base = input.slug && input.slug.trim() ? input.slug : input.title
  return slugify(base)
}

export async function createPost(input: PostInput) {
  const supabase = await requireUser()
  const { error } = await supabase.from('posts').insert({
    category: input.category,
    title: input.title,
    slug: buildSlug(input),
    excerpt: input.excerpt,
    content: input.content || null,
    read_time: input.read_time,
    display_date: input.display_date,
    published: input.published,
  })
  if (error) return { error: error.message }
  revalidatePath('/admin')
  revalidatePath('/blog')
  return { error: null }
}

export async function updatePost(id: string, input: PostInput) {
  const supabase = await requireUser()
  const { error } = await supabase
    .from('posts')
    .update({
      category: input.category,
      title: input.title,
      slug: buildSlug(input),
      excerpt: input.excerpt,
      content: input.content || null,
      read_time: input.read_time,
      display_date: input.display_date,
      published: input.published,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
  if (error) return { error: error.message }
  revalidatePath('/admin')
  revalidatePath('/blog')
  return { error: null }
}

export async function deletePost(id: string) {
  const supabase = await requireUser()
  const { error } = await supabase.from('posts').delete().eq('id', id)
  if (error) return { error: error.message }
  revalidatePath('/admin')
  revalidatePath('/blog')
  return { error: null }
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
}
