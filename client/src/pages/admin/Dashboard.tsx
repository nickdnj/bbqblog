import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminShell from './AdminShell'
import { adminDeletePost, adminListPosts } from '../../lib/api'
import type { Post } from '../../lib/types'
import { formatDate } from '../../components/PostCard'

export default function Dashboard() {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [error, setError] = useState('')

  function load() {
    adminListPosts().then(setPosts).catch((e) => setError(e.message))
  }
  useEffect(load, [])

  async function remove(p: Post) {
    if (!confirm(`Delete "${p.title}"? This can't be undone.`)) return
    await adminDeletePost(p.id)
    load()
  }

  return (
    <AdminShell>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl text-navy-dark">Posts</h1>
        <Link to="/admin/posts/new" className="px-5 py-2.5 rounded-full font-semibold bg-seafoam text-navy-dark">
          + New post
        </Link>
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {posts === null ? (
        <p className="text-muted">Loading…</p>
      ) : posts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-navy/20 p-10 text-center text-muted">
          No posts yet. Click <strong>New post</strong> to publish your first update.
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-[var(--shadow-soft)] overflow-hidden border border-navy/8">
          <table className="w-full text-left">
            <thead className="bg-sand text-navy-dark text-sm">
              <tr>
                <th className="p-4">Title</th>
                <th className="p-4 hidden sm:table-cell">Category</th>
                <th className="p-4">Status</th>
                <th className="p-4 hidden sm:table-cell">Date</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((p) => (
                <tr key={p.id} className="border-t border-navy/8">
                  <td className="p-4 font-medium text-navy-dark">{p.title}</td>
                  <td className="p-4 hidden sm:table-cell text-muted">{p.category}</td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        p.status === 'published' ? 'bg-seafoam/30 text-navy-dark' : 'bg-navy/10 text-slate'
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="p-4 hidden sm:table-cell text-muted text-sm">
                    {p.status === 'published' ? formatDate(p.publishedAt) : '—'}
                  </td>
                  <td className="p-4 text-right whitespace-nowrap">
                    <Link to={`/admin/posts/${p.id}`} className="text-navy font-semibold mr-4">Edit</Link>
                    <button onClick={() => remove(p)} className="text-red-600 font-semibold">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminShell>
  )
}
