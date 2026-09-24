const CANONICAL_ORIGIN = 'https://www.mattcolman.com';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.origin !== CANONICAL_ORIGIN) {
      return Response.redirect(`${CANONICAL_ORIGIN}${url.pathname}${url.search}`, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
