<template>
<div class="site-wrap">
    <div class="container py-5" data-aos="fade">
      <div class="row">
        <div class="col-lg-7 mx-auto text-center">
          <h1 class="text-white intro">Oil On Canvas</h1>
          <p><a href="/contact" class="btn btn-primary">Contact Information</a></p>
        </div>
      </div>
    </div>

    <div class="site-section pt-0 pb-0"  data-aos="fade">
      <div class="container-fluid">

        <div class="row">
          <div v-for="(item, idx) in items" :key="idx" class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 item" data-aos="fade">
            <a href="#" @click.prevent="open(idx)">
              <span class="icon-expand"></span>
              <img :src="item.src" alt="IMage" class="img-fluid">
            </a>
          </div>
        </div>
      </div>
    </div>


  </div>

  <VueEasyLightbox :visible="show" :imgs="items.map(i => i.src)" :index="index" @hide="close" />
</template>

<script setup>
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const items = ref([
  { src: '/images/gallery/balcony.jpg' },
  { src: '/images/gallery/still_life.jpg' },
  { src: '/images/gallery/fragment.jpg' },
  { src: '/images/gallery/landscape.jpg' },
  { src: '/images/gallery/still_life2.jpg' },
  { src: '/images/gallery/running_stance.jpg' },
  { src: '/images/gallery/still_life.jpg' },
  { src: '/images/gallery/talk.jpg' },
  { src: '/images/gallery/untitled1.jpg' },
  { src: '/images/gallery/untitled2.jpg' },
  { src: '/images/gallery/untitled3.jpg' },
  { src: '/images/gallery/untitled4.jpg' }
])

const show = ref(false)
const index = ref(0)

function open(i) {
  index.value = i
  show.value = true
}

function close() {
  show.value = false
}
</script>

<!-- page-specific styles removed to allow layout-level debug override -->
