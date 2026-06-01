import { Router } from 'express'
import { and, desc, eq } from 'drizzle-orm'
import { db } from '../db'
import { posts } from '../db/schema'

export const postsRouter = Router()

// GET /api/posts?category=Events&limit=3  — published posts only
postsRouter.get('/', (req, res) => {
  const category = typeof req.query.category === 'string' ? req.query.category : undefined
  const limit = Math.min(Number(req.query.limit) || 100, 100)

  const where = category
    ? and(eq(posts.status, 'published'), eq(posts.category, category))
    : eq(posts.status, 'published')

  const rows = db.select().from(posts).where(where).orderBy(desc(posts.publishedAt)).limit(limit).all()
  res.json(rows)
})

// GET /api/posts/:slug — published only
postsRouter.get('/:slug', (req, res) => {
  const row = db.select().from(posts).where(eq(posts.slug, req.params.slug)).get()
  if (!row || row.status !== 'published') {
    return res.status(404).json({ error: 'Post not found.' })
  }
  res.json(row)
})
