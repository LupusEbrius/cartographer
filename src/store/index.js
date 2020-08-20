import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signedIn: false,
    username: '',
    email: ''
  },
  mutations: {
    isSignedIn (state) {
      state.signedIn = true
    },
    isSignedOut (state) {
      state.signedIn = false
    }
  },
  actions: {
  },
  modules: {
  }
})
