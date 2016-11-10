import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increment (state) {
      state.counter ++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})

export default store