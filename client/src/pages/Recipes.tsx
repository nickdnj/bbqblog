import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Section, SectionHeading } from '../components/ui'
import { recipes, RECIPE_CATEGORIES, RECIPE_SEASONS } from '../data/content'

const categoryFilters = ['All', ...RECIPE_CATEGORIES] as const
const seasonFilters = ['All', ...RECIPE_SEASONS] as const

const difficultyColor: Record<string, string> = {
  Beginner: 'bg-seafoam/30 text-navy-dark',
  Intermediate: 'bg-amber-100 text-amber-800',
  Advanced: 'bg-orange-100 text-orange-800',
}

function Chips({
  options,
  value,
  onChange,
}: {
  options: readonly string[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex justify-center gap-2 flex-wrap">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
            value === o
              ? 'bg-seafoam text-navy-dark border-seafoam shadow-[0_8px_20px_rgba(123,218,196,0.25)]'
              : 'bg-white text-slate border-navy/15 hover:border-seafoam'
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  )
}

export default function Recipes() {
  const [category, setCategory] = useState<string>('All')
  const [season, setSeason] = useState<string>('All')

  const shown = recipes
    .filter((r) => (category === 'All' || r.category === category) && (season === 'All' || r.season === season))
    // Lead with the local Jersey catch (stable otherwise)
    .slice()
    .sort((a, b) => Number(Boolean(b.local)) - Number(Boolean(a.local)))

  return (
    <Section id="recipes">
      <SectionHeading
        eyebrow="From the grill"
        title="Recipes for the grove"
        subtitle="Real, tested recipes — adapted for our communal charcoal grills. Browse by what you're cooking or by season. Our Seafood leads with the local catch: fresh Jersey Shore fish and shellfish."
      />

      <div className="space-y-4 mb-10">
        <div>
          <p className="text-center text-xs uppercase tracking-wide text-muted font-semibold mb-2">By type</p>
          <Chips options={categoryFilters} value={category} onChange={setCategory} />
        </div>
        <div>
          <p className="text-center text-xs uppercase tracking-wide text-muted font-semibold mb-2">By season</p>
          <Chips options={seasonFilters} value={season} onChange={setSeason} />
        </div>
      </div>

      {shown.length === 0 ? (
        <p className="text-center text-muted">No recipes match that combo yet — try a different type or season.</p>
      ) : (
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((r) => (
            <Link
              key={r.slug}
              to={`/recipes/${r.slug}`}
              className="flex flex-col bg-white rounded-2xl p-7 shadow-[var(--shadow-soft)] border border-navy/8 transition-transform hover:-translate-y-1.5"
            >
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                {r.local && (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-navy text-white">🎣 Jersey local</span>
                )}
                <span className="text-xs font-semibold uppercase tracking-wide text-navy">{r.category}</span>
                <span className="text-xs text-muted">· {r.season}</span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyColor[r.difficulty]}`}>
                  {r.difficulty}
                </span>
              </div>
              <h3 className="text-xl text-navy-dark">{r.title}</h3>
              <p className="mt-1 text-sm font-semibold text-muted">{r.tagline}</p>
              <p className="mt-3 text-slate flex-1">{r.summary}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-muted">⏱ {r.prepTime} · {r.cookTime}</span>
                <span className="font-semibold text-navy">View recipe →</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </Section>
  )
}
