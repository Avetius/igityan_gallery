<template>
  <div class="gallery">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome Gallery App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'GalleryView',
  components: {
    HelloWorld
  }
}
</script>