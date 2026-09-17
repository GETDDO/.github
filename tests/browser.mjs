import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { rounds } from '../site/content.js';

const { frontend, backend } = rounds[0].decks;
assert.deepEqual(frontend.slides.slice(0, 4), backend.slides.slice(0, 4));
assert.equal(frontend.slides.slice(2, 4).flatMap(slide => slide.cards).length, 7);
for (const deck of [frontend, backend]) {
  assert.equal(deck.slides[deck.slides[1].items[1].target].type, 'architecture');
  assert.equal(deck.slides[deck.slides[1].items[2].target].type, 'questions');
}
console.log('PASS shared cover/agenda/requirements, seven feature groups, agenda destinations');

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../site');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };
let overrideContent = null;
const server = createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  path = path.replace(/^\/\.github\//, '/');
  if (path.endsWith('/')) path += 'index.html';
  const file = resolve(root, `.${path}`);
  if (!file.startsWith(root + sep)) { res.writeHead(403).end(); return; }
  try {
    const data = file === resolve(root, 'content.js') && overrideContent ? overrideContent : await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'text/plain; charset=utf-8' }).end(data);
  } catch { res.writeHead(404).end(); }
});
await new Promise(done => server.listen(0, '127.0.0.1', done));
let browser;
let checks = 0;
const pass = name => { checks++; console.log(`PASS ${name}`); };
try {
  browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}), args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()}: ${response.url()}`); });
  const base = `http://127.0.0.1:${server.address().port}/.github/`;
  await page.goto(base);
  await page.evaluate(() => document.fonts.ready);
  assert.equal(await page.locator('.round-card').count(), 3);
  assert.equal(await page.locator('.track-links a').count(), 2);
  assert.equal(await page.locator('.track-links button:disabled').count(), 4);
  assert.equal(await page.locator('.brand img').evaluate(img => img.complete && img.naturalWidth > 0), true);
  pass('3 rounds, 2 active tracks, 4 locked tracks; logo and project-path assets');
  await page.locator('.track-links a').first().click();
  await page.waitForSelector('.slide-cover');
  assert.match(await page.title(), /프론트엔드/);
  await page.locator('.skip-link').focus();
  await page.keyboard.press('Enter');
  assert.match(page.url(), /frontend\/1$/);
  assert.equal(await page.locator('#main').evaluate(el => el === document.activeElement), true);
  pass('skip link focuses current presentation without changing route');
  assert.equal(await page.locator('[data-action=prev]').isDisabled(), true);
  await page.keyboard.press('ArrowRight');
  await page.waitForSelector('.slide-agenda');
  await page.locator('.agenda-item').first().click();
  await page.waitForSelector('.slide-cards');
  assert.match(await page.locator('.slide').innerText(), /출석·미션·게임/);
  await page.keyboard.press('End');
  await page.waitForSelector('.slide-questions');
  assert.equal(await page.locator('[data-action=next]').isDisabled(), true);
  await page.keyboard.press('ArrowRight');
  assert.match(page.url(), /frontend\/6$/);
  await page.keyboard.press('Home');
  await page.waitForSelector('.slide-cover');
  await page.locator('[data-action=next]').click();
  await page.waitForSelector('.slide-agenda');
  await page.goBack();
  await page.waitForSelector('.slide-cover');
  pass('frontend navigation, agenda links, first/last limits, browser Back');
  await page.locator('.deck-header [data-action=fullscreen]').click();
  await page.waitForFunction(() => Boolean(document.fullscreenElement));
  await page.keyboard.press('ArrowRight');
  await page.waitForSelector('.slide-agenda');
  assert.equal(await page.evaluate(() => Boolean(document.fullscreenElement)), true);
  await page.locator('.fullscreen-exit').click();
  await page.waitForFunction(() => !document.fullscreenElement);
  pass('native fullscreen stays active on slide change and exits by button');
  for (const track of ['frontend', 'backend']) {
    for (let i = 1; i <= 6; i++) {
      await page.goto(`${base}#/mentoring/1/${track}/${i}`);
      await page.waitForSelector('.slide');
      await page.evaluate(() => document.fonts.ready);
      const overflow = await page.locator('.slide').evaluate(slide => {
        const footer = slide.querySelector('.slide-footnote').getBoundingClientRect();
        const content = slide.querySelector('.slide-content');
        const bounds = slide.getBoundingClientRect();
        return [...content.querySelectorAll('h1,h2,p,li,.content-card,.arch-node,.agenda-item')].filter(el => {
          const r = el.getBoundingClientRect();
          return r.bottom > footer.top + 2 || r.right > bounds.right + 2 || r.left < bounds.left - 2;
        }).map(el => el.textContent);
      });
      assert.deepEqual(overflow, [], `${track} ${i} overflows footer/canvas`);
    }
  }
  await page.reload();
  assert.match(await page.title(), /백엔드/);
  pass('all 12 slides fit canvas without footer overlap; deep links survive reload');
  for (const hash of ['#/mentoring/2/frontend/1', '#/mentoring/3/backend/1', '#/broken']) {
    await page.goto(base + hash);
    await page.waitForSelector('.notice');
    assert.equal(await page.locator('.slide').count(), 0);
  }
  await page.goto(`${base}#/mentoring/1/backend/999`);
  await page.waitForSelector('.slide-questions');
  assert.match(page.url(), /backend\/6$/);
  pass('locked/invalid links handled, out-of-range page canonicalized');
  for (const viewport of [{ width: 390, height: 844 }, { width: 844, height: 390 }]) {
    await page.setViewportSize(viewport);
    await page.goto(base);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    await page.goto(`${base}#/mentoring/1/backend/1`);
    await page.waitForSelector('.slide');
    await page.waitForFunction(() => document.querySelector('.slide').style.transform);
    const bounds = await page.locator('.slide').boundingBox();
    assert.ok(bounds.x >= 0 && bounds.x + bounds.width <= viewport.width + 1);
    assert.ok(bounds.y >= 0 && bounds.y + bounds.height <= viewport.height + 1);
    assert.ok(Math.abs(bounds.width / bounds.height - 16 / 9) < 0.01);
    await page.locator('[data-action=outline]').click();
    await page.locator('.outline-item.active').click();
    assert.equal(await page.locator('.slide-outline').isVisible(), false);
    assert.equal(await page.locator('[data-action=outline]').getAttribute('aria-expanded'), 'false');
    await page.locator('[data-action=outline]').click();
    await page.locator('.outline-item').nth(2).click();
    await page.waitForSelector('.slide-cards');
    assert.equal(await page.locator('.slide-outline').isVisible(), false);
  }
  pass('mobile portrait/landscape, 16:9 fit, no horizontal overflow, outline navigation');
  const original = await readFile(resolve(root, 'content.js'), 'utf8');
  overrideContent = original.replace('frontend: { enabled: false, slides: [] }', "frontend: { enabled: true, slides: makeSlides('frontend') }");
  await page.goto(base);
  assert.equal(await page.locator('.track-links a').count(), 3);
  await page.goto(`${base}#/mentoring/2/frontend/1`);
  await page.waitForSelector('.slide-cover');
  assert.match(await page.title(), /2차 멘토링/);
  pass('future round becomes available through content configuration');
  overrideContent = original.replace('frontend: { enabled: false, slides: [] }', `frontend: { enabled: true, slides: [
    { type:'text', title:'본문', paragraphs:['핵심 내용'], bullets:['확인 항목'] },
    { type:'split', title:'비교', columns:[{title:'선택 A', paragraphs:['설명']},{title:'선택 B', paragraphs:['설명']}] },
    { type:'image', title:'이미지', src:'assets/logo.svg', alt:'서비스 로고', caption:'원본 이미지' }
  ] }`);
  await page.reload();
  for (const [i, type] of ['text','split','image'].entries()) {
    await page.goto(`${base}#/mentoring/2/frontend/${i + 1}`);
    await page.waitForSelector(`.slide-${type}`);
  }
  pass('extensible text, split and image layouts');
  assert.deepEqual(errors, []);
  pass('no browser exceptions or failed assets');
  console.log(`\n${checks} checks passed.`);
} finally {
  if (browser) await browser.close();
  await new Promise(done => server.close(done));
}
