export type Post = {
  id: number
  slug: string
  title: string
  excerpt: string | null
  body: string
  category: string
  status: 'draft' | 'published'
  heroImage: string | null
  author: string | null
  publishedAt: string | null
  createdAt: string
  updatedAt: string
}

export type User = { id: number; email: string; name: string | null; role: string }
