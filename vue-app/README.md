# igityan-vue

This is a small Vite + Vue 3 wrapper that converts the original `index.html` into a Vue `App.vue` single-file component.

Important: The original project ships many assets (CSS, JS, images) sitting in the parent project. To reuse them, copy the following folders from the root into `vue-app/public` so Vite serves them as static assets:

- `css/`
- `js/`
- `images/` (optional)
- `fonts/`
- `vahag/`
- `favicon.png`

After copying, run in PowerShell (from `vue-app`):

```powershell
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`). The app uses the same HTML structure and expects the JS plugins (jQuery, lightGallery, AOS, etc.) to be available via the copied `js/` files.

Notes and limitations:
- The template depends on jQuery plugins and global scripts. This scaffold does not rewrite those plugins to native Vue components; instead it mounts the gallery in `mounted()` if `lightGallery` is available globally.
- If you prefer a fully-Vue reimplementation (no jQuery), I can migrate `lightGallery` usage to a Vue-native gallery and initialize AOS with its Vue-compatible initialization.
