<template>
  <div class="member-card">
    <div class="member-card-inner">
      <div class="member-img">
        <img :src="memberImage" alt="" />
      </div>
      <div class="member-card-body">
        <h5 class="member-name">{{ memberName }}</h5>
        <p class="member-info p-small">{{ memberInfo }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Members',
  props: {
    memberImage: String,
    memberName: String,
    memberInfo: String,
  },
}
</script>
