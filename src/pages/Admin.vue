<template>
  <div>
    <router-link :to="{ name: 'admin.roles'}">
      <v-btn outline color="indigo">Roles</v-btn>
    </router-link>
  </div>
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
