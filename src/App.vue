<template>
  <v-app>
    <v-toolbar dark color="primary"
               fixed
               clipped-left
               app>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Creatutor</v-toolbar-title>
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
    <navigation-drawer></navigation-drawer>
  </v-app>
</template>

<script>
  import NavigationDrawer from './components/NavigationDrawer.vue'

  export default {
    components: {
      NavigationDrawer
    },
    methods: {
    }
  }
</script>

<style lang="scss">
</style>
