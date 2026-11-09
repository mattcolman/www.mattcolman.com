const CANONICAL_ORIGIN = 'https://www.mattcolman.com';
const LEGACY_LIST_VIEW_PATHS = new Set([
  '/labs/phaser-list-view',
  '/labs/phaser-list-view/',
  '/labs/phaser-list-view/index.html',
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // The retired demo is still linked from the package and crawled by Google.
    // Its maintained source and demo instructions now live in the repository.
    if (LEGACY_LIST_VIEW_PATHS.has(url.pathname)) {
      return Response.redirect(`https://github.com/mattcolman/phaser-list-view${url.search}`, 301);
    }
    if (url.origin !== CANONICAL_ORIGIN) {
      return Response.redirect(`${CANONICAL_ORIGIN}${url.pathname}${url.search}`, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
