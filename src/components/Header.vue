<template>
  <v-toolbar dark color="primary"
             fixed
             clipped-left
             app
  >
    <v-toolbar-side-icon @click="toggleNavigationDrawer"></v-toolbar-side-icon>
    <router-link :to="{ name: 'home'}"><v-toolbar-title class="white--text">Creatutor</v-toolbar-title></router-link>
    <v-spacer></v-spacer>
    <v-text-field
      prepend-icon="search"
      label="Search"
      solo-inverted
      class="mx-3"
      flat
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-btn flat @click.stop="toggleRegisterDialog">
        Register
    </v-btn>
    <v-btn flat>
      Login
    </v-btn>
    <router-link :to="{ name: 'admin'}">
      <v-btn flat>
        Admin Zone
      </v-btn>
    </router-link>
    <register></register>
  </v-toolbar>
</template>

<script>
  import NavigationDrawer from '../components/NavigationDrawer.vue'
  import Register from '../components/Register.vue'
  import NavigationDrawerStore from '../stores/NavigationDrawerStore.js'
  import RegisterDialogStore from '../stores/RegisterDialogStore.js'

  export default {
    data () {
      return {
        dialog: false,
      }
    },
    stores: [
      NavigationDrawerStore,
      RegisterDialogStore
    ],
    components: {
      NavigationDrawer,
      Register
    },
    methods: {
      toggleNavigationDrawer () {
        NavigationDrawerStore.commit('toggle')
      },
      toggleRegisterDialog () {
        RegisterDialogStore.commit('toggle')
      }
    }
  }
</script>
