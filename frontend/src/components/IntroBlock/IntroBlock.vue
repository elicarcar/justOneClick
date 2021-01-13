<template>
  <section class="container block">
    <div class="header">
      <h2 class="hero-header">With <span class="orange"> JustAClick </span></h2>
      <p>Branding Made Easy</p>
      <p class="small-explanation">
        We give birth to experiences that revolutionize brands, cultivate
        businesses and positively effect lives. <br />
        Building brands and social movements with compelling ideas.
      </p>
    </div>
    <List>
      <KeyPointsItem
        fas="fas"
        fasIcon="lightbulb"
        kpHead="We Create Ideas"
        kpDescription="Yes We Do"
        kpBody="We love being creative and deliver our best. We work Hard for our customers and make sure that they recieve the best results."
      />
      <KeyPointsItem
        fas="fas"
        fasIcon="brain"
        kpHead="We Brainstorm"
        kpDescription="Think think think.."
        kpBody="We think deep about our products, we love discussing new ideas and continously improve our products."
      />
      <KeyPointsItem
        fas="fas"
        fasIcon="code"
        kpHead="We <3 Code"
        kpDescription="Yes We Do"
        kpBody="Our code's maintainability is very important for us. "
      />
      <KeyPointsItem
        fas="fas"
        fasIcon="eye"
        kpHead="We Care About Identity"
        kpDescription="Branding"
        kpBody="We are aware of the importance of branding and have a distinctable identity of your own."
      />
    </List>
  </section>
</template>

<script>
import List from '@/components/List'
import KeyPointsItem from '@/components/KeyPointsItem'
export default {
  name: 'IntroBlock',
  components: {
    List,
    KeyPointsItem,
  },
}
</script>
