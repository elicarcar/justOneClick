<template>
  <div id="app">
    <Nav :showNav="$route.name !== 'Home'" />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'
import Nav from './components/Nav/Nav.vue'
export default {
  name: 'App',
  components: {
    Footer,
    Nav,
  },
}
</script>
