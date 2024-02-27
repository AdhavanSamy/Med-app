<template>
    <v-container>
        <div id="chart">
            <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>
        <!-- {{ month }} -->
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
            month: "",
            series: [{
                name: "Desktops",
                data: [434,343,453,455,343,323,122,554,656,786,454,332]
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
                    text: 'Monthly sales trend',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                }
            },
            price1: 0,
            date3: 0,
            dummyarray:[],
        }
    },
    beforeMount() {
        let date = new Date().getMonth() + 1
        let count = date
        this.month = "0" + date
        // let count=this.month
        // console.log();
        let myarray = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let emptyarray = []
        for (let i = 0; i < 12; i++) {
            if (count < 12) {
                emptyarray[i] = myarray[count]
                count++

            } else {
                emptyarray[i] = myarray[count - 12]
                count++
            }

        }
        // console.log(emptyarray);
        // console.log(new Date().getMonth() + 1)

        // this.chartOptions.xaxis.categories = emptyarray
        // console.log(this.$store.state.BillMaster[0].BillDate.slice(5,7));
        // for (let j = 0; j < this.$store.state.BillMaster.length; j++) {
        //     let date2 = '' + new Date().getMonth() + 1 - j
        //     if (date2.length < 2) {
        //         date2 = "0" + date2
        //     }
        //     // this.date3="0"+date2  

        //     console.log(this.date2)

        //     if (this.date2 <= 0) {
        //         this.date2 = this.date2 + 12
        //         // console.log(this.date2);

        //     }

        //     // console.log(date2)
        //     if (this.date2 == this.$store.state.BillMaster[j].BillDate.slice(5, 7)) {
        //         this.price1 += this.$store.state.BillMaster[j].NetPrice


        //     }
            
        //     this.dummyarray[j] = this.price1
        //     console.log(this.price1)
            
        //     // console.log(date2)
            

        //     // console.log(dummyarray);
        // }
        // this.series[0].data=this.dummyarray
    



    }
}
</script>