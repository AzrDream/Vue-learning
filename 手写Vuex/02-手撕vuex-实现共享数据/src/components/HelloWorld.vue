<template>
  <div class="hello">
        <input type="text" v-model="this.$store.state.name">
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    mounted(){
      console.log(this.$store);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
