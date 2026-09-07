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

## Production

```sh
npm run build
npm run preview
```

The static production output is written to `dist/`.
