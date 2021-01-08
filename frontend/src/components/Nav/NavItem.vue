<template>
  <li>
    <router-link to="#">{{ navItem }}</router-link>
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
