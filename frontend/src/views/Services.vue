<template>
  <div class="services">
    <section class="block container ">
      <section class="services-card-list">
        <ServiceCards
          serviceName="SEO"
          description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          link="#"
        />
        <ServiceCards
          serviceName="Wordpress"
          description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          imagePath="../assets/WordPress-alternative.png"
          link="#"
        />
        <ServiceCards
          serviceName="SPA"
          description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          link="#"
        />
        <ServiceCards
          serviceName="SEO"
          description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          link="#"
        />
        <ServiceCards
          serviceName="SEO"
          description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          link="#"
        />
      </section>
    </section>
  </div>
</template>

<script>
import ServiceCards from '../components/ServiceCards'
export default {
  name: 'Services',
  components: { ServiceCards },
}
</script>
