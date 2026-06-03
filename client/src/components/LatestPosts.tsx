import { useEffect, useState } from 'react'
import { listPosts } from '../lib/api'
import type { Post } from '../lib/types'
import PostCard from './PostCard'

export default function LatestPosts({ limit = 3 }: { limit?: number }) {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let active = true
    listPosts({ limit })
      .then((p) => active && setPosts(p))
      .catch(() => active && setError(true))
    return () => {
      active = false
    }
  }, [limit])

  if (error) {
    return <p className="text-muted">Couldn't load posts right now — please check back soon.</p>
  }
  if (posts === null) {
    return <p className="text-muted">Loading…</p>
  }
  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-navy/20 p-8 text-center text-muted">
        No posts yet — news, tips, and event recaps from the picnic area will appear here.
      </div>
    )
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  )
}
