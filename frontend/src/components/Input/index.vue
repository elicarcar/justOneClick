<template>
  <div>
    <input
      :type="inputType"
      :placeholder="placeholder"
      v-model="client.info"
      :required="isRequired"
    />
    <label for="name">{{ label }}:</label>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    isRequired: Boolean,
    inputType: String,
    label: String,
    placeholder: String,
  },
  data() {
    return {
      client: {
        info: '',
      },
    }
  },
}
</script>
