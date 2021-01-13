<template>
  <a target="blank" :href="link">
    <font-awesome-icon :icon="[fas, fasIcon]" class="icons-orange" />
  </a>
</template>

<script>
export default {
  name: 'Icons',
  props: {
    fas: String,
    fasIcon: String,
    link: String,
  },
}
</script>
