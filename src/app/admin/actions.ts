'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export type PostInput = {
  category: string
  title: string
  excerpt: string
  read_time: string
  display_date: string
  url: string
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

export async function createPost(input: PostInput) {
  const supabase = await requireUser()
  const { error } = await supabase.from('posts').insert({
    category: input.category,
    title: input.title,
    excerpt: input.excerpt,
    read_time: input.read_time,
    display_date: input.display_date,
    url: input.url || null,
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
      excerpt: input.excerpt,
      read_time: input.read_time,
      display_date: input.display_date,
      url: input.url || null,
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
