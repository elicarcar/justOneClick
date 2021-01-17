<template>
  <textarea
    name="message"
    :placeholder="placeholder"
    rows="4"
    cols="60"
    v-model="client.message"
  ></textarea>
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    placeholder: String,
  },
  data() {
    return {
      client: {
        message: '',
      },
    }
  },
}
</script>
