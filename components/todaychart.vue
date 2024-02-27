<template>
  <v-container>
    <div id="chart">
      <apexchart
        type="donut"
        width="380"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </v-container>
</template>
<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [],
      value: 0,
      chartOptions: {
        labels: [],
        chart: {
          width: 380,
          type: "donut",
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        dataLabels: {
          enabled: true,
        },
        fill: {
          type: "gradient",
        },
        legend: {
          formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex];
          },
        },
        title: {
          text: "Today sales performance",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
  beforeMount() {
    // let dummyarray=[];
    for (let i = 0; i < this.$store.state.login.length; i++) {
      let ammount =0;
      if (this.$store.state.login[i].role == "Biller") {
        this.chartOptions.labels.push(this.$store.state.login[i].userid)
        for (let j = 0; j < this.$store.state.BillMaster.length; j++) {
          if (
            this.$store.state.BillMaster[j].BillDate ==
            new Date().toJSON().slice(0, 10)
          ) {
            if (
              this.$store.state.login[i].userid ==
              this.$store.state.BillMaster[j].UserId
            ) {
              ammount=ammount+this.$store.state.BillMaster[j].NetPrice;
            
            }
          }
        }
        this.series.push(ammount)
      }
    }
    // this.series=dummyarray
    // console.log(dummyarray)
  },
};
</script>
