import { Link } from 'react-router-dom'
import type { Post } from '../lib/types'

export function formatDate(iso: string | null) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] border border-navy/5 transition-transform hover:-translate-y-1.5"
    >
      {post.heroImage ? (
        <img src={post.heroImage} alt="" className="h-44 w-full object-cover" loading="lazy" />
      ) : (
        <div className="h-44 w-full bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center text-4xl" aria-hidden>
          🌊
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-seafoam">
          <span className="text-navy">{post.category}</span>
          {post.publishedAt && <span className="text-muted">· {formatDate(post.publishedAt)}</span>}
        </div>
        <h3 className="mt-2 text-xl text-navy-dark">{post.title}</h3>
        {post.excerpt && <p className="mt-2 text-muted flex-1">{post.excerpt}</p>}
        <span className="mt-4 font-semibold text-navy">Read more →</span>
      </div>
    </Link>
  )
}
