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

export type Recipe = { title: string; season: 'spring' | 'summer' | 'fall'; meta: string; body: string }

export const recipes: Recipe[] = [
  { title: 'Grilled Lemon Herb Salmon', season: 'spring', meta: 'Spring · Pescatarian · Two-zone', body: 'Marinate salmon in lemon, dill, and olive oil; grill alongside asparagus for a bright kickoff to spring.' },
  { title: 'Tandoori-Style Chicken', season: 'spring', meta: 'Spring · Crowd-scale friendly', body: 'Yogurt, lime, and garam masala make tender thighs finished over high heat. Cool it with a cucumber-melon relish.' },
  { title: 'Skirt Steak Tacos & Chimichurri', season: 'spring', meta: 'Spring · Handheld feast', body: 'Char skirt steak over blazing coals, slice thin, and dress with ramp-studded chimichurri for taco nights.' },
  { title: 'Minty Lamb Burgers', season: 'summer', meta: 'Summer · Main course', body: 'Blend ground lamb with mint, parsley, and cumin; grill to medium, finish with whipped yogurt and charred buns.' },
  { title: 'Charred Jersey Tomato & Corn Salad', season: 'summer', meta: 'Summer · Side dish', body: 'Fire-kiss sweet corn, asparagus, and tomatoes; toss with herb yogurt dressing for a boardwalk-inspired side.' },
  { title: 'NJ Shore Seafood Paella', season: 'summer', meta: 'Summer · Showcase feast', body: 'Layer saffron rice, shrimp, mussels, clams, and grilled peppers in a wide pan over a three-zone fire.' },
  { title: 'Boardwalk Street Corn', season: 'summer', meta: 'Summer · Vegetarian', body: 'Roll grilled corn in smoked paprika butter and crushed kettle chips for a crowd-pleasing side.' },
  { title: 'Grilled Peach Melba Sundaes', season: 'summer', meta: 'Summer · Dessert', body: 'Caramelize ripe peaches, top with vanilla ice cream, raspberry compote, and toasted almonds.' },
  { title: 'Coffee-Rubbed Strip Steaks', season: 'fall', meta: 'Fall · Reverse sear', body: 'Coffee + brown sugar rub, reverse sear from a cool zone, finish over roaring coals; top with cider chimichurri.' },
  { title: 'Harvest Burgers', season: 'fall', meta: 'Fall · Comfort food', body: 'Stack beef patties with sharp cheddar, maple onions, and smoky grilled apples for sweater-weather picnics.' },
  { title: 'Pumpkin & Brussels Flatbread', season: 'fall', meta: 'Fall · Vegetarian main', body: 'Grill flatbread over indirect heat; layer roasted pumpkin purée, goat cheese, and crispy sprouts.' },
  { title: 'Smoky Pear & Cranberry Crisp', season: 'fall', meta: 'Fall · Dessert', body: 'Bake pears, cranberries, and oat streusel in cast iron over banked coals; serve warm with mascarpone.' },
]

export const BLOG_CATEGORIES = ['Events', 'Tips', 'Recaps', 'Recipes', 'General'] as const
export type BlogCategory = (typeof BLOG_CATEGORIES)[number]
