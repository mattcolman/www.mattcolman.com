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

## Retired blog redirects

`blog.mattcolman.com` currently points at a Ghost origin, which returns a
"Domain error". The separate redirect Worker bypasses that origin on the
existing proxied blog hostname. It sends the homepage to Matt's Medium profile
and `/phaser-manifest-loader/` to the matching article, which identifies itself
as originally published on the old blog. Unmapped posts retain a real 404.
The verified replacement is
[Phaser Manifest Loader](https://medium.com/@mattcolman/phaser-manifest-loader-8068b5150672).

Validate and deploy this Worker separately from the portfolio:

```sh
node --test worker/blog-redirect.test.js
npx wrangler deploy --config wrangler.blog-redirect.jsonc --dry-run
npx wrangler deploy --config wrangler.blog-redirect.jsonc
```

Merging alone does not deploy this separate Worker. Deployment needs access to
the `mattcolman.com` Cloudflare zone to install the `blog.mattcolman.com/*`
route, and the blog DNS record must remain proxied. No DNS change or Ghost
credentials are required. Verify the article responds with a 301 to the exact
Medium URL, the homepage redirects to the profile, and an unknown post remains
404 before requesting Search Console validation.

Add further article redirects only after verifying the exact replacement URL.
