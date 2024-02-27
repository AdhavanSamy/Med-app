<template>
    <v-container>
        <template>
            <div class="text-center">
                <v-dialog v-model="pass" persistent width="500">
                    <v-card>
                        <v-card-title class="white--text primary ">
                            <v-icon>mdi-close</v-icon>
                            <h5 class="ml-5">PREVIEW</h5>
                        </v-card-title>

                        <v-card-text>
                            <h2 class="black--text font-weight-regular text-center mt-5 mb-5">Omnicare</h2>
                            <table class="pl-5">
                                <tr class=" grey lighten-3 pl-16" height="40px">
                                    <th class="pl-9 pr-7 ">Medicine name</th>
                                    <th class="pl-11 pr-11">Qty</th>
                                    <th class="pl-11 pr-11">Amount</th>

                                </tr>
                                <tr v-for="value,ind in Arrays" :key="ind">
                                    <td class="pl-16 pt-3">{{Arrays[ind].MedicineName}}</td> <td class="pl-13 pt-5">{{Arrays[ind].Qty}}</td><td class="pl-15 pt-5">{{ Arrays[ind].unitprice }}</td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td></td>   
                                    <!-- <td></td> -->
                                    <h4 class="black--text font-weight-regular mt-15">Total : {{ totals}}</h4>
                                    <h4 class="black--text font-weight-regular mt-1">GST : {{ gsts }}</h4>
                                    <h4 class="black--text font-weight-regular mt-1 mb-n3">Net Price : {{ nets }}</h4>

                                </tr>




                            </table>
                            
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" text @click="dialog = false">
                                <v-btn class="primary" height="30px" @click="close">Print</v-btn>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </template>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            dialog: false,
            array:[],
            
        }
    },
    methods: {
        close() { 
            this.$emit("closing",this.dialog)
        }
    },
    props: {
        pass: Boolean,
        Arrays:Array,
        totals:Number,
        gsts:Number,
        nets:Number,

    }
}
</script>