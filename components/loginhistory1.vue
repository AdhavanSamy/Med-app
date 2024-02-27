<template>
  <v-container>

    <template>
      <v-card>
        <v-card-title>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="$store.state.loginHistory" :search="search"></v-data-table>
      </v-card>
    </template>
    <!-- {{$store.state.loginHistory}} -->
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        { text: "User", value: 'userid' },
        { text: 'Type', value: 'Type' },
        { text: 'Date', value: 'Date' },
        { text:"Time" , value:"Time"}

      ],
      // desserts:[{User:this.$store.state.loginHistory.UserId,Type:this.$store.state.loginHistory.Type,Date:this.$store.state.loginHistory.Date }]
    }
  }
}
</script>