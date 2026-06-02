import type { GrillPhoto } from '../data/content'

// Shows the real photo once `src` is set; until then, a captioned placeholder
// describing the shot to take.
export default function PhotoPlaceholder({ caption, shot, src }: GrillPhoto) {
  return (
    <figure className="rounded-2xl overflow-hidden border border-navy/10 bg-white shadow-[var(--shadow-soft)]">
      {src ? (
        <img src={src} alt={caption} className="w-full aspect-[4/3] object-cover" loading="lazy" />
      ) : (
        <div className="aspect-[4/3] flex flex-col items-center justify-center text-center gap-2 p-5 bg-sand border-b border-dashed border-navy/20">
          <span className="text-3xl" aria-hidden>📷</span>
          <span className="text-xs uppercase tracking-[0.12em] font-semibold text-seafoam">Photo to take</span>
          <span className="text-sm text-slate">{shot}</span>
        </div>
      )}
      <figcaption className="px-4 py-3 font-semibold text-navy-dark text-sm">{caption}</figcaption>
    </figure>
  )
}
