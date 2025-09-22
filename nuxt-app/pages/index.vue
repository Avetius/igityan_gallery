<template>
<div class="site-wrap">

    <div class="container py-5" data-aos="fade">
      <div class="row">
        <div class="col-lg-7 mx-auto text-center">
          <h1 class="text-white intro"><a href="/about">Vahagn Igityan</a> an Artist from Yerevan, Armenia</h1>
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
import { ref, onMounted } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const year = ref(new Date().getFullYear())

const items = ref([
  { src: '/images/gallery/balcony.jpg', subHtml: '<h4>Fading Light</h4><p>Balcony</p>' },
  { src: '/images/gallery/still_life.jpg', subHtml: '<h4>Fading Light</h4><p>Still life</p>' },
  { src: '/images/gallery/fragment.jpg', subHtml: '<h4>Fading Light</h4><p>Fragment</p>' },
  { src: '/images/gallery/landscape.jpg', subHtml: '<h4>Fading Light</h4><p>Landscape</p>' },
  { src: '/images/gallery/still_life2.jpg', subHtml: '<h4>Fading Light</h4><p>Still life2</p>' },
  { src: '/images/gallery/running_stance.jpg', subHtml: '<h4>Fading Light</h4><p>Running stance</p>' },
  { src: '/images/gallery/still_life.jpg', subHtml: '<h4>Fading Light</h4><p>Still life</p>' },
  { src: '/images/gallery/talk.jpg', subHtml: '<h4>Fading Light</h4><p>Talk</p>' },
  { src: '/images/gallery/untitled1.jpg', subHtml: '<h4>Fading Light</h4><p>Untitled1</p>' },
  { src: '/images/gallery/untitled2.jpg', subHtml: '<h4>Fading Light</h4><p>Untitled2</p>' },
  { src: '/images/gallery/untitled3.jpg', subHtml: '<h4>Fading Light</h4><p>Untitled3</p>' },
  { src: '/images/gallery/untitled4.jpg', subHtml: '<h4>Fading Light</h4><p>Untitled4</p>' }
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

onMounted(() => {
  // Any other initialization (AOS, etc.) can be called here if desired
})
</script>

<script>
export default {
  components: { VueEasyLightbox }
}
</script>

<!-- page-specific styles removed to allow layout-level debug override -->
