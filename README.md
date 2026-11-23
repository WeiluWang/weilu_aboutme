# Wei-Lu Wang — personal academic homepage

The source of my personal website: a single, continuously scrolling academic
homepage for a PhD student in Computer Science at Virginia Tech working on
Human-Computer Interaction (HCI) and Computer-Supported Cooperative Work
(CSCW). It is a static site built with [Astro](https://astro.build) and
published with GitHub Pages.

It started from the
[academic-homepage](https://github.com/siruizou2005/academic-homepage)
template (MIT) and has been customised heavily.

## What is on the site

On desktop a fixed dark sidebar holds my portrait, name, role, the section
links, email, Google Scholar, GitHub, and separate **CV** and **Resume** PDF
buttons. On phones the sidebar becomes a compact header with an accessible
menu containing the same links and buttons. There is no horizontal scrolling.

The page has seven sections, in this order. Each sidebar link scrolls to its
section on the same page.

| Section | Contents |
| --- | --- |
| **Bio** | Research interests, advisor, methods and background. |
| **News** | Dated updates (talks, papers, awards), newest first. |
| **Projects** | Research and engineering projects, each with a short summary, a role and dates, a screenshot, and buttons (paper link, GitHub, or an "Accepted" label for a paper that is not published yet). |
| **Publications** | Full list from my CV, grouped into *Conference Full Papers* and *Conference Short Papers*, with an optional thumbnail per paper. |
| **Skills** | Programming languages, frameworks and tools. |
| **Teaching Experience** | Graduate Teaching Assistant positions at Virginia Tech, plus a *Mentoring* gallery of undergraduate research teams. |
| **More About Me** | Photos from my fishing trips. |

## Where things live

Almost everything visible is data in [`src/data.js`](src/data.js); the
components only lay it out. Fields that need inline links or emphasis (`bio`,
`news`, `desc`, `authors`, `venue`) are HTML snippets.

| What | Where |
| --- | --- |
| CV and Resume PDFs | `public/pdf/CV.pdf`, `public/pdf/Resume_Weilu.pdf` |
| Paper PDFs | `public/papers/<file>.pdf`, then add `{ label: "PDF", href: "papers/<file>.pdf" }` to that entry's `links` |
| Project screenshot | `src/assets/projects/<project id>.png` (or `.jpg` / `.webp`) |
| Publication thumbnail | `src/assets/publications/<publication id>.png` |
| Mentoring photos | `src/assets/more/leadership/` (any file names, shown in name order) |
| Fishing photos | `src/assets/more/fishing/` (any file names, shown in name order) |
| Portrait | `src/assets/photo.jpg` |

`<project id>` and `<publication id>` are the `id` fields in `src/data.js`.
Images are matched by name, so a missing file just means no image is shown.

### Common edits

- **Add a news item** — add `{ date, text }` to the top of `news`.
- **Add a project** — add an entry to `projects` with `id`, `title`, `role`,
  `date`, `desc` and `links`. A link without an `href`
  (`{ label: "Accepted" }`) renders as a plain label instead of a button.
  Once the paper is out, give it an `href`.
- **Add a publication** — add an entry to `publications`. It appears under
  *Full Papers* unless its `id` is listed in `SHORT_PAPERS`.
- **Add a course** — add `{ date, course }` to the top of `teaching`.
- **Rename or reorder sections** — edit `sections` (sidebar order and labels)
  and move the matching `<Section>` block in `src/pages/index.astro`.

Site plumbing (deployed URL, SEO description, structured data, crawler rules)
is in [`src/site.config.js`](src/site.config.js). Colours are tokens at the
top of [`src/styles/index.css`](src/styles/index.css).

## Develop

Requires [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static build into dist/
npm run preview   # serve the built site
npm run lint
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages (Settings → Pages → Source: GitHub Actions).
The workflow detects the real URL and base path, so canonical links, social
cards and `sitemap.xml` stay correct. Pull requests run
`.github/workflows/ci.yml` (lint and build).

## Project layout

```
src/
  data.js             all page content
  site.config.js      URL, SEO, crawler rules
  utils.js            link helper (adds the site's base path)
  layouts/Base.astro  <head>: SEO, social cards, fonts
  pages/              index.astro (section order), 404, robots.txt, sitemap.xml
  components/         Sidebar, Section, Project, PubItem
  styles/index.css    design tokens and layout
  assets/             images processed at build time (WebP, srcset)
public/               PDFs, favicon, fonts — copied as-is
```

## Credits and license

Built with [Astro](https://astro.build). Fonts are Source Serif 4 and Inter,
self-hosted at build time. Based on the MIT-licensed
[academic-homepage](https://github.com/siruizou2005/academic-homepage)
template; see [LICENSE](LICENSE).
