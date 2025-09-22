<template>
  <div>
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
</script>

<style>
/* Restore intended dark theme; overlay is scoped to appear only when the
  off-canvas menu is active via `body.offcanvas-menu` (see `public/css/style.css`). */
/* Restore layout-level dark background if desired. The global stylesheet
   `public/css/style.css` also sets the site background; the rule below
   mirrors that setting. */
body { background: #000; color: #fff; }
</style>
