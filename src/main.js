import Vue from 'vue'
import Vuetify from 'vuetify'
import Axios from 'axios'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import App from './App.vue'

Vue.use(Vuetify, Axios)

new Vue({
  el: '#app',
  render: h => h(App)
})
