<template>
  <div class="home page">
    <Banner />
    <Nav :showNav="$route.name === 'Home'" />
    <IntroBlock />
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from '../components/Nav/Nav.vue'
import Banner from '../components/Banner/Banner.vue'
import IntroBlock from '../components/IntroBlock/IntroBlock.vue'
export default {
  name: 'Home',
  components: { Nav, Banner, IntroBlock },
}
</script>
