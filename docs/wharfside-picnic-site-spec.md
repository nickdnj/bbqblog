# Wharfside Manor Picnic Area Website Content & Experience Specification

## 1. Project Overview
- **Client / Community:** Wharfside Manor Condominiums, Monmouth Beach, New Jersey – 11 shared Kay Park-Rec SF163.5 pedestal charcoal grills installed permanently in the waterfront picnic grove.
- **Primary Objective:** Provide residents and approved guests with a centralized, mobile-friendly website that communicates rules, showcases seasonal recipes, and delivers multimedia how-tos tailored to the community's amenities.
- **Secondary Objectives:**
  - Reinforce HOA policies, safety compliance, and maintenance expectations.
  - Celebrate Jersey Shore food culture with crowd-scalable menus for spring through fall.
  - Encourage community storytelling and sign-ups for shared events.
- **Platform Assumption:** Static HTML/CSS/JS site (no CMS requirement) with modular content blocks to facilitate future automation by an AI agent.

## 2. Brand Voice & Experience Principles
- **Tone:** Neighborly, authoritative, and energetic. Mix clear HOA guidance with upbeat culinary storytelling.
- **Visual Identity:** Coastal palette (deep navy, seafoam, driftwood neutrals), photography of the marina, pool, and grills in use.
- **Accessibility:** WCAG 2.2 AA targets – high-contrast typography, semantic HTML, captions/transcripts for all videos, descriptive alt text, keyboard-friendly navigation.

## 3. Information Architecture
### 3.1 Global Layout
- **Header:** Wharfside Manor wordmark, primary navigation, quick alert banner (for weather advisories or fire bans).
- **Footer:** Emergency contacts, HOA office info, downloadable PDF quick-start cards, social/email signup.
- **Utility Components:**
  - "Reserve a Grill" CTA linking to request form.
  - Weather + wind widget (optional future enhancement) tuned to Monmouth Beach.

### 3.2 Top-Level Pages & Content Modules
| Page | Purpose | Core Modules | Notes |
| --- | --- | --- | --- |
| Home | Snapshot of latest content and urgent notices | Hero (picnic area), rotating alerts, "This Week at the Picnic Area" events list, featured recipe, featured how-to video, testimonials from residents | Provide quick access buttons to Rules, Reservations, and Seasonal Menus |
| Picnic & Grill Rules | Single source of truth for policies | Sectioned accordions for General Conduct, Grill Use, Fire Safety, Pool & Beach Etiquette, Pets, Alcohol, Cleanup, Emergency steps | Include citations to Monmouth County Park rules, Monmouth Beach ordinances, NFPA guidance. Provide downloadable PDF and printable signage text. |
| How-To Guides | Instructional hub | Cards for each tutorial with difficulty tags (Beginner/Intermediate/Advanced), video embed, transcript, printable checklist | Focus on Kay Park SF163.5 operation, chimney starting, lighter-fluid procedure, instant-light briquettes, coastal wind management, sanitation, picnic planning, food safety |
| Recipes | Seasonal library (Spring, Summer, Fall) | Filter by season, course, dietary tags, crowd size. Each recipe page uses standardized template (see §5). Include printable option and video embed. | Highlight local ingredients (Jersey tomatoes, seafood, ramps) and multi-course feast itineraries. |
| Community Stories & Events | Foster engagement | Blog feed (resident submissions), photo galleries, event calendar with RSVP links, volunteer opportunities | Provide moderation workflow and submission guidelines. |
| About Wharfside | Community overview | Condo history, amenities (pool, docks, picnic grove), map, parking info, FAQs | Link to condo association resources. |
| Contact & Reservations | Communication hub | Contact form (name, unit, phone, email), grill reservation request form, emergency numbers, downloadable forms | Outline approval process, usage limits, and acknowledgement checkbox for rules compliance. |

## 4. Content Governance
- **Source of Truth:** This specification becomes the canonical blueprint for AI-assisted content generation.
- **Update Cadence:**
  - Rules & policies: review quarterly or when municipal guidelines change.
  - Seasonal recipes: refresh at least three times per year (spring, summer, fall).
  - Stories & events: update weekly during peak season (Memorial Day – Labor Day).
- **Approval Workflow:** Draft → HOA review → Legal/safety verification → Publication. Maintain change log in repository.

## 5. Recipe Content Framework
### 5.1 Template (per recipe)
1. **Title & Season**
2. **Hero Summary** (2 sentences highlighting flavor & occasion)
3. **At-a-Glance Metadata:** difficulty, prep/cook time, yield (4 servings + "scale for 10/20" notes), grill setup (direct/two-zone/three-zone), equipment checklist.
4. **Ingredients Table:** columns for quantity, item, substitutions (vegetarian/gluten-free suggestions).
5. **Step-by-Step Directions:** numbered instructions with estimated timing and internal temperature targets.
6. **Chef Notes:** make-ahead tips, leftover ideas, beverage pairing.
7. **Safety Reminders:** USDA temperature call-outs and allergen notes.
8. **Media Assets:**
   - Photo list: mise en place, grilling action, plated dish.
   - Video script summary and call-to-action.
9. **Downloadables:** printable PDF card (auto-generated from template).
10. **Source Attribution:** cite local inspiration or authoritative techniques.

### 5.2 Seasonal Menus & Highlighted Recipes
- **Spring Launch Menu:**
  - Grilled Lemon Herb Salmon with Asparagus (pescatarian-friendly).
  - Tandoori-Style Chicken with Cucumber-Melon Relish.
  - Skirt Steak Tacos with Appalachian Chimichurri.
  - Grilled Spring Vegetable Medley (ramps, snap peas, radishes).
  - Dessert: Citrus-Drizzled Grilled Pound Cake.
- **Summer Signature Menu:**
  - Minty Lamb Burgers with Yogurt Sauce.
  - Charred Jersey Tomato, Corn & Asparagus Salad.
  - New Jersey Shore Seafood Paella (shrimp, mussels, clams).
  - Boardwalk Street Corn with Old Bay Butter.
  - Grilled Peach Melba Sundaes.
- **Fall Harvest Menu:**
  - Coffee-Rubbed Strip Steaks with Fall Herb Chimichurri.
  - Harvest Burgers with Caramelized Onions & Grilled Apples.
  - Fire-Roasted Pumpkin & Brussels Sprouts Flatbread.
  - Maple-Glazed Acorn Squash Wedges.
  - Smoky Pear & Cranberry Crisp.
- **Complex Feast Blueprint:** "Wharfside Waterfront Showcase" – multi-course plan with prep timeline, grill zone choreography, beverage station, and clean-up checklist.

## 6. How-To Library & Video Storyboards
### 6.1 Tutorials Overview
| Title | Skill Level | Summary | Key Assets |
| --- | --- | --- | --- |
| Communal Grill Prep & Lighting | Beginner | Inspecting Kay Park SF163.5 grills, cleaning grates, chimney starting, lighter-fluid safety, instant-light briquettes | 3-minute video, printable checklist, infographic on fuel options |
| Two-Zone & Three-Zone Fire Mastery | Intermediate | Coal arrangements for lidless fireboxes, grate height adjustments, managing wind | Diagram set, animation storyboard, grill temperature cheat sheet |
| Wind & Weather Defense on the Jersey Shore | Intermediate | Orienting firebox, DIY wind screens, fuel planning, humidity considerations | 2-minute explainer video with overlays, wind-orientation worksheet |
| Food Safety for Shared Grills | Beginner | Transporting perishables, cross-contamination avoidance, USDA temperature targets | Photo essay, temperature reference card, kid-friendly graphic |
| Picnic Planning 101 | Beginner | Reservation workflow, packing list, permitted equipment, waste management | Blog article, downloadable packing checklist, video featuring residents |
| Advanced Multi-Course Timing | Advanced | Reverse sear workflow, simultaneous appetizers & mains, holding zones | Long-form article, Gantt-style timeline chart, 4-minute hero video |
| Seasonal Maintenance & Rust Prevention | Advanced | Post-use oiling, anti-corrosion steps, quarterly inspections, repainting | Step-by-step photo gallery, interview video with maintenance lead |

### 6.2 Video Production Standards
- **Duration:** 2–4 minutes each, horizontal 1080p, 24/30 fps.
- **Narrative Structure:** cold open hook → on-screen title → step-by-step demo → recap → CTA linking to full article/recipe.
- **Shot List Template:** establishing drone/handheld of picnic area, medium shots of grill, close-ups of hands/thermometer, POV plating shots, community lifestyle b-roll.
- **Audio:** Voiceover recorded with lav mic; include ambient Jersey Shore soundbed under narration. Provide SRT captions.
- **Branding:** Lower-third graphics with Wharfside colors, icon set for safety tips, watermark logo in corner.

### 6.3 Example Storyboard – "Communal Grill Prep & Lighting"
1. **Scene 1 (0:00–0:10):** Wide shot of picnic grove; narrator intro overlay.
2. **Scene 2 (0:10–0:35):** Inspecting grill hardware; close-ups of grate slots and rotation lock.
3. **Scene 3 (0:35–1:30):** Split-screen of chimney method vs lighter-fluid method; safety callouts.
4. **Scene 4 (1:30–2:10):** Demonstrate coal layouts (direct, two-zone) with animated overlays.
5. **Scene 5 (2:10–2:40):** Safety & etiquette reminders, children perimeter, ash bucket usage.
6. **Scene 6 (2:40–3:00):** Closing CTA – "Download the checklist & reserve your grill slot."

## 7. Rules & Legal Content Requirements
- **Alcohol & Controlled Substances:** No alcohol or controlled substances in picnic area, following Monmouth County Park regulations and Monmouth Beach ordinances.
- **Group Permits:** Mandatory request 7 days in advance for gatherings ≥50; adult supervision for youth groups.
- **Pets:** Leash requirement; seasonal beach restrictions (no pets Mar 15 – Oct 1 near endangered species zones).
- **Fire Safety:** Grills fixed on non-combustible pads ≥10 ft from structures; no relocation; provide extinguisher, sand bucket, ash bin.
- **Smoking:** Prohibited except in marked areas; no smoking on pool deck or pavilion.
- **Beach/Pool Etiquette:** Follow lifeguard instructions, no glass, shower before entering pool, HOA staff must ignite club grills before 5 p.m.
- **Liability Disclaimer:** Residents cook at own risk; HOA provides equipment "as-is"; emergency dial 911 then notify HOA security.

## 8. Forms & Downloadables
- Grill Reservation Form (HTML + printable PDF) with fields: resident name, unit, date/time, guest count, acknowledgment of rules, signature.
- Quick-Start Cards: chimney lighting, lighter-fluid lighting, instant-light briquettes, ash disposal.
- Safety Signage: "Maintain 10 ft Clearance," "No Alcohol in Picnic Grove," "Pets on Leash," "Dispose Ashes in Metal Bins."
- Temperature Reference Sheet: USDA safe minimums for beef, pork, poultry, seafood.
- Seasonal Shopping Lists aligned to feature menus.

## 9. Asset Inventory & Photography Plan
- **Photo Shoots:**
  - Morning golden-hour shoot of picnic area, pool, docks.
  - Action shots of residents grilling (waivers required).
  - Detail shots of Kay Park SF163.5 features (grate adjustments, ash bins).
  - Ingredient flat lays for each recipe.
- **Graphics:**
  - Icons for safety tips, equipment checklist, wind direction.
  - Maps illustrating grill locations, ash bin placement, and restrooms.

## 10. Technical Implementation Notes
- **Site Build:** Hand-coded HTML templates with modular partials for header/footer, using CSS custom properties for theming and a lightweight JS bundle for navigation toggles and filtering.
- **Content Data Structure:** JSON files (or front-matter in Markdown) for recipes, guides, events to allow AI agent ingestion.
- **Performance Targets:** Sub-1.5s Largest Contentful Paint on modern mobile, responsive down to 360px, lazy-load videos, compress hero imagery.
- **Analytics & Feedback:** Integrate privacy-conscious analytics (e.g., Plausible) and optional feedback form per article.

## 11. Future Enhancements Roadmap
1. **Interactive Tide & Weather Widget** – real-time data for planning waterfront events.
2. **Inventory Tracker** – track communal tools (grill brushes, ash buckets) with maintenance reminders.
3. **Resident Submission Portal** – moderated uploads for recipes and stories with approval queue.
4. **Event RSVP Automation** – integrate with HOA email lists and SMS alerts.
5. **Accessible Print Packets** – auto-generate PDF bundles for lobby distribution before holiday weekends.

## 12. Compliance & Review Checklist
- ✅ Municipal and county regulation alignment (Monmouth County Park System, Borough of Monmouth Beach).
- ✅ NFPA open-flame clearance guidelines integrated (10 ft rule for multi-family dwellings).
- ✅ USDA food safety temperatures embedded in all cooking content.
- ✅ Seasonal updates scheduled (Spring, Summer, Fall).
- ✅ Video assets scripted with captions and transcripts.

---
**Source Benchmarks for Legal & Safety Content:**
- Monmouth County Park System Rules & Regulations.
- Borough of Monmouth Beach Code of Ordinances.
- NFPA and regional fire district guidance for multi-family grill placement.
- USDA Food Safety & Inspection Service temperature charts.
- Community amenities overview from Wharfside Manor property listings.
- Seasonally appropriate grilling techniques from reputable culinary publications.
