<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card height="350px" width="750px" class="ma-auto mt-16">
                    <v-flex class="d-flex primary pt-5">
                        <h5 class="font-weight-regular ml-6 pb-5 pt-1 white--text">Refill Stock</h5>
                        <v-spacer></v-spacer>
                        <v-btn class="red white--text mt-1 mr-2 mb-4" width="25px" height="30px" @click="open" > +ADD</v-btn>
                    </v-flex>
                    <v-divider></v-divider>
                    <v-flex class="d-flex mt-5">
                        <v-select :items="items" label="Medicine Name" filled solo dense class="px-5 mt-10"></v-select>
                        <v-text-field label="Brand" disabled class="px-3 mt-10" solo dense></v-text-field>
                        <v-text-field label="Qty" solo dense class="px-3 mt-10"></v-text-field>
                        <v-text-field label="Unit Price" solo dense class="px-5 mt-10"></v-text-field>
                    </v-flex>
                    <v-btn class="primary mt-16 ml-5 " width="710px">UPDATE</v-btn>
                    {{ value }}
                    {{ sending }}


                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
 export default{
    data(){
        return{
            items:["dolo","parashudine"],
            value:false,
        }
    },
    methods:{
        open(){
            this.value=true;
            this.$emit("display",this.value)
        }
    },
    props:{
        // sending:Boolean,
        closeDialog:Boolean
    },

 }
</script>