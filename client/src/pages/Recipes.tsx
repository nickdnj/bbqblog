import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Section, SectionHeading } from '../components/ui'
import { recipes, RECIPE_CATEGORIES } from '../data/content'

const filters = ['All', ...RECIPE_CATEGORIES] as const

const difficultyColor: Record<string, string> = {
  Beginner: 'bg-seafoam/30 text-navy-dark',
  Intermediate: 'bg-amber-100 text-amber-800',
  Advanced: 'bg-orange-100 text-orange-800',
}

export default function Recipes() {
  const [filter, setFilter] = useState<string>('All')
  const shown = recipes.filter((r) => filter === 'All' || r.category === filter)

  return (
    <Section id="recipes">
      <SectionHeading
        eyebrow="From the grill"
        title="Recipes for the grove"
        subtitle="Real, tested recipes — adapted for our communal charcoal grills with two-zone fires, foil packets, and cast-iron on the grate. Tap one for the full ingredients and step-by-step."
      />

      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full font-semibold border transition-colors ${
              filter === f
                ? 'bg-seafoam text-navy-dark border-seafoam shadow-[0_8px_20px_rgba(123,218,196,0.25)]'
                : 'bg-white text-slate border-navy/15 hover:border-seafoam'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((r) => (
          <Link
            key={r.slug}
            to={`/recipes/${r.slug}`}
            className="flex flex-col bg-white rounded-2xl p-7 shadow-[var(--shadow-soft)] border border-navy/8 transition-transform hover:-translate-y-1.5"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-navy">{r.category}</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyColor[r.difficulty]}`}>
                {r.difficulty}
              </span>
            </div>
            <h3 className="text-xl text-navy-dark">{r.title}</h3>
            <p className="mt-1 text-sm font-semibold text-muted">{r.tagline}</p>
            <p className="mt-3 text-slate flex-1">{r.summary}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-muted">⏱ {r.prepTime} prep · {r.cookTime}</span>
              <span className="font-semibold text-navy">View recipe →</span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}
