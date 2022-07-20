<!--template用于编写当前组件的结构代码的-->
<template>
    <div id="app">
      <!--
      <p>{{msg}}</p>
      <button @click="say">我是按钮</button>
      <One></One>
      <button @click="getName">获取共享数据</button>
      -->
      <router-link to="/one">Go to One</router-link>
      <router-link to="/two">Go to Two</router-link>
      <router-view></router-view>
    </div>
</template>
<!--script用于编写当前组件的业务代码-->
<script>
// import One from './components/One.vue'
// import Two from './components/Two.vue'

export default {
  name: 'App',
  data: function () {
    return {
      msg: '知播渔'
    }
  },
  methods: {
    say () {
      console.log('say')
    },
    getName () {
      // console.log(this.name)
      console.log(this.$store.state.name)
    }
  },
  components: {
    // One: One,
    // Two: Two
  }
}
</script>
<!--style用于编写当前组件的样式代码的-->
<style scoped>
/*p{*/
/*  background: #f00;*/
/*}*/
</style>
