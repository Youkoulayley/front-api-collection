import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    dialog: false
  },
  mutations: {
    toggle (state) {
      return state.dialog = !state.dialog
    }
  }
})
