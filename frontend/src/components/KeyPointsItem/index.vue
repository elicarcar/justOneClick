<template>
  <dt class="kp-item flex">
    <div class="item-inner flex">
      <font-awesome-icon :icon="[fas, fasIcon]" class="icons-orange" />
      <section>
        <div class="kp-head-wrapper">
          <h4 class="h-bolder">{{ kpHead }}</h4>
          <h4 class="h-thin">{{ kpDescription }}</h4>
        </div>
        <p class="p-small">{{ kpBody }}</p>
      </section>
    </div>
  </dt>
</template>

<script>
export default {
  name: 'KeyPointsItem',
  props: {
    fas: String,
    fasIcon: String,
    kpHead: String,
    kpDescription: String,
    kpBody: String,
  },
}
</script>
