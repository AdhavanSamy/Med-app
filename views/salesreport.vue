<template>
    <v-container>
       
        <div>
            
            <v-card height="250px" class="primary ml-3 mr-3"  style="position:relative"> <h5 class="white--text ml-16 pt-4">SALES REPORT</h5></v-card>
            <v-card height="150px" width="1037px" class="ma-auto ml-16  mt-16 d-flex " style="position:absolute;top: 0;">
                <v-col cols="12" sm="6" md="4">
                    <v-menu v-model="menu1" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                        offset-y min-width="auto" >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="date1" outlined label="From" prepend-icon="mdi-calendar" v-bind="attrs"
                                v-on="on" class="mt-7 ml-10 mr-10"></v-text-field>
                        </template>
                        <v-date-picker v-model="date1" @input="menu1 = false"></v-date-picker>
                    </v-menu>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                        offset-y min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="date2" outlined label="To" prepend-icon="mdi-calendar" readonly
                                v-bind="attrs" v-on="on" class="mt-7 ml-10 mr-10">
                            </v-text-field>
                        </template>
                        <v-date-picker v-model="date2" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                </v-col>
                <!-- {{ date1 }} -->
                <!-- {{ date2 }} -->
                <!-- {{ salestable }} -->
                <v-btn class="primary mt-11 ml-10 mr-5" width="90px" @click="search">SEARCH</v-btn>
                <!-- {{ $store.state.BillMaster }} -->


            </v-card>
        </div>

        <salesreport1 :sales="salesarrays"></salesreport1>
    </v-container>
</template>
<script>
import salesreport1 from "../components/salesreport1.vue"
export default {
    components: {
        salesreport1,
    },
    data() {
        return {
            date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

            menu1: false,
            menu2: false,
            salesarrays: [],
            salestable: { BillNo: 0, BillDate: 0, MedicineName: "", Qty: 0, Amount: 0 },
        }
    },
    methods: {
        search() {
            this.salesarrays = [];
            // console.log("going")
            for (let i = 0; i < this.$store.state.BillMaster.length; i++) {
                // console.log("loop")

                if (this.date1 <= this.$store.state.BillMaster[i].BillDate && this.date2 >= this.$store.state.BillMaster[i].BillDate) {
                    // console.log("if")

                    this.salestable.BillDate = this.$store.state.BillMaster[i].BillDate
                    this.salestable.BillNo = this.$store.state.BillDetails[i].BillNo
                    //   console.log("con");
                    this.salestable.MedicineName = this.$store.state.BillDetails[i].MedicineName
                    this.salestable.Qty = this.$store.state.BillDetails[i].quantity
                    this.salestable.Amount = this.$store.state.BillDetails[i].Amount
                    this.salesarrays.push(this.salestable);
                    this.salestable = {}

                }
                // console.log("out");
            }
        }

    }

}
</script>