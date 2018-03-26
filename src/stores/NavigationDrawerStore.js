import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    drawer: true
  },
  mutations: {
    toggle (state) {
      return state.drawer = !state.drawer
    }
  }
})
