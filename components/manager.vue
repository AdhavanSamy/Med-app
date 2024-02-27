<template>
    <v-container>
        <div id="chart">
            <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>
        <!-- {{ date1 }} -->
    </v-container>
</template>
<script>
import VueApexCharts from "vue-apexcharts"
export default {


    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            day: "",
            series: [{
                name: "Desktops",
                data: []
            }],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: true
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Daily sales trend',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                }
            },
            num: 0,
            date1:"",
            price1:0,
            ydate1:"",
            price2:0,
            ydate2:"",
            price3:0,
            ydate3:"",
            price4:0,
            ydate4:"",
            price5:0,
            ydate5:"",
            price6:0,
            ydate6:"",
            price7:0,

        }
    },
    beforeMount() {

        this.day = new Date().getDay()
        let count = this.day
        // console.log(count);
        // let sum = 0;
        let emptyarray = []
        let horiaxis = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        for (let i = 0; i < horiaxis.length; i++) {

            if (count < horiaxis.length) {
                emptyarray[i] = horiaxis[count];
                count++
                // console.log("count"+count);
            }
            else {
                emptyarray[i] = horiaxis[count-7]
                count++
            }
        }
        // console.log(emptyarray);
        this.chartOptions.xaxis.categories = emptyarray
        this.date1=new Date().toJSON().slice(0,10)
        let date2 = new Date()
            date2.setDate(date2.getDate() - 1)
            this.ydate1 = date2.toJSON().slice(0, 10)
            let date3 = new Date()
            date3.setDate(date3.getDate() - 2)
            this.ydate2 = date3.toJSON().slice(0, 10)
            let date4 = new Date()
            date4.setDate(date4.getDate() - 3)
            this.ydate3 = date4.toJSON().slice(0, 10)
            let date5 = new Date()
            date5.setDate(date5.getDate() - 4)
            this.ydate4 = date5.toJSON().slice(0, 10)
            let date6 = new Date()
            date6.setDate(date6.getDate() - 5)
            this.ydate5 = date6.toJSON().slice(0, 10)
            let date7 = new Date()
            date7.setDate(date7.getDate() - 6)
            this.ydate6 = date7.toJSON().slice(0, 10)
        console.log("yesterday sdf"+this.ydate2);
        for(let j=0;j<this.$store.state.BillMaster.length;j++){
          if(this.date1==this.$store.state.BillMaster[j].BillDate){

            this.price1+=this.$store.state.BillMaster[j].NetPrice

          }else if(this.ydate1==this.$store.state.BillMaster[j].BillDate){

            this.price2+=this.$store.state.BillMaster[j].NetPrice
 
          }else if(this.ydate2==this.$store.state.BillMaster[j].BillDate){
            this.price3+=this.$store.state.BillMaster[j].NetPrice

          }else if(this.ydate3==this.$store.state.BillMaster[j].BillDate){
            this.price4+=this.$store.state.BillMaster[j].NetPrice

          }else if(this.ydate4==this.$store.state.BillMaster[j].BillDate){
            this.price5+=this.$store.state.BillMaster[j].NetPrice

          }else if(this.ydate5==this.$store.state.BillMaster[j].BillDate){
            this.price6+=this.$store.state.BillMaster[j].NetPrice

          }else if(this.ydate6==this.$store.state.BillMaster[j].BillDate){
            this.price7+=this.$store.state.BillMaster[j].NetPrice

          }
        }
        let dummyarray=[this.price1,this.price2,this.price3,this.price4,this.price5,this.price6,this.price7]
        this.series[0].data=dummyarray
        console.log(dummyarray)
        console.log(this.series.data);




    }



}




</script>