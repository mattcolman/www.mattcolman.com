# Project checks

- `npm run build` runs Astro diagnostics and generates the static site. Use `npm run preview` to verify production output without the development toolbar.
- Deployment: Cloudflare Workers Builds is connected to GitHub. `wrangler.jsonc` (name `www-mattcolman-com`, assets `dist/`) is required — the build fails instantly without it. `wrangler` is pinned exactly in package.json because Workers Builds uses that version.
- For layout changes, check Chromium and WebKit at 320, 390, 768, 920, 921, and 1440 CSS pixels, including project and speaking detail pages.
- Sample document width and height throughout the portrait's 24-second animation cycle. Its paint containment and badge clearance prevent transformed bounds from widening the mobile viewport.
- Keep the 920px mobile breakpoint and reduced-motion behavior consistent between CSS and the portrait timer. The active badge's animation selector must also be overridden.
- Check mobile menu dismissal, landscape scrolling, 44px navigation targets, and 200% text sizing. Keep the mobile project list genuinely single-column; twelve zero-width tracks still have eleven gaps.
- The current homepage signature morphs SVG dots between Build, Lead, and Speak. Keep the point count equal across shapes and verify click/keyboard switching, reduced motion, and document bounds throughout each transition.
- If `npm run preview` detects a server belonging to another project, leave it running. After building, use `python3 -m http.server 4391 --bind 127.0.0.1 --directory dist` on a free port for isolated production-output checks. WebKit may expose valid cached navigations as HTTP 304.
