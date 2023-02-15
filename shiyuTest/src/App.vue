<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/footer.vue'
  import Header from '@/components/header.vue'

  export default {
    name: 'App',
    components: {Header, Footer},
  }
</script>

<style>
  #app {
    min-height: 100vh;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
  }
</style>
