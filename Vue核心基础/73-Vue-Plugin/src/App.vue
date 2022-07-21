<template>
  <div id="app">
<!--    <Loading></Loading>-->
    <button @click="myFn1">显示</button>
    <button @click="myFn2">隐藏</button>
  </div>
</template>
<script>
// import Loading from './components/Loading'
// import Vue from 'vue'
export default {
  // components: {
  //   Loading
  // }
  methods: {
    myFn1 () {
      // Vue.showLoading()
      this.$showLoading()
    },
    myFn2 () {
      // Vue.hiddenLoading()
      this.$hiddenLoading()
    }
  }
}
</script>
<style lang="scss">

</style>
