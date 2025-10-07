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
# BBQ Blog

A modern, single-page BBQ storytelling and recipe hub. The site includes featured cooks, interactive recipe filtering, gear reviews, and a newsletter signup section—all wrapped in a bold, fire-inspired visual design.

## Wharfside Manor Picnic Area Website Blueprint

The repository now includes a comprehensive specification for a community-facing picnic and grilling website tailored to Wharfside Manor in Monmouth Beach, NJ. The document captures:

- Site information architecture and content governance.
- Seasonal recipe frameworks (spring through fall) with multimedia requirements.
- Detailed how-to guide lineup, video storyboards, and production standards.
- HOA-aligned rules, legal disclaimers, and downloadable resource checklist.

You can find the full blueprint in [`docs/wharfside-picnic-site-spec.md`](docs/wharfside-picnic-site-spec.md).

## Running locally

Just open `index.html` in your browser. All assets are static and self-contained.

## Testing and verification

Because the site is a static bundle, "testing" is primarily about verifying that all
interactions work as expected in the browser:

1. Open `index.html` directly in your browser, or use a simple static server such as
   VS Code's *Live Server* extension (`npx serve` or `python -m http.server` work too).
2. Navigate through the site to confirm:
   - The mobile menu button opens and closes the navigation on small screens.
   - Recipe category buttons filter the recipe grid items.
   - The newsletter signup form validates the email field before submission.
   - The footer year updates automatically to the current year.

### Previewing on GitHub Pages

If you plan to host the project on GitHub Pages:

1. Commit and push the repository to GitHub.
2. In the repository settings, enable GitHub Pages with the `main` branch (root folder).
3. Wait a minute for the deployment to finish, then open the provided GitHub Pages URL.
4. Repeat the verification steps above in the hosted environment.
