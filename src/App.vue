<template>
  <v-app>
    <v-header></v-header>
    <navigation-drawer></navigation-drawer>

    <v-content class="ma-3" >
      <transition name="bounce" mode="out-in">
      <router-view></router-view>
      </transition>
    </v-content>
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
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
