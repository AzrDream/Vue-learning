<template>
    <div>
      <p>我是第一个子组件</p>
      <!--
      <button @click="getName">获取共享数据</button>
      -->
    </div>
</template>

<script>
export default {
  name: 'One',
  methods: {
    getName () {
      // console.log(this.name)
      console.log(this.$store.state.name)
    }
  }
}
</script>
<!--注意点: 默认情况下组件中的style中设置的样式是全局的样式-->
<style scoped>
p{
  background: skyblue;
}
</style>
