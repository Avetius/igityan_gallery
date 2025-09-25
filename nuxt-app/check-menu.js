const { chromium } = require('playwright');
(async () => {
  const url = 'http://localhost:3000/';
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  for (const width of [1300, 1000, 700]) {
    const page = await context.newPage();
    await page.setViewportSize({ width, height: 900 });
    await page.goto(url, { waitUntil: 'networkidle' });
    const result = await page.evaluate(() => {
      const nav = document.querySelector('.site-navigation');
      const ul = document.querySelector('.site-menu.js-clone-nav');
      const toggle = document.querySelector('.site-menu-toggle');
      const mobileBody = document.querySelector('.site-mobile-menu-body');
      function info(el){ if(!el) return null; const cs = getComputedStyle(el); return {display: cs.display, visibility: cs.visibility, width: el.offsetWidth, height: el.offsetHeight}; }
      return { nav: info(nav), ul: info(ul), toggle: info(toggle), mobileBodyExists: !!mobileBody, mobileBodyInnerHTML: mobileBody ? mobileBody.innerHTML.slice(0,200) : null, bodyHasOffcanvas: document.body.classList.contains('offcanvas-menu') };
    });
    console.log('WIDTH:', width, JSON.stringify(result, null, 2));
    await page.close();
  }
  await browser.close();
})();
