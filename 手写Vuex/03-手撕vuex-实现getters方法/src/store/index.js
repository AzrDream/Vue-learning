import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from './Juex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:'jkw'
  },
  getters: {
    myName(state){
      return state.name+'666';
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
