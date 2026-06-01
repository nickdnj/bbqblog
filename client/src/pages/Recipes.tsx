import { useState } from 'react'
import { Section, SectionHeading } from '../components/ui'
import { recipes } from '../data/content'

const filters = ['all', 'spring', 'summer', 'fall'] as const
type Filter = (typeof filters)[number]

export default function Recipes() {
  const [filter, setFilter] = useState<Filter>('all')
  const shown = recipes.filter((r) => filter === 'all' || r.season === filter)

  return (
    <Section id="recipes">
      <SectionHeading
        eyebrow="Seasonal Menus"
        title="Recipes built for the Jersey Shore seasons"
        subtitle="Filter by season to explore hero dishes, sides, and desserts tailored for spring, summer, or fall gatherings."
      />

      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full font-semibold capitalize border transition-colors ${
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
          <article key={r.title} className="bg-white rounded-2xl p-7 shadow-[var(--shadow-soft)] border border-navy/8">
            <h3 className="text-xl text-navy-dark">{r.title}</h3>
            <p className="mt-1 font-semibold text-muted text-sm">{r.meta}</p>
            <p className="mt-3 text-slate">{r.body}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
