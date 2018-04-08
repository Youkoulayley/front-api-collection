import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'
import Router from './router/router.js'
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(Vuetify, {
  theme: {
    primary: colors.blueGrey.darken4,
    secondary: colors.blueGrey.darken3,
    scolor1: colors.amber.darken4,
    scolor2: colors.purple.darken4,
    accent: colors.shades.black,
    error: colors.purple.accent3
  }
});

Vue.http.options.root = 'http://localhost:8081';

new Vue({
  router: Router,
  el: '#app',
  render: h => h(require('./App.vue').default)
});
