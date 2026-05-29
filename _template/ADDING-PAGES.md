# Adding a New Page

Step-by-step. Assumes you have an existing multi-page site (this one, or a copy of it).

## 1. Copy the blank template

```
cp _template/page-template.html your-new-page.html
```

(Or copy any existing page that looks closest to what you're building — e.g., `glossary.html` is good for reference/list pages, `install.html` is good for step-by-step pages, `pitfalls.html` is good for problem/solution lists.)

## 2. Update the head

In your new page's `<head>`:

```html
<title>Your Page Title · Cowork Field Guide</title>
<meta name="description" content="One-sentence description of this page" />
```

Verify the GA4 snippet still has the right Measurement ID (currently `G-NYBGFDSZDZ` for this project). Don't leave a placeholder.

## 3. Write the main content

Inside `<main>`, write your section(s). Use the existing component classes:

```html
<section class="section" id="my-section">
  <div class="container-narrow">
    <span class="eyebrow">Section eyebrow</span>
    <h2 class="h2">Main heading.</h2>
    <p class="section-sub">Intro paragraph that sets up what's on this page.</p>

    <!-- Your content blocks, cards, accordions, etc. -->

  </div>
</section>
```

Reference `ARCHITECTURE.md` for the full component class list.

## 4. Add a nav link on every page

This is the tedious step. Open every `.html` file at the repo root and find the `<nav class="nav">` block. Add a link to your new page.

The pattern:

```html
<a href="your-new-page.html">Page Title</a>
```

Use a short label (1-3 words). Long labels wrap awkwardly on the sticky nav.

**Quick way to do it from Terminal** — find-replace across all pages:

```
cd ~/path/to/your/site
for f in *.html; do
  sed -i '' 's|<a href="cheat-sheet.html">Cheat Sheet</a></nav>|<a href="your-new-page.html">Page Title</a><a href="cheat-sheet.html">Cheat Sheet</a></nav>|g' "$f"
done
```

That inserts your new link just before the "Cheat Sheet" link in the nav of every page. Adjust the anchor text to wherever you want it inserted.

## 5. Add to the footer sitemap

Each page's footer has a sitemap grid listing every page. Same find-replace pattern. Or hand-edit each file (~30 seconds per page).

## 6. Update README.md

Add a row to the page table:

```markdown
| [`your-new-page.html`](./your-new-page.html) | One-line description |
```

## 7. Test locally

```
cd ~/path/to/your/site
python3 -m http.server 8000
# Open http://localhost:8000/your-new-page.html
```

Check:

- Nav highlights your page (if you implemented the active style)
- Footer sitemap includes your page
- All links you added inside the page resolve
- Console (cmd+option+J in Chrome) shows no errors
- GA realtime shows the pageview when you load it from localhost

## 8. Commit and push

```
git add -A
git commit -m "Add [page name] page"
git push origin main
```

GitHub Pages rebuilds in about 60 seconds. Done.

---

## Common gotchas

- **Don't forget the nav update.** A new page that isn't linked from any other page is functionally orphaned. Search engines and users won't find it.
- **Don't break the relative paths.** Keep all HTML files at the repo root. Images stay in `screenshots/`. CSS/JS stay in `assets/`.
- **Don't paste in a placeholder GA ID.** If you copied from the original template before the real ID was wired, double-check the `<head>` shows `G-NYBGFDSZDZ` (or whatever the real one is for your project).
- **Test the print stylesheet.** The cheat-sheet page uses `@media print` rules to hide everything except itself when printed. If your new page has anything you want to be printable, replicate that pattern.
