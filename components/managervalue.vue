<template>
    <v-container>
        <v-flex class="d-flex">
            <v-card width="250px" height="100px">
            <h4 class="ml-16 pt-5 font-weight-regular">Today sales</h4>
           <h1 class="ml-16 pt-0">{{ billamount }}</h1> 
        </v-card>
        <v-spacer></v-spacer>
        <v-card width="250px" height="100px">
            <h4 class="ml-11 pt-5 font-weight-regular">Current Inventry Value</h4>
           <h1 class="ml-11 pt-0">{{ remainingvalue }}</h1> 

        </v-card>
        </v-flex>
       
        
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            date: "",
            billamount: 0,
            remainingvalue:0,
        }

    },
    beforeMount() {
        this.date = new Date().toJSON().slice(0, 10)

        for (let i = 0; i < this.$store.state.BillMaster.length; i++) {

            if (this.$store.state.BillMaster[i].BillDate == this.date) {
                this.billamount+=this.$store.state.BillMaster[i].NetPrice
            }
        }
        for(let j=0;j<this.$store.state.Stock.length;j++){
            let stocks=this.$store.state.Stock[j].quantity*this.$store.state.Stock[j].unitprice
            this.remainingvalue+=stocks

        }
    }
}
</script>