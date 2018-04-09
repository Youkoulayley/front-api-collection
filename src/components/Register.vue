<template>
  <v-dialog :value="dialog" max-width="500px">
    <v-card>
      <v-card-title>
        Register
      </v-card-title>
      <v-card-actions>
        <v-btn color="primary" flat @click.stop="toggleRegisterDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import store from '../stores/RegisterDialogStore.js'

  export default {
    store: store,
    computed: {
      dialog() {
        return store.state.dialog
      }
    },
    methods: {
      toggleRegisterDialog () {
        store.commit('toggle')
      }
    }
  }
</script>
