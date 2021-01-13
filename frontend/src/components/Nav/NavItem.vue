<template>
  <li v-if="navItem == 'home'">
    <router-link to="/">{{ navItem }}</router-link>
  </li>
  <li v-else>
    <router-link :to="navItem">{{ navItem }}</router-link>
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    navItem: String,
  },
}
</script>
