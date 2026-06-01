import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import AdminShell from './AdminShell'
import { adminCreatePost, adminGetPost, adminUpdatePost } from '../../lib/api'
import { BLOG_CATEGORIES } from '../../data/content'

const input =
  'px-4 py-3 rounded-xl border border-navy/20 bg-white focus:outline-none focus:border-seafoam focus:ring-2 focus:ring-seafoam/40 w-full'
const label = 'flex flex-col gap-2 font-semibold text-slate'

export default function PostEdit() {
  const { id } = useParams<{ id: string }>()
  const isNew = !id || id === 'new'
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: '',
    category: 'General',
    status: 'draft',
    heroImage: '',
    excerpt: '',
    body: '',
  })
  const [tab, setTab] = useState<'write' | 'preview'>('write')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [loading, setLoading] = useState(!isNew)

  useEffect(() => {
    if (isNew) return
    adminGetPost(Number(id))
      .then((p) =>
        setForm({
          title: p.title,
          category: p.category,
          status: p.status,
          heroImage: p.heroImage ?? '',
          excerpt: p.excerpt ?? '',
          body: p.body,
        }),
      )
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [id, isNew])

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  async function save(status: 'draft' | 'published') {
    setError('')
    if (!form.title.trim() || !form.body.trim()) {
      setError('Title and body are required.')
      return
    }
    setBusy(true)
    try {
      const payload = { ...form, status }
      if (isNew) await adminCreatePost(payload)
      else await adminUpdatePost(Number(id), payload)
      navigate('/admin')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Save failed.')
    } finally {
      setBusy(false)
    }
  }

  if (loading) return <AdminShell><p className="text-muted">Loading…</p></AdminShell>

  return (
    <AdminShell>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl text-navy-dark">{isNew ? 'New post' : 'Edit post'}</h1>
        <Link to="/admin" className="text-navy font-semibold">← Back</Link>
      </div>

      {error && <p className="text-red-600 mb-4 font-medium">{error}</p>}

      <div className="grid gap-5 max-w-3xl">
        <label className={label}>
          <span>Title</span>
          <input className={input} value={form.title} onChange={set('title')} />
        </label>

        <div className="grid sm:grid-cols-2 gap-5">
          <label className={label}>
            <span>Category</span>
            <select className={input} value={form.category} onChange={set('category')}>
              {BLOG_CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className={label}>
            <span>Hero image URL (optional)</span>
            <input className={input} value={form.heroImage} onChange={set('heroImage')} placeholder="https://…" />
          </label>
        </div>

        <label className={label}>
          <span>Excerpt (optional — auto-generated if blank)</span>
          <input className={input} value={form.excerpt} onChange={set('excerpt')} />
        </label>

        <div>
          <div className="flex gap-2 mb-2">
            {(['write', 'preview'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold capitalize ${
                  tab === t ? 'bg-navy text-white' : 'bg-navy/10 text-slate'
                }`}
              >
                {t}
              </button>
            ))}
            <span className="ml-auto self-center text-xs text-muted">Markdown supported</span>
          </div>
          {tab === 'write' ? (
            <textarea
              className={`${input} min-h-[320px] font-mono text-sm`}
              value={form.body}
              onChange={set('body')}
              placeholder="Write your post in Markdown…"
            />
          ) : (
            <div className="min-h-[320px] bg-white border border-navy/20 rounded-xl p-5 space-y-3 text-slate">
              {form.body.trim() ? <ReactMarkdown>{form.body}</ReactMarkdown> : <p className="text-muted">Nothing to preview yet.</p>}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={() => save('published')}
            disabled={busy}
            className="px-6 py-3 rounded-full font-semibold bg-seafoam text-navy-dark disabled:opacity-60"
          >
            {busy ? 'Saving…' : 'Publish'}
          </button>
          <button
            onClick={() => save('draft')}
            disabled={busy}
            className="px-6 py-3 rounded-full font-semibold border-2 border-navy/30 text-navy-dark disabled:opacity-60"
          >
            Save as draft
          </button>
        </div>
      </div>
    </AdminShell>
  )
}
