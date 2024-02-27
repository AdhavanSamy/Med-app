<template>
    <v-container>
        <!-- <stockentry1 @display="displaying" :closeDialog="guess"></stockentry1> -->
        <v-layout>
            <v-flex>
                <v-snackbar v-model="snackbar" :color="clr" class="mb-10">
                    {{ text }}

                    <template v-slot:action="{ attrs }">
                        <v-btn color="black" text v-bind="attrs" @click="snackbar = false">
                            Close
                        </v-btn>
                    </template>
                </v-snackbar>
                <v-card height="350px" width="750px" class="ma-auto mt-16">
                    <v-flex class="d-flex primary pt-5">
                        <h5 class="font-weight-regular ml-6 pb-5 pt-1 white--text">Refill Stock</h5>
                        <v-spacer></v-spacer>
                        <v-btn class="red white--text mt-1 mr-2 mb-4" width="25px" height="30px" @click="open"> +ADD</v-btn>
                    </v-flex>
                    <v-divider></v-divider>
                    <v-flex class="d-flex mt-5">
                        <v-select :items="items" label="Medicine Name" v-model="m_name" @change="check" filled solo dense
                            class="px-5 mt-10"></v-select>
                        <v-text-field label="Brand" disabled class="px-3 mt-10" v-model="m_brand" solo dense></v-text-field>
                        <v-text-field label="Qty" solo dense class="px-3 mt-10" v-model.number="m_qty"></v-text-field>
                        <v-text-field label="Unit Price" solo dense class="px-5 mt-10"
                            v-model.number="m_unitprice"></v-text-field>
                    </v-flex>
                    <v-btn class="primary mt-16 ml-5 " width="710px" @click="upgrade">UPDATE</v-btn>




                </v-card>
                <!-- {{ $store.state.Stock }}     -->
                <!-- {{ store_stock }} -->
                <!-- {{ flag }} -->
            </v-flex>
        </v-layout>
        <stockentry2 :find="values" @send="sending" @inserting="storing"></stockentry2>

    </v-container>
</template>
<script>
// import stockentry1 from "../components/stockentry1.vue"
import stockentry2 from "../components/stockentry2.vue"
export default {
    data() {
        return {
            items: [],
            values: false,
            m_name: "",
            m_brand: "",
            m_qty: 0,
            m_unitprice: "",
            store_stock: { MedicineName: "", quantity:0, unitprice: "" },
            snackbar: false,
            text:"",
            clr:"",
            flag:false,
            condition:0,
            


        }
    },
    components: {
        // stockentry1,
        stockentry2,
    },
    methods: {


        sending() {
            this.values = false;
        },
        open() {
            this.values = true;

        },
        storing(val) {
            this.items.push(val.MedicineName);
        },
        check() {
            // let array=this.$store.state.MedicineMaster;
            // this.arr=array;
            for (let i = 0; i < this.$store.state.MedicineMaster.length; i++) {
                if (this.m_name == this.$store.state.MedicineMaster[i].MedicineName) {
                    this.m_brand = this.$store.state.MedicineMaster[i].Brand;
                }
            }
        },
        upgrade() {

            // this.$store.commit("set_stock", this.store_stock);
            if(this.m_name==""||this.m_brand==""||this.m_qty==""||this.m_unitprice==""){
                this.text="fill all the fields"
                this.clr="#D50000"
                this.snackbar=true;
            }else{

            for (let i = 0; i < this.$store.state.Stock.length; i++) {
                if (this.$store.state.Stock[i].MedicineName == this.m_name) {
                    // this.$store.state.Stock[i].quantity = this.$store.state.Stock[i].quantity + this.m_qty
                    // this.$store.state.Stock[i].unitprice = this.m_unitprice
                    // this.text="updated Successfuly!"
                    // this.clr="#4CAF50"
                    // this.snackbar = true;
                    // this.store_stock = {}
                    this.flag=true;
                    this.condition=i;
                    console.log(this.contion)


                    break;


                // } else {
                //     this.store_stock.MedicineName = this.m_name;
                //     this.store_stock.quantity = this.m_qty;
                //     this.store_stock.unitprice = this.m_unitprice;
                //     this.$store.commit("set_stock", this.store_stock);
                //     this.store_stock = {}
                    
                //     break;

                // }
            }
        }
    }
   
            if(this.flag){
                this.$store.state.Stock[this.condition].quantity = this.$store.state.Stock[this.condition].quantity + this.m_qty
                    this.$store.state.Stock[this.condition].unitprice = this.m_unitprice
                    this.text="updated Successfuly!"
                    this.clr="#4CAF50"
                    this.snackbar = true;
                    this.store_stock = {}

            }else{
                this.store_stock.MedicineName = this.m_name;
                    this.store_stock.quantity = this.m_qty;
                    this.store_stock.unitprice = this.m_unitprice;
                    this.$store.commit("set_stock", this.store_stock);
                    this.store_stock = {}
                    
                  

            }
            this.flag=false;
        
    }


        
    },



    beforeMount() {
        for (let i = 0; i < this.$store.state.MedicineMaster.length; i++) {
            this.items[i] = this.$store.state.MedicineMaster[i].MedicineName;

        }

    }

    }

</script>