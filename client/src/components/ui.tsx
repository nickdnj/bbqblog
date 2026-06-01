import type { ReactNode } from 'react'

export const btnBase =
  'inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-transform hover:-translate-y-0.5'
export const btnPrimary = `${btnBase} bg-seafoam text-navy-dark shadow-[0_12px_25px_rgba(123,218,196,0.25)]`
export const btnGhost = `${btnBase} border-2 border-white/70 text-white hover:bg-white/10`

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-[min(100%-2.5rem,1200px)] ${className}`}>{children}</div>
}

export function Section({
  children,
  tone = 'light',
  id,
}: {
  children: ReactNode
  tone?: 'light' | 'alt' | 'dark'
  id?: string
}) {
  const bg = tone === 'alt' ? 'bg-sand' : tone === 'dark' ? 'bg-navy-dark text-white/90' : 'bg-foam'
  return (
    <section id={id} className={`py-16 ${bg}`}>
      <Container>{children}</Container>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  dark?: boolean
}) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      {eyebrow && (
        <p className="uppercase tracking-[0.1em] text-xs font-semibold text-seafoam mb-3">{eyebrow}</p>
      )}
      <h2 className={`text-3xl sm:text-4xl ${dark ? 'text-white' : 'text-navy-dark'}`}>{title}</h2>
      {subtitle && <p className={`mt-4 ${dark ? 'text-white/75' : 'text-muted'}`}>{subtitle}</p>}
    </div>
  )
}

export function Btn({
  to,
  href,
  children,
  variant = 'primary',
  onClick,
  type,
}: {
  to?: string
  href?: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  onClick?: () => void
  type?: 'button' | 'submit'
}) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-transform hover:-translate-y-0.5'
  const styles =
    variant === 'primary'
      ? 'bg-seafoam text-navy-dark shadow-[0_12px_25px_rgba(123,218,196,0.25)]'
      : 'border-2 border-white/70 text-white hover:bg-white/10'
  const cls = `${base} ${styles}`
  if (to) {
    // lazy import avoided; use anchor for hash, Link handled by caller normally
    return (
      <a href={to} onClick={onClick} className={cls}>
        {children}
      </a>
    )
  }
  if (href) return <a href={href} className={cls}>{children}</a>
  return (
    <button type={type ?? 'button'} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
