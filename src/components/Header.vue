<template>
  <v-toolbar dark color="primary"
             fixed
             clipped-left
             app
  >
    <v-toolbar-side-icon @click="toggle"></v-toolbar-side-icon>
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
    <v-btn flat>
      Register
    </v-btn>
    <v-btn flat>
      Login
    </v-btn>
  </v-toolbar>
</template>

<script>
  import NavigationDrawer from '../components/NavigationDrawer.vue'
  import NavigationDrawerStore from '../stores/NavigationDrawerStore.js'

  export default {
    stores: NavigationDrawerStore,
    components: {
      NavigationDrawer
    },
    methods: {
      toggle () {
        NavigationDrawerStore.commit('toggle')
      }
    }
  }
</script>
