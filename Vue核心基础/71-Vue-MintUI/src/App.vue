<template>
  <div id="app">
    <div>
      <mt-button type="default">default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button>
    </div>
    <div>
      <mt-switch v-model="value"></mt-switch>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: true
    }
  }
}
</script>
<style lang="scss">

</style>
