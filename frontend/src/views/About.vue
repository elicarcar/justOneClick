<template>
  <div class="about page">
    <OurTeam
      title="Meet Our Core Team"
      description="Curabitur at velit justo. Proin vehicula consequat nisi. Curabitur porttitor libero ornare arcu mollis, quis condimentum velit aliquam. Donec feugiat aliquet lectus, et laoreet diam tincidunt id. Nulla sit amet mi vitae erat egestas luctus vitae non dui."
    >
      <div class="member-block" v-for="member in members" :key="member.name">
        <Member
          v-scroll-animation
          :memberImage="member.image"
          :memberName="member.name"
          :memberInfo="member.info"
        />
      </div>
    </OurTeam>
  </div>
</template>

<script>
import OurTeam from '../components/OurTeam'
import Member from '../components/Member'

export default {
  name: 'About',
  components: { Member, OurTeam },
  data() {
    return {
      members: [
        {
          image: require('../../public/images/bird.jpg'),
          name: 'Birdie',
          info:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie nibh diam, id bibendum justo molestie in. ',
        },
        {
          image: require('../../public/images/duck.jpg'),
          name: 'Loco Duck',
          info:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie nibh diam, id bibendum justo molestie in. ',
        },
      ],
    }
  },
}
</script>
