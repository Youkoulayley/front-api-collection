<template>
  <v-data-table
    :headers="headers"
    :items="roles"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.description }}</td>
      <td>{{ props.item.created_at }}</td>
      <td>{{ props.item.updated_at }}</td>
      <td>{{ props.item.deleted_at }}</td>
      <v-btn color="red" dark  v-on:click="roleDelete(props.item.id)">
        <v-icon dark left>remove_circle</v-icon>Delete
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data(){
    return{
      roles: [],
      headers: [
        { text: 'id', value: 'id' },
        { text: 'Role Name', value: 'name' },
        { text: 'Description', value: 'description' },
        { text: 'Created At', value: 'created_at' },
        { text: 'Updated At', value: 'updated_at' },
        { text: 'Deleted At', value: 'deleted_at' }
      ],
    }
  },
  mounted: function() {
    this.rolesGetAll();
  },
  methods: {
    rolesGetAll() {
      this.$http.get('roles').then((response) => {
        console.log(response.body);
        this.roles = response.body;
      });
    },
    roleDelete(id) {
      this.$http.delete('roles/' + id).then((response) => {
        // Add notification status
      });
    }
  }
}
</script>
