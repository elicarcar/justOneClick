<template>
  <div class="contact page">
    <Nav />
    <div class="contact-page-wrapper">
      <Modal>
        <div class="contact-flex-wrapper flex">
          <ContactForm title="Contact Us!" />
          <TitleDescription
            title="Need a demo?"
            description="You like what you see but want to see what we can contribute to your company? Schedule a call with us."
          />
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav/Nav.vue'
import ContactForm from '../components/ContactForm'
import TitleDescription from '../components/TitleDescription'
import Modal from '../components/Modal'
export default {
  name: 'Contact',
  components: { Nav, Modal, TitleDescription, ContactForm },
}
</script>
