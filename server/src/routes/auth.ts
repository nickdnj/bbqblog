import { Router } from 'express'
import { eq } from 'drizzle-orm'
import bcrypt from 'bcryptjs'
import { db } from '../db'
import { users } from '../db/schema'
import { requireAuth, signToken } from '../auth'

export const authRouter = Router()

authRouter.post('/login', (req, res) => {
  const { email, password } = req.body ?? {}
  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'Email and password are required.' })
  }
  const user = db.select().from(users).where(eq(users.email, email.toLowerCase().trim())).get()
  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({ error: 'Invalid email or password.' })
  }
  const safe = { id: user.id, email: user.email, name: user.name, role: user.role }
  res.json({ token: signToken(safe), user: safe })
})

authRouter.get('/me', requireAuth, (req, res) => {
  res.json(req.user)
})
