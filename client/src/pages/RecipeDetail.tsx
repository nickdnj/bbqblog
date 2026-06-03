import { Link, useParams } from 'react-router-dom'
import { Container } from '../components/ui'
import { recipes } from '../data/content'

export default function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>()
  const recipe = recipes.find((r) => r.slug === slug)

  if (!recipe) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-2xl text-navy-dark">Recipe not found</h1>
        <Link to="/recipes" className="mt-4 inline-block font-semibold text-navy">← Back to recipes</Link>
      </Container>
    )
  }

  const atAGlance: [string, string][] = [
    ['Difficulty', recipe.difficulty],
    ['Prep', recipe.prepTime],
    ['Cook', recipe.cookTime],
    ['Serves', recipe.serves],
    ['Grill setup', recipe.grillSetup],
  ]

  return (
    <article>
      {/* Hero */}
      <div className="bg-gradient-to-br from-navy to-navy-dark text-white py-14">
        <Container>
          <Link to="/recipes" className="text-seafoam text-sm font-semibold">← Recipes</Link>
          <p className="mt-4 text-xs uppercase tracking-[0.12em] font-semibold text-seafoam">
            {recipe.local && '🎣 Jersey local · '}{recipe.category} · {recipe.season}
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl text-white">{recipe.title}</h1>
          <p className="mt-3 text-white/85 max-w-2xl">{recipe.summary}</p>
        </Container>
      </div>

      <Container className="py-12 max-w-3xl">
        {/* At a glance */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-10">
          {atAGlance.map(([k, v]) => (
            <div key={k} className="bg-sand rounded-xl p-4 text-center">
              <div className="text-xs uppercase tracking-wide text-muted font-semibold">{k}</div>
              <div className="mt-1 font-semibold text-navy-dark text-sm">{v}</div>
            </div>
          ))}
        </div>

        {recipe.areaNote && (
          <div className="flex gap-3 items-start mb-8 bg-white border border-navy/10 border-l-4 border-l-seafoam rounded-xl p-5 shadow-[var(--shadow-soft)]">
            <span className="text-2xl leading-none" aria-hidden>🔥</span>
            <p className="text-slate"><strong>At the picnic area:</strong> {recipe.areaNote}</p>
          </div>
        )}

        {recipe.tools && recipe.tools.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <h2 className="text-lg text-navy-dark">Tools you’ll need</h2>
              <Link to="/tools" className="text-sm font-semibold text-navy">See the gear guide →</Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {recipe.tools.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-sand text-navy-dark text-sm font-medium border border-navy/10">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-[0.8fr_1.2fr] gap-10">
          {/* Ingredients */}
          <div>
            <h2 className="text-2xl text-navy-dark mb-4">Ingredients</h2>
            {recipe.ingredients.map((grp, i) => (
              <div key={i} className="mb-5">
                {grp.group && <h3 className="text-sm uppercase tracking-wide text-seafoam font-semibold mb-2">{grp.group}</h3>}
                <ul className="space-y-2">
                  {grp.items.map((item) => (
                    <li key={item} className="relative pl-6 text-slate">
                      <span className="absolute left-0 text-seafoam font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Steps */}
          <div>
            <h2 className="text-2xl text-navy-dark mb-4">Step by step</h2>
            <ol className="space-y-4">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-none inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white font-display font-bold text-sm">
                    {i + 1}
                  </span>
                  <p className="text-slate pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {recipe.tips && recipe.tips.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl text-navy-dark mb-3">Tips</h2>
            <ul className="space-y-2 list-disc pl-5 text-slate marker:text-seafoam">
              {recipe.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        )}

        {recipe.safety && (
          <p className="mt-8 p-4 bg-seafoam/15 border-l-4 border-seafoam rounded-lg text-navy-dark">
            <strong>🌡️ Food safety:</strong> {recipe.safety}
          </p>
        )}

        <p className="mt-8 text-sm italic text-muted">{recipe.source}</p>

        <Link to="/recipes" className="mt-10 inline-block font-semibold text-navy">← Back to all recipes</Link>
      </Container>
    </article>
  )
}
