<template>
  <div class="home">
    <Banner />
    <Nav />
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from '../components/Nav/Nav.vue'
import Banner from '../components/Banner/Banner.vue'
export default {
  name: 'Home',
  components: { Nav, Banner },
}
</script>
