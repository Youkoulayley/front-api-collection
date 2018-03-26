<template>
  <v-navigation-drawer class="secondary"
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
      <v-divider></v-divider>
      <v-list class="white--text">
        <v-list-group
          v-model="item.active"
          v-for="item in items"
          :key="item.title"
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-for="episode in item.episodes" :key="episode.name" @click="">
            <v-list-tile-content>
              <v-list-tile-title>{{episode.num }} - {{ episode.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
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
          {title: 'Blood Rage', icon: 'dashboard'},
          {title: 'Descent', icon: 'dashboard'},
          {title: 'Miscellany', icon: 'dashboard'},
          {title: 'Runewars', icon: 'dashboard'},
          {title: 'Scenery', icon: 'dashboard'},
          {
            title: 'Star Wars : Imperial assault',
            icon: 'dashboard',
            episodes : [
                {num: 1, name: 'Goku'},
                {num: 2, name: 'Gohan' }
              ]
          },
          {title: 'Star Wars : Legion', icon: 'dashboard'},
          {title: 'Zombicide : Black Plague', icon: 'dashboard'},
          {title: 'Zombie', icon: 'dashboard'}
        ]
      }
    },
  }
</script>
