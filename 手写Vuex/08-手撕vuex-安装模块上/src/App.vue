<template>
  <div id="app">
    <p>{{this.$store.state.globalName}}</p>
<!--    <p>{{this.$store.getters.getGlobalName}}</p>-->
<!--    <button @click="globalFn1">同步操作</button>-->
<!--    <button @click="globalFn2">异步操作</button>-->
    <hr>
    <p>{{this.$store.state.home.name}}</p>
<!--        <p>{{this.$store.getters.getHomeName}}</p>-->
<!--    <button @click="homeFn1">同步操作</button>-->
<!--    <button @click="homeFn2">异步操作</button>-->
    <hr>
    <p>{{this.$store.state.account.name}}</p>
<!--    <p>{{this.$store.getters.getAccountName}}</p>-->
<!--    <button @click="accountFn1">同步操作</button>-->
<!--    <button @click="accountFn2">异步操作</button>-->
    <hr>
    <p>{{this.$store.state.account.login.name}}</p>
<!--    <p>{{this.$store.getters.getLoginName}}</p>-->
<!--    <button @click="loginFn1">同步操作</button>-->
<!--    <button @click="loginFn2">异步操作</button>-->
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    mounted() {
      console.log(this.$store);
    },
    methods: {
      globalFn1(){
        this.$store.commit('changeGlobalName', 10);
      },
      globalFn2(){
        this.$store.dispatch('asyncChangeGlobalName', 5);
      },
      homeFn1(){
        this.$store.commit('changeHomeName', 10);
      },
      homeFn2(){
        this.$store.dispatch('asyncChangeHomeName', 5);
      },
      accountFn1(){
        this.$store.commit('changeAccountName', 10);
      },
      accountFn2(){
        this.$store.dispatch('asyncChangeAccountName', 5);
      },
      loginFn1(){
        this.$store.commit('changeLoginName', 10);
      },
      loginFn2(){
        this.$store.dispatch('asyncChangeLoginName', 5);
      }
    }
  }
</script>

<style>
</style>
