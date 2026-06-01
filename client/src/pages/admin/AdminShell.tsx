import type { ReactNode } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Container } from '../../components/ui'
import { clearToken } from '../../lib/api'
import { useAuth } from '../../lib/useAuth'

export default function AdminShell({ children }: { children: ReactNode }) {
  const { loading, user } = useAuth()
  const navigate = useNavigate()

  if (loading) return <Container className="py-24 text-center text-muted">Checking session…</Container>
  if (!user) return <Navigate to="/admin/login" replace />

  return (
    <div className="min-h-screen bg-foam flex flex-col">
      <header className="bg-navy-dark text-white">
        <Container className="flex items-center justify-between py-4">
          <Link to="/admin" className="font-display font-bold flex items-center gap-2">
            <span aria-hidden>🌊</span> Picnic Guide Admin
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">View site ↗</Link>
            <span className="text-white/60">{user.email}</span>
            <button
              onClick={() => {
                clearToken()
                navigate('/admin/login')
              }}
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20"
            >
              Sign out
            </button>
          </div>
        </Container>
      </header>
      <main className="flex-1 py-10">
        <Container>{children}</Container>
      </main>
    </div>
  )
}
