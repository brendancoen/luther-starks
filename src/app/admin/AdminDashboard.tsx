'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Post } from '@/lib/posts'
import { CATEGORIES, slugify } from '@/lib/posts'
import { createPost, updatePost, deletePost, signOut } from './actions'

type FormState = {
  category: string
  title: string
  slug: string
  excerpt: string
  content: string
  read_time: string
  display_date: string
  published: boolean
}

const EMPTY: FormState = {
  category: CATEGORIES[0],
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  read_time: '',
  display_date: '',
  published: true,
}

export default function AdminDashboard({
  initialPosts,
  userEmail,
}: {
  initialPosts: Post[]
  userEmail: string
}) {
  const router = useRouter()
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [form, setForm] = useState<FormState>(EMPTY)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [slugEdited, setSlugEdited] = useState(false)
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')

  function onTitleChange(value: string) {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: slugEdited ? prev.slug : slugify(value),
    }))
  }

  function startEdit(p: Post) {
    setEditingId(p.id)
    setSlugEdited(true)
    setForm({
      category: p.category,
      title: p.title,
      slug: p.slug || '',
      excerpt: p.excerpt,
      content: p.content || '',
      read_time: p.read_time || '',
      display_date: p.display_date || '',
      published: p.published,
    })
    setMessage('')
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function resetForm() {
    setEditingId(null)
    setSlugEdited(false)
    setForm(EMPTY)
    setMessage('')
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setMessage('')
    const result = editingId
      ? await updatePost(editingId, form)
      : await createPost(form)
    setBusy(false)
    if (result.error) {
      setMessage('Error: ' + result.error)
      return
    }
    resetForm()
    router.refresh()
  }

  async function handleDelete(id: string) {
    if (typeof window !== 'undefined' && !window.confirm('Delete this article? This cannot be undone.')) return
    setBusy(true)
    const result = await deletePost(id)
    setBusy(false)
    if (result.error) {
      setMessage('Error: ' + result.error)
      return
    }
    setPosts((prev) => prev.filter((p) => p.id !== id))
    if (editingId === id) resetForm()
    router.refresh()
  }

  async function handleSignOut() {
    await signOut()
    router.push('/login')
    router.refresh()
  }

  const input = 'w-full bg-[#0D1225] border border-[#E8EAF0]/15 px-4 py-2.5 text-[#E8EAF0] focus:border-[#D4AF37] focus:outline-none transition-colors'
  const label = 'block text-xs uppercase tracking-wider text-[#E8EAF0]/60 mb-2'

  return (
    <div className="min-h-screen bg-[#0A0E1A] text-[#E8EAF0]">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-10 h-10 border border-[#D4AF37]/60">
              <span className="font-serif text-[#D4AF37]">LS</span>
            </div>
            <div>
              <h1 className="font-serif text-2xl">Insights Admin</h1>
              <p className="text-xs text-[#E8EAF0]/40">{userEmail}</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="text-xs uppercase tracking-wider text-[#E8EAF0]/60 border border-[#E8EAF0]/15 px-4 py-2 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
          >
            Sign Out
          </button>
        </div>

        <div className="border border-[#E8EAF0]/10 bg-[#0D1225]/40 p-8 mb-12">
          <h2 className="font-serif text-xl mb-6">
            {editingId ? 'Edit Article' : 'Add New Article'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className={label}>Category</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className={input}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={label}>Display Date</label>
                <input
                  value={form.display_date}
                  onChange={(e) => setForm({ ...form, display_date: e.target.value })}
                  placeholder="e.g. March 2025"
                  className={input}
                />
              </div>
            </div>
            <div>
              <label className={label}>Title</label>
              <input
                value={form.title}
                onChange={(e) => onTitleChange(e.target.value)}
                required
                className={input}
              />
            </div>
            <div>
              <label className={label}>URL Slug</label>
              <input
                value={form.slug}
                onChange={(e) => { setSlugEdited(true); setForm({ ...form, slug: e.target.value }) }}
                placeholder="auto-generated-from-title"
                className={input}
              />
              <p className="text-xs text-[#E8EAF0]/35 mt-1">The article will live at /insights/{form.slug || 'your-slug'}</p>
            </div>
            <div>
              <label className={label}>Excerpt</label>
              <textarea
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                rows={2}
                className={input}
              />
            </div>
            <div>
              <label className={label}>Article Content (Markdown)</label>
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                rows={14}
                placeholder="Write the full article here using Markdown..."
                className={input + ' font-mono text-sm leading-relaxed'}
              />
              <div className="text-xs text-[#E8EAF0]/40 mt-2 leading-relaxed">
                <span className="text-[#E8EAF0]/60">Markdown tips:</span>{' '}
                <code className="text-[#F0D060]"># Heading</code>,{' '}
                <code className="text-[#F0D060]">## Subheading</code>,{' '}
                <code className="text-[#F0D060]">**bold**</code>,{' '}
                <code className="text-[#F0D060]">*italic*</code>,{' '}
                <code className="text-[#F0D060]">- bullet</code>,{' '}
                <code className="text-[#F0D060]">[link](https://...)</code>,{' '}
                <code className="text-[#F0D060]">&gt; quote</code>. Leave a blank line between paragraphs.
              </div>
            </div>
            <div>
              <label className={label}>Read Time</label>
              <input
                value={form.read_time}
                onChange={(e) => setForm({ ...form, read_time: e.target.value })}
                placeholder="e.g. 5 min read"
                className={input}
              />
            </div>
            <label className="flex items-center gap-2 text-sm text-[#E8EAF0]/70">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(e) => setForm({ ...form, published: e.target.checked })}
              />
              Published (visible on the Insights page)
            </label>
            {message && <p className="text-sm text-red-400">{message}</p>}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={busy}
                className="bg-[#D4AF37] text-[#0A0E1A] font-medium px-6 py-2.5 uppercase tracking-wider text-sm hover:bg-[#F0D060] transition-colors disabled:opacity-50"
              >
                {busy ? 'Saving...' : editingId ? 'Update Article' : 'Add Article'}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="border border-[#E8EAF0]/15 px-6 py-2.5 uppercase tracking-wider text-sm text-[#E8EAF0]/60 hover:border-[#E8EAF0]/40 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <h2 className="font-serif text-xl mb-6">All Articles ({posts.length})</h2>
        {posts.length === 0 ? (
          <p className="text-[#E8EAF0]/40">No articles yet. Add your first one above.</p>
        ) : (
          <div className="space-y-3">
            {posts.map((p) => (
              <div
                key={p.id}
                className="flex items-start justify-between gap-4 border border-[#E8EAF0]/10 bg-[#0D1225]/40 p-5"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs uppercase tracking-wider text-[#D4AF37]">{p.category}</span>
                    {!p.published && (
                      <span className="text-xs uppercase tracking-wider text-[#E8EAF0]/40 border border-[#E8EAF0]/20 px-2 py-0.5">Draft</span>
                    )}
                  </div>
                  <h3 className="font-medium truncate">{p.title}</h3>
                  <p className="text-sm text-[#E8EAF0]/50 line-clamp-2">{p.excerpt}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => startEdit(p)}
                    className="text-xs uppercase tracking-wider border border-[#E8EAF0]/15 px-3 py-1.5 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    disabled={busy}
                    className="text-xs uppercase tracking-wider border border-red-500/30 text-red-400 px-3 py-1.5 hover:bg-red-500/10 transition-colors disabled:opacity-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
