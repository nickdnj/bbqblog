import { useState } from 'react'
import { Section, SectionHeading } from '../components/ui'
import { episodes, lightingMethods, lightingRecommendation, type Episode } from '../data/content'

function LightingMethods() {
  return (
    <div className="mb-16">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="uppercase tracking-[0.1em] text-xs font-semibold text-seafoam mb-2">Start the Fire</p>
        <h3 className="text-2xl text-white">Three ways to light the grill</h3>
        <p className="mt-2 text-white/70">All three work. Bob walks through each — here’s the rundown.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {lightingMethods.map((m) => (
          <article
            key={m.name}
            className={`rounded-2xl p-6 border ${m.recommended ? 'border-seafoam/60 bg-white/[0.06]' : 'border-white/10 bg-white/[0.03]'}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl" aria-hidden>{m.emoji}</span>
              <h4 className="text-white text-lg">{m.name}</h4>
            </div>
            {m.recommended && (
              <span className="inline-block mb-2 text-xs font-semibold uppercase tracking-wide text-navy-dark bg-seafoam rounded-full px-2.5 py-0.5">
                Recommended
              </span>
            )}
            <p className="text-white/80 text-sm">{m.how}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-seafoam">Pros</p>
            <ul className="mt-1 space-y-1 text-sm text-white/75">
              {m.pros.map((p) => <li key={p}>+ {p}</li>)}
            </ul>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-white/50">Cons</p>
            <ul className="mt-1 space-y-1 text-sm text-white/60">
              {m.cons.map((c) => <li key={c}>– {c}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-6 max-w-3xl mx-auto bg-seafoam/15 border-l-4 border-seafoam rounded-xl p-5">
        <p className="text-white/90"><strong className="text-seafoam">Bob’s pick:</strong> {lightingRecommendation}</p>
      </div>
    </div>
  )
}

function VideoCard({ ep }: { ep: Episode }) {
  const [playing, setPlaying] = useState(false)
  const ready = Boolean(ep.youtubeId)

  return (
    <article className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden flex flex-col">
      {playing && ready ? (
        <div className="relative aspect-video">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${ep.youtubeId}?autoplay=1`}
            title={`Bob's Grill School — ${ep.title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <button
          type="button"
          disabled={!ready}
          onClick={() => setPlaying(true)}
          aria-label={ready ? `Play: ${ep.title}` : `${ep.title} — coming soon`}
          className="relative aspect-video w-full flex flex-col items-center justify-center gap-2 text-white bg-gradient-to-br from-navy/60 to-navy-dark/90 bg-cover bg-center disabled:cursor-default"
          style={ready ? { backgroundImage: `url(https://i.ytimg.com/vi/${ep.youtubeId}/hqdefault.jpg)` } : undefined}
        >
          <span className="w-14 h-14 rounded-full bg-navy-dark/65 border-2 border-white/70 flex items-center justify-center text-xl pl-1">▶</span>
          {!ready && <span className="text-xs uppercase tracking-[0.12em] font-semibold text-seafoam">Coming soon</span>}
        </button>
      )}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs uppercase tracking-[0.12em] font-semibold text-seafoam mb-1">
          Episode {ep.num} · {ep.level}
        </p>
        <h3 className="text-white text-lg">{ep.title}</h3>
        <p className="mt-1 text-white/75 text-sm">{ep.desc}</p>

        {/* Storyboard — embedded so Nick & Bob can review the plan live */}
        <details className="mt-4 group">
          <summary className="cursor-pointer text-sm font-semibold text-seafoam list-none flex items-center gap-1">
            <span className="group-open:rotate-90 transition-transform inline-block">▸</span> Storyboard (for review)
          </summary>
          <div className="mt-3 text-sm">
            <p className="text-white/80 italic mb-3">{ep.storyboard.objective}</p>
            <ol className="space-y-3">
              {ep.storyboard.beats.map((b, i) => (
                <li key={i} className="border-l-2 border-white/15 pl-3">
                  <p className="text-xs font-mono text-seafoam">{b.time} · {b.shot}</p>
                  <p className="text-white/75 mt-0.5">{b.script}</p>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-seafoam">Takeaways</p>
            <ul className="mt-1 space-y-1 text-white/75">
              {ep.storyboard.takeaways.map((t) => <li key={t}>• {t}</li>)}
            </ul>
          </div>
        </details>
      </div>
    </article>
  )
}

export default function School() {
  return (
    <Section tone="dark" id="school">
      <SectionHeading
        dark
        eyebrow="Watch & Learn"
        title="Bob's Grill School"
        subtitle="Our neighbor Bob walks you through it on camera — short, friendly how-tos shot right here at the grove. New episodes drop through the season. Got a question for Bob? Mention it to the HOA office."
      />

      <LightingMethods />

      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="uppercase tracking-[0.1em] text-xs font-semibold text-seafoam mb-2">The Series</p>
        <h3 className="text-2xl text-white">Episodes</h3>
        <p className="mt-2 text-white/70">Videos coming soon — expand any episode to see the storyboard we’re planning to shoot.</p>
      </div>
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {episodes.map((ep) => (
          <VideoCard key={ep.num} ep={ep} />
        ))}
      </div>
    </Section>
  )
}
