<template>
  <div class="site-footer py-4">
    <div class="container-fluid text-center">
      <p class="small footer-text">Copyright &copy; <span>{{ year }}</span>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co" class="footer-link">Untree.co</a></p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const year = ref(new Date().getFullYear())
onMounted(() => console.log('TheFooter component mounted (client)'))
</script>

<style scoped>
.footer-text { color: #ddd }
.footer-link { color: #ddd }
</style>
