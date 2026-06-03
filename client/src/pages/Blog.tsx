import { useEffect, useState } from 'react'
import { Section, SectionHeading } from '../components/ui'
import { listPosts } from '../lib/api'
import type { Post } from '../lib/types'
import PostCard from '../components/PostCard'
import { BLOG_CATEGORIES } from '../data/content'

export default function Blog() {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [error, setError] = useState(false)
  const [cat, setCat] = useState<string>('All')

  useEffect(() => {
    let active = true
    setPosts(null)
    setError(false)
    listPosts(cat === 'All' ? {} : { category: cat })
      .then((p) => active && setPosts(p))
      .catch(() => active && setError(true))
    return () => {
      active = false
    }
  }, [cat])

  return (
    <Section id="blog">
      <SectionHeading
        eyebrow="From the picnic area"
        title="Picnic area news, tips & recaps"
        subtitle="Event announcements, grilling tips, and recaps from your neighbors at the Wharfside picnic area."
      />

      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {['All', ...BLOG_CATEGORIES].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={`px-5 py-2 rounded-full font-semibold border transition-colors ${
              cat === c
                ? 'bg-seafoam text-navy-dark border-seafoam shadow-[0_8px_20px_rgba(123,218,196,0.25)]'
                : 'bg-white text-slate border-navy/15 hover:border-seafoam'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {error ? (
        <p className="text-center text-muted">Couldn't load posts right now — please check back soon.</p>
      ) : posts === null ? (
        <p className="text-center text-muted">Loading…</p>
      ) : posts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-navy/20 p-10 text-center text-muted">
          {cat === 'All' ? 'No posts yet — check back soon!' : `No posts in "${cat}" yet.`}
        </div>
      ) : (
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      )}
    </Section>
  )
}
