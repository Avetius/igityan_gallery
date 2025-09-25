// Client-only plugin: ensure hamburger toggle works even if jQuery binding
// doesn't attach (Nuxt hydration can sometimes alter timing). This uses
// vanilla JS and is intentionally minimal and additive — it won't remove
// or interfere with existing jQuery handlers if they're present.

export default () => {
  if (typeof window === 'undefined') return;

  function onToggleClick(e: MouseEvent) {
    const target = e.target as HTMLElement | null;
    // Find the nearest element with .js-menu-toggle (user may click inner icon)
    if (!target) return;
    const toggle = (target.closest && (target.closest('.js-menu-toggle') as HTMLElement)) || null;
    if (!toggle) return;
    e.preventDefault();
    const body = document.body;
    if (body.classList.contains('offcanvas-menu')) {
      body.classList.remove('offcanvas-menu');
      toggle.classList.remove('active');
    } else {
      body.classList.add('offcanvas-menu');
      toggle.classList.add('active');
    }
  }

  // Use event delegation at document level to match jQuery delegation used in main.js
  document.addEventListener('click', onToggleClick, false);
}
