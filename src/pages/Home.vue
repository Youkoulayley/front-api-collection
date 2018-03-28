<template>
  <v-content class="ma-3" >
    <v-container grid-list-md>
      <h1 class="black--text">Last tutorials</h1>
      <v-layout row wrap>
        <v-flex md2 xs12 v-for="tuto in tutos" :key="tuto.id">
          <v-card flat hover tile>
            <v-card-media :src="tuto.img" height="200px">
            </v-card-media>
            <v-card-title>{{ tuto.title }}</v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
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
