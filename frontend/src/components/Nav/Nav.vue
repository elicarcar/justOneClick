<template>
  <div class="container">
    <div class="nav-wrapper">
      <section class="logo">
        <img src="" alt="logo" />
      </section>
      <nav :class="open ? 'nav-mobil-open' : ''">
        <div class="hamburger" :class="open ? 'open' : ''" @click="toggleOpen">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul>
          <NavItem navItem="home" />
          <NavItem navItem="about" />
          <NavItem navItem="services" />
          <NavItem navItem="pricing" />
          <NavItem navItem="contact" />
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import NavItem from './NavItem.vue'
export default {
  name: 'Nav',
  data: function() {
    return {
      open: false,
    }
  },
  components: { NavItem },
  methods: {
    toggleOpen: function() {
      this.open = !this.open
    },
  },
}
</script>
