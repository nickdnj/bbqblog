import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Container } from '../../components/ui'
import { getToken, login, setToken } from '../../lib/api'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  if (getToken()) return <Navigate to="/admin" replace />

  const input =
    'px-4 py-3 rounded-xl border border-navy/20 bg-foam focus:outline-none focus:border-seafoam focus:ring-2 focus:ring-seafoam/40'

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setBusy(true)
    try {
      const { token } = await login(email, password)
      setToken(token)
      navigate('/admin')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign-in failed.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-br from-navy to-navy-dark p-6">
      <Container className="max-w-md">
        <form onSubmit={submit} className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)]">
          <h1 className="text-2xl text-navy-dark flex items-center gap-2">
            <span aria-hidden>🌊</span> Picnic Guide Admin
          </h1>
          <p className="mt-1 text-muted text-sm">Board sign-in to publish news, tips, and recaps.</p>
          <div className="mt-6 flex flex-col gap-4">
            <label className="flex flex-col gap-2 font-semibold text-slate">
              <span>Email</span>
              <input className={input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoFocus />
            </label>
            <label className="flex flex-col gap-2 font-semibold text-slate">
              <span>Password</span>
              <input className={input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            {error && <p className="text-red-600 text-sm font-medium">{error}</p>}
            <button
              type="submit"
              disabled={busy}
              className="mt-2 px-6 py-3 rounded-full font-semibold bg-seafoam text-navy-dark disabled:opacity-60"
            >
              {busy ? 'Signing in…' : 'Sign in'}
            </button>
          </div>
        </form>
      </Container>
    </div>
  )
}
