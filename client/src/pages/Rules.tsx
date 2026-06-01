import { Section, SectionHeading } from '../components/ui'
import { rules } from '../data/content'

export default function Rules() {
  return (
    <Section tone="alt" id="rules">
      <SectionHeading
        eyebrow="Policies & Safety"
        title="Picnic & grill rules everyone must follow"
        subtitle="Based on Monmouth County Parks regulations, Borough of Monmouth Beach ordinances, NFPA guidance, and Wharfside HOA policies."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {rules.map((r, i) => (
          <details
            key={r.title}
            open={i === 0}
            className="bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] border border-navy/10 group"
          >
            <summary className="font-semibold text-navy-dark cursor-pointer list-none flex justify-between items-center">
              {r.title}
              <span className="text-seafoam group-open:rotate-45 transition-transform text-xl leading-none">+</span>
            </summary>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-slate marker:text-seafoam">
              {r.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </Section>
  )
}
