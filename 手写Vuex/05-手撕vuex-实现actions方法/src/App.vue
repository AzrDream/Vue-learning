<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!--    <p>{{this.$store.state.name}}</p>-->
    <p>{{this.$store.getters.myName}}</p>
    <p>{{this.$store.state.num}}</p>
    <button @click="myFn">我是按钮</button>
    <p>{{this.$store.state.age}}</p>
    <button @click="myFn2">我是按钮</button>
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
    },
    methods: {
      myFn(){
        this.$store.commit('addNum',10);
      },
      myFn2(){
        this.$store.dispatch('asyncAddAge',5);
      }
    }
  }
</script>

<style>
</style>
