import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

import { Button, Switch } from 'mint-ui'
// 注意点: 在MintUI中哪怕是按需引入也必须导入CSS文件
import 'mint-ui/lib/style.css'
// 注意点: MintUI和ElementUI的第一个不同, 就是在MintUI中需要通过Vue.component来告诉Vue我们需要使用哪个组件
// Vue.use(Button)
// Vue.use(Switch)
Vue.component(Button.name, Button)
Vue.component(Switch.name, Switch)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
