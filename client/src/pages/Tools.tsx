import { Link } from 'react-router-dom'
import { Section, SectionHeading } from '../components/ui'
import { tools } from '../data/content'

function ToolCard({ name, emoji, what, tip }: (typeof tools)[number]) {
  return (
    <article className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] border border-navy/8">
      <div className="flex items-center gap-3">
        <span className="text-3xl" aria-hidden>{emoji}</span>
        <h3 className="text-lg text-navy-dark">{name}</h3>
      </div>
      <p className="mt-3 text-slate">{what}</p>
      {tip && <p className="mt-3 text-sm text-muted"><strong className="text-navy">Tip:</strong> {tip}</p>}
    </article>
  )
}

export default function Tools() {
  const essentials = tools.filter((t) => t.essential)
  const upgrades = tools.filter((t) => !t.essential)

  return (
    <>
      <Section id="tools">
        <SectionHeading
          eyebrow="Gear Guide"
          title="What to bring: tools for the grill"
          subtitle="The grills, grates, and ash bins are here for you — these are the tools you bring. Start with the essentials; add the upgrades as you get into it. Each recipe also lists the tools it needs."
        />

        <h2 className="text-2xl text-navy-dark mb-2">The essentials</h2>
        <p className="text-muted mb-6">If you bring nothing else, bring these. A chimney starter alone changes everything.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {essentials.map((t) => (
            <ToolCard key={t.name} {...t} />
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <h2 className="text-2xl text-navy-dark mb-2">Worth the upgrade</h2>
        <p className="text-muted mb-6">
          Not required, but each one unlocks more of what these grills can do — from flat-top crab cakes to live-fire
          stir-fry.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upgrades.map((t) => (
            <ToolCard key={t.name} {...t} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate">
            Ready to cook?{' '}
            <Link to="/recipes" className="font-semibold text-navy underline">Browse the recipes →</Link>
          </p>
        </div>
      </Section>
    </>
  )
}
