import assert from 'node:assert/strict';
import { test } from 'node:test';
import worker from './index.js';

test('retired Phaser demo URLs redirect directly to the project on either host', async () => {
  for (const origin of ['http://mattcolman.com', 'https://www.mattcolman.com']) {
    for (const path of ['/labs/phaser-list-view', '/labs/phaser-list-view/', '/labs/phaser-list-view/index.html']) {
      for (const method of ['GET', 'HEAD']) {
        const response = await worker.fetch(new Request(`${origin}${path}?utm_source=phaser`, { method }), {});
        assert.equal(response.status, 301);
        assert.equal(response.headers.get('location'), 'https://github.com/mattcolman/phaser-list-view?utm_source=phaser');
      }
    }
  }
});

test('ordinary alternate-host requests still redirect to the same canonical path', async () => {
  const response = await worker.fetch(new Request('http://mattcolman.com/speaking/?ref=archive'), {});
  assert.equal(response.status, 301);
  assert.equal(response.headers.get('location'), 'https://www.mattcolman.com/speaking/?ref=archive');
});

test('canonical assets and unrelated missing pages keep their original responses', async () => {
  for (const status of [200, 404]) {
    const request = new Request('https://www.mattcolman.com/unrelated');
    const asset = new Response('original body', { status });
    const response = await worker.fetch(request, { ASSETS: { fetch: async (received) => {
      assert.equal(received, request);
      return asset;
    } } });
    assert.equal(response, asset);
  }
});
