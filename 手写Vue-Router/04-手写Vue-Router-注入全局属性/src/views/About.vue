<template>
  <div class="about">
    <h1>我是about</h1>
  </div>
</template>
<script>
  export default {
    name: 'About',
    mounted() {
      console.log('About', this.$router);
      console.log('About', this.$route);
    }
  }
</script>
