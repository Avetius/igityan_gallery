export default defineNuxtPlugin((nuxtApp: any) => {
  if (!process.client) return

  const initAOS = async () => {
    const [{ default: AOS }] = await Promise.all([
      import('aos')
    ])
    await import('aos/dist/aos.css')

    // Initialize after a frame so hydration has finished and DOM is stable.
    window.requestAnimationFrame(() => {
      AOS.init({ once: false })
    })
    ;(window as any).__AOS__ = AOS
  }

  // Wait until the Nuxt app is mounted before initializing AOS. This
  // prevents any class mutations during hydration which can cause
  // "hydration class mismatch" warnings.
  nuxtApp.hook?.('app:mounted', () => {
    // run after next paint
    window.requestAnimationFrame(() => { initAOS().catch(() => {}) })
  })

  // Re-run AOS after each route navigation to discover newly-added elements
  // with `data-aos` attributes.
  try {
    const router = useRouter()
    router.afterEach(() => { initAOS().catch(() => {}) })
  } catch (e) {
    // If useRouter isn't available here, ignore — AOS will still run on mount.
  }
})
