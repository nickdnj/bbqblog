import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Container } from '../components/ui'
import { getPost, ApiError } from '../lib/api'
import type { Post as PostType } from '../lib/types'
import { formatDate } from '../components/PostCard'

export default function Post() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<PostType | null>(null)
  const [status, setStatus] = useState<'loading' | 'ok' | 'notfound' | 'error'>('loading')

  useEffect(() => {
    if (!slug) return
    let active = true
    setStatus('loading')
    getPost(slug)
      .then((p) => {
        if (!active) return
        setPost(p)
        setStatus('ok')
      })
      .catch((e) => {
        if (!active) return
        setStatus(e instanceof ApiError && e.status === 404 ? 'notfound' : 'error')
      })
    return () => {
      active = false
    }
  }, [slug])

  if (status === 'loading') return <Container className="py-20 text-center text-muted">Loading…</Container>
  if (status === 'notfound')
    return (
      <Container className="py-20 text-center">
        <h1 className="text-2xl text-navy-dark">Post not found</h1>
        <Link to="/blog" className="mt-4 inline-block font-semibold text-navy">← Back to the blog</Link>
      </Container>
    )
  if (status === 'error' || !post)
    return (
      <Container className="py-20 text-center text-muted">
        Couldn't load this post right now. <Link to="/blog" className="text-navy font-semibold">Back to the blog</Link>
      </Container>
    )

  return (
    <article>
      <div className="bg-gradient-to-br from-navy to-navy-dark text-white py-14">
        <Container>
          <Link to="/blog" className="text-seafoam text-sm font-semibold">← Blog</Link>
          <p className="mt-4 text-xs uppercase tracking-[0.12em] font-semibold text-seafoam">
            {post.category}
            {post.publishedAt && <span className="text-white/60"> · {formatDate(post.publishedAt)}</span>}
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl text-white">{post.title}</h1>
          {post.author && <p className="mt-2 text-white/70">by {post.author}</p>}
        </Container>
      </div>

      {post.heroImage && (
        <Container className="-mt-8">
          <img src={post.heroImage} alt="" className="w-full rounded-2xl shadow-[var(--shadow-card)] object-cover max-h-[420px]" />
        </Container>
      )}

      <Container className="py-12 max-w-3xl">
        <div className="prose-post space-y-4 text-slate leading-relaxed">
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
        <Link to="/blog" className="mt-10 inline-block font-semibold text-navy">← Back to the blog</Link>
      </Container>
    </article>
  )
}
