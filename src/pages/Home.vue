<template>
  <v-layout>
    <v-flex v-for="tuto in tutos">
      <v-card>
        <v-card-media :src="tuto.img" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ tuto.title }}</h3>
            <div>{{ tuto.description }}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn color="scolor1">Share</v-btn>
          <v-btn color="scolor2">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        tutos: [
          {title: 'Test', description: 'Lorem ipsum dolor sit amet', img: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cloudsigma.com%2Fwp-content%2Fuploads%2Fgolang-cloud-driver.png&f=1'},
          {title: 'Test', description: 'Lorem ipsum dolor sit amet', img: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cloudsigma.com%2Fwp-content%2Fuploads%2Fgolang-cloud-driver.png&f=1'},
          {title: 'Test', description: 'Lorem ipsum dolor sit amet', img: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cloudsigma.com%2Fwp-content%2Fuploads%2Fgolang-cloud-driver.png&f=1'},
          {title: 'Test', description: 'Lorem ipsum dolor sit amet', img: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cloudsigma.com%2Fwp-content%2Fuploads%2Fgolang-cloud-driver.png&f=1'},
          {title: 'Test', description: 'Lorem ipsum dolor sit amet', img: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cloudsigma.com%2Fwp-content%2Fuploads%2Fgolang-cloud-driver.png&f=1'},
          {title: 'Test', description: 'Lorem ipsum dolor sit amet', img: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cloudsigma.com%2Fwp-content%2Fuploads%2Fgolang-cloud-driver.png&f=1'}
        ]
      }
    }
  }
</script>
