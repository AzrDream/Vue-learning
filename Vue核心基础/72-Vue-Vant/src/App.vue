<template>
  <div id="app">
    <van-nav-bar
      title="购物车"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    />
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    />

    <van-submit-bar
      :price="3050"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft () {
      alert('返回')
    },
    onClickRight () {
      alert('按钮')
    }
  }
}
</script>
<style lang="scss">

</style>
