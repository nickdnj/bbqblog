import { useState } from 'react'
import { Section, SectionHeading } from '../components/ui'
import { episodes, type Episode } from '../data/content'

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
          <span className="w-14 h-14 rounded-full bg-navy-dark/65 border-2 border-white/70 flex items-center justify-center text-xl pl-1">
            ▶
          </span>
          {!ready && (
            <span className="text-xs uppercase tracking-[0.12em] font-semibold text-seafoam">Coming soon</span>
          )}
        </button>
      )}
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.12em] font-semibold text-seafoam mb-1">Episode {ep.num}</p>
        <h3 className="text-white text-lg">{ep.title}</h3>
        <p className="mt-1 text-white/75 text-sm">{ep.desc}</p>
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
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {episodes.map((ep) => (
          <VideoCard key={ep.num} ep={ep} />
        ))}
      </div>
    </Section>
  )
}
