import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuex);

Vue.use(Vuetify, {
  theme: {
    primary: colors.blueGrey.darken4,
    secondary: colors.blueGrey.darken3,
    accent: colors.shades.black,
    error: colors.purple.accent3
  }
});

new Vue({
  el: '#app',
  render: h => h(require('./App.vue').default)
});
