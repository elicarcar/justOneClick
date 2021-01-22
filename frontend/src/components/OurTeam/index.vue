<template>
  <div class="team">
    <div class="team-intro">
      <h2 class="team-title">{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <section class="members">
      <slot />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Our Team',
  props: { title: String, description: String },
}
</script>
