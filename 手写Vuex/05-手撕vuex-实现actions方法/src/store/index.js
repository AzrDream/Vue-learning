import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from './Juex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:'jkw',
    num: 0,
    age: 0
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
    },
    addAge(state, payload){
      console.log(state, payload);
      state.age += payload;
    }
  },
  // 用于异步修改共享数据
  actions: {
    // 第一个是解构赋值的对象，第二个是外界传递的参数
    asyncAddAge({commit},payload){
      setTimeout(()=>{
        commit('addAge',payload);
      },3000);
    }
  },
  modules: {
  }
})
