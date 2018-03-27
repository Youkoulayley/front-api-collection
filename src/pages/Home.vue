<template>
  <v-content class="ma-3" >
    <v-container grid-list-md>
      <h1 class="black--text">Last tutorials</h1>
      <v-layout row wrap>
        <v-flex md2 xs12 v-for="tuto in tutos">
          <v-card flat hover tile>
            <v-card-media :src="tuto.img" height="200px">
            </v-card-media>
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
          {title: 'Test', description: 'Lorem ipsum dolor sit amet', img: './src/assets/legion_4_stormtroopers.jpg'},
          {title: 'Test', description: 'Lorem ipsum dolor sit amet', img: './src/assets/legion_4_stormtroopers.jpg'},
          {title: 'Test', description: 'Lorem ipsum dolor sit amet', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/La_Licorne_et_le_Loup.JPG/220px-La_Licorne_et_le_Loup.JPG'},
          {title: 'Test', description: 'Lorem ipsum dolor sit amet', img: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cloudsigma.com%2Fwp-content%2Fuploads%2Fgolang-cloud-driver.png&f=1'},
          {title: 'Test', description: 'Lorem ipsum dolor sit amet', img: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cloudsigma.com%2Fwp-content%2Fuploads%2Fgolang-cloud-driver.png&f=1'},
          {title: 'Test', description: 'Lorem ipsum dolor sit amet', img: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cloudsigma.com%2Fwp-content%2Fuploads%2Fgolang-cloud-driver.png&f=1'}
        ]
      }
    }
  }
</script>
