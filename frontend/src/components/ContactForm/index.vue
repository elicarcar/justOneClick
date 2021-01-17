<template>
  <div class="contact-form">
    <h1 class="contact-title">{{ title }}</h1>
    <form action="">
      <Input
        required="true"
        placeholder="Your company name"
        label="name"
        type="text"
      />
      <Input
        required="true"
        placeholder="example@gmail.com"
        label="email"
        type="email"
      />
      <Input
        required="true"
        placeholder="+31678675432"
        label="Phone"
        type="tel"
      />

      <Textarea placeholder="Write your message" />
    </form>
    <Button btnText="Submit" :handleClick="() => clickHandle()" />
  </div>
</template>

<script>
import Input from '../Input'
import Textarea from '../Textarea'
import Button from '../Button'
export default {
  name: 'ContactForm',
  props: { title: String },
  components: { Input, Textarea, Button },
  methods: {
    clickHandle() {
      console.log('clicked')
    },
  },
}
</script>
