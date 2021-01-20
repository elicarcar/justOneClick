<template>
  <div class="services-card">
    <h3>{{ serviceName }}</h3>
    <p class="services-card-description">{{ description }}</p>
    <img :src="imagePath" />
    <a :href="link">Learn More</a>
  </div>
</template>

<script>
export default {
  name: 'ServiceCards',
  props: {
    serviceName: String,
    description: String,
    imagePath: String,
    link: String,
  },
}
</script>
