<template>
    <v-container>
        <template>
            <div class="text-center ma-2">
                <v-snackbar v-model="snackbar" :color="clr">
                    {{ text }}
                </v-snackbar>
            </div>
        </template>
        <template>
            <h5>BILL ENTRY</h5>
            <v-expansion-panels class="mt-4">
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header class="primary white--text">
                        Item
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-flex class="d-flex px-5">
                            <v-select :items="items" label="Medicine Name" filled solo dense class="px-5 mt-10 mr-10"
                                v-model="Bname"></v-select>
                            <v-text-field label="Quantity" solo dense class="px-3 mt-10 mr-10"
                                v-model.number="Bqty"></v-text-field>
                            <v-btn class="mt-10 primary mr-12" width="100px" @click="add">ADD</v-btn>
                        </v-flex>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </template>
        <v-card height="150px" width="1197px">
            <v-flex class="d-flex">
                <v-btn class="primary mx-5 mt-5 ml-10" @click="preview">PREVIEW</v-btn>
                <v-btn class="primary mx-5 mt-5" width="100px" @click="save">SAVE</v-btn>
                <v-spacer></v-spacer>
                <h5 class="px-5 mt-9 font-weight-regular">BILL NO: {{ bill }}</h5>
                <h5 class="px-5 mt-9 font-weight-regular">DATE: {{ date }}</h5>
                <h5 class="px-5 mt-9 font-weight-regular">TOTAL: {{ total }}</h5>
                <h5 class="px-5 mt-9 font-weight-regular">GST: {{ gst }}</h5>
                <h5 class="px-5 mt-9 font-weight-regular mr-16">Net Payable: {{ net }}</h5>
            </v-flex>
            <!-- {{ $store.state.BillMaster }} -->
            <!-- {{ $store.state.BillDetails }} -->
            <v-flex class="d-flex">
                <v-spacer></v-spacer>
                <v-btn class="mt-10 mr-16 white font-weight-regular success">DOWNLOAD <v-icon>mdi-download</v-icon></v-btn>
            </v-flex>
<!-- {{empty }} -->
<!-- {{folder}} -->


        </v-card>
        <template>
            <v-card>
                <v-card-title>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                        hide-details></v-text-field>
                </v-card-title>
                <v-data-table :headers="headers" :items="folder" :search="search"></v-data-table>
            </v-card>
        </template>
        <!-- {{ $store.state.BillMaster }} -->
    
        <billentry1 :pass="value" @closing="close" :Arrays="array" :totals="total" :gsts="gst" :nets="net"></billentry1>
    </v-container>

</template>
<script>
import billentry1 from "../components/billentry1.vue"

export default {
    data() {
        return {
            items: [],
            array: [],
            e:["dfs","dfds","dfds","ddsff"],
            empty: { MedicineName: "", Qty: 0, unitprice: 0 },
            text: "",
            clr: "",
            snackbar: false,
            Bname: "",
            Bqty: 0,
            search: '',
            headers: [
                { text: 'Medicine Name', value:"MedicineName" },
                { text: 'Brand', value: "Brand" },
                { text: 'Quantity', value: "Qty" },
                { text: 'Amount', value: "unitprice" },
            ],
            folder:[],
            value: false,
            details: [],
            total: 0,
            gst: 0,
            net: 0,
            date:"",
            bill:0,
            saves:{BillNO:"",BillDate:"",BillAmount:"",BillGst:"",NetPrice:"",UserId:""},
            billadd:{BillNo:0,MedicineName:"",quantity:0,UnitPrice:0,Amount:0},

        }
    },
    methods: {
        preview() {
            this.value = true;

        },
        close(val) {
            this.value = val;
        },
        add() {
            // console.log("j")
            if(this.Bname=="" || this.Bqty==0){
                this.snackbar=true;
                this.clr="red accent-4"
                this.text="field should not be mandatory"
            }else{
            for (let i = 0; i < this.$store.state.Stock.length; i++) {
                if (this.Bname == this.$store.state.Stock[i].MedicineName) {

                    if (this.Bqty <= this.$store.state.Stock[i].quantity) {
                        this.$store.state.Stock[i].quantity -= this.Bqty
                        let price = this.Bqty * this.$store.state.Stock[i].unitprice
                        this.empty.unitprice = price;
                        this.total += price
                        this.gst = Math.round(this.total * 0.18);
                        this.net = this.total + this.gst;
                        this.details.push(this.detail)
                        this.text = "billing successfully"
                        this.snackbar = true;
                        this.clr = "#43A047";
                        this.empty.MedicineName = this.Bname;
                        this.empty.Qty = this.Bqty;
                        this.array.push(this.empty);
                        
                        let dat1=new Date().getDate()
                        let dat2=new Date().getMonth()+1
                        let dat3=new Date().getFullYear()
                        let dat=dat3+"-0"+dat2+"-0"+dat1
                        this.date=dat;
                        this.bill=(Math.floor(Math.random()*100));
                        this.billadd.BillNo=this.bill;
                        this.billadd.MedicineName=this.Bname
                        this.billadd.quantity=this.Bqty
                        this.billadd.UnitPrice=price
                        this.billadd.Amount=this.total
                        this.$store.commit("set_billdetails",this.billadd)
                        this.billadd={};
                        let stock=this.$store.state.MedicineMaster;
                        // console.log("j")
                        for(let i=0;i<stock.length;i++){
                            // console.log("j loop")
                            if(stock[i].MedicineName==this.Bname){
                                // console.log(stock[i].Brand )
                                this.empty.Brand=stock[i].Brand;        
                            }
                        }
                        // console.log(this.empty.MedicineName)
                        // console.log("jouts")
                        this.folder.push(this.empty)
                        this.empty = {};
                        this.Bname="",
                        this.Bqty=0

                    }
                    else {
                        this.text = "Invalid Quantity"
                        this.clr = "#E65100"
                        this.snackbar = true
                    }
                    

                    }
                }
            }
            },
            save(){
                this.saves.BillNO=this.bill;
                this.saves.BillDate=this.date;
                this.saves.BillAmount=this.total;
                this.saves.BillGst=this.gst;
                this.saves.NetPrice=this.net;
                this.saves.UserId=this.$store.state.loginHistory[this.$store.state.loginHistory.length-1].userid
                // console.log(this.$store.state.loginHistory[this.$store.state.loginHistory.length-1].userid)
                this.$store.commit("set_billmaster",this.saves)
                this.saves={};
                this.folder=[];
                this.array=[];
                this.Bname=""
                this.Bqty=0
                this.total=0;
                this.gst=0;
                this.net=0;
                this.bill=0;
                this.date=""
               





        }
    },
    components: {
        billentry1,
        
    },

    beforeMount() {
        for (let i = 0; i < this.$store.state.Stock.length; i++)
            this.items[i] = this.$store.state.Stock[i].MedicineName;
    }
}

</script>