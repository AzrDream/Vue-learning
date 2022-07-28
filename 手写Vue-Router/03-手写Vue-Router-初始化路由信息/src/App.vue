<template>
  <div id="app">
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    -->
    <a href="#/home">首页</a>
    <a href="#/about">关于</a>
  </div>
</template>
<script>
  import Home from './views/Home'
  import About from './views/About'
  export default {
    name: 'App',
    components: {
      Home,
      About
    },
    mounted() {
      console.log('App', this.$router);
      console.log('App', this.$route);
    }
  }
</script>
<style>

</style>
