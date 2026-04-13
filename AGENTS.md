# AGENTS.md

## Cursor Cloud specific instructions

This is a **purely static website** (HTML, CSS, vanilla JS) with no build system, no package manager, no tests, and no linting tools. There is no `package.json`, `Makefile`, or any dependency manifest.

### Running the dev server

Serve the site with any static HTTP server from the repo root:

```
python3 -m http.server 8080 --directory /workspace
```

Then open `http://localhost:8080/index.html` in a browser.

### Pages

- `index.html` — Main landing page with GSAP animations
- `privacy.html` — Privacy policy
- `terms.html` — Terms & Conditions

### External CDN dependencies

GSAP and Google Fonts are loaded from CDNs at runtime — no local install is needed, but internet access is required for animations and fonts to work.

### No lint / test / build

There are no lint, test, or build commands. Validation is done by visually inspecting the pages in a browser.
