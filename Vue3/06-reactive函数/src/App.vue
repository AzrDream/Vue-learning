<template>
  <h1>{{name}}</h1>
  <h1>{{age}}</h1>
  <h3>测试的数据c:{{job.a.b.c}}</h3>
  <h3>爱好：{{hobby}}</h3>
  <button @click="changeInfo">按钮</button>
</template>

<script>
  import {ref,reactive} from 'vue'
  export default {
    name: 'App',
    // 此处只是设置setup，不考虑响应式
    setup() {
      // 数据
      let name = ref('azrdream')
      let age = ref(22)
      let job = reactive({
        type: '前端',
        salary: '10k',
        a: {
          b:{
            c:666
          }
        }
      });
      let hobby = reactive(['抽烟','喝酒','烫头']);

      // 方法
      function changeInfo() {
        job.a.b.c = 999;
        hobby[0] = '学习';
        console.log(job);
      }

      // 返回一个对象
      return {
        name,
        age,
        job,
        hobby,
        changeInfo
      }
    }
  }
</script>

<style>
</style>
