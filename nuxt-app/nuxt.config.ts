// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Vahagn Igityan - Nuxt',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' }
      ],
      link: [
        // Original CSS files - copy `css/` and `fonts/` into `nuxt-app/public`
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/magnific-popup.css' },
        { rel: 'stylesheet', href: '/css/jquery-ui.css' },
        { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
        { rel: 'stylesheet', href: '/css/owl.theme.default.min.css' },
        { rel: 'stylesheet', href: '/css/lightgallery.min.css' },
        { rel: 'stylesheet', href: '/css/bootstrap-datepicker.css' },
  // Icon font styles (icomoon provides the `icon-...` classes used in the header)
  { rel: 'stylesheet', href: '/fonts/icomoon/style.css' },
  { rel: 'stylesheet', href: '/fonts/flaticon/font/flaticon.css' },
        { rel: 'stylesheet', href: '/css/swiper.css' },
        { rel: 'stylesheet', href: '/css/aos.css' },
        { rel: 'stylesheet', href: '/css/style.css' },
        // Local fix for AOS fade selector/opacity issues (see css/aos-fix.css)
        { rel: 'stylesheet', href: '/css/aos-fix.css' },
      ],
      // Inline script to remove any AOS classes that might be present in
      // server-rendered HTML before Vue hydrates. Running early in the
      // head prevents a "hydration class mismatch" when client virtual DOM
      // does not expect these classes.
      script: [
        {
          children: `// Remove AOS classes added by any pre-render step
            ;(function(){try{var cls=['aos-init','aos-animate'];cls.forEach(function(c){document.querySelectorAll('.'+c).forEach(function(el){el.classList.remove(c)})})}catch(e){}})();`,
          type: 'text/javascript'
        }
  ,
        // Load original vendor scripts (jQuery + main) in the body so the
        // site's mobile menu cloning/toggle code runs exactly like the
        // original `index.html` template.
        { src: '/js/jquery-3.3.1.min.js', body: true },
        { src: '/js/jquery-migrate-3.0.1.min.js', body: true },
        // Provide vendor globals that `main.js` expects before it runs
        { src: '/js/aos.js', body: true },
        { src: '/js/lozad.min.js', body: true },
        { src: '/js/main.js', body: true }
  ]
  // We removed global jQuery & plugin scripts because the gallery is now Vue-native.
    }
  }
})
