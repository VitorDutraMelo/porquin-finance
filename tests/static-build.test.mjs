import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const base = "/porquin-finance/";

test("generates a static GitHub Pages entry point", async () => {
  await access(new URL("../dist/index.html", import.meta.url));
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  assert.match(html, /<div id="root"><\/div>/);
  assert.match(html, /\/porquin-finance\/assets\//);
  assert.match(html, /\/porquin-finance\/manifest\.webmanifest/);
});

test("keeps the PWA scoped to the repository subpath", async () => {
  const [manifestText, serviceWorker, application] = await Promise.all([
    readFile(new URL("../dist/manifest.webmanifest", import.meta.url), "utf8"),
    readFile(new URL("../dist/service-worker.js", import.meta.url), "utf8"),
    readFile(new URL("../src/App.tsx", import.meta.url), "utf8"),
  ]);
  const manifest = JSON.parse(manifestText);

  assert.equal(manifest.display, "standalone");
  assert.equal(manifest.start_url, base);
  assert.equal(manifest.scope, base);
  assert.ok(manifest.icons.every((icon) => icon.src.startsWith(base)));
  assert.match(serviceWorker, /addEventListener\(["']fetch["']/);
  assert.match(serviceWorker, /const BASE = ["']\/porquin-finance\/["']/);
  assert.match(application, /import\.meta\.env\.BASE_URL/);
  assert.match(application, /service-worker\.js/);
});

test("copies every required PWA asset", async () => {
  const assets = [
    "porquin-official.png",
    "favicon.png",
    "icons/icon-192.png",
    "icons/icon-512.png",
    "icons/maskable-icon-512.png",
    "icons/apple-touch-icon.png",
  ];
  await Promise.all(assets.map((asset) => access(new URL(`../dist/${asset}`, import.meta.url))));
});
