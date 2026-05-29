# Cowork Field Guide — Site Architecture

Everything you need to understand how this site is built, so you can copy the pattern into another project (Stone Arch Collective, or anything else).

## The big picture

This is a **static multi-page site**. Zero build step. Every page is a standalone HTML file. Shared styling and behavior live in `assets/style.css` and `assets/script.js`. Drop the folder onto any static host (GitHub Pages, Netlify, Vercel, S3) and it works.

## File structure

```
.
├── index.html               Landing page — hero, intro, capability cards
├── install.html             ─┐
├── quickstart.html           │
├── trust.html                │
├── tutorials.html            │  Each menu item = one HTML file
├── example.html              ├  All follow the same scaffold
├── projects.html             │
├── examples.html             │
├── pitfalls.html             │
├── reference.html            │
├── glossary.html             │
├── tips.html                 │
├── cheat-sheet.html         ─┘
├── cowork-guide.html        Original single-page version (legacy)
├── assets/
│   ├── style.css            All visual styling
│   └── script.js            Behavior + analytics events
├── screenshots/             UI captures embedded in tutorials
├── _template/               THIS folder — docs + blank template
└── README.md                Repo overview
```

## The page template pattern

Every page has the same 4-part scaffold:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- 1. HEAD: title, meta, CSS link, GA4 snippet -->
</head>
<body>

<div class="ambient"><div class="blob3"></div></div>

<nav class="nav">
  <!-- 2. NAV: brand + links to every other page -->
</nav>

<main>
  <!-- 3. CONTENT: section blocks, the part that's unique per page -->
</main>

<footer>
  <!-- 4. FOOTER: brand, sitemap, version, GitHub link -->
</footer>

<div class="toast" id="toast">Copied to clipboard</div>

<script src="assets/script.js"></script>
</body>
</html>
```

The HEAD, NAV, and FOOTER are **nearly identical across every page**. The only difference is which nav link is "active." This is the static-site trade-off: simple to host, slightly tedious to update navigation across files. (If you grow past ~20 pages, consider a static site generator.)

## CSS design system

All styling is in `assets/style.css`. The system uses CSS variables for theming (top of the file):

```css
:root {
  --bg: #08080c;             /* Dark page background */
  --text: #f5f5f7;           /* Near-white default text */
  --border: rgba(255,255,255,0.08);
  --violet: #a78bfa;         /* Primary accent */
  --pink:   #ec4899;         /* Secondary accent */
  --sky:    #38bdf8;
  --amber:  #f59e0b;
  --emerald:#10b981;
  --fuchsia:#d946ef;
  --rose:   #f43f5e;
  --indigo: #6366f1;
  --teal:   #14b8a6;
  --orange: #f97316;
  --yellow: #eab308;
  --cyan:   #06b6d4;
}
```

**To rebrand for another project,** change just the colors at the top of style.css. The rest of the system adapts automatically.

### Component classes

The library that's already there — use these as building blocks:

| Class | What it is |
|---|---|
| `.container` / `.container-narrow` | Page-wide centering with max-width |
| `.section` / `.section-sm` | Vertical padding rhythm |
| `.eyebrow` | Small uppercase label above an h2 |
| `.h1`, `.h2`, `.h3` | Heading sizes with consistent weight |
| `.lead` | Large intro paragraph under hero |
| `.section-sub` | Smaller intro paragraph under h2 |
| `.btn` + `.btn-primary` / `.btn-secondary` | Buttons |
| `.card`, `.glass`, `.glass-strong` | Glassmorphic card containers |
| `.step-card` + `.step-num` | Numbered step cards (used in Quick Start, Install) |
| `.feat-card` + `.feat-icon` | Feature cards with icon (Three Layers section) |
| `.cap-card` + `.cap-icon` | Capability grid cards |
| `.project-card` | Project pitch cards with starter prompt |
| `.compare-card` (+ `.featured`) | Side-by-side comparison cards |
| `.trust-card` (+ `.green` / `.yellow`) | Trust/safety callout cards |
| `.pitfall-card` | Troubleshooting cards with symptom/cause/fix |
| `.gloss-card` | Glossary term cards |
| `.prompt` + `.copy-prompt` | Click-to-copy prompt blocks |
| `.acc` (on `<details>`) | Accordion tutorial cards |
| `.screenshot-frame` + `.screenshot` | Image frame + caption |
| `.output-mockup` | Stylized output example (terminal-window look) |
| `.note-callout` | Amber-tinted note callout |
| `.callout-skill` | Pink-tinted skill description callout |
| `.rec-callout` | Gradient "recommendation" callout |
| `.pill` + variants | Small inline tags (`.pill-violet`, `.pill-pink`, etc.) |
| `.kbd` | Inline keyboard-key style |
| `.cheat-sheet` | Print-friendly white background block |

### Icon backgrounds

For colored icon backgrounds, use `.ic-violet`, `.ic-pink`, `.ic-sky`, `.ic-amber`, `.ic-emerald`, `.ic-fuchsia`, `.ic-rose`, `.ic-indigo`, `.ic-teal`, `.ic-orange`, `.ic-yellow`, `.ic-cyan`. Each gives the icon a tinted circle background that contrasts well on the dark page.

### Responsive breakpoints

The CSS uses three breakpoints:

- **640px** — `sm:` (small tablets up) — 2-column grids start
- **768px** — `md:` (tablets up) — main responsive shift
- **1024px** — `lg:` (desktops up) — 3+ column grids

No mobile-first framework, just media queries directly in style.css.

## Behavior — script.js

`assets/script.js` handles:

1. **Skills role tabs** — clicking a role chip on the Skills page filters the visible skill cards
2. **Copy-to-clipboard** — every `.copy-prompt` button writes its `data-prompt` value to the clipboard and shows a toast
3. **GA4 custom events** — fires `prompt_copy`, `tutorial_open`, `role_tab_select`, `outbound_click`

The script self-executes on page load. No initialization call needed.

## Google Analytics

Each page's `<head>` contains a GA4 snippet using the property's Measurement ID. Currently wired to `G-NYBGFDSZDZ`.

### Custom events being fired

| Event | When | Parameter |
|---|---|---|
| `prompt_copy` | User clicks a copy-prompt button | `prompt_label`, `prompt_length` |
| `tutorial_open` | User expands a tutorial accordion | `tutorial` (the title) |
| `role_tab_select` | User clicks a role chip in Skills | `role` |
| `outbound_click` | User clicks an external link | `href`, `text` |

These are configured to fire automatically from `assets/script.js`. To add more events, copy the pattern:

```javascript
document.querySelectorAll('.your-class').forEach(el => {
  el.addEventListener('click', () => {
    if (typeof window.gtagTrack === 'function') {
      window.gtagTrack('your_event_name', {
        custom_param: 'value'
      });
    }
  });
});
```

## Hosting

GitHub Pages serves directly from `main` branch. Push to `main`, wait ~60 seconds, the live site updates automatically. URL pattern: `https://USERNAME.github.io/REPO/`.

For a custom domain (like `stonearchcollective.com`), add a `CNAME` file to the repo containing just the domain, configure your DNS, and enable the custom domain in Settings → Pages.

## Watchouts (things that bit us building this)

1. **Lock files in `.git/`.** If you ever edit the repo via two different processes (Cowork sandbox + Terminal), you'll get permission-mismatched lock files. The unlock pattern: `sudo find .git -name "*.lock" -delete && sudo chown -R "$(whoami)" .git`.

2. **Navigation duplication.** The nav is duplicated across every page. If you add a new page, you have to add a nav link to every existing page. A quick find-replace handles it, but it's easy to forget on a fresh page.

3. **Anchor links between pages.** Within a page, `href="#section-id"` works. Across pages, you need `href="other-page.html#section-id"`. The starter template tries to be careful about this — don't break it.

4. **Image paths are relative.** All screenshots use paths like `screenshots/foo.png`. If you move a page to a subdirectory, the paths break. Either keep all HTML at the root, or rewrite paths.

5. **GA4 placeholder.** The original template had `G-XXXXXXXXXX` as a placeholder. Watch for this in any new files — replace with the real Measurement ID before going live.

## Adapting for a different project (e.g., Stone Arch Collective)

The quickest path:

1. **Fork or copy the folder** to your new project location
2. **Replace the GA4 Measurement ID** with the new project's GA property
3. **Change `--violet` and `--pink` in style.css** to your brand colors (everything else cascades automatically)
4. **Update the favicon/title/meta description** in every page's `<head>`
5. **Replace the brand text** in the nav and footer
6. **Delete the pages you don't need** and write new ones using the page template

For a small site (5-8 pages), this is a 2-hour project, not a rewrite.

See `ADDING-PAGES.md` for the step-by-step on adding a new page from scratch.
