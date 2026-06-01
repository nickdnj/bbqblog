import type { Post, User } from './types'

const TOKEN_KEY = 'picnic_token'

export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const setToken = (t: string) => localStorage.setItem(TOKEN_KEY, t)
export const clearToken = () => localStorage.removeItem(TOKEN_KEY)

class ApiError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

async function request<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const headers: Record<string, string> = { ...(opts.headers as Record<string, string>) }
  if (opts.body && !headers['Content-Type']) headers['Content-Type'] = 'application/json'
  const token = getToken()
  if (token) headers['Authorization'] = `Bearer ${token}`

  const res = await fetch(`/api${path}`, { ...opts, headers })
  if (!res.ok) {
    let msg = res.statusText
    try {
      const data = await res.json()
      msg = data.error || msg
    } catch {
      /* non-json error */
    }
    if (res.status === 401) clearToken()
    throw new ApiError(res.status, msg)
  }
  if (res.status === 204) return undefined as T
  return res.json() as Promise<T>
}

// ---- public ----
export const listPosts = (params: { category?: string; limit?: number } = {}) => {
  const q = new URLSearchParams()
  if (params.category) q.set('category', params.category)
  if (params.limit) q.set('limit', String(params.limit))
  const qs = q.toString()
  return request<Post[]>(`/posts${qs ? `?${qs}` : ''}`)
}
export const getPost = (slug: string) => request<Post>(`/posts/${slug}`)

// ---- auth ----
export const login = (email: string, password: string) =>
  request<{ token: string; user: User }>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
export const me = () => request<User>('/auth/me')

// ---- admin posts ----
export const adminListPosts = () => request<Post[]>('/admin/posts')
export const adminGetPost = (id: number) => request<Post>(`/admin/posts/${id}`)
export const adminCreatePost = (body: Partial<Post>) =>
  request<Post>('/admin/posts', { method: 'POST', body: JSON.stringify(body) })
export const adminUpdatePost = (id: number, body: Partial<Post>) =>
  request<Post>(`/admin/posts/${id}`, { method: 'PUT', body: JSON.stringify(body) })
export const adminDeletePost = (id: number) => request<void>(`/admin/posts/${id}`, { method: 'DELETE' })

export { ApiError }
