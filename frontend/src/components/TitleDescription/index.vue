<template>
  <div class="side-block">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'TitleDescription',
  props: {
    title: String,
    description: String,
  },
}
</script>
