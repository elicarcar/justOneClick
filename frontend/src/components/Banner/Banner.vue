<template>
  <div>
    <video ref="videoRef" autoplay loop preload="auto"></video>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  mounted: function() {
    this.$refs.videoRef.src = '../../assets/videos/amst.mov'
  },
}
</script>
