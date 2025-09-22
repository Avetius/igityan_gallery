<template>
  <div class="site-wrap">
    <!-- header -->
    <header class="site-navbar py-3" role="banner">
      <div class="container-fluid">
        <div class="row align-items-center">

          <div class="col-6 col-xl-3">
            <h1 class="mb-0"><a href="#" class="text-white h2 mb-0"><img width="150" height="75" src="/vahag/vahag_logo_black_trimmed.png" alt="logo"></a></h1>
          </div>

          <div class="col-10 col-md-6 d-none d-xl-block">
            <nav class="site-navigation position-relative text-right text-lg-center" role="navigation">
              <ul class="site-menu js-clone-nav mx-auto d-none d-lg-block">
                <li class="active"><a href="#">Home</a></li>
                <li class="has-children">
                  <a href="#">Gallery</a>
                  <ul class="dropdown arrow-top">
                    <li><a href="#">Oil On Canvas</a></li>
                    <li><a href="#">Graphics</a></li>
                    <li><a href="#">Sculptures</a></li>
                  </ul>
                </li>
                <li><a href="/about.html">About</a></li>
                <li><a href="/contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>

          <div class="col-6 col-xl-3 text-right">
            <div class="d-none d-xl-inline-block">
              <ul class="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">
                <li><a href="https://www.instagram.com/igityan_gallery/" class="pl-0 pr-3"><span class="icon-instagram"></span></a></li>
                <li><a href="https://www.pinterest.com/vahagnigitian/" class="pl-3 pr-3"><span class="icon-pinterest"></span></a></li>
                <li><a href="https://www.facebook.com/artvahag" class="pl-3 pr-3"><span class="icon-facebook"></span></a></li>
              </ul>
            </div>

            <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style="position: relative; top: 3px;"><a href="#" class="site-menu-toggle js-menu-toggle text-white"><span class="icon-menu h3"></span></a></div>

          </div>

        </div>
      </div>
    </header>

    <!-- hero -->
    <div class="container py-5" data-aos="fade">
      <div class="row">
        <div class="col-lg-7 mx-auto text-center">
          <h1 class="text-white intro"><a href="/about.html">Vahagn Igityan</a> an Artist from Yerevan, Armenia</h1>
          <p>This website template uses Lozad.js to lazy load images for better website performance. Get this template now!</p>
          <p><a href="/contact.html" class="btn btn-primary">Contact Information</a></p>
        </div>
      </div>
    </div>

    <!-- gallery -->
    <div class="site-section pt-0 pb-0"  data-aos="fade">
      <div class="container-fluid">
        <div class="row" id="lightgallery">
          <div v-for="(item, idx) in items" :key="idx" class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 item" :data-src="item.src" :data-sub-html="item.subHtml" data-aos="fade">
            <a href="#">
              <span class="icon-expand"></span>
              <img :src="item.src" alt="IMage" class="img-fluid">
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="site-footer py-4">
      <div class="container-fluid text-center">
        <p class="small">Copyright &copy; <span>{{ year }}</span>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a></p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      year: new Date().getFullYear(),
      items: [
        { src: '/vahag/balcony.jpg', subHtml: '<h4>Fading Light</h4><p>Balcony</p>' },
        { src: '/vahag/still_life.jpg', subHtml: '<h4>Fading Light</h4><p>Still life</p>' },
        { src: '/vahag/fragment.jpg', subHtml: '<h4>Fading Light</h4><p>Fragment</p>' },
        { src: '/vahag/landscape.jpg', subHtml: '<h4>Fading Light</h4><p>Landscape</p>' },
        { src: '/vahag/still_life2.jpg', subHtml: '<h4>Fading Light</h4><p>Still life2</p>' },
        { src: '/vahag/running_stance.jpg', subHtml: '<h4>Fading Light</h4><p>Running stance</p>' },
        { src: '/vahag/still_life.jpg', subHtml: '<h4>Fading Light</h4><p>Still life</p>' },
        { src: '/vahag/talk.jpg', subHtml: '<h4>Fading Light</h4><p>Talk</p>' },
        { src: '/vahag/untitled1.jpg', subHtml: '<h4>Fading Light</h4><p>Untitled1</p>' },
        { src: '/vahag/untitled2.jpg', subHtml: '<h4>Fading Light</h4><p>Untitled2</p>' },
        { src: '/vahag/untitled3.jpg', subHtml: '<h4>Fading Light</h4><p>Untitled3</p>' },
        { src: '/vahag/untitled4.jpg', subHtml: '<h4>Fading Light</h4><p>Untitled4</p>' }
      ]
    }
  },
  mounted() {
    // Initialize jQuery plugins after DOM is rendered. These scripts are expected to be included via public folder.
    if (window.$ && window.$.fn && window.$.fn.lightGallery) {
      window.$('#lightgallery').lightGallery()
    }
  }
}
</script>

<style>
/* Removed the forced black body background that hides content in some setups.
  The project uses the existing CSS files in `public/css/` for theming. If you
  want a dark theme keep or change these styles in the global stylesheet
  (e.g. `public/css/style.css`) instead of inside this component. */
</style>
