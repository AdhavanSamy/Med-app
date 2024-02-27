<template>
  <v-container>
    <template>
      <v-card>
        <v-flex class="d-flex">
          <h5></h5>
          <v-spacer></v-spacer>
          <v-btn class="mr-5 success">DOWNLOAD <v-icon>mdi-download</v-icon></v-btn>
        </v-flex>

        <v-card-title>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="sales" :search="search"></v-data-table>
      </v-card>
      <!-- {{ sales }} -->
    </template>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        //   {
        //     text: 'Dessert (100g serving)',
        //     align: 'start',
        //     filterable: false,
        //     value: 'name',
        //   },
        { text: 'Bill NO', value: 'BillNo' },
        { text: 'Bill Date', value: 'BillDate' },
        { text: 'Medicine Name', value: 'MedicineName' },
        { text: 'Qty', value: 'Qty' },
        { text: 'Amount', value: 'Amount' },
      ],


    }
  },
  methods: {

  },
  props: {
    sales: Array,
  }
}
</script>