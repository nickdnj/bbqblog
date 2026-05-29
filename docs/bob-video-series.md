# Bob's Grill School — Video Series Production Plan

Short, friendly how-to videos that teach a complete charcoal beginner to grill at the
Wharfside Manor picnic grove. **Bob is the on-camera host;** Nick produces/shoots (behind the
camera). The series is the moving-picture version of the site's "Start Here" 6-step path.

## Why this series

A resident literally walked up and asked Bob and Nick, *"How do we grill here?"* Most residents
have only ever used a gas grill at home; the grove's grills are public-park **charcoal**. Video
removes the last bit of intimidation — you watch a neighbor do it once, then you can do it.

## Audience & tone
- **Audience:** adults, zero charcoal experience, possibly nervous about open fire.
- **Tone:** warm, neighborly, encouraging. "If I can do it, you can do it." No jargon; when a term
  is unavoidable (e.g. "two-zone fire"), Bob defines it on screen.
- **Bob is the trusted neighbor, not a TV chef.** Real grove, real grills, real weather.

## Format (keep it tight)
- **Length:** 60–120 seconds each. These are how-tos, not entertainment — respect the viewer's time.
- **Orientation:** shoot **horizontal 1080p** for the website embeds. Also grab **vertical 9:16**
  takes of the single best moment in each episode for Shorts/Reels (see Distribution).
- **Location:** the picnic grove, at a real SF163.5 grill. Golden hour looks best; avoid harsh noon.
- **Audio:** lav mic on Bob (wind off the river will wreck on-camera mic audio). Grab ambient
  shore/gull sound separately for the bed.
- **Branding:** open with the wave mark + "Bob's Grill School," lower-third with the episode title,
  end card: "More at picnic.vistter.com."
- **Captions:** burn-in or SRT — many will watch muted. Required for accessibility.

## Episode list (maps 1:1 to the site)

| # | Title | Teaches (site anchor) | Must-get shots |
|---|-------|----------------------|----------------|
| 1 | **Light Your First Charcoal Fire** | Step 3 — chimney method | Filling the chimney, newspaper underneath, lighting, the moment coals turn ashy-gray |
| 2 | **Is It Ready? Reading Your Coals** | Step 4 — gray glow / heat test | Close-up of gray-ashed coals, the hand 5-inch heat test, spreading coals + "safe zone" |
| 3 | **Burgers & Dogs: Your First Cook** | Step 5 — first cook + temps | Food going on, the single flip, thermometer reading 160°F, plating |
| 4 | **Lighter Fluid, the Safe Way** | Step 3 alt | Fluid on UNLIT coals, wait, light from the side; the "never add fluid to lit coals" warning |
| 5 | **Beat the Wind on the Waterfront** | Step 4 / our 360° grills | Spinning the grill head on its pedestal, body-blocking the wind, fire steadying |
| 6 | **Cool Down & Clean Up Right** | Step 6 — ash + cleanup | Coals fully out, scooping COLD ash into the metal bin, grate scrub, "leave it better" |

Episode 1 is the priority — it's the single biggest fear ("how do I even light it?") and it's the
featured slot on the homepage.

## Per-episode storyboard template
1. **Cold-open hook (0:00–0:08):** Bob, grill in frame — "Never lit charcoal? Watch this once."
2. **Title card (0:08–0:12):** episode title lower-third.
3. **Do it (0:12–~1:30):** Bob performs the steps, narrating plainly; cut to close-ups for the
   critical move (the thing people get wrong).
4. **One safety beat:** the single most important "don't" for that episode.
5. **Recap + CTA (last ~10s):** "That's it — full steps at picnic.vistter.com. Now go grill."

### Example script — Episode 1: Light Your First Charcoal Fire
> **Bob (cold open):** "If the only grill you've used is the gas one at home, lighting charcoal
> looks scary. It's not. Watch — I'll have a fire going in about fifteen minutes, no lighter fluid."
> *[Title card]*
> "This metal cylinder is a chimney starter — best three bucks you'll spend. Fill the top with
> charcoal. Crumple a couple sheets of newspaper underneath. Light the paper through these holes…
> and walk away. The chimney does the work."
> *[cut to coals glowing, gray ash forming]*
> "When the top coals look gray and ashy — like this — they're ready. Dump them in, spread them
> out, and you're grilling. That's the whole trick."
> **CTA:** "Every step's written out at picnic dot vistter dot com. Go light one."

## Gear checklist
- Camera/phone on a tripod (lock it off for the demo, handheld only for hook/CTA)
- Lav mic + windscreen (deadcat) — **non-negotiable on the waterfront**
- Chimney starter, charcoal, newspaper, long lighter, tongs, instant-read thermometer
- Test food (burgers/dogs) for Ep 3
- Reflector or shoot golden hour to avoid raccoon-eye shadows

## Wiring videos into the site (drop-in)
The site is already built for these. In `assets/js/main.js`, the `EPISODES` array drives the
**Bob's Grill School** section. To publish an episode:
1. Upload to YouTube (use the Vistter channel; run `scripts/youtube-whoami.py` first if you have it
   — the token can drift to a personal channel).
2. Copy the 11-character video ID from the watch URL.
3. Paste it into the matching episode's `youtubeId: ''` in `EPISODES`.
4. Deploy. The "coming soon" card automatically becomes a click-to-load thumbnail + embed
   (privacy-friendly `youtube-nocookie`, no iframe loads until the viewer clicks).

No HTML/CSS changes needed — just the ID.

## Distribution (after Season-1 lands)
- **Website:** the embed grid above (primary home).
- **Shorts/Reels/TikTok:** cut the single best 9:16 moment per episode (e.g. the gray-ash reveal) as
  a teaser that points back to the full guide. Trailer-style, not sequential clips
  (per Nick's shorts strategy: hook first, decay-tested).
- **Wharfside channels:** SignBoard could rotate a "How to grill" QR card pointing to the series;
  include a link in the seasonal bulletin.

## Handoff note
Per Wharfside's operating principle, this should end up owned by the board/ECI, not Nick forever —
Bob + a simple "shoot, upload, paste the ID" runbook (above) is the whole pipeline so a non-engineer
can keep it going.
