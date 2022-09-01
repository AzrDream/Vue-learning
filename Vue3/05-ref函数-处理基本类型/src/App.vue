<template>
  <h1>{{name}}</h1>
  <h1>{{age}}</h1>
  <button @click="changeInfo">按钮</button>
</template>

<script>
  import {ref} from 'vue'
  export default {
    name: 'App',
    // 此处只是设置setup，不考虑响应式
    setup() {
      // 数据
      let name = ref('azrdream')
      let age = ref(22)

      // 方法
      function changeInfo() {
        name.value = '张三'
        age.value = 33
        console.log(name, age);
      }

      // 返回一个对象
      return {
        name,
        age,
        changeInfo
      }
    }
  }
</script>

<style>
</style>
