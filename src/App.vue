<template>
  <v-app>
    <v-header></v-header>
    <navigation-drawer></navigation-drawer>
    <router-view></router-view>
  </v-app>
</template>

<script>
  import VHeader from './components/Header.vue'
  import NavigationDrawer from './components/NavigationDrawer.vue'

  export default {
    components: {
      VHeader, NavigationDrawer
    }
  }

</script>


<style lang="scss">
</style>
