import path from 'node:path'
import { existsSync } from 'node:fs'
import express from 'express'
import { seedAdmin } from './db'
import { authRouter } from './routes/auth'
import { postsRouter } from './routes/posts'
import { adminRouter } from './routes/admin'

const app = express()
app.disable('x-powered-by')
app.use(express.json({ limit: '1mb' }))

// Health check (for the Cloudflare Tunnel / fleet monitoring)
app.get('/healthz', (_req, res) => res.type('text').send('ok'))
app.get('/api/health', (_req, res) => res.json({ ok: true }))

// API
app.use('/api/auth', authRouter)
app.use('/api/posts', postsRouter)
app.use('/api/admin', adminRouter)
app.use('/api', (_req, res) => res.status(404).json({ error: 'Not found.' }))

// Serve the built PWA (production) with SPA fallback
const clientDist = process.env.CLIENT_DIST || path.join(__dirname, '../../client/dist')
if (existsSync(clientDist)) {
  app.use(express.static(clientDist))
  app.get('*', (_req, res) => res.sendFile(path.join(clientDist, 'index.html')))
} else {
  console.log(`[server] client build not found at ${clientDist} (dev mode — Vite serves the frontend)`)
}

// JSON error handler
app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('[server] error:', err)
  res.status(500).json({ error: 'Something went wrong.' })
})

seedAdmin()

const port = Number(process.env.PORT) || 8121
app.listen(port, () => console.log(`[server] Picnic Guide API + static on :${port}`))
