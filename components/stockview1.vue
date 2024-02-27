<template>
    <v-container>
        <template>
            <v-card>
                <v-card-title>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                        hide-details></v-text-field>
                        <!-- {{ mapping }} -->
                </v-card-title>
                <v-data-table :headers="headers" :items="mapping" :search="search"></v-data-table>
            </v-card>
        </template>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            search: '',
            headers: [
                { text: 'Medicine Name', value: 'MedicineName' },
                { text: 'Brand', value: 'Brand' },
                { text: 'Quantity', value: 'quantity' },
                { text: 'Unit price', value: 'unitprice' },

            ],
            mapping:[],
            
        }
    },
beforeMount(){
       
        
        this.mapping=this.$store.state.Stock;
        
        for(let i=0;i<this.$store.state.Stock.length;i++){
            for(let j=0;j<this.$store.state.MedicineMaster.length;j++){
                // console.log("hi")
              if(this.$store.state.Stock[i].MedicineName==this.$store.state.MedicineMaster[j].MedicineName){
                // console.log("hi")
               this.mapping[i]. Brand=this.$store.state.MedicineMaster[j].Brand;
                
              }
            }
        }

    }
}
</script>