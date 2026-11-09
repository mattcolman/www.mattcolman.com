import assert from 'node:assert/strict';
import { test } from 'node:test';
import worker from './blog-redirect.js';

test('the old article redirects directly to the matching Medium reprint over HTTP and HTTPS', async () => {
  for (const protocol of ['http:', 'https:']) {
    for (const path of ['/phaser-manifest-loader', '/phaser-manifest-loader/']) {
      for (const method of ['GET', 'HEAD']) {
        const response = await worker.fetch(new Request(`${protocol}//blog.mattcolman.com${path}?utm_source=archive`, { method }));
        assert.equal(response.status, 301);
        assert.equal(response.headers.get('location'), 'https://medium.com/@mattcolman/phaser-manifest-loader-8068b5150672?utm_source=archive');
      }
    }
  }
});

test('the blog homepage redirects to the author profile', async () => {
  const response = await worker.fetch(new Request('https://blog.mattcolman.com/'));
  assert.equal(response.status, 301);
  assert.equal(response.headers.get('location'), 'https://medium.com/@mattcolman');
});

test('robots.txt allows crawlers to discover the redirects', async () => {
  const response = await worker.fetch(new Request('https://blog.mattcolman.com/robots.txt'));
  assert.equal(response.status, 200);
  assert.equal(await response.text(), 'User-agent: *\nAllow: /\n');
});

test('unknown posts and other hosts return a real 404', async () => {
  for (const url of ['https://blog.mattcolman.com/unknown-post/', 'https://www.mattcolman.com/phaser-manifest-loader/']) {
    const response = await worker.fetch(new Request(url));
    assert.equal(response.status, 404);
    assert.equal(response.headers.get('location'), null);
  }
});
