# BBQ Blog

A modern, single-page BBQ storytelling and recipe hub. The site includes featured cooks, interactive recipe filtering, gear reviews, and a newsletter signup section—all wrapped in a bold, fire-inspired visual design.

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
