<template>
  <v-app>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.manufacturer }}</td>
        <td>{{ props.item.color }}</td>
      </template>
    </v-data-table>
  </v-app>
</template>

<script>
import Axios from 'axios'
export default {
    data () {
      return {
        headers: [
          {
            text: 'Manufacturer',
            align: 'left',
            sortable: false,
            value: 'manufacturer'
          },
          { text: 'Color', value: 'color' },
        ],
        items: [
        ]
      }
    },
    mounted () {
      Axios.get("http://localhost:8081/paintcans")
      .then(response => {this.items = response.data})
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
</script>

<style lang="scss">
</style>
