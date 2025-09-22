# igityan-nuxt

This is a Nuxt 4 wrapper that mirrors your original `index.html` page.

Important: Copy the original asset folders from the root project into `nuxt-app/public/`:

- `css/`
- `js/`
- `fonts/`
- `vahag/`
- `favicon.png`

Then from PowerShell in `nuxt-app` run:

```powershell
npm install
npm run dev
```

To make copying the original static assets easier there are two helper scripts in the project root of this Nuxt app:

- `copy-assets.ps1` - PowerShell script (Windows). Usage from inside `nuxt-app`:

```powershell
PowerShell -ExecutionPolicy Bypass -File .\copy-assets.ps1
# or specify source root explicitly (relative path to original project root):
PowerShell -ExecutionPolicy Bypass -File .\copy-assets.ps1 -SourceRoot ".."
```

- `copy-assets.sh` - POSIX shell script (WSL, macOS, Linux). Usage:

```bash
./copy-assets.sh ..
```

Both scripts attempt to copy the folders `css`, `js`, `fonts`, `vahag`, `images` and `favicon.png` from the repository root into `nuxt-app/public/` so Nuxt serves them statically.

Pages added
----------

I created the following Nuxt pages mirroring your original site:

- `/` -> `pages/index.vue` (Home / Gallery)
- `/about` -> `pages/about.vue`
- `/contact` -> `pages/contact.vue`
- `/single` -> `pages/single.vue` (Gallery listing)

After copying assets and starting the dev server, open these routes in the browser (e.g. `http://localhost:3000/about`).

Contact API
-----------

The project now includes a simple server API to accept contact form submissions:

- `POST /api/messages` — accepts JSON `{ name, email, subject, message }` and appends an entry to `server/storage/messages.json`.

The contact page (`/contact`) posts to this endpoint and shows basic success/error feedback. `server/storage/messages.json` is created automatically when the first message arrives.

Nuxt will serve the static files from `/` so paths like `/css/style.css` and `/vahag/*.jpg` will load correctly.

If you want a fully Vue-native migration (no jQuery), I can convert the gallery and plugins to Vue equivalents.

AOS (Animate On Scroll) override
-------------------------------

This project includes a small CSS override `public/css/aos-fix.css` to work around a problem observed
in the minified AOS stylesheet that caused fade-based animations to remain invisible (opacity stuck at 0).

Why the override exists:
- The vendor `css/aos.css` in the template is minified and contains condensed selectors which in this
	environment produced incorrect computed opacity for elements using `data-aos="fade*"` attributes.
- Instead of editing the vendor file, `aos-fix.css` provides a safe, targeted override loaded after the
	vendor CSS so fade animations work as intended.

How to revert (not recommended unless you know what you're doing):
1. Remove the link to `/css/aos-fix.css` in `nuxt.config.ts` (head `link` array).
2. (Optional) Restore or edit `public/css/aos.css` directly, but be aware that file is a vendor copy and
	 may be overwritten if you re-copy assets from the original template.

Cleanup note
------------

Temporary debug banners and console logs were added during troubleshooting to confirm that the Nuxt
layout and components were mounting. Those debug markers have been removed and component logs were
moved to `onMounted` hooks (client-only) for safer debugging. If you need to re-enable debug traces,
search the repository for `LAYOUT RENDERED` or console log strings like `TheHeader component mounted`.
