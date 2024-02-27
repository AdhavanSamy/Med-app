<template>
    <v-container>
        <v-layout>
            <v-flex>
               
                <h1 v-show="text" class="text-center"> Welcome! </h1>
                <v-card class="flat elevation-0 mt-13 ml-16" v-show="bill">
                    <h5 class="pt-8 pl-16">Your Today Sales</h5>
                    <v-flex class="d-flex">
                        <h1 class="ml-16"> {{ price }} </h1>
                        <h5 class="ml-3 mt-5">{{ $store.state.Myarray.username }}</h5>
                    </v-flex>
                    {{ "percentage" }}
                <!-- {{ ydate }} -->
                {{ percent }}
                <v-icon v-show="down" :color="clr">{{arrow}}</v-icon>
                <!-- <v-icon v-show="up">mdi-arrow-up</v-icon> -->
                </v-card>

                
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            length: 0,
            text: false,
            bill: false,
            detail: this.$store.state.BillMaster,
            price: 0,
            date: "",
            ydate: "",
            yprice: 0,
            percent:0,
            up:false,
            down:false,
            arrow:"",
            clr:"",

        }
    },
    beforeMount() {
        // this.length = this.$store.state.Myarray.length
        if (this.$store.state.Myarray.userrole == "System Admin" || this.$store.state.Myarray.userrole == "Inventry") {

            this.text = true
        } else if (this.$store.state.Myarray.userrole == "Biller") {
            this.date = new Date().toJSON().slice(0, 10)
            this.bill = true
            console.log(this.date);
            // let date4 = new Date().getFullYear();
            // let date5 = new Date().getMonth() + 1;
            // let date6 = new Date().getDate() - 1
            // this.ydate = date4 + "-0" + date5 + "-0" + date6
            // console.log(this.ydate)
            let date1 = new Date()
            date1.setDate(date1.getDate() - 1)
            this.ydate = date1.toJSON().slice(0, 10)
            for (let i = 0; i < this.$store.state.BillMaster.length; i++) {
                console.log("loop");

                if (this.$store.state.Myarray.username == this.$store.state.BillMaster[i].UserId) {
                    console.log("if");

                    if (this.$store.state.BillMaster[i].BillDate == this.date) {
                        console.log("today");

                        this.price = this.price + this.$store.state.BillMaster[i].NetPrice;
                    }

                    if (this.$store.state.BillMaster[i].BillDate == this.ydate) {
                        console.log("ydate");

                        console.log(this.ydate)
                        this.yprice = this.yprice + this.$store.state.BillMaster[i].NetPrice
                    }
                    this.percent=(-(this.yprice-this.price)/this.yprice)*100
                    if(this.price>this.yprice){
                        this.arrow="mdi-arrow-up"
                        this.clr="green"
                        this.up=true
                    }
                    if(this.price<this.yprice){
                        this.arrow="mdi-arrow-down"
                        this.clr="red"

                        this.down=true
                    }
                    console.log(this.price)
                    console.log(this.yprice)

                    console.log(this.yprice-this.price)

                    // console.log(this.price)


                }



            }





        }
    }
}
</script>
