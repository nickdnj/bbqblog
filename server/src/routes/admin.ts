import { Router } from 'express'
import { desc, eq, like } from 'drizzle-orm'
import { db } from '../db'
import { posts } from '../db/schema'
import { requireAuth } from '../auth'
import { makeExcerpt, slugify } from '../util'

export const adminRouter = Router()
adminRouter.use(requireAuth)

const CATEGORIES = ['Events', 'Tips', 'Recaps', 'Recipes', 'General']

function uniqueSlug(title: string): string {
  const base = slugify(title) || 'post'
  const taken = db.select({ slug: posts.slug }).from(posts).where(like(posts.slug, `${base}%`)).all()
  const set = new Set(taken.map((r) => r.slug))
  if (!set.has(base)) return base
  let n = 2
  while (set.has(`${base}-${n}`)) n++
  return `${base}-${n}`
}

// list ALL posts (drafts included)
adminRouter.get('/posts', (_req, res) => {
  res.json(db.select().from(posts).orderBy(desc(posts.updatedAt)).all())
})

adminRouter.get('/posts/:id', (req, res) => {
  const row = db.select().from(posts).where(eq(posts.id, Number(req.params.id))).get()
  if (!row) return res.status(404).json({ error: 'Post not found.' })
  res.json(row)
})

adminRouter.post('/posts', (req, res) => {
  const { title, body, excerpt, category, status, heroImage, author } = req.body ?? {}
  if (typeof title !== 'string' || !title.trim() || typeof body !== 'string' || !body.trim()) {
    return res.status(400).json({ error: 'Title and body are required.' })
  }
  const now = new Date().toISOString()
  const cat = CATEGORIES.includes(category) ? category : 'General'
  const published = status === 'published'
  const row = db
    .insert(posts)
    .values({
      slug: uniqueSlug(title),
      title: title.trim(),
      body,
      excerpt: (excerpt?.trim() || makeExcerpt(body)) ?? null,
      category: cat,
      status: published ? 'published' : 'draft',
      heroImage: heroImage?.trim() || null,
      author: author?.trim() || req.user?.name || null,
      publishedAt: published ? now : null,
      createdAt: now,
      updatedAt: now,
    })
    .returning()
    .get()
  res.status(201).json(row)
})

adminRouter.put('/posts/:id', (req, res) => {
  const id = Number(req.params.id)
  const existing = db.select().from(posts).where(eq(posts.id, id)).get()
  if (!existing) return res.status(404).json({ error: 'Post not found.' })

  const { title, body, excerpt, category, status, heroImage, author } = req.body ?? {}
  const now = new Date().toISOString()
  const willPublish = status === 'published'

  const row = db
    .update(posts)
    .set({
      title: typeof title === 'string' && title.trim() ? title.trim() : existing.title,
      body: typeof body === 'string' && body.trim() ? body : existing.body,
      excerpt: excerpt !== undefined ? excerpt?.trim() || makeExcerpt(body ?? existing.body) : existing.excerpt,
      category: CATEGORIES.includes(category) ? category : existing.category,
      status: willPublish ? 'published' : 'draft',
      heroImage: heroImage !== undefined ? heroImage?.trim() || null : existing.heroImage,
      author: author !== undefined ? author?.trim() || null : existing.author,
      // set publishedAt the first time it goes live; keep it thereafter
      publishedAt: willPublish ? existing.publishedAt || now : existing.publishedAt,
      updatedAt: now,
    })
    .where(eq(posts.id, id))
    .returning()
    .get()
  res.json(row)
})

adminRouter.delete('/posts/:id', (req, res) => {
  const id = Number(req.params.id)
  const deleted = db.delete(posts).where(eq(posts.id, id)).returning().get()
  if (!deleted) return res.status(404).json({ error: 'Post not found.' })
  res.status(204).end()
})
