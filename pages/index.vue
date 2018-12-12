<template>
  <div class="home">
    <Header/>
    <HomePage/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import HomePage from '@/components/HomePage.vue'
export default {
  components: {
    Header,
    Footer,
    HomePage
  }
}
</script>
