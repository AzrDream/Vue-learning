import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from './Juex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:'jkw',
    num: 0
  },
  getters: {
    myName(state){
      return state.name+'666';
    }
  },
  // 用于同步修改共享数据
  mutations: {
    addNum(state, payload){
      console.log(state, payload);
      state.num += payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
