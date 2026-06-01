// Structured Picnic Guide content — single source of truth for the static pages.
// (Blog posts come from the API; this is the fixed guide material.)

export const HOA_PHONE = '(732) 245-4057'

export const quickFacts = [
  '11 fixed Kay Park SF163.5 charcoal grills',
  'Flip-back grate · 300 sq in cook surface · 3/16″ steel',
  'Grills mounted on non-combustible pads · 10 ft clearance maintained',
  'Shared ash bins, sand buckets, and safety signage on-site',
]

export type Step = { num: number; title: string; body: string; checklist?: string[]; tip?: string }

export const steps: Step[] = [
  {
    num: 1,
    title: 'Plan & reserve',
    body: 'The grills are first-come for small groups. Hosting 12 or more? Reserve ahead so a spot is waiting for you, and skim the picnic rules once before you go.',
    tip: 'Pick a spot with the wind at your back — it makes lighting easier.',
  },
  {
    num: 2,
    title: 'Pack the essentials',
    body: 'The grills, grates, and ash bins are here for you. You bring the rest:',
    checklist: [
      'A bag of charcoal briquettes',
      'A chimney starter or approved lighter fluid',
      'A long lighter or matches',
      'Long-handled tongs & a spatula',
      'Cooler with ice for raw food',
      'Foil, paper towels, and trash bags',
    ],
  },
  {
    num: 3,
    title: 'Light the coals',
    body: 'Easiest way: fill a chimney starter with charcoal, stuff newspaper underneath, and light it. In ~15 minutes the coals are ready — no fluid, no guesswork.',
    tip: 'Prefer lighter fluid? Squirt it on an unlit pile, wait a minute, then light — and never add more once it’s lit.',
  },
  {
    num: 4,
    title: 'Wait for the gray glow',
    body: 'Coals are ready when they’re glowing and covered in gray ash — not when flames are shooting up. Spread them out, and slide most to one side so you have a cooler "safe zone" to move food to.',
    tip: 'No thermometer? Hold your hand 5 inches above the grate — pull back at "3 Mississippi" and it’s hot enough.',
  },
  {
    num: 5,
    title: 'Cook with confidence',
    body: 'Start with forgiving foods — burgers, hot dogs, chicken, veggies. Lay them over the coals, flip once, and use a $12 meat thermometer to be sure:',
    checklist: ['Chicken & turkey: 165°F', 'Burgers & ground meat: 160°F', 'Steaks, chops, fish: 145°F'],
  },
  {
    num: 6,
    title: 'Cool down & clean up',
    body: 'Let the coals burn all the way down and go cold — this can take a couple of hours. Only then, scoop the cold ash into the metal ash bins. Brush the grate, bag your trash, and leave it better than you found it for the next neighbor.',
  },
]

export type Episode = { num: number; title: string; desc: string; youtubeId: string }

export const episodes: Episode[] = [
  { num: 1, title: 'Light Your First Charcoal Fire', desc: 'The chimney-starter method, start to glowing coals — no guesswork, no lighter fluid.', youtubeId: '' },
  { num: 2, title: 'Is It Ready? Reading Your Coals', desc: 'How to tell when the coals are perfect, the hand heat-test, and setting up a cool "safe zone".', youtubeId: '' },
  { num: 3, title: 'Burgers & Dogs: Your First Cook', desc: 'Forgiving first-timer foods, the flip-once trick, and hitting the safe temps every time.', youtubeId: '' },
  { num: 4, title: 'Lighter Fluid, the Safe Way', desc: 'Prefer fluid? The right way to use it — and the one thing you must never do.', youtubeId: '' },
  { num: 5, title: 'Beat the Wind on the Waterfront', desc: 'Spin the grill, block the gust, and keep your fire steady on a breezy Jersey Shore day.', youtubeId: '' },
  { num: 6, title: 'Cool Down & Clean Up Right', desc: 'Cold ash into the metal bins, a quick grate scrub, and leaving it perfect for the next neighbor.', youtubeId: '' },
]

export const grillSpecs: [string, string][] = [
  ['Quantity', '11 grills'],
  ['Firebox', '20″ W × 15″ D × 10″ H'],
  ['Cook surface', '300 sq in'],
  ['Steel', '3/16″ continuous weld'],
  ['Grate', '½″ rods, flip-back'],
  ['Pedestal', '3½″ galvanized, in-ground'],
  ['Rotation', '360°'],
  ['Finish', 'High-heat black enamel'],
  ['Extras', 'Utility shelf each'],
  ['Weight', '~98 lb each'],
]

export type RuleCard = { title: string; items: string[] }

export const rules: RuleCard[] = [
  {
    title: 'General conduct & reservations',
    items: [
      'Reserve your grill slot in advance for groups over 12; gatherings of 50+ require Board approval 7 days prior.',
      'Arrive on time and limit sessions to 2 hours when others are waiting.',
      'No alcohol, controlled substances, glass bottles, or fireworks in the picnic area.',
      'Keep music to conversational levels; amplification needs HOA sign-off.',
    ],
  },
  {
    title: 'Grill use & fire safety',
    items: [
      'Grills stay on their pedestals — do not relocate or modify hardware.',
      'Maintain a 10 ft safety perimeter from buildings, railings, and landscaping.',
      'Use chimney starters, approved lighter fluid, or instant-light briquettes only.',
      'Keep a sand bucket, spray bottle, or extinguisher within reach; never leave coals unattended.',
    ],
  },
  {
    title: 'Food safety & hygiene',
    items: [
      'Transport perishables on ice and keep raw and cooked items separate.',
      'Follow USDA temperatures: 165°F poultry, 160°F ground meats, 145°F whole cuts (3-min rest), 140–145°F seafood.',
      'Use clean utensils and cutting boards; wash hands or use sanitizer frequently.',
      'Leftovers must be chilled within 2 hours (1 hour if above 90°F ambient).',
    ],
  },
  {
    title: 'Cleanup & ash disposal',
    items: [
      'Let coals burn down and cool fully. Scoop cold ash into the covered metal bins provided.',
      'Brush grates, wipe shelves, and remove all trash, decorations, and food scraps.',
      'Oil grates lightly after cleaning to prevent rust in the coastal climate.',
      'Report damage, loose hardware, or corrosion via the HOA maintenance request.',
    ],
  },
  {
    title: 'Pool, beach & pet etiquette',
    items: [
      'Follow lifeguard directions; shower before using pool; no diving in shallow zones.',
      'Pets must remain leashed, cleaned up after, and off beach areas March 15 – Oct 1.',
      'Keep smoke and music away from neighboring groups and residences.',
      'Respect dunes and landscaping — no digging, staking, or attaching décor.',
    ],
  },
  {
    title: 'Emergency plan',
    items: [
      `Dial 911 for emergencies, then notify the HOA office at ${HOA_PHONE}.`,
      'Fire extinguishers and first-aid kits are stored in the pool house lobby.',
      'Know the location of ash bins, sand buckets, and hose bibs before lighting.',
      'Complete an incident report within 24 hours for any injury or equipment issue.',
    ],
  },
]

export const RECIPE_CATEGORIES = ['Mains', 'Seafood', 'Sides'] as const
export type RecipeCategory = (typeof RECIPE_CATEGORIES)[number]

export type IngredientGroup = { group?: string; items: string[] }

export type Recipe = {
  slug: string
  title: string
  category: RecipeCategory
  tagline: string
  summary: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  prepTime: string
  cookTime: string
  serves: string
  grillSetup: string
  ingredients: IngredientGroup[]
  steps: string[]
  groveNote?: string
  tips?: string[]
  safety?: string
  source: string
}

// These are Nick's own recipes (from his recipe collection), adapted for the
// communal Kay Park charcoal grills at the grove — two-zone fires, foil packets,
// and cast-iron on the grate instead of a home stove/oven.
export const recipes: Recipe[] = [
  {
    slug: 'grilled-pork-chops',
    title: 'Grilled Pork Chops with Farro & Charred Greens',
    category: 'Mains',
    tagline: 'Juicy chops + lemony farro salad',
    summary:
      'Thick pork chops seared over the coals to a juicy 145°F, served with a bright lemon-Parmesan farro salad and quick-charred greens.',
    difficulty: 'Intermediate',
    prepTime: '20 min',
    cookTime: '20 min',
    serves: '2',
    grillSetup: 'Two-zone fire',
    ingredients: [
      {
        group: 'Pork & greens',
        items: [
          '2 pork chops (about 16 oz total)',
          'Salt and pepper',
          '3 tbsp olive oil',
          '1 cup kale (or escarole), chopped',
          '1 clove garlic, minced',
          '½ lemon (juice and zest)',
        ],
      },
      {
        group: 'Farro salad',
        items: [
          '½ cup farro',
          '1 cup water or chicken broth',
          '½ cup cherry tomatoes, halved',
          '¼ cup grated Parmesan',
          '¼ cup chopped fresh parsley',
        ],
      },
    ],
    steps: [
      'Make the farro ahead at home: simmer ½ cup farro in salted water or broth ~25 min until tender, drain, and chill. (Grains are far easier done in advance than at the grove.)',
      'Build a two-zone fire — bank the lit coals to one side for a hot zone, leaving a cooler zone to dodge flare-ups.',
      'Toss the cooked farro with cherry tomatoes, Parmesan, parsley, lemon juice + zest, and a drizzle of olive oil. Season and set aside.',
      'Pat the chops dry, rub with oil, and season generously. Sear over the hot zone ~4–5 min per side, sliding to the cooler zone if fat flares.',
      'Pull the chops at 145°F on an instant-read thermometer and rest 5 minutes (carryover finishes them).',
      'While they rest, set a cast-iron pan or foil tray on the hot grate with a little oil + garlic; toss the greens until just wilted, ~2 min.',
      'Plate the chops with the farro salad and charred greens; extra parsley if you like.',
    ],
    groveNote: 'No farro? Any cooked grain — or even a bag of slaw — works. The chops are the star.',
    safety: 'Pork: pull at 145°F with a 3-minute rest.',
    source: "From Nick's recipe box — adapted for the charcoal grove.",
  },
  {
    slug: 'grilled-salmon',
    title: 'Grilled Salmon with Lemon-Dill Drizzle',
    category: 'Seafood',
    tagline: 'Flaky salmon, bright lemon & dill',
    summary:
      'Salmon fillets grilled skin-side down until just flaky, finished with lemon, fresh dill, and good olive oil. Foil-packet veg cooks alongside.',
    difficulty: 'Beginner',
    prepTime: '15 min',
    cookTime: '12 min',
    serves: '2',
    grillSetup: 'Two-zone fire, well-oiled grate',
    ingredients: [
      {
        group: 'Salmon',
        items: [
          '2 salmon fillets (about 8 oz each)',
          'Salt and pepper',
          '2 tbsp olive oil',
          '1 lemon (juice and zest)',
          '1 tbsp fresh dill, chopped',
          '1 clove garlic, minced',
        ],
      },
      { group: 'Foil-packet veg (optional)', items: ['2 cups broccoli florets', '2 carrots, sliced'] },
    ],
    steps: [
      'Build a two-zone fire and oil the grate well — salmon loves to stick.',
      'Pat the salmon dry, brush with oil, and season with salt and pepper.',
      'Lay the fillets skin-side down over the medium zone and tent loosely with foil. Cook 6–8 min without moving them.',
      'Flip once with a thin spatula and cook 2–4 min more, until it flakes and reaches 145°F.',
      'Foil-packet veg: toss broccoli + carrots with oil, garlic, and salt; seal in foil and set over the hot zone ~10 min, shaking once.',
      'Off the heat, squeeze lemon over the salmon and scatter with dill and zest.',
    ],
    groveNote: 'Skin-side-down the whole time on a well-oiled grate = an easy, clean release with no sticking.',
    safety: 'Fish: 145°F (flakes easily with a fork).',
    source: "From Nick's recipe box — adapted for the charcoal grove.",
  },
  {
    slug: 'best-ribs',
    title: '"Best Ribs in the Universe" — Charcoal Grove Edition',
    category: 'Mains',
    tagline: 'Low-and-slow, fall-off-the-bone',
    summary:
      "Mike Scrutchfield's legendary competition rub on pork ribs, cooked low-and-slow over indirect charcoal until they're fall-off-the-bone tender.",
    difficulty: 'Advanced',
    prepTime: '30 min + rub rest',
    cookTime: '3–4 hours',
    serves: '4',
    grillSetup: 'Indirect (coals banked to one side)',
    ingredients: [
      {
        group: 'Dry rub',
        items: [
          '¼ cup white sugar',
          '3 tbsp table salt',
          '⅛ cup brown sugar',
          '4 tsp chili powder',
          '2 tsp ground cumin',
          '1 tsp cayenne (to taste)',
          '1 tsp black pepper',
          '1 tsp garlic powder',
          '1 tsp onion powder',
          '1 tsp MSG (optional)',
        ],
      },
      {
        group: 'Ribs',
        items: [
          '2 slabs baby back or St. Louis-style ribs',
          '2 tbsp yellow mustard (binder)',
          '2 tbsp apple cider vinegar (spritz)',
          'BBQ sauce (optional, to finish)',
        ],
      },
    ],
    steps: [
      'Pull the membrane off the bone side of each slab. Coat lightly with mustard, then pat the rub on both sides. Rest 30 min (up to 2 hours).',
      'Build an indirect fire: light a chimney and bank the coals to ONE side only — the ribs cook on the empty side. Aim for a low, steady ~275–300°F; add a few coals every ~45 min to hold it.',
      'Lay the ribs bone-side down on the cool zone, away from the coals. Cook low and slow 3–4 hours, spritzing with cider vinegar every 45 min, until the meat pulls back from the bone tips and is tender.',
      'For smoke, drop a fruitwood chunk onto the coals while they cook.',
      'Last 15 min: brush with BBQ sauce and move briefly over the coals to set the glaze — watch closely for flare-ups.',
      'Rest 10 min, then slice between the bones.',
    ],
    groveNote:
      'This is a half-day project — bring extra charcoal and plan ~4 hours. Worth every minute. (Have a sous vide at home? Nick’s original does 165°F for 12h first, then this charcoal finish.)',
    safety: 'Ribs are done by feel (~195–203°F internal) — well past the 145°F safe minimum for pork.',
    source: 'Rub from Mike Scrutchfield’s "Best Ribs in the Universe"; charcoal method adapted for the grove.',
  },
  {
    slug: 'strip-steak-miso-butter',
    title: 'Strip Steak with Smoky Miso Butter',
    category: 'Mains',
    tagline: 'Steakhouse sear + umami butter',
    summary:
      'Strip steaks grilled over the coals and crowned with a smoky miso-paprika butter, with a crisp, peppery watercress salad to cut the richness.',
    difficulty: 'Intermediate',
    prepTime: '10 min',
    cookTime: '12 min',
    serves: '2',
    grillSetup: 'Two-zone fire',
    ingredients: [
      { group: 'Steak', items: ['2 boneless strip steaks, 1-inch thick', 'Salt and pepper', '2 tbsp olive oil'] },
      {
        group: 'Smoky miso butter',
        items: [
          '2 tbsp soft butter',
          '2 tbsp white or red miso paste',
          '1 tsp smoked paprika',
          '1 tsp dry mustard',
          'A splash of seasoned rice vinegar',
        ],
      },
      {
        group: 'Watercress salad',
        items: ['1 bunch watercress', '2 scallions, thinly sliced', '1 tbsp soy sauce', '1 tbsp toasted sesame seeds', 'Rice vinegar'],
      },
    ],
    steps: [
      'Mash the butter, miso, smoked paprika, dry mustard, and a splash of rice vinegar into a smooth compound butter. Set aside (or make it at home and keep it cold).',
      'Build a two-zone fire. Rub the steaks with oil and season generously with salt and pepper.',
      'Sear over the hot zone ~3–4 min per side for a deep crust, sliding to the cooler zone if flare-ups flare.',
      'Pull at 120–125°F for medium-rare and rest under foil 5 min (carryover brings them to ~130°F).',
      'Whisk rice vinegar, soy sauce, and sesame seeds; toss the watercress and scallions in it.',
      'Top the rested steaks with a knob of miso butter and slice against the grain over the dressed salad.',
    ],
    groveNote: 'Make the miso butter at home and keep it cold — it melts into the steak the second it lands.',
    safety: 'USDA medium for beef is 145°F; the 120–125°F pull is a chef’s medium-rare — your call.',
    source: "From Nick's recipe box — adapted for the charcoal grove.",
  },
  {
    slug: 'yellowfin-tuna-ponzu',
    title: 'Grilled Yellowfin Tuna with Ponzu',
    category: 'Seafood',
    tagline: 'Hard-seared, rare center, citrus ponzu',
    summary:
      'Fresh tuna seared hard over screaming coals, sliced rare, and drizzled with a quick homemade ponzu — over a farro-kale toss.',
    difficulty: 'Intermediate',
    prepTime: '15 min',
    cookTime: '10 min',
    serves: '2',
    grillSetup: 'Hot direct zone',
    ingredients: [
      {
        group: 'Tuna',
        items: [
          '10 oz fresh (sushi-grade) yellowfin tuna',
          'Salt and pepper',
          '1 tbsp soy sauce',
          '1 tsp sesame oil (optional)',
          'Oil for the grate',
          'Sesame seeds',
        ],
      },
      {
        group: 'Ponzu',
        items: [
          '1 tbsp soy sauce',
          '1 tbsp fresh citrus juice (lemon and/or lime)',
          '½ tbsp rice vinegar',
          '½ tbsp mirin (optional)',
          '¼ tsp honey or sugar (optional)',
        ],
      },
      {
        group: 'Farro-kale toss',
        items: [
          '½ cup farro',
          '2 cups kale, chopped',
          '2 carrots, sliced',
          '2 green onions (whites/greens separated)',
          '2 cloves garlic, minced',
          '1 tsp fresh ginger, minced',
          '1 tbsp soy sauce',
          '1 tsp rice vinegar',
        ],
      },
    ],
    steps: [
      'Ahead of time: simmer ½ cup farro ~25 min until tender; drain.',
      'Stir all the ponzu ingredients together and set aside to let the flavors meld.',
      'Get the coals screaming hot and oil the grate well. Pat the tuna dry, season, brush with soy (+ sesame oil), and press on sesame seeds.',
      'Sear the tuna just 1–2 min per side for rare/medium-rare — a seared edge with a pink center. Don’t overcook. Rest, then slice thin against the grain.',
      'In a cast-iron pan or foil tray on the hot grate, sauté garlic, ginger, and the white scallion parts ~30 sec; add carrots 2–3 min, then kale until wilted; stir in the farro, soy, and rice vinegar.',
      'Plate the farro-kale, fan the tuna on top, drizzle with ponzu, and garnish with green scallion + sesame. Lime wedges on the side.',
    ],
    groveNote: 'A blazing hot zone is everything here — sear fast and keep the middle rare.',
    safety: 'Tuna is served rare — use sushi-grade and keep it cold until it hits the grate.',
    source: "From Nick's recipe box — adapted for the charcoal grove.",
  },
  {
    slug: 'crab-cakes',
    title: "Mrs. Duvall's Crab Cakes",
    category: 'Seafood',
    tagline: 'Light, crackery, all about the crab',
    summary:
      "Robert Duvall's mother's famous crab cakes — a light cracker binder that lets the lump crab shine — crisped on a cast-iron griddle right on the grill.",
    difficulty: 'Intermediate',
    prepTime: '20 min + 1 hr chill',
    cookTime: '6 min',
    serves: '4',
    grillSetup: 'Cast-iron / griddle on the grate',
    ingredients: [
      {
        items: [
          '¼ cup mayonnaise',
          '¼ cup minced onion',
          '2 large eggs, lightly beaten',
          '½ tsp Worcestershire sauce',
          '½ tsp dry mustard',
          '¼ tsp salt',
          '¼ tsp cayenne pepper',
          '1 lb lump crabmeat, picked over for shell',
          '1 cup finely crushed soda crackers (divided)',
          '2 tbsp unsalted butter, divided',
          '¼ cup vegetable oil, divided',
          'Lemon wedges, to serve',
        ],
      },
    ],
    steps: [
      'Combine mayo, onion, eggs, Worcestershire, dry mustard, salt, and cayenne. Gently fold in the crab and ¼ cup of the cracker crumbs — don’t overmix. Shape into 16 cakes about 1 inch thick.',
      'Coat the cakes in the remaining crumbs, set on a tray, and chill 1 hour (firming them up is what keeps them together on the grill).',
      'Set a cast-iron skillet or flat griddle on the grate over a medium-hot zone; add 1 tbsp butter + 2 tbsp oil and let it shimmer.',
      'Cook the cakes in batches until golden and crisp, ~2–3 min per side. Drain on paper towels; keep warm at the cooler edge of the grate. Repeat with the rest.',
      'Serve hot with lemon wedges.',
    ],
    groveNote:
      'A cast-iron pan turns the communal grill into a flat-top — perfect for delicate cakes that would fall through the grate. Chill them firm first.',
    safety: 'Cook until golden and hot through (160°F).',
    source: "Adapted from Robert Duvall's mother's recipe — for the charcoal grove.",
  },
  {
    slug: 'herb-crusted-cod',
    title: 'Herb-Crusted Grilled Cod (Foil Packet)',
    category: 'Seafood',
    tagline: 'Lemony herb crust, fuss-free foil',
    summary:
      'Flaky cod under a lemony herb-breadcrumb crust, grilled in a foil boat with potatoes cooking right alongside — a beginner-friendly grove dinner.',
    difficulty: 'Beginner',
    prepTime: '15 min',
    cookTime: '15 min',
    serves: '2',
    grillSetup: 'Two-zone fire (foil)',
    ingredients: [
      {
        group: 'Cod',
        items: [
          '2 cod fillets (about 6 oz each)',
          '½ cup breadcrumbs',
          '2 tbsp fresh parsley, chopped',
          '½ tbsp fresh thyme',
          '½ tbsp fresh rosemary',
          '1 clove garlic, minced',
          '2 tbsp olive oil',
          '1 lemon (zest and juice)',
          'Salt and pepper',
        ],
      },
      { group: 'Sides', items: ['2 medium potatoes, cubed', '2 cups mixed greens', '1 tbsp balsamic vinegar'] },
    ],
    steps: [
      'Mix the breadcrumbs, parsley, thyme, rosemary, garlic, lemon zest, and olive oil into a crust.',
      'Toss the cubed potatoes with oil, salt, pepper, and a pinch of herbs; seal in a foil packet and set over the hot zone ~25 min, flipping once, until tender.',
      'Pat the cod dry, season, and press the herb mix onto the top of each fillet. Lay each on an oiled square of foil with the sides folded up like a boat.',
      'Set the foil boats over the medium zone ~12–15 min, until the cod flakes and reaches 145°F.',
      'Toss the mixed greens with olive oil, balsamic, salt, and pepper.',
      'Plate the cod with the foil potatoes and greens; squeeze lemon over the top.',
    ],
    groveNote: 'Foil boats keep delicate fish from sticking or falling through the grate — and the potatoes cook right alongside.',
    safety: 'Fish: 145°F (flakes easily).',
    source: "From Nick's recipe box — adapted for the charcoal grove.",
  },
  {
    slug: 'farro-corn-salad',
    title: 'Farro Salad with Grilled Corn',
    category: 'Sides',
    tagline: 'Make-ahead crowd side',
    summary:
      'Charred sweet corn, cherry tomatoes, and parsley over nutty farro in a bright balsamic dressing — a travels-anywhere side for a crowd.',
    difficulty: 'Beginner',
    prepTime: '15 min',
    cookTime: '25 min',
    serves: '6–8',
    grillSetup: 'Direct heat (for the corn)',
    ingredients: [
      {
        items: [
          '1½ cups farro',
          '4½ cups water',
          '1 small onion, chopped',
          '2 cloves garlic, minced',
          '½ cup balsamic (or red wine) vinegar',
          '⅓ cup olive oil',
          '3–4 ears sweet corn, shucked',
          '1 pint cherry tomatoes, halved',
          '½ cup chopped fresh parsley',
          'Salt and pepper',
        ],
      },
    ],
    steps: [
      'Simmer the farro in the water with a pinch of salt ~20 min until tender; drain.',
      'Grill the corn over direct heat, turning, until charred in spots, ~8–10 min. Cool, then cut the kernels off the cob (about 1½ cups).',
      'Whisk the onion, garlic, vinegar, and olive oil together in a large bowl.',
      'Add the warm farro and toss; let it cool. Fold in the grilled corn, tomatoes, and parsley. Season with salt and pepper.',
      'Best made up to a day ahead and chilled — bring to room temperature before serving for the fullest flavor.',
    ],
    groveNote: 'The whole bowl travels great — grill the corn at the grove, or make the entire thing at home and just carry it down.',
    source: "From Nick's recipe box.",
  },
]

export const BLOG_CATEGORIES = ['Events', 'Tips', 'Recaps', 'Recipes', 'General'] as const
export type BlogCategory = (typeof BLOG_CATEGORIES)[number]
