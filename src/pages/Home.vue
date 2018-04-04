<template>
  <v-container grid-list-md>
    <h1 class="black--text">Last tutorials</h1>
    <v-layout row wrap>
      <v-flex lg2 md4 sm6 xs12 v-for="tuto in tutos" :key="tuto.id">
          <v-card flat hover tile>
            <router-link :to="{ name: 'tutorial', params: {id: tuto.id}}">
              <v-card-media :src="tuto.img" height="200px"></v-card-media>
            </router-link>
            <v-card-title primary-title>
                <span class="primary--text">{{ tuto.title }}</span>
            </v-card-title>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        tutos: [
          {id: 1, title: 'Stormtroopers', img: './src/assets/legion_4_stormtroopers.jpg'},
          {id: 2, title: 'Probe Droids', img: './src/assets/legion_4_stormtroopers.jpg'}
        ]
      }
    }
  }
</script>
