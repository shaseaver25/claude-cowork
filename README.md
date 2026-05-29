# The Cowork Field Guide

An interactive learning guide to **Claude Cowork** — the desktop mode of the Claude app that gives Claude access to your files, computer, and connected tools.

**Live version:** [https://shaseaver25.github.io/claude-cowork/](https://shaseaver25.github.io/claude-cowork/)

---

## What's in here

Thirteen pages covering everything from "is this the right tool for me" through advanced project ideas, plus a printable cheat sheet.

| Page | Purpose |
|---|---|
| [`index.html`](./index.html) | Landing — hero, "is Cowork right for you?" diagnostic, capabilities overview |
| [`install.html`](./install.html) | Step-by-step installation, from download to first task |
| [`quickstart.html`](./quickstart.html) | The 5-minute setup for your first real task |
| [`trust.html`](./trust.html) | Permissions, data handling, OAuth, memory storage — what's safe, what to know |
| [`tutorials.html`](./tutorials.html) | All 13 capability tutorials (files, code, computer use, browser, connectors, skills, plugins, memory, scheduled tasks, dispatch, live artifacts, visualizations, subagents) |
| [`example.html`](./example.html) | Worked example: activating the Design role-bundle plugin step-by-step |
| [`projects.html`](./projects.html) | 8 hands-on projects with starter prompts |
| [`examples.html`](./examples.html) | What real Cowork outputs actually look like |
| [`pitfalls.html`](./pitfalls.html) | Common failure modes with symptom / cause / fix |
| [`reference.html`](./reference.html) | Skills library, connector library, prompt library |
| [`glossary.html`](./glossary.html) | 18 terms defined in plain English |
| [`tips.html`](./tips.html) | Patterns for getting more out of Cowork |
| [`cheat-sheet.html`](./cheat-sheet.html) | Print-friendly one-page reference |

Plus the original single-page version is preserved at [`cowork-guide.html`](./cowork-guide.html) if you prefer everything on one scrollable page.

## Structure

```
.
├── index.html              landing
├── install.html            ─┐
├── quickstart.html          │
├── trust.html               │
├── tutorials.html           ├─ section pages
├── example.html             │
├── projects.html            │
├── examples.html            │
├── pitfalls.html            │
├── reference.html           │
├── glossary.html            │
├── tips.html                │
├── cheat-sheet.html        ─┘
├── cowork-guide.html       single-page version (legacy)
├── assets/
│   ├── style.css           shared styling for all pages
│   └── script.js           shared behavior + analytics events
├── screenshots/            UI captures referenced by tutorials
└── README.md               this file
```

## Setting up Google Analytics

The pages include a Google Analytics 4 snippet with a placeholder Measurement ID. To start collecting data:

1. **Get a GA4 Measurement ID** from [analytics.google.com](https://analytics.google.com) — create a property if you don't have one. The ID looks like `G-XXXXXXXXXX`.
2. **Find and replace `G-XXXXXXXXXX` across the repo** with your actual ID. Easiest from Terminal:
   ```
   cd ~/Documents/Claude/Projects/Curriculum/lesson\ builder
   grep -l 'G-XXXXXXXXXX' *.html | xargs sed -i '' 's/G-XXXXXXXXXX/G-YOURACTUALID/g'
   ```
3. **Commit and push.**

### Custom events being tracked

Beyond standard pageviews, the script fires these GA4 events:

| Event | Fired when | Useful for understanding |
|---|---|---|
| `prompt_copy` | A user copies a starter prompt | Which prompts get used most |
| `role_tab_select` | A user clicks a role tab in the Skills library | What roles your audience identifies with |
| `tutorial_open` | A user expands a tutorial accordion | Which capabilities draw the most interest |
| `outbound_click` | A user clicks an external link | Which external resources matter to readers |

All event names follow GA4 naming conventions and will appear automatically in your Events report.

## Local viewing

Just open `index.html` in your browser — there's no build step. All assets are self-contained and the page works offline (analytics calls will fail silently when offline, which is fine).

For local viewing with a real `http://` URL (so analytics events report correctly), spin up a quick server:

```
cd ~/Documents/Claude/Projects/Curriculum/lesson\ builder
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Editing the guide

Each page is a complete standalone HTML file with shared CSS and JS in `assets/`. To edit content, open the relevant page in any editor. To change styling that applies everywhere, edit `assets/style.css`. To change behavior or analytics events, edit `assets/script.js`.

If you want to add a new page:

1. Copy an existing page as a starting template
2. Update the `<title>` and main content
3. Add the new page to the `<nav>` in every other page (or write a quick script to do it)
4. Update this README's table

## Credits

Built by [Shannon Seaver](https://github.com/shaseaver25) with Claude Cowork itself. The guide is the artifact; the process of building it was the proof of concept.
