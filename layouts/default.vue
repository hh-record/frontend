<!--eslint-disable vue/multi-word-component-names-->
<template>
  <div>
    <Header></Header>
    <Nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'

export default {
  components: { Header, Footer },

}
</script>
