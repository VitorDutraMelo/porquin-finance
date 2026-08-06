import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const applicationName = /Porquin Finance/i;

test("keeps the PWA metadata and service worker registration", async () => {
  const [layout, page, manifestText, serviceWorker] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../public/manifest.webmanifest", import.meta.url), "utf8"),
    readFile(new URL("../public/service-worker.js", import.meta.url), "utf8"),
  ]);
  const manifest = JSON.parse(manifestText);

  assert.match(layout, applicationName);
  assert.match(layout, /manifest:\s*["']\/manifest\.webmanifest["']/);
  assert.match(page, /\.register\(["']\/service-worker\.js["']/);
  assert.equal(manifest.display, "standalone");
  assert.equal(manifest.start_url, "/");
  assert.equal(manifest.scope, "/");
  assert.match(serviceWorker, /addEventListener\(["']fetch["']/);
});
