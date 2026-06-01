import type { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'dev-only-change-me'
if (process.env.NODE_ENV === 'production' && JWT_SECRET === 'dev-only-change-me') {
  console.warn('[auth] WARNING: JWT_SECRET is not set — set it in production.')
}

export type AuthUser = { id: number; email: string; name: string | null; role: string }

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: AuthUser
    }
  }
}

export function signToken(user: AuthUser): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '7d' })
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authentication required.' })
  }
  try {
    const payload = jwt.verify(header.slice(7), JWT_SECRET) as AuthUser
    req.user = { id: payload.id, email: payload.email, name: payload.name, role: payload.role }
    next()
  } catch {
    return res.status(401).json({ error: 'Session expired — please sign in again.' })
  }
}
