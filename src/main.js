import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuex);
Vue.use(VueRouter);

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

const routes = [
  { path: '/', component: require('./pages/Home.vue').default }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  el: '#app',
  render: h => h(require('./App.vue').default)
});
