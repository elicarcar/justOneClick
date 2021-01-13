<template>
  <footer class="footer">
    <div class="footer-top-wrapper flex">
      <section class="footer-icons">
        <h3 class="orange">JustAClick</h3>
        <List>
          <Icons link="google.com" fas="fab" fasIcon="github" />
          <Icons link="google.com" fas="fab" fasIcon="facebook" />
          <Icons link="google.com" fas="fab" fasIcon="linkedin" />
        </List>
      </section>
      <section class="footer-list flex">
        <List>
          <h4 class="list-title h-mid">Explore</h4>
          <NavItem navItem="home" />
          <NavItem navItem="about" />
          <NavItem navItem="pricing" />
          <NavItem navItem="contact" />
        </List>

        <List>
          <h4 class="list-title h-mid">Get Help</h4>
          <NavItem navItem="privacy policy" />
          <NavItem navItem="terms of use" />
          <NavItem navItem="disclaimer" />
          <NavItem navItem="cookies" />
        </List>
      </section>
    </div>

    <hr />
    <section class="copyright">
      <small>Copyright 2020 JustAClick. All Rights Reserved. </small>
    </section>
  </footer>
</template>

<script>
import List from '../../components/List'
import NavItem from '../../components/Nav/NavItem.vue'
import Icons from '../../components/Icons'
export default {
  name: 'Footer',
  components: { List, NavItem, Icons },
}
</script>
