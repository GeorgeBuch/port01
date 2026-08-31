import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Wisit Prasinthong/);
  assert.match(html, /Junior Full-Stack Developer/);
  assert.match(html, /Siam Cheerful/);
  assert.match(html, /id="project-demo"/);
  assert.match(html, /Generation Thailand/);
  assert.match(html, /github\.com\/GeorgeBuch/);
});

test("keeps portfolio content and downloadable assets in place", async () => {
  const [page, demo, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/SiamCheerfulDemo.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/siam-cheerful-live-demo.png", import.meta.url)),
    access(new URL("../public/wisit-prasinthong-resume.pdf", import.meta.url)),
  ]);

  assert.match(page, /About/);
  assert.match(page, /id="experience"/);
  assert.match(page, /skillGroups/);
  assert.match(page, /Source snapshot/);
  assert.match(demo, /data-testid="project-demo"/);
  assert.match(layout, /Wisit Prasinthong/);
  assert.match(packageJson, /"name": "wisit-portfolio"/);
});
