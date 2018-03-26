<template>
  <v-navigation-drawer class="secondary"
    fixed
    clipped
    v-model="drawer"
    app
  >
    <v-list class="pa-1 white--text">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="../assets/sorastro-avatar.jpg">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Sorastro</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list class="pt-0 white--text" dense>
      <v-divider></v-divider>
      <v-list-tile v-for="item in items" :key="item.title" @click="">
        <v-list-tile-action>
          <v-icon class="primary--text">{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import store from '../stores/NavigationDrawerStore.js'

  export default {
    store: store,
    computed: {
      drawer () {
        return store.state.drawer
      }
    },
    data () {
      return {
        items: [
          {title: 'Assaut sur l\'empire', icon: 'dashboard'},
          {title: 'Zombicide', icon: 'dashboard'}
        ]
      }
    },
  }
</script>
