# Personal Portfolio — GitHub Pages

A responsive, dependency-free portfolio for Mohamad Faayiz. Built using HTML, CSS, and JavaScript.

## Preview locally

You can open `index.html` directly in a browser, or for a local server run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Personalize before publishing

1. In `index.html`, replace:
   - `YOUR_EMAIL@example.com` with the email you want **publicly displayed**.
   - `YOUR_USERNAME` is already set to `mohamad-faayiz` in the GitHub contact button.
   - `YOUR_PROFILE` with your LinkedIn public profile slug.
2. Review your research and project descriptions for accuracy and decide which details to share publicly.
3. Optionally add a résumé PDF to the repository and link to it from the hero or navigation.
4. Add real project/demo URLs later. None have been invented.

**Important:** Until you replace the contact placeholders, the remaining email and LinkedIn contact buttons are disabled by `script.js`.

## Publish with GitHub Pages (without terminal)

1. On GitHub, create a **public** repository named **`mohamad-faayiz.github.io`**.
2. Upload `index.html`, `styles.css`, `script.js`, and `favicon.svg` into the repository root. (Do not upload just the ZIP — upload the individual files.) Commit changes to `main`.
3. In repository **Settings → Pages → Build and deployment**, select **Deploy from a branch**.
4. Select the **main** branch and **/(root)** folder, then click **Save**.
5. Open `https://mohamad-faayiz.github.io` after deployment finishes. It can take several minutes to publish.

Documentation: https://docs.github.com/en/pages/quickstart

## File structure

```
.
├── index.html   # Website content and page structure
├── styles.css   # Layout, colors, responsive styling
├── script.js    # Theme toggle, mobile menu, project filters
├── favicon.svg  # Browser icon
└── README.md    # These instructions
```

## Next enhancements

- Replace abstract diagrams with screenshots or videos of your robotics projects.
- Add an accessible downloadable résumé and project GitHub links.
- Consider a dedicated publications section when you have papers to list.
- Keep personal contact information intentionally limited to what you want public.
