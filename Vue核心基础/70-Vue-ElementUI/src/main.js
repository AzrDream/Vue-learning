import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 1.导入elementUI和elementUI的CSS文件
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import { Row, Button, Switch } from 'element-ui'

// 2.告诉Vue, 我们需要在项目中使用elementUI
// Vue.use(ElementUI)
Vue.use(Row)
Vue.use(Button)
Vue.use(Switch)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
