# mattcolman.com

Matt Colman’s portfolio, built with Astro and deployed as a static site.

## Development

```sh
npm install
npm run dev
```

The local site runs at `http://localhost:4321` by default.

## Content

- Projects: `src/content/projects/`
- Talks: `src/content/talks/`
- Shared presentation: `src/styles/global.css`

Each Markdown entry has validated frontmatter and generates its own detail page.

The public résumé lives in `public/resume/index.html`, is served at `/resume/`, and is linked from the footer. Its **Print / Save PDF** action uses a two-page A4 layout. Maintain this public copy without draft source notes or the personal mobile number, and retain the email contact.

## Production

```sh
npm run build
npm run preview
```

The static production output is written to `dist/`.
