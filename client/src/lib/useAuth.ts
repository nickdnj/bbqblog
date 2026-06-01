import { useEffect, useState } from 'react'
import { clearToken, getToken, me } from './api'
import type { User } from './types'

export function useAuth() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (!getToken()) {
      setLoading(false)
      return
    }
    me()
      .then(setUser)
      .catch(() => clearToken())
      .finally(() => setLoading(false))
  }, [])

  return { loading, user }
}
