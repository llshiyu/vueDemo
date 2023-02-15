<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/footer.vue'

  export default {
    name: 'App',
    components: {Footer},
  }
</script>

<style>
  #app {
    min-height: 100vh;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }
</style>
