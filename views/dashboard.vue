<template>
    <v-container>
        <v-layout>
            <v-flex>
                <dashboard1></dashboard1>
                <managervalue v-show="manager"></managervalue>
                <manager v-show="manager"></manager>
                <monthlydata v-show="manager"></monthlydata>
                <todaychart v-show="manager"></todaychart>

              
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import dashboard1 from "../components/dashboard1.vue"
import manager from "../components/manager.vue"
import managervalue from "../components/managervalue.vue"
import monthlydata from "../components/monthlydata.vue"
import todaychart from "../components/todaychart.vue"
export default{
    components:{
        dashboard1,
        manager,
        managervalue,
        monthlydata,
        todaychart,
    },
    data(){
        return{
            manager:false,
          
        }
    },

   beforeMount(){
    if(this.$store.state.Myarray.userrole=="Manager"){
        this.manager=true;


    }
   }
}
</script>