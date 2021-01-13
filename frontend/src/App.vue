<template>
  <div id="app">
    <div id="nav"></div>
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Footer,
  },
}
</script>
