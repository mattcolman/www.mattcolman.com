const BLOG_HOST = 'blog.mattcolman.com';
const ARTICLES = new Map([
  ['/phaser-manifest-loader', 'https://medium.com/@mattcolman/phaser-manifest-loader-8068b5150672'],
]);

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.hostname !== BLOG_HOST) return new Response('Not found', { status: 404 });

    if (url.pathname === '/robots.txt') {
      return new Response(request.method === 'HEAD' ? null : 'User-agent: *\nAllow: /\n', {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }

    const path = url.pathname.replace(/\/$/, '');
    const destination = path === '' ? 'https://medium.com/@mattcolman' : ARTICLES.get(path);
    if (destination) return Response.redirect(`${destination}${url.search}`, 301);

    // Only redirect articles with a verified replacement. Sending every old
    // post to the profile would lose the article and can be treated as a soft 404.
    return new Response('This archived blog page is no longer available.', {
      status: 404,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  },
};
