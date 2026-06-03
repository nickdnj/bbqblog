import { Link } from 'react-router-dom'
import { Section, SectionHeading } from '../components/ui'
import { steps } from '../data/content'
import InstallGuide from '../components/InstallGuide'

export default function Start() {
  return (
    <Section tone="alt" id="start">
      <SectionHeading
        eyebrow="Start Here"
        title="Your first cookout, in 6 simple steps"
        subtitle="Charcoal isn't hard — it's just different from the gas grill at home. Follow these six steps and you'll be the one showing the next neighbor how it's done."
      />

      <InstallGuide />

      <div className="flex gap-4 items-start max-w-3xl mx-auto mb-12 bg-white border border-navy/10 border-l-4 border-l-seafoam rounded-xl p-5 shadow-[var(--shadow-soft)] text-slate">
        <span className="text-2xl leading-none" aria-hidden>🔥</span>
        <p>
          <strong>Gas vs. charcoal, in one sentence:</strong> instead of turning a knob, you light a pile of charcoal,
          wait about 15–20 minutes for it to glow and turn ashy-gray, then cook over that heat. That wait is the only
          real difference — and it's the best part.
        </p>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <article key={s.num} className="bg-white rounded-2xl p-7 shadow-[var(--shadow-card)] border border-navy/5">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy text-white font-display font-bold text-lg mb-4">
              {s.num}
            </span>
            <h3 className="text-xl text-navy-dark">{s.title}</h3>
            <p className="mt-2 text-slate">{s.body}</p>
            {s.checklist && (
              <ul className="mt-3 space-y-2">
                {s.checklist.map((c) => (
                  <li key={c} className="relative pl-6 text-slate">
                    <span className="absolute left-0 text-seafoam font-bold">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            )}
            {s.tip && <p className="mt-4 text-sm italic text-muted">{s.tip}</p>}
          </article>
        ))}
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-slate">
          Want to watch it instead of read it?{' '}
          <Link to="/school" className="font-semibold text-navy underline">
            See Bob's Grill School →
          </Link>
        </p>
      </div>
    </Section>
  )
}
