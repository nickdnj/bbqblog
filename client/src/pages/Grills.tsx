import { Section, SectionHeading } from '../components/ui'
import { grillSpecs, grillPhotos } from '../data/content'
import PhotoPlaceholder from '../components/PhotoPlaceholder'

export default function Grills() {
  return (
    <Section id="grills">
      <SectionHeading
        eyebrow="Our Equipment"
        title="Meet our grills: the Kay Park SF163.5"
        subtitle="These aren't backyard hardware-store grills — they're the same heavy-gauge, commercial park grills you'll find in state and national parks, built to be lit thousands of times by thousands of hands. Here's exactly what we put in the grove."
      />

      <div className="grid gap-10 sm:grid-cols-[1fr_0.85fr] items-start">
        <div className="space-y-4 text-slate">
          <p className="font-display font-semibold text-navy-dark flex flex-wrap gap-2 items-center">
            <code className="bg-sand border border-navy/15 rounded px-2 py-0.5 text-navy">SF16</code>
            flip-up-grate park grill ·{' '}
            <code className="bg-sand border border-navy/15 rounded px-2 py-0.5 text-navy">3.5</code>
            = upgraded 3½″ heavy-duty pedestal
          </p>
          <p>
            The whole firebox is cut and welded from <strong>3/16″ steel</strong> — a continuous weld with no seams to
            crack, a reinforced <strong>ash lip</strong> to keep embers contained, rounded corners so nobody catches a
            sharp edge, and drain holes so a Jersey Shore downpour runs right out.
          </p>
          <p>
            The cooking grate is no flimsy wire rack: <strong>½″ steel rods on 1-inch centers</strong>, so it holds
            heat, won't sag under a loaded foil pan, and leaves proper thick sear marks. It <strong>flips back</strong>{' '}
            on a hinge — flip it up to dump in charcoal and light it, flip it up again to rake out cold ash, no lifting a
            hot grate. The handles are <strong>non-removable cool-spring</strong> handles, the public-park standard.
          </p>
          <p>
            Best feature for our windy waterfront: the whole grill <strong>rotates a full 360°</strong> on its pedestal.
            Wind kicking up off the river? Just spin the firebox so your back blocks the gust. The grill head sits on a{' '}
            <strong>3½″ galvanized steel pedestal</strong> set in concrete, and every one has a bolt-on{' '}
            <strong>utility shelf</strong> for landing your platter, tongs, and a cold drink.
          </p>
          <p className="text-center italic text-muted pt-4">
            11 grills · ~1,078 lbs of American steel · built by Kay Park Recreation in Janesville, Iowa —
            "Making People Places, People Friendly Since 1954."
          </p>
        </div>

        <aside className="bg-navy-dark text-white rounded-2xl p-8 shadow-[var(--shadow-card)]">
          <p className="uppercase tracking-[0.1em] text-xs font-semibold text-seafoam">Spec Sheet</p>
          <h3 className="text-white font-display text-xl mt-1">Kay Park SF163.5</h3>
          <dl className="mt-6 space-y-3">
            {grillSpecs.map(([k, v], i) => (
              <div
                key={k}
                className={`flex justify-between items-baseline gap-4 pb-3 ${i < grillSpecs.length - 1 ? 'border-b border-white/15' : ''}`}
              >
                <dt className="text-seafoam font-semibold">{k}</dt>
                <dd className="text-right text-white/90">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      {/* Photo gallery — placeholders until Nick drops in real photos */}
      <div className="mt-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="uppercase tracking-[0.1em] text-xs font-semibold text-seafoam mb-2">Photos</p>
          <h3 className="text-2xl text-navy-dark">A look at the grove</h3>
          <p className="mt-2 text-muted">Photos coming soon — here’s the shot list we’ll capture at the grills.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {grillPhotos.map((p) => (
            <PhotoPlaceholder key={p.caption} {...p} />
          ))}
        </div>
      </div>
    </Section>
  )
}
