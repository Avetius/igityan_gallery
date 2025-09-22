<template>
  <header class="site-navbar py-3" role="banner">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-6 col-xl-3">
          <h1 class="mb-0">
            <NuxtLink to="/" class="text-white h2 mb-0">
              <!-- Prefer white logo if present; fallback to replacing the asset -->
              <img width="150" height="75" src="/images/logo/vahag_logo_black_trimmed.png" alt="logo" class="site-logo-img">
            </NuxtLink>
          </h1>
        </div>

        <div class="col-10 col-md-6 d-none d-xl-block">
          <nav class="site-navigation position-relative text-right text-lg-center" role="navigation">
            <ul class="site-menu js-clone-nav mx-auto d-none d-lg-block">
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/about">About</NuxtLink></li>
              <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>
          </nav>
        </div>

        <div class="col-6 col-xl-3 text-right">
          <div class="d-none d-xl-inline-block">
            <ul class="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">
              <li><a href="https://www.instagram.com/igityan_gallery/" class="pl-0 pr-3"><span class="icon-instagram"></span></a></li>
              <li><a href="https://www.facebook.com/artvahag" class="pl-3 pr-3"><span class="icon-facebook"></span></a></li>
              <li><a href="https://www.pinterest.com/vahagnigitian/" class="pl-3 pr-3"><span class="icon-pinterest"></span></a></li>
            </ul>
          </div>

          <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style="position: relative; top: 3px;"><a href="#" class="site-menu-toggle js-menu-toggle text-white"><span class="icon-menu h3"></span></a></div>
        </div>
      </div>
    </div>
  </header>

  <!-- Original template's mobile menu container - left empty for the JS to clone into -->
  <div class="site-mobile-menu">
    <div class="site-mobile-menu-header">
      <div class="site-mobile-menu-close mt-3">
        <span class="icon-close2 js-menu-toggle"></span>
      </div>
    </div>
    <div class="site-mobile-menu-body"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => console.log('TheHeader component mounted (client)'))
</script>

<style scoped>
.site-logo-img { display: inline-block; }

/* Minimal mobile container styles are provided in global CSS; we keep
   the component styles minimal so the original `css/style.css` controls
   the look and feel. */
</style>
