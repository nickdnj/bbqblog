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
    title: 'Plan ahead',
    body: 'The grills are first-come, first-served. Hosting a big group (12 or more)? Give the HOA office a heads-up, and skim the picnic rules once before you go.',
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

// The three valid ways to light our charcoal grills. Bob's recommendation:
// match-light or the chimney starter — skip loose lighter fluid (extra to buy & store).
export type LightingMethod = {
  name: string
  emoji: string
  recommended: boolean
  how: string
  pros: string[]
  cons: string[]
}

export const lightingMethods: LightingMethod[] = [
  {
    name: 'Match-Light Charcoal',
    emoji: '🔥',
    recommended: true,
    how: 'Briquettes that come pre-soaked with lighter fluid. Pour them into the firebox, touch a match or long lighter to a few spots, and they catch on their own.',
    pros: ['Dead simple — light it and walk away', 'Nothing extra to buy or store', 'Ready in ~15 minutes'],
    cons: ['A faint lighter-fluid smell as it burns off', 'Costs a little more than plain charcoal'],
  },
  {
    name: 'Charcoal + Lighter Fluid',
    emoji: '🧴',
    recommended: false,
    how: 'Pile plain briquettes, squirt lighter fluid over the UNLIT pile, wait a minute for it to soak in, then light from the side.',
    pros: ['Cheapest charcoal', 'Works in a pinch'],
    cons: [
      'You have to buy AND store a can of lighter fluid',
      'NEVER add fluid to lit coals — it can flare back at you',
      'Chemical taste if you start cooking too soon',
    ],
  },
  {
    name: 'Chimney Starter',
    emoji: '🛢️',
    recommended: true,
    how: 'Fill the metal chimney with plain charcoal, stuff newspaper underneath, light the paper, and set it on the grate. In ~15 min the top coals turn gray — dump them in.',
    pros: ['No lighter fluid, no chemical taste', 'Even, reliable fire every time', 'About as fast as the rest'],
    cons: ['One more tool to bring', 'Gets hot — use the handle and gloves'],
  },
]

export const lightingRecommendation =
  "All three work. Our pick: match-light charcoal for dead-simple, or a chimney starter for the cleanest fire. We'd skip loose lighter fluid — it's one more thing to buy and store, and you can never add it to already-lit coals."

export type StoryboardBeat = { time: string; shot: string; script: string }
export type Storyboard = { objective: string; beats: StoryboardBeat[]; takeaways: string[] }
export type Episode = { num: number; title: string; desc: string; level: string; youtubeId: string; storyboard: Storyboard }

// Storyboards are embedded so Nick + Bob can review each video plan live before shooting.
export const episodes: Episode[] = [
  {
    num: 1,
    title: 'Three Ways to Light the Grill',
    desc: 'Match-light, lighter fluid, and the chimney starter — all three demonstrated, then Bob’s recommendation.',
    level: 'Beginner',
    youtubeId: '',
    storyboard: {
      objective:
        'Show all three valid ways to light our charcoal grills, then land on the recommendation: match-light or chimney starter (skip loose lighter fluid — it’s one more thing to buy and store).',
      beats: [
        { time: '0:00–0:10', shot: 'Bob at a grill, coals unlit', script: '“Three ways to light this thing. I’ll show you all three — then tell you the two I’d actually use.”' },
        { time: '0:10–0:40', shot: 'Pouring match-light briquettes; touching a long lighter to them; they catch', script: 'Method 1 — Match-Light: “The lighter fluid’s already baked into these. Light a few spots, and walk away. Easiest by far.”' },
        { time: '0:40–1:15', shot: 'Plain briquettes piled; squirting fluid on the UNLIT pile; waiting; lighting from the side', script: 'Method 2 — Lighter Fluid: “Squirt it on the cold pile, wait a minute, light. And the big rule —” (on-screen text: NEVER add fluid to lit coals) “— never to lit coals.”' },
        { time: '1:15–2:00', shot: 'Filling a chimney, newspaper underneath, lighting; cut to gray coals; dumping into firebox', script: 'Method 3 — Chimney: “Fill it, paper underneath, light, wait about fifteen minutes for the tops to go gray, dump. No fluid, no chemical taste.”' },
        { time: '2:00–2:20', shot: 'Bob to camera, three coal piles behind him', script: 'Verdict: “All three work. I’d skip the loose lighter fluid — one more thing to buy and store. Go match-light for simple, or a chimney for the cleanest fire.”' },
        { time: '2:20–2:30', shot: 'Coals glowing gray', script: 'CTA: “However you light it — wait for that gray glow. That’s next.”' },
      ],
      takeaways: [
        'All three methods are valid',
        'Recommended: match-light OR chimney starter',
        'Lighter fluid means buying & storing a can — and never add it to lit coals',
        'Whichever you use, wait for gray, ashed-over coals before cooking',
      ],
    },
  },
  {
    num: 2,
    title: 'Is It Ready? Reading Your Coals',
    desc: 'How to tell when the coals are perfect, the hand heat-test, and setting up a two-zone fire.',
    level: 'Beginner',
    youtubeId: '',
    storyboard: {
      objective: 'Teach beginners to read coal readiness by eye, do the hand heat-test, and build a two-zone fire with a cool "safe zone."',
      beats: [
        { time: '0:00–0:10', shot: 'Close-up of coals turning from black to gray', script: '“Flames don’t mean ready. THIS means ready.”' },
        { time: '0:10–0:40', shot: 'Bob pointing at gray, ashed-over coals', script: '“When most of the coals are glowing and covered in gray ash — about 15 minutes in — you’re good.”' },
        { time: '0:40–1:10', shot: 'Hand held 5 inches over the grate, counting', script: 'Hand test: “No thermometer? Hold your hand five inches up. Pull back at ‘three Mississippi’ and it’s hot enough.”' },
        { time: '1:10–1:50', shot: 'Raking coals to one side with tongs', script: 'Two-zone: “Push most of the coals to one side — a hot zone to cook, a cool side to move food if it flares.”' },
        { time: '1:50–2:00', shot: 'Bob gives a thumbs up over the set fire', script: 'CTA: “Now you’ve got a fire you can control. Let’s cook.”' },
      ],
      takeaways: ['Ready = glowing + gray ash, not flames', 'The 3-second hand test', 'Build a two-zone fire (hot side + cool "safe zone")'],
    },
  },
  {
    num: 3,
    title: 'Burgers & Dogs: Your First Cook',
    desc: 'Forgiving first-timer foods, the flip-once trick, and hitting the safe temps every time.',
    level: 'Beginner',
    youtubeId: '',
    storyboard: {
      objective: 'Walk a first-timer through cooking burgers and dogs to safe temps with confidence — the flip-once rule and the thermometer.',
      beats: [
        { time: '0:00–0:10', shot: 'Sizzling burgers on the grate', script: '“If you can cook a burger, you can grill. Let’s do it right.”' },
        { time: '0:10–0:40', shot: 'Forming patties, dimpling centers, seasoning', script: '“Loose patties, a dimple in the middle so they don’t puff up, salt and pepper right before they hit the grate.”' },
        { time: '0:40–1:20', shot: 'Burgers searing; ONE flip; cheese added', script: 'Flip-once: “Resist the urge to flip and press. Once. That’s it. Cheese in the last minute.”' },
        { time: '1:20–1:50', shot: 'Thermometer reading 160°F; dogs blistering', script: 'Temps: “Burgers to 160. Dogs just need color and blisters. A twelve-dollar thermometer takes out all the guessing.”' },
        { time: '1:50–2:00', shot: 'Finished burger built on a toasted bun', script: 'CTA: “Toast those buns, build it up, you’re a griller now.”' },
      ],
      takeaways: ['Dimple the patties; season just before grilling', 'Flip ONCE — don’t press', 'Burgers 160°F, dogs hot through', 'A thermometer removes the guesswork'],
    },
  },
  {
    num: 4,
    title: 'Beat the Wind on the Waterfront',
    desc: 'Spin the grill, block the gust, and keep your fire steady on a breezy Jersey Shore day.',
    level: 'Intermediate',
    youtubeId: '',
    storyboard: {
      objective: 'Show how to handle wind off the river using the grill’s 360° rotation and body position so the fire lights and burns steady.',
      beats: [
        { time: '0:00–0:10', shot: 'Wind whipping; Bob shielding a lighter', script: '“The river breeze is great — until you’re trying to light a fire.”' },
        { time: '0:10–0:45', shot: 'Bob rotating the grill head on its pedestal', script: 'Rotation: “These spin a full 360. Turn the firebox so YOU block the wind — your back to the gust.”' },
        { time: '0:45–1:20', shot: 'Lighting succeeds out of the wind; coals glowing evenly', script: '“Out of the wind, it lights fast and burns even — no hot spots, no blowing ash.”' },
        { time: '1:20–1:40', shot: 'Bob adjusting position as wind shifts', script: '“Wind shifts? Spin the grill again. That’s the whole trick.”' },
      ],
      takeaways: ['Our grills rotate 360° — use it', 'Put your back to the wind to light', 'Re-spin when the wind shifts'],
    },
  },
  {
    num: 5,
    title: 'Cool Down & Clean Up Right',
    desc: 'Cold ash into the metal bins, a quick grate scrub, and leaving it perfect for the next neighbor.',
    level: 'Beginner',
    youtubeId: '',
    storyboard: {
      objective: 'Show the right way to shut down a communal grill: let coals go fully cold, dispose of cold ash in the metal bins, scrub the grate, leave it better than you found it.',
      beats: [
        { time: '0:00–0:10', shot: 'Bob at a grill after cooking', script: '“Cooking’s done — but you’re not. This part keeps the grove nice for everybody.”' },
        { time: '0:10–0:40', shot: 'Coals burning down; clock/sun graphic for time passing', script: '“Let the coals burn all the way down and go COLD. That can take a couple hours — never scoop warm ash.”' },
        { time: '0:40–1:10', shot: 'Scooping cold ash into the covered metal bin', script: '“Cold ash goes in the metal bins — only the metal bins. Never the trash, never the dunes.”' },
        { time: '1:10–1:40', shot: 'Scrubbing the grate; wiping the shelf; bagging trash', script: '“Quick scrub of the grate, wipe the shelf, bag your trash.”' },
        { time: '1:40–1:55', shot: 'Bob walking away from a clean grill', script: 'CTA: “Leave it better than you found it. The next neighbor will thank you.”' },
      ],
      takeaways: ['Coals must be fully COLD before disposal', 'Cold ash → covered metal bins only', 'Scrub the grate, wipe the shelf, take your trash'],
    },
  },
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

// Photo slots for the Grills page. Drop a file in client/public/photos/ and set `src`
// (e.g. '/photos/grove.jpg'); until then each shows a captioned placeholder of the shot to take.
export type GrillPhoto = { caption: string; shot: string; src?: string }

export const grillPhotos: GrillPhoto[] = [
  { caption: 'The picnic grove', shot: 'Wide shot of the grove — grills + new picnic tables, water behind.' },
  { caption: 'A grill, head-on', shot: 'One Kay Park SF163.5 on its pedestal, clean, utility shelf visible.' },
  { caption: 'The flip-back grate', shot: 'Close-up of the grate flipped up on its hinge — the ½″ rods.' },
  { caption: 'Pedestal & shelf', shot: 'The 3½″ galvanized pedestal in its concrete pad + the bolt-on shelf.' },
  { caption: 'Glowing coals', shot: 'Top-down of gray, ashed-over coals — the “it’s ready” shot.' },
  { caption: 'In action', shot: 'Food on the grate over the coals — burgers or fish, a little smoke.' },
]

export type RuleCard = { title: string; items: string[] }

export const rules: RuleCard[] = [
  {
    title: 'General conduct & groups',
    items: [
      'Grills are first-come, first-served. For groups over 12, give the HOA office a heads-up; gatherings of 50+ require Board approval 7 days prior.',
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

// Grilling food-type categories. Local Jersey Shore catches live under Seafood
// (flagged `local: true`) and lead that category.
export const RECIPE_CATEGORIES = ['Beef', 'Pork', 'Poultry', 'Seafood', 'Veggies & Sides', 'Sweets'] as const
export type RecipeCategory = (typeof RECIPE_CATEGORIES)[number]

export const RECIPE_SEASONS = ['Spring', 'Summer', 'Fall', 'Year-round'] as const
export type RecipeSeason = (typeof RECIPE_SEASONS)[number]

export type IngredientGroup = { group?: string; items: string[] }

export type Recipe = {
  slug: string
  title: string
  category: RecipeCategory
  season: RecipeSeason
  local?: boolean
  tagline: string
  summary: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  tools?: string[]
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
    tools: ['Chimney starter', 'Long tongs', 'Instant-read thermometer', 'Cast-iron pan or foil tray'],
    title: 'Grilled Pork Chops with Farro & Charred Greens',
    category: 'Pork',
    season: 'Year-round',
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
    tools: ['Chimney starter', 'Fish spatula', 'Heavy-duty foil', 'Instant-read thermometer'],
    title: 'Grilled Salmon with Lemon-Dill Drizzle',
    category: 'Seafood',
    season: 'Year-round',
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
    slug: 'cedar-plank-salmon',
    title: 'Cedar-Plank Salmon',
    category: 'Seafood',
    season: 'Year-round',
    tagline: 'Smoky, no-stick, on a plank',
    summary:
      'A soaked cedar plank turns the grill into a little smoker — the salmon never touches the grate, stays moist, and drinks up sweet cedar smoke. Works just as well for local bluefish.',
    difficulty: 'Intermediate',
    tools: ['Cedar grilling plank', 'Chimney starter', 'Long tongs', 'Instant-read thermometer'],
    prepTime: '15 min + 1 hr soak',
    cookTime: '15 min',
    serves: '4',
    grillSetup: 'Two-zone / indirect',
    ingredients: [
      {
        items: [
          '1 untreated cedar grilling plank',
          '4 salmon fillets (about 6 oz each)',
          '2 tbsp olive oil or melted butter',
          '1 lemon, sliced',
          '2 cloves garlic, minced',
          'Fresh dill',
          'Salt and pepper',
          '1 tbsp maple syrup or brown sugar (optional glaze)',
        ],
      },
    ],
    steps: [
      'Soak the cedar plank in water at least 1 hour (weight it down so it stays under). A soaked plank smokes instead of burning — don’t skip this.',
      'Build a two-zone fire. Pat the salmon dry, rub with oil, and season. Lay lemon slices and dill on the plank and set the fillets on top; brush with maple or sprinkle brown sugar if you like.',
      'Set the plank over the medium / indirect zone and cover with a dome (or loose foil). Cook ~12–15 min — no flipping — until the salmon flakes and reaches 145°F.',
      'The plank edges will char and smoke; if it actually flares up, mist with water. Serve right off the plank.',
    ],
    groveNote:
      'Soak the plank or it just burns. The fish never touches the grate, so there’s no sticking and no flip. Swap in local bluefish — its oily flesh loves cedar smoke.',
    safety: 'Fish: 145°F. Use food-safe untreated cedar grilling planks only — never construction lumber.',
    source: 'A cedar-plank classic for the grove.',
  },
  {
    slug: 'best-ribs',
    tools: ['Chimney starter', 'Long tongs', 'Spray bottle', 'Extra charcoal', 'Wood chunks (optional)'],
    title: '"Best Ribs in the Universe" — Charcoal Grove Edition',
    category: 'Pork',
    season: 'Summer',
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
    tools: ['Chimney starter', 'Long tongs', 'Instant-read thermometer'],
    title: 'Strip Steak with Smoky Miso Butter',
    category: 'Beef',
    season: 'Year-round',
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
    tools: ['Chimney starter', 'Fish spatula', 'Cast-iron pan or grill-top wok', 'Instant-read thermometer'],
    title: 'Grilled Yellowfin Tuna with Ponzu',
    category: 'Seafood',
    season: 'Summer',
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
    slug: 'herb-crusted-cod',
    tools: ['Heavy-duty foil', 'Long tongs', 'Instant-read thermometer'],
    title: 'Herb-Crusted Grilled Cod (Foil Packet)',
    category: 'Seafood',
    season: 'Year-round',
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
    tools: ['Chimney starter', 'Long tongs', 'Sharp knife'],
    title: 'Farro Salad with Grilled Corn',
    category: 'Veggies & Sides',
    season: 'Summer',
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

  // ---- Basics (beginner) ----
  {
    slug: 'backyard-burgers-dogs',
    title: 'Backyard Burgers & Dogs',
    category: 'Beef',
    season: 'Summer',
    tagline: 'The cookout classic, done right',
    summary:
      'Juicy burgers and snappy hot dogs over the coals — the everybody-happy grove cookout, with the few small tricks that keep them from drying out.',
    difficulty: 'Beginner',
    tools: ['Chimney starter', 'Spatula', 'Long tongs', 'Instant-read thermometer'],
    prepTime: '10 min',
    cookTime: '12 min',
    serves: '4',
    grillSetup: 'Two-zone fire',
    ingredients: [
      {
        group: 'Burgers',
        items: [
          '1½ lb ground beef (80/20)',
          'Salt and pepper',
          '4 burger buns',
          'Cheese slices',
          'Lettuce, tomato, onion, pickles',
          'Condiments to taste',
        ],
      },
      { group: 'Dogs', items: ['8 good-quality hot dogs', '8 hot dog buns'] },
    ],
    steps: [
      'Build a two-zone fire. Form the beef into 4 loose patties, press a dimple into each center, and season both sides right before they hit the grate.',
      'Grill burgers over the hot zone ~3–4 min, flip ONCE, then ~3–4 min more; add cheese for the last minute. Pull at 160°F.',
      'Roll the hot dogs over the medium zone, turning, until browned with a few blisters, ~5–7 min.',
      'Toast the buns cut-side down over the cooler zone for the last 30–60 seconds.',
      'Build and dress to taste.',
    ],
    groveNote:
      'Flip burgers ONCE — pressing and flipping squeezes the juices out. The center dimple keeps them from puffing into meatballs.',
    safety: 'Ground beef: 160°F. Hot dogs: heated through.',
    source: 'Cookout basics for the grove.',
  },
  {
    slug: 'grilled-chicken-thighs',
    title: 'Simple Grilled Chicken Thighs',
    category: 'Poultry',
    season: 'Year-round',
    tagline: 'Forgiving, juicy, hard to mess up',
    summary:
      'Bone-in thighs are the most forgiving thing on the grill — a quick garlic-lemon marinade and a two-zone fire are all you need. A great recipe to learn on.',
    difficulty: 'Beginner',
    tools: ['Chimney starter', 'Long tongs', 'Instant-read thermometer'],
    prepTime: '10 min + marinate',
    cookTime: '30 min',
    serves: '4',
    grillSetup: 'Two-zone fire',
    ingredients: [
      {
        items: [
          '8 bone-in, skin-on chicken thighs',
          '¼ cup olive oil',
          '3 cloves garlic, minced',
          '1 lemon (juice and zest)',
          '1 tsp paprika',
          '1 tsp salt',
          '½ tsp pepper',
          'Fresh herbs (optional)',
        ],
      },
    ],
    steps: [
      'Whisk the marinade, coat the thighs, and rest 30 min (or overnight in the cooler).',
      'Build a two-zone fire. Start the thighs skin-side UP on the cooler zone to render gently, ~15 min.',
      'Move them skin-side DOWN over the hot zone to crisp, ~5–8 min, sliding back if flare-ups flare.',
      'Pull at 175°F — dark meat is juiciest a little past the 165°F minimum.',
      'Rest 5 minutes before serving.',
    ],
    groveNote: 'Thighs forgive overcooking far better than breasts — render skin-up first, crisp skin-down last.',
    safety: 'Chicken: 165°F minimum; thighs are best at ~175°F.',
    source: 'A beginner-friendly staple for the grove.',
  },
  {
    slug: 'elote-grilled-corn',
    title: 'Elote-Style Grilled Corn',
    category: 'Veggies & Sides',
    season: 'Summer',
    tagline: 'Charred street corn',
    summary:
      'Sweet corn charred over the coals and slathered with a creamy, tangy chili-lime spread — the easiest crowd-pleaser at the grove.',
    difficulty: 'Beginner',
    tools: ['Chimney starter', 'Long tongs'],
    prepTime: '10 min',
    cookTime: '12 min',
    serves: '6',
    grillSetup: 'Direct heat',
    ingredients: [
      {
        items: [
          '6 ears sweet corn, shucked',
          '⅓ cup mayonnaise',
          '¼ cup sour cream',
          '½ cup crumbled cotija (or Parmesan)',
          '1 tsp chili powder',
          '1 lime (juice + wedges)',
          'Chopped cilantro',
          'Salt',
        ],
      },
    ],
    steps: [
      'Stir the mayo, sour cream, half the cotija, chili powder, and lime juice into a spread (do this at home and bring it cold).',
      'Grill the corn over direct heat, turning, until charred in spots and bright yellow, ~8–12 min.',
      'Slather the hot corn with the spread, then sprinkle with the remaining cotija, a dusting of chili powder, and cilantro.',
      'Serve with lime wedges.',
    ],
    groveNote: 'No lid needed — just keep the corn moving over direct heat until it chars.',
    source: 'A grove crowd-pleaser.',
  },
  {
    slug: 'campfire-smores',
    title: 'Campfire S’mores',
    category: 'Sweets',
    season: 'Summer',
    tagline: 'The classic, grove-style',
    summary:
      "Once the cooking's done, those dying coals are perfect for toasting marshmallows into gooey s'mores — the kids' favorite send-off to a cookout.",
    difficulty: 'Beginner',
    tools: ['Long skewers or roasting sticks', 'Heat cover (optional)'],
    prepTime: '5 min',
    cookTime: '5 min',
    serves: 'A crowd',
    grillSetup: 'Dying coals',
    ingredients: [{ items: ['Marshmallows', 'Graham crackers', 'Chocolate bars'] }],
    steps: [
      'After cooking, let the coals burn down to a low glow — no flames, just gentle heat.',
      'Skewer a marshmallow and hold it a few inches above the coals, turning slowly, until golden (or flame-kissed, if that’s your style).',
      'Sandwich the hot marshmallow and a square of chocolate between two graham crackers; press gently to melt.',
      'Wait a few seconds for the chocolate to soften, then enjoy.',
    ],
    groveNote: 'Use the LEFTOVER coals — no need to light more. Keep little hands back from the grill and supervise the skewers.',
    safety: 'Coals stay hot for hours — keep kids at arm’s length and use long skewers.',
    source: 'The classic campfire treat.',
  },

  // ---- Advanced ----
  {
    slug: 'grill-top-wok-stir-fry',
    title: 'Grill-Top Wok Stir-Fry',
    category: 'Veggies & Sides',
    season: 'Summer',
    tagline: 'Live-fire stir-fry',
    summary:
      "A grill-top wok turns the communal grill into a roaring stir-fry station — live fire hits temperatures a home stove can't, giving veg and shrimp that smoky 'wok hei' char.",
    difficulty: 'Advanced',
    tools: ['Grill-top wok', 'Chimney starter', 'Long spatula or paddle', 'Heat-resistant gloves'],
    prepTime: '20 min',
    cookTime: '10 min',
    serves: '4',
    grillSetup: 'Hot direct fire',
    ingredients: [
      {
        group: 'Stir-fry',
        items: [
          '1 lb shrimp (or chicken/tofu)',
          '4 cups mixed veg (peppers, snap peas, broccoli, carrots)',
          '3 cloves garlic, minced',
          '1 tbsp ginger, minced',
          '3 green onions (whites/greens separated)',
          '2 tbsp high-smoke-point oil',
        ],
      },
      {
        group: 'Sauce',
        items: ['3 tbsp soy sauce', '1 tbsp oyster sauce', '1 tbsp rice vinegar', '1 tsp sesame oil', '1 tsp honey', 'Pinch red pepper flakes'],
      },
      { group: 'To serve', items: ['Cooked rice (bring from home)'] },
    ],
    steps: [
      'Prep EVERYTHING first — stir-fry moves fast. Mix the sauce; have all veg and protein chopped and within reach.',
      'Build a big, hot fire and set the wok directly over the coals to preheat until it’s smoking.',
      'Add oil, then the garlic, ginger, and scallion whites — toss ~15 sec until fragrant.',
      'Add the protein and stir-fry until nearly done, then push it up the sides of the wok.',
      'Add the hard veg first (carrots, broccoli), then quick veg (peppers, snap peas), tossing constantly ~3–4 min.',
      'Pour in the sauce, toss to glaze ~1 min, finish with scallion greens, and serve over rice.',
    ],
    groveNote:
      'The grill-top wok is the advanced griller’s secret weapon — high sides plus live fire beat any home burner. Mise en place is everything; have it ALL ready before the wok goes on.',
    safety: 'Shrimp: opaque and pink. Chicken: 165°F.',
    source: 'A live-fire technique for the grove.',
  },
  {
    slug: 'spatchcock-chicken',
    title: 'Spatchcock Grilled Chicken',
    category: 'Poultry',
    season: 'Year-round',
    tagline: 'Whole bird, evenly cooked',
    summary:
      'Flatten a whole chicken (spatchcock) so it cooks evenly over indirect heat — crispy skin, juicy meat, and enough to feed the whole table.',
    difficulty: 'Advanced',
    tools: ['Kitchen shears', 'Chimney starter', 'Instant-read thermometer', 'Heat cover (optional)'],
    prepTime: '15 min',
    cookTime: '60 min',
    serves: '4–6',
    grillSetup: 'Indirect (coals banked to one side)',
    ingredients: [
      {
        items: [
          '1 whole chicken (3.5–4 lb)',
          '2 tbsp olive oil',
          '1 tbsp salt',
          '2 tsp paprika',
          '1 tsp garlic powder',
          '1 tsp pepper',
          '1 lemon',
        ],
      },
    ],
    steps: [
      'Spatchcock the bird: with kitchen shears, cut out the backbone, flip it over, and press flat to crack the breastbone.',
      'Pat dry, rub all over with oil and the spice mix, and let it sit while the fire builds.',
      'Build an indirect fire — coals banked to one side. Lay the chicken skin-up on the COOL side.',
      'Cook indirect ~45–60 min until the breast reads 165°F and the thighs ~175°F. A cover/dome speeds it up and holds heat.',
      'For the last few minutes, slide it skin-side down over the coals to crisp the skin — watch for flare-ups.',
      'Rest 10 min, squeeze lemon over, and cut into pieces.',
    ],
    groveNote:
      'Spatchcocking is the trick to a whole bird on charcoal — flat means even cooking. Cook it indirect (away from the coals) or the skin burns before the inside is done.',
    safety: 'Chicken: breast 165°F, thighs juiciest ~175°F.',
    source: 'A whole-bird technique for the grove.',
  },
  {
    slug: 'reverse-sear-ribeye',
    title: 'Reverse-Sear Ribeye',
    category: 'Beef',
    season: 'Fall',
    tagline: 'Steakhouse, edge to edge',
    summary:
      'Cook a thick ribeye gently on the cool side first, then sear it hard over the coals — edge-to-edge pink with a deep crust. The pro move for thick steaks.',
    difficulty: 'Advanced',
    tools: ['Chimney starter', 'Instant-read thermometer', 'Long tongs', 'Heat cover (optional)'],
    prepTime: '10 min',
    cookTime: '30 min',
    serves: '2',
    grillSetup: 'Two-zone fire',
    ingredients: [
      {
        items: [
          '1 thick (1.5–2 inch) ribeye',
          'Salt and pepper',
          '1 tbsp oil',
          'Compound butter (optional)',
          'Rosemary & garlic (optional)',
        ],
      },
    ],
    steps: [
      'Salt the steak well and let it come toward room temperature while the fire builds.',
      'Build a two-zone fire. Set the steak on the COOL side (a cover/dome helps) and cook slow until the center hits ~110–115°F, ~20–25 min, flipping occasionally.',
      'Rest it briefly while you stoke the coals screaming hot.',
      'Sear over the hot zone ~1 min per side (and roll it to sear the edges) until a deep crust forms and the center reaches ~125°F for medium-rare.',
      'Rest 5–10 min, top with compound butter, and slice against the grain.',
    ],
    groveNote:
      'Reverse sear = gentle cook first, hard sear last. It’s the most reliable way to nail a thick steak on charcoal — no gray band, all crust.',
    safety: 'USDA medium for beef is 145°F; 125°F is a chef’s medium-rare — your call.',
    source: 'A steakhouse technique for the grove.',
  },
  {
    slug: 'grilled-pizza',
    title: 'Grilled Pizza Margherita',
    category: 'Veggies & Sides',
    season: 'Year-round',
    tagline: 'Blistered, smoky crust',
    summary:
      'Pizza dough cooks shockingly well right on the grate — live fire blisters and chars the crust like a wood oven. Move fast and keep the toppings light.',
    difficulty: 'Advanced',
    tools: ['Chimney starter', 'Pizza peel or large spatula', 'Cast-iron or pizza stone (optional)', 'Heat cover (optional)'],
    prepTime: '20 min',
    cookTime: '8 min',
    serves: '2–4',
    grillSetup: 'Two-zone fire (hot)',
    ingredients: [
      {
        items: [
          '1 lb pizza dough (store-bought is fine)',
          'Olive oil',
          '½ cup tomato sauce',
          '8 oz fresh mozzarella',
          'Fresh basil',
          'Flour or semolina for dusting',
          'Toppings of choice',
        ],
      },
    ],
    steps: [
      'Build a two-zone fire with a hot side. Stretch the dough on a floured peel and brush one side with oil.',
      'Lay the dough oiled-side down over the hot zone and grill ~2–3 min, until the bottom is set and charred underneath.',
      'Flip the crust with tongs or the peel; brush with sauce and add cheese and toppings on the grilled side.',
      'Slide to the COOLER zone, cover with a dome (or loose foil), and cook ~3–5 min until the cheese melts and the bottom crisps.',
      'Finish with fresh basil and a drizzle of olive oil; slice and serve.',
    ],
    groveNote:
      'Keep toppings light or the crust burns before they cook. A cover/dome melts the cheese without flipping. Have everything ready — grilled pizza is fast.',
    source: 'A wood-oven trick, done on charcoal.',
  },

  // ---- Local Catch (Jersey Shore) ----
  {
    slug: 'grilled-striped-bass',
    title: 'Grilled Striped Bass',
    category: 'Seafood',
    season: 'Summer',
    local: true,
    tagline: 'The prized Jersey striper',
    summary:
      'Striped bass is THE Jersey Shore catch — firm, meaty, and clean-flavored. Grilled whole or as thick fillets with lemon and herbs, it’s the best thing off the grate all summer.',
    difficulty: 'Intermediate',
    tools: ['Chimney starter', 'Fish spatula', 'Instant-read thermometer', 'Heavy-duty foil'],
    prepTime: '15 min',
    cookTime: '15 min',
    serves: '4',
    grillSetup: 'Two-zone fire, skin-on',
    ingredients: [
      {
        items: [
          '2 lb striped bass fillets (skin on), or 1 whole fish, scaled & gutted',
          '3 tbsp olive oil',
          '1 lemon, sliced',
          '2 cloves garlic',
          'Fresh thyme & parsley',
          'Salt and pepper',
        ],
      },
    ],
    steps: [
      'Build a two-zone fire and oil the grate very well (skin sticks). Pat the fish dry, brush with oil, and season inside and out; tuck lemon and herbs into a whole fish.',
      'Lay skin-side down over the medium zone and cook 7–9 min without moving it.',
      'Flip once with a fish spatula; cook 4–6 min more to 145°F. (A whole fish runs longer — about 10–12 min per side.)',
      'Rest a couple minutes and serve with lemon.',
    ],
    groveNote: 'Striped bass has firm flesh that grills better than most fish — great for learning whole fish. Oil the grate and don’t rush the flip.',
    safety: 'Fish: 145°F. Check current NJ striped bass size & season limits before keeping one.',
    source: 'A Jersey Shore local catch — grove-grilled.',
  },
  {
    slug: 'grilled-bluefish',
    title: 'Grilled Bluefish',
    category: 'Seafood',
    season: 'Summer',
    local: true,
    tagline: "Jersey's bold, oily catch",
    summary:
      'Bluefish is a hard-fighting local catch with rich, oily flesh that stands up to fire and bold flavor. Fresh off the boat and grilled with plenty of lemon, it’s a shore classic.',
    difficulty: 'Intermediate',
    tools: ['Chimney starter', 'Fish spatula', 'Heavy-duty foil', 'Instant-read thermometer'],
    prepTime: '10 min',
    cookTime: '12 min',
    serves: '4',
    grillSetup: 'Two-zone fire, skin-on',
    ingredients: [
      {
        items: [
          '2 lb bluefish fillets, skin on',
          '3 tbsp olive oil',
          '2 cloves garlic, minced',
          '1 lemon (juice + wedges)',
          '1 tsp paprika',
          'Salt and pepper',
          'Fresh parsley',
        ],
      },
    ],
    steps: [
      'Bluefish is best SUPER fresh — bleed and ice it right after the catch. Pat the fillets dry.',
      'Build a two-zone fire and oil the grate. Brush the fillets with oil, garlic, and lemon, then season.',
      'Lay skin-side down over the medium zone and cook 6–8 min without moving — the skin shields the flesh.',
      'Flip once with a fish spatula; cook 2–4 min more to 145°F.',
      'Squeeze lemon over and scatter with parsley.',
    ],
    groveNote: 'Bluefish’s strong flavor mellows with acid — be generous with the lemon. Grill it the SAME DAY it’s caught for the best taste.',
    safety: 'Fish: 145°F. Bleed and ice bluefish right away — it doesn’t keep like leaner fish.',
    source: 'A Jersey Shore local catch — grove-grilled.',
  },
  {
    slug: 'grilled-fluke',
    title: 'Grilled Fluke (Summer Flounder)',
    category: 'Seafood',
    season: 'Summer',
    local: true,
    tagline: 'Delicate, in a foil boat',
    summary:
      'Fluke (summer flounder) is a prized, mild, lean local flatfish — too delicate for the bare grate, so it’s grilled in a foil boat with butter, lemon, and herbs.',
    difficulty: 'Intermediate',
    tools: ['Chimney starter', 'Heavy-duty foil', 'Fish spatula'],
    prepTime: '10 min',
    cookTime: '12 min',
    serves: '2',
    grillSetup: 'Two-zone fire (foil)',
    ingredients: [
      {
        items: [
          '2 fluke fillets (~6 oz each)',
          '2 tbsp butter',
          '1 lemon (slices + juice)',
          '1 clove garlic',
          'Fresh dill or parsley',
          'Salt and pepper',
          'Splash of white wine (optional)',
        ],
      },
    ],
    steps: [
      'Build a two-zone fire. Lay each fillet on an oiled foil square; top with butter, garlic, lemon slices, herbs, salt, pepper (and a splash of wine).',
      'Fold the foil into a sealed packet/boat.',
      'Set over the medium zone ~10–12 min, until the fluke is opaque and flakes (145°F).',
      'Open carefully — watch the steam — and serve right from the foil with the buttery juices.',
    ],
    groveNote: 'Fluke is delicate and lean — a foil boat keeps it from sticking, falling apart, or drying out. Don’t overcook it.',
    safety: 'Fish: 145°F (flakes easily). Check NJ fluke size & season limits.',
    source: 'A Jersey Shore local catch — grove-grilled.',
  },
  {
    slug: 'grilled-clams',
    title: 'Grilled Clams',
    category: 'Seafood',
    season: 'Summer',
    local: true,
    tagline: 'They pop right open',
    summary:
      'The easiest seafood on the grill: set littleneck clams right on the grate and they pop open in their own briny juice. Hit them with garlic butter — done in minutes.',
    difficulty: 'Beginner',
    tools: ['Chimney starter', 'Long tongs', 'Cast-iron pan or foil tray (for the butter)'],
    prepTime: '10 min',
    cookTime: '8 min',
    serves: '4 (appetizer)',
    grillSetup: 'Hot direct fire',
    ingredients: [
      {
        items: [
          '2–3 dozen littleneck clams, scrubbed',
          '1 stick butter',
          '4 cloves garlic, minced',
          '¼ cup white wine',
          '1 lemon',
          'Fresh parsley',
          'Crusty bread, to serve',
        ],
      },
    ],
    steps: [
      'Scrub the clams well; discard any that are cracked or won’t close when tapped.',
      'Melt the butter with garlic, wine, and a squeeze of lemon in a cast-iron pan set on the grill.',
      'Set the clams directly on the grate over a hot, direct fire (tent loosely with foil if you like).',
      'In 5–8 min they’ll POP open in their own juice — pull each one as it opens, and discard any that stay shut.',
      'Dunk in the garlic butter or pour it over, scatter with parsley, and serve with crusty bread to mop the juices.',
    ],
    groveNote: 'Grilled clams are the perfect beginner seafood — the grill does the work and they tell you when they’re done by opening.',
    safety: 'Use live, tightly-closed clams; discard any that don’t open after cooking.',
    source: 'A Jersey Shore local catch — grove-grilled.',
  },
  {
    slug: 'grilled-blue-crabs',
    title: 'Grilled Blue Crabs',
    category: 'Seafood',
    season: 'Summer',
    local: true,
    tagline: 'Old Bay & live fire',
    summary:
      'Jersey blue crabs, steamed then grilled with garlic-Old Bay butter — a messy, hands-on, only-at-the-shore feast. Steam them first, then kiss them with smoke.',
    difficulty: 'Advanced',
    tools: ['Chimney starter', 'Long tongs', 'Large pot (for steaming)', 'Cast-iron pan or foil tray'],
    prepTime: '20 min',
    cookTime: '15 min',
    serves: '4',
    grillSetup: 'Two-zone fire',
    ingredients: [
      {
        items: [
          '12 live blue crabs',
          '1 stick butter',
          '4 cloves garlic, minced',
          '2 tbsp Old Bay',
          '1 lemon (juice)',
          'Fresh parsley',
        ],
      },
    ],
    steps: [
      'Steam the crabs first (this cooks them through and firms the meat): in a big pot with an inch of water + Old Bay, steam ~10 min until bright red. Cool slightly.',
      'Halve or clean the crabs. Melt the butter with garlic, Old Bay, and lemon in a cast-iron pan on the grill.',
      'Brush the crabs generously with the garlic-Old Bay butter.',
      'Grill cut-side down over a medium-hot zone ~3–4 min, brushing with more butter, until the edges char and they’re hot through.',
      'Pile them high, pour over the remaining butter, and finish with parsley and lemon. Bring napkins.',
    ],
    groveNote: 'Steam-then-grill is the move — steaming cooks them through and firms the meat; the grill adds the smoke and char. Pure Jersey Shore.',
    safety: 'Steam live crabs until bright red and fully cooked; keep them cold until cook time.',
    source: 'A Jersey Shore local catch — grove-grilled.',
  },

  // ---- More to grill ----
  {
    slug: 'sausage-and-peppers',
    title: 'Grilled Sausage & Peppers',
    category: 'Pork',
    season: 'Summer',
    tagline: 'The Jersey street-fair classic',
    summary:
      'Sweet or hot Italian sausage charred over the coals with sweet peppers and onions — the smell of every Jersey street fair, made at the grove.',
    difficulty: 'Beginner',
    tools: ['Chimney starter', 'Long tongs', 'Cast-iron pan or foil tray'],
    prepTime: '10 min',
    cookTime: '20 min',
    serves: '4',
    grillSetup: 'Two-zone fire',
    ingredients: [
      {
        items: [
          '8 Italian sausages (sweet or hot)',
          '3 bell peppers, sliced',
          '2 onions, sliced',
          '2 tbsp olive oil',
          'Salt and pepper',
          '8 sub or hoagie rolls',
        ],
      },
    ],
    steps: [
      'Build a two-zone fire. Toss the peppers and onions with oil, salt, and pepper.',
      'Set a cast-iron pan or foil tray over the hot zone and cook the peppers and onions, stirring, until soft and charred at the edges, ~12–15 min.',
      'Meanwhile, grill the sausages over the medium zone, turning, until browned and 160°F inside, ~12–15 min. Slide to the cool zone if they flare.',
      'Pile the sausage and peppers into rolls.',
    ],
    groveNote: 'Start the peppers first — they take longer than the sausage. A foil tray keeps them from falling through the grate.',
    safety: 'Pork sausage: 160°F.',
    source: 'A Jersey street-fair staple for the grove.',
  },
  {
    slug: 'flank-steak-chimichurri',
    title: 'Grilled Flank Steak with Chimichurri',
    category: 'Beef',
    season: 'Summer',
    tagline: 'Fast sear, bright herb sauce',
    summary:
      'Flank steak takes a hot, fast sear and a sharp slice against the grain — piled with garlicky chimichurri, it feeds a crowd from one affordable cut.',
    difficulty: 'Intermediate',
    tools: ['Chimney starter', 'Long tongs', 'Instant-read thermometer', 'Sharp knife'],
    prepTime: '15 min',
    cookTime: '10 min',
    serves: '4',
    grillSetup: 'Hot direct zone',
    ingredients: [
      { group: 'Steak', items: ['1.5–2 lb flank steak', '2 tbsp olive oil', 'Salt and pepper'] },
      {
        group: 'Chimichurri',
        items: [
          '1 cup parsley, finely chopped',
          '3 cloves garlic, minced',
          '2 tbsp red wine vinegar',
          '½ cup olive oil',
          '½ tsp red pepper flakes',
          'Salt',
        ],
      },
    ],
    steps: [
      'Stir together all the chimichurri ingredients and let it sit while you grill (great made ahead).',
      'Build a hot fire. Rub the steak with oil and season well.',
      'Sear over the hot zone ~4–5 min per side to ~130°F for medium-rare. Don’t overcook a lean cut like this.',
      'Rest 8–10 min (important for flank), then slice THIN against the grain.',
      'Spoon chimichurri over the slices.',
    ],
    groveNote: 'Two rules for flank: don’t cook past medium-rare, and slice thin against the grain — that’s what keeps it tender.',
    safety: 'Beef: USDA 145°F; 130°F is a chef’s medium-rare.',
    source: 'A crowd-feeding cut for the grove.',
  },
  {
    slug: 'grilled-chicken-wings',
    title: 'Grilled Chicken Wings',
    category: 'Poultry',
    season: 'Summer',
    tagline: 'Crispy, smoky, toss-and-go',
    summary:
      'Wings grilled over a two-zone fire until the skin is crackly and smoky, then tossed in the sauce of your choice — the ultimate hands-on grove snack.',
    difficulty: 'Beginner',
    tools: ['Chimney starter', 'Long tongs', 'Instant-read thermometer', 'Large bowl (for tossing)'],
    prepTime: '10 min',
    cookTime: '30 min',
    serves: '4',
    grillSetup: 'Two-zone fire',
    ingredients: [
      {
        items: [
          '3 lb chicken wings, split',
          '1 tbsp baking powder (for crisp skin)',
          '1 tsp salt',
          '1 tsp garlic powder',
          '½ tsp pepper',
          'Sauce of choice (Buffalo, BBQ, or honey-soy)',
        ],
      },
    ],
    steps: [
      'Pat the wings very dry and toss with baking powder, salt, garlic powder, and pepper (the baking powder is the secret to crispy skin).',
      'Build a two-zone fire. Start the wings on the COOL side, turning now and then, ~20 min, to render the fat.',
      'Move them over the hot zone to crisp and char, ~5–10 min, watching for flare-ups.',
      'Pull at 175°F+ (wings are best well-done), then toss hot in your sauce.',
    ],
    groveNote: 'Render on the cool side first, crisp on the hot side last — rushing wings over direct heat just burns the skin while the inside is raw.',
    safety: 'Chicken: 165°F minimum; wings are best at 175–180°F.',
    source: 'The classic grove snack.',
  },
  {
    slug: 'grilled-shrimp-skewers',
    title: 'Grilled Shrimp Skewers',
    category: 'Seafood',
    season: 'Summer',
    tagline: 'Garlicky, 4 minutes, done',
    summary:
      'Big shrimp on skewers with garlic, lemon, and a little chili — they cook in about four minutes flat, so they’re the perfect quick app while the coals are hot.',
    difficulty: 'Beginner',
    tools: ['Chimney starter', 'Metal skewers', 'Long tongs'],
    prepTime: '15 min',
    cookTime: '5 min',
    serves: '4',
    grillSetup: 'Hot direct zone',
    ingredients: [
      {
        items: [
          '1.5 lb large shrimp, peeled & deveined',
          '3 tbsp olive oil',
          '3 cloves garlic, minced',
          '1 lemon (juice + wedges)',
          '½ tsp red pepper flakes',
          'Salt and pepper',
          'Chopped parsley',
        ],
      },
    ],
    steps: [
      'Toss the shrimp with oil, garlic, lemon juice, pepper flakes, salt, and pepper. Thread onto metal skewers.',
      'Build a hot fire. Grill the skewers over direct heat ~2 min per side, until the shrimp are pink and opaque — they cook fast, so don’t walk away.',
      'Squeeze lemon over, scatter parsley, and serve right off the skewer.',
    ],
    groveNote: 'Shrimp go from perfect to rubbery in seconds — pull them the moment they curl and turn opaque. Metal skewers beat wood (no soaking, no burning).',
    safety: 'Shrimp: opaque and firm (~120°F).',
    source: 'A fast grove appetizer.',
  },

  // ---- More Local Catch (Jersey Shore) ----
  {
    slug: 'grilled-black-sea-bass',
    title: 'Grilled Black Sea Bass',
    category: 'Seafood',
    season: 'Summer',
    local: true,
    tagline: 'Sweet, white, grilled whole',
    summary:
      'Black sea bass is a sweet, delicate Jersey reef fish that’s perfect grilled whole — crispy skin, flaky flesh, stuffed with lemon and herbs.',
    difficulty: 'Intermediate',
    tools: ['Chimney starter', 'Fish spatula', 'Instant-read thermometer'],
    prepTime: '15 min',
    cookTime: '18 min',
    serves: '2',
    grillSetup: 'Two-zone fire, well-oiled grate',
    ingredients: [
      {
        items: [
          '2 whole black sea bass (~1 lb each), scaled & gutted',
          '3 tbsp olive oil',
          '1 lemon, sliced',
          'Fresh thyme & parsley',
          '2 cloves garlic, sliced',
          'Salt and pepper',
        ],
      },
    ],
    steps: [
      'Score the skin of each fish a few times, brush with oil, and season inside and out. Stuff the cavities with lemon, garlic, and herbs.',
      'Build a two-zone fire and oil the grate very well.',
      'Grill over the medium zone ~8–9 min per side, flipping once with a fish spatula, until the skin crisps and the flesh flakes (145°F).',
      'Rest a couple minutes and serve with more lemon.',
    ],
    groveNote: 'Whole fish is more forgiving than fillets — the bones and skin protect the flesh. Score the skin and oil the grate so it releases clean.',
    safety: 'Fish: 145°F. Check NJ black sea bass size & season limits.',
    source: 'A Jersey Shore local catch — grove-grilled.',
  },
  {
    slug: 'soft-shell-crabs',
    title: 'Grilled Soft-Shell Crabs',
    category: 'Seafood',
    season: 'Summer',
    local: true,
    tagline: 'A fleeting Jersey delicacy',
    summary:
      'Soft-shell blue crabs — eaten shell and all — are a short-season Jersey delicacy. A quick hot grill crisps them up; finish with lemon-garlic butter.',
    difficulty: 'Advanced',
    tools: ['Chimney starter', 'Fish spatula', 'Cast-iron pan or foil tray'],
    prepTime: '15 min',
    cookTime: '8 min',
    serves: '4',
    grillSetup: 'Hot direct zone',
    ingredients: [
      {
        items: [
          '8 cleaned soft-shell crabs',
          '4 tbsp butter',
          '3 cloves garlic, minced',
          '1 lemon (juice + wedges)',
          '2 tbsp olive oil',
          'Salt and pepper',
          'Chopped parsley',
        ],
      },
    ],
    steps: [
      'Have your fishmonger clean the crabs (or clean them just before cooking). Pat very dry and brush with oil; season.',
      'Melt the butter with garlic and lemon in a cast-iron pan on the grill.',
      'Grill the crabs over a hot direct zone, top-shell down first, ~3–4 min per side, until crisp and bright red. They can pop and spatter — stand back.',
      'Brush with the lemon-garlic butter, finish with parsley, and serve with lemon wedges.',
    ],
    groveNote: 'Soft-shells are a short-season treat — grab them when you see them. Pat them bone-dry so they crisp instead of steam, and watch for spatter.',
    safety: 'Cook until bright red and hot through. Keep them very cold until cook time.',
    source: 'A Jersey Shore local delicacy — grove-grilled.',
  },

  // ---- More Veggies & Sides ----
  {
    slug: 'grilled-asparagus',
    title: 'Grilled Asparagus',
    category: 'Veggies & Sides',
    season: 'Spring',
    tagline: 'Charred, lemony, 6 minutes',
    summary:
      'Spring asparagus blistered over the coals with olive oil and lemon — the fastest, freshest side of the season.',
    difficulty: 'Beginner',
    tools: ['Chimney starter', 'Long tongs'],
    prepTime: '5 min',
    cookTime: '8 min',
    serves: '4',
    grillSetup: 'Direct heat',
    ingredients: [
      {
        items: [
          '1 bunch asparagus, woody ends snapped off',
          '2 tbsp olive oil',
          'Salt and pepper',
          '1 lemon',
          'Grated Parmesan (optional)',
        ],
      },
    ],
    steps: [
      'Toss the asparagus with oil, salt, and pepper.',
      'Lay the spears across the grate (perpendicular so they don’t fall through) over direct heat.',
      'Grill, rolling now and then, ~5–8 min until charred in spots and just tender.',
      'Squeeze lemon over and shower with Parmesan if you like.',
    ],
    groveNote: 'Lay the spears across the bars so they don’t drop into the coals — or use a grill basket. Thicker spears grill better than pencil-thin ones.',
    source: 'A fresh spring side for the grove.',
  },
  {
    slug: 'foil-grilled-potatoes',
    title: 'Foil-Packet Grilled Potatoes',
    category: 'Veggies & Sides',
    season: 'Year-round',
    tagline: 'Crispy, buttery, no pot',
    summary:
      'Buttery, herby potatoes that cook in a foil packet right on the grate while your main grills — the no-fuss side that goes with everything.',
    difficulty: 'Beginner',
    tools: ['Chimney starter', 'Heavy-duty foil', 'Long tongs'],
    prepTime: '10 min',
    cookTime: '30 min',
    serves: '4',
    grillSetup: 'Two-zone fire (foil)',
    ingredients: [
      {
        items: [
          '2 lb baby potatoes, halved',
          '3 tbsp butter or olive oil',
          '3 cloves garlic, minced',
          '1 tsp salt',
          '½ tsp pepper',
          'Fresh rosemary or thyme',
        ],
      },
    ],
    steps: [
      'Toss the potatoes with butter/oil, garlic, salt, pepper, and herbs.',
      'Seal them in a double layer of heavy-duty foil (one big packet or a few smaller ones).',
      'Set over the hot zone ~25–30 min, flipping once, until tender when pierced.',
      'Open carefully (steam!), and tip onto a platter.',
    ],
    groveNote: 'Double-wrap so they don’t tear, and give them a head start before the main — potatoes take longer than most things on the grill.',
    source: 'The everything-goes-with-it side.',
  },

  // ---- More Sweets ----
  {
    slug: 'grilled-peaches',
    title: 'Grilled Peaches with Ice Cream',
    category: 'Sweets',
    season: 'Summer',
    tagline: 'Caramelized & jammy',
    summary:
      'Ripe summer peaches halved and grilled until caramelized and jammy, then topped with vanilla ice cream — the easiest showstopper dessert at the grove.',
    difficulty: 'Beginner',
    tools: ['Chimney starter', 'Long tongs'],
    prepTime: '5 min',
    cookTime: '8 min',
    serves: '4',
    grillSetup: 'Medium direct heat',
    ingredients: [
      {
        items: [
          '4 ripe but firm peaches, halved & pitted',
          '1 tbsp melted butter',
          '1 tbsp honey or brown sugar',
          'Vanilla ice cream',
          'Cinnamon (optional)',
        ],
      },
    ],
    steps: [
      'Brush the cut sides of the peaches with melted butter and a little honey.',
      'Grill cut-side down over medium direct heat ~3–4 min, until grill marks form and they soften.',
      'Flip and grill the skin side ~2–3 min more.',
      'Serve warm, cut-side up, with a scoop of vanilla ice cream melting into the center.',
    ],
    groveNote: 'Use firm-ripe peaches — too soft and they fall apart on the grate. Cook these on the leftover heat after dinner.',
    source: 'A summer grove dessert.',
  },
  {
    slug: 'grilled-pineapple',
    title: 'Grilled Pineapple',
    category: 'Sweets',
    season: 'Summer',
    tagline: 'Caramel rings, no cleanup',
    summary:
      'Pineapple rings caramelize beautifully over the coals into sweet, smoky, tropical candy — a no-cleanup dessert (or a sweet side for pork and chicken).',
    difficulty: 'Beginner',
    tools: ['Chimney starter', 'Long tongs'],
    prepTime: '5 min',
    cookTime: '8 min',
    serves: '4',
    grillSetup: 'Medium-hot direct heat',
    ingredients: [
      {
        items: [
          '1 pineapple, peeled & cut into ½-inch rings',
          '2 tbsp brown sugar',
          '1 tbsp melted butter',
          'Pinch of cinnamon or chili (optional)',
          'Lime wedges',
        ],
      },
    ],
    steps: [
      'Brush the pineapple rings with melted butter and dust with brown sugar.',
      'Grill over medium-hot direct heat ~3–4 min per side, until deeply caramelized with dark grill marks.',
      'Squeeze lime over and serve — on its own, with ice cream, or alongside grilled pork or chicken.',
    ],
    groveNote: 'The natural sugar does the work — just let the rings sit long enough to caramelize before flipping. Doubles as a sweet side for pork.',
    source: 'A tropical grove sweet.',
  },
]

// ---- Tools / gear guide ----
export type Tool = { name: string; emoji: string; essential: boolean; what: string; tip?: string }

export const tools: Tool[] = [
  // Essentials
  {
    name: 'Chimney Starter',
    emoji: '🔥',
    essential: true,
    what: 'A metal cylinder that lights charcoal fast with just newspaper — no lighter fluid, no chemical taste. The single best tool for our grills.',
    tip: 'Fill it, light the paper underneath, wait ~15 min for the top coals to turn gray, then dump.',
  },
  {
    name: 'Long-Handled Tongs',
    emoji: '🍴',
    essential: true,
    what: 'Sturdy, long tongs keep your hands away from the heat and let you flip food and rake coals.',
    tip: 'Get the 16-inch ones — the short kitchen pair will cook your knuckles.',
  },
  {
    name: 'Instant-Read Thermometer',
    emoji: '🌡️',
    essential: true,
    what: 'A ~$12 probe takes all the guesswork out — hit the safe temps every time.',
    tip: '165°F chicken · 160°F burgers · 145°F fish, pork & steak.',
  },
  {
    name: 'Heavy-Duty Aluminum Foil',
    emoji: '🧻',
    essential: true,
    what: 'Foil packets and boats cook delicate fish, veggies, and potatoes right on the grate — and a wadded ball scrubs the grate clean.',
    tip: 'Heavy-duty only; regular foil tears over live fire.',
  },
  {
    name: 'Long Lighter or Matches',
    emoji: '🕯️',
    essential: true,
    what: 'A long-reach lighter or fireplace matches to light the chimney safely, without singeing your hand.',
  },
  {
    name: 'Grill Brush or Scraper',
    emoji: '🧽',
    essential: true,
    what: 'Clean the hot grate before you cook so your food does not stick to last cookout’s char.',
    tip: 'A ball of foil held in tongs works in a pinch — and avoids loose wire bristles.',
  },
  {
    name: 'Cooler with Ice',
    emoji: '🧊',
    essential: true,
    what: 'Keep raw meat and seafood cold until the moment it hits the grate — food safety starts in the cooler.',
  },
  {
    name: 'Heat-Resistant Gloves',
    emoji: '🧤',
    essential: false,
    what: 'Move a hot chimney, grate, or cast-iron pan without fumbling a folded towel.',
  },
  // Worth the upgrade
  {
    name: 'Heat Cover / Basting Dome',
    emoji: '🛎️',
    essential: false,
    what: 'Our park grills have no lid — a metal cover (or an inverted disposable foil pan) traps heat to melt cheese, cook thicker cuts, and hold warmth.',
    tip: 'The cheap version: an upside-down foil roasting pan.',
  },
  {
    name: 'Cast-Iron Skillet or Griddle',
    emoji: '🍳',
    essential: false,
    what: 'Turns the grate into a flat-top for smashburgers, crab cakes, eggs, and anything that would fall through the bars.',
    tip: 'Used in: Grilled Clams, Grilled Pizza, soft-shell crabs.',
  },
  {
    name: 'Grill-Top Wok',
    emoji: '🥘',
    essential: false,
    what: 'High sides plus live fire let you stir-fry over real heat a home stove cannot match — that smoky wok-hei char.',
    tip: 'Used in: Grill-Top Wok Stir-Fry.',
  },
  {
    name: 'Fish Spatula',
    emoji: '🐟',
    essential: false,
    what: 'A thin, flexible blade slides under delicate fish for a clean flip without tearing.',
    tip: 'Used in: every grilled-fish recipe.',
  },
  {
    name: 'Metal Skewers',
    emoji: '🍢',
    essential: false,
    what: 'For kebabs, shrimp, and veg — and toasting marshmallows. Metal beats wood: no soaking, reusable.',
  },
  {
    name: 'Spray Bottle',
    emoji: '💦',
    essential: false,
    what: 'A spritz of water or cider vinegar tames flare-ups and keeps low-and-slow meats moist.',
    tip: 'Used in: Best Ribs.',
  },
  {
    name: 'Wood Chunks',
    emoji: '🪵',
    essential: false,
    what: 'Drop a fruitwood or hickory chunk on the coals for real smoke flavor on ribs and low-and-slow cooks.',
  },
  {
    name: 'Sharp Knife & Cutting Board',
    emoji: '🔪',
    essential: false,
    what: 'Slice against the grain, portion fish, and prep right at the grove. Bring a small board and a sharp knife.',
  },
]

export const BLOG_CATEGORIES = ['Events', 'Tips', 'Recaps', 'Recipes', 'General'] as const
export type BlogCategory = (typeof BLOG_CATEGORIES)[number]
