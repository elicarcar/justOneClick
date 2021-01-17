<template>
  <button class="btn" @click="handleClick" :type="type">
    {{ btnText }}
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    btnText: String,
    handleClick: Function,
    type: String,
  },
}
</script>
