<template>
  <section class="intro">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </section>
</template>

<script>
export default {
  name: 'Intro',
  props: { title: String, description: String },
}
</script>
