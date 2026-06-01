import { Link } from 'react-router-dom'
import { Container, Section, btnPrimary, btnGhost } from '../components/ui'
import { quickFacts } from '../data/content'
import LatestPosts from '../components/LatestPosts'

const highlights = [
  { to: '/start', emoji: '🔥', title: 'Start Here', text: 'Never grilled on charcoal? Your first cookout in 6 simple steps.' },
  { to: '/grills', emoji: '🛠️', title: 'Our Grills', text: 'Meet the Kay Park SF163.5 — the commercial park grills in our grove.' },
  { to: '/school', emoji: '🎬', title: "Bob's School", text: 'Short how-to videos shot right here at the grove.' },
  { to: '/rules', emoji: '📋', title: 'Rules', text: 'Picnic, grill, fire-safety, and cleanup rules everyone follows.' },
  { to: '/recipes', emoji: '🌽', title: 'Recipes', text: 'Seasonal menus built for Jersey Shore spring, summer, and fall.' },
  { to: '/reserve', emoji: '📅', title: 'Reserve a Grill', text: 'Planning a bigger gathering? Request a grill slot.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-20">
        <Container className="grid gap-12 sm:grid-cols-[1fr_0.9fr] items-start">
          <div>
            <p className="uppercase tracking-[0.1em] text-xs font-semibold text-seafoam mb-3">
              Wharfside Manor · Monmouth Beach, NJ
            </p>
            <h1 className="text-4xl sm:text-5xl text-white leading-tight">
              Never grilled on charcoal? You're in the right place.
            </h1>
            <p className="mt-4 text-white/85 text-lg">
              Our picnic grove just reopened with new tables and 11 community charcoal grills. If the only grill you've
              used is the gas one at home, don't sweat it — this guide takes you from "I've never lit charcoal" to
              flipping burgers by the water, one simple step at a time.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/start" className={btnPrimary}>Start grilling in 6 steps</Link>
              <Link to="/reserve" className={btnGhost}>Reserve a grill</Link>
            </div>
          </div>
          <aside className="bg-white/10 backdrop-blur rounded-2xl p-8 shadow-[var(--shadow-soft)]">
            <h2 className="text-white font-display text-xl">Quick facts</h2>
            <ul className="mt-6 space-y-3">
              {quickFacts.map((f) => (
                <li key={f} className="pl-5 relative text-white/90">
                  <span className="absolute left-0 text-seafoam">•</span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-6 italic text-white/85">
              Rotate the firebox away from the wind before lighting — it spins a full 360°.
            </p>
          </aside>
        </Container>
      </section>

      {/* Section highlights */}
      <Section tone="alt">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <Link
              key={h.to}
              to={h.to}
              className="bg-white rounded-2xl p-7 shadow-[var(--shadow-card)] border border-navy/5 transition-transform hover:-translate-y-1.5"
            >
              <div className="text-3xl" aria-hidden>{h.emoji}</div>
              <h3 className="mt-3 text-xl text-navy-dark">{h.title}</h3>
              <p className="mt-1 text-muted">{h.text}</p>
              <span className="mt-3 inline-block font-semibold text-navy">Explore →</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Latest from the blog */}
      <Section>
        <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
          <div>
            <p className="uppercase tracking-[0.1em] text-xs font-semibold text-seafoam mb-2">From the grove</p>
            <h2 className="text-3xl text-navy-dark">Latest news & tips</h2>
          </div>
          <Link to="/blog" className="font-semibold text-navy">View all posts →</Link>
        </div>
        <LatestPosts limit={3} />
      </Section>
    </>
  )
}
