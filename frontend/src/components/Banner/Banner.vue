<template>
  <div class="banner-wrapper">
    <div class="banner-overlay">
      <section class="intro">
        <section class="heading-intro">
          <h1 class="hero-header orange-anim">JustAClick</h1>
          <h3>That's the distance between you and your goals!</h3>
          <p>Now let's get started.</p>
        </section>
        <div class="scroll">
          <div class="dot"></div>
        </div>
      </section>

      <video autoplay loop muted>
        <source src="../../assets/videos/amst.mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>
