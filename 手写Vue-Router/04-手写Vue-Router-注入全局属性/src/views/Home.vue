<template>
  <div class="home">
    <h1>我是home</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
  mounted() {
    console.log('Home', this.$router);
    console.log('Home', this.$route);
  }
}
</script>
