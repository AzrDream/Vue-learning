<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
<!--    <p>{{this.$store.state.name}}</p>-->
    <p>{{this.$store.getters.myName}}</p>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    mounted(){
      console.log(this.$store);
    }
  }
</script>

<style>
</style>
