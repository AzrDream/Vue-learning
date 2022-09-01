<template>
  <h1>{{name}}</h1>
  <h1>{{age}}</h1>
  <button @click="say">按钮</button>
</template>

<script>
  import { h } from 'vue'
  export default {
    name: 'App',
    // 此处只是设置setup，不考虑响应式
    setup() {
      // 数据
      /*
      let name = 'azrdream'
      let age = 22*/

      // 方法
      /*
      function say() {
        console.log(`${name},${age}`);
      }*/

      // 返回一个渲染函数
      return ()=>h('h1','azrdream')
      // 返回一个对象
      /*
      return {
        name,
        age,
        say
      }
       */
    }
  }
</script>

<style>
</style>
