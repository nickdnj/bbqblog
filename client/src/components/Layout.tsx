import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { HOA_PHONE } from '../data/content'

const navLinks = [
  { to: '/start', label: 'Start Here' },
  { to: '/grills', label: 'Our Grills' },
  { to: '/school', label: "Bob's School" },
  { to: '/rules', label: 'Rules' },
  { to: '/recipes', label: 'Recipes' },
  { to: '/blog', label: 'Blog' },
  { to: '/reserve', label: 'Reserve' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-foam/95 backdrop-blur border-b border-navy/10">
        <div className="mx-auto w-[min(100%-2.5rem,1200px)] flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-navy-dark text-lg" onClick={() => setOpen(false)}>
            <span aria-hidden>🌊</span> Wharfside Picnic Guide
          </Link>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-6 h-0.5 bg-navy-dark rounded" />
            <span className="block w-6 h-0.5 bg-navy-dark rounded" />
            <span className="block w-6 h-0.5 bg-navy-dark rounded" />
          </button>

          <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-navy ${isActive ? 'text-navy' : 'text-slate'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {open && (
          <nav className="md:hidden border-t border-navy/10 bg-white px-5 py-4" aria-label="Mobile">
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `block font-medium ${isActive ? 'text-navy' : 'text-navy-dark'}`}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-1" key={pathname}>
        <Outlet />
      </main>

      <footer className="bg-navy-dark text-white/85 pt-12 pb-8">
        <div className="mx-auto w-[min(100%-2.5rem,1200px)] grid gap-8 sm:grid-cols-3">
          <div>
            <h2 className="text-white font-display text-lg">Stay connected</h2>
            <p className="mt-2 text-sm">
              Wharfside Manor Condominium Association · 146 Wharfside Dr · Monmouth Beach, NJ 07750 · HOA Office {HOA_PHONE}
            </p>
            <p className="mt-2 text-sm font-semibold">Emergency: Dial 911 first, then contact the HOA office.</p>
          </div>
          <div>
            <h3 className="text-white font-display">Quick links</h3>
            <ul className="mt-2 grid gap-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link className="hover:underline" to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-display">Wharfside Picnic Grove</h3>
            <p className="mt-2 text-sm">
              The community guide to grilling at the waterfront grove — install it to your home screen for the rules,
              how-tos, and recipes anytime.
            </p>
          </div>
        </div>
        <p className="mx-auto mt-10 w-[min(100%-2.5rem,1200px)] text-center text-sm text-white/60">
          © {new Date().getFullYear()} Wharfside Manor Condo Association. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
