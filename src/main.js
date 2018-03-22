import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import App from './components/App.vue'

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.base,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
