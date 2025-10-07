# Wharfside Picnic Guide

A single-page website that serves as the digital home for Wharfside Manor's picnic grove and eleven Kay Park SF163.5 pedestal
charcoal grills. The page packages community rules, how-to tutorials, seasonal menu plans, and reservation workflows so
residents can host safe, memorable events on the Jersey Shore waterfront.

## Features

- **Community-first content:** Hero overview, quick facts, and easy links to review rules or reserve a grill.
- **Policy hub:** Accordion-style sections summarizing HOA, Monmouth County Park, and Borough of Monmouth Beach requirements.
- **How-to & video library:** Storyboard-ready guide cards covering grill prep, fire management, food safety, and event planning.
- **Seasonal recipe explorer:** Filterable cards for spring, summer, and fall menus, including prep notes and media asset briefs.
- **Signature feast timeline:** A turnkey walkthrough for the "Wharfside Waterfront Showcase" multi-course event.
- **Resource catalog:** Download lists for signage, quick-start cards, maintenance logs, and media production kits.
- **Community stories & events:** Space for resident recaps and upcoming HOA gatherings.
- **Reservation workflow:** Accessible form that captures contact info, time window, guest count, and rule acknowledgment.

## Structure

```
index.html              # Main single-page experience
assets/
  css/style.css         # Coastal-inspired responsive design system
  js/main.js            # Navigation toggle, seasonal recipe filters, dynamic footer year
docs/wharfside-picnic-site-spec.md  # Full content & UX specification for future expansion
```

## Working locally

Download or clone the entire repository (the `assets/` folder contains the CSS and JavaScript referenced by `index.html`).

Open `index.html` in your browser or serve the folder with a lightweight static server for live reloading:

```bash
npx serve
# or
python -m http.server
```

Then explore the site to verify:

1. The mobile navigation toggle opens/closes and updates `aria-expanded` correctly.
2. Seasonal filter buttons hide/show recipe cards and maintain focus state.
3. Forms validate required fields, and the footer year updates automatically.

### Troubleshooting missing styles/scripts

- If the page loads without styling, confirm you have the full folder structure:
  ```
  bbqblog/
    index.html
    assets/css/style.css
    assets/js/main.js
  ```
- When serving locally, start your server from the project root (`bbqblog/`) and visit `http://localhost:8000/index.html`.
- If you need a portable snapshot, run `git archive --format=zip HEAD -o wharfside-picnic-guide.zip` to generate a ZIP that includes all assets.

## Customizing content

- Update rule text, recipes, or events directly in `index.html`.
- Adjust colors, typography, or spacing in `assets/css/style.css` (CSS custom properties power the theme).
- Extend filters or interactive features in `assets/js/main.js`.
- For deeper content planning, consult `docs/wharfside-picnic-site-spec.md`, which contains the canonical blueprint for this
  experience, including video shot lists and downloadables.

## Deployment

Because the project is pure HTML/CSS/JS, you can deploy to GitHub Pages, Netlify, or any static host without build tooling.

1. Commit and push the repository.
2. Enable the static hosting provider of your choice.
3. Smoke-test the live URL for navigation, forms, and responsiveness.

Enjoy creating community-powered cookouts at Wharfside Manor!
