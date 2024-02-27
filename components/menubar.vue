<template>
  <div>
    <v-app-bar class="primary" height="70px" dense>
      <v-spacer></v-spacer>

      <v-btn class="primary mr-6 elevation-0" v-show="biller" @click="stockv1"
        >Stock View</v-btn
      >
      <v-btn class="primary mr-6 elevation-0" v-show="biller" @click="bill1"
        >Bill entry</v-btn
      >
      <v-btn class="primary mr-6 elevation-0" v-show="biller" @click="dash1"
        >Dashboard</v-btn
      >
      <v-btn class="primary mr-6 elevation-0" v-show="manager" @click="stocke1"
        >Stock Entry</v-btn
      >
      <v-btn class="primary mr-6 elevation-0" v-show="manager" @click="stockv1"
        >Stock View</v-btn
      >
      <v-btn class="primary mr-6 elevation-0" v-show="manager" @click="sales1"
        >Sales Report</v-btn
      >
      <v-btn class="primary mr-6 elevation-0" v-show="manager" @click="dash1"
        >Dashboard</v-btn
      >
      <v-btn class="primary mr-6 elevation-0" v-show="system" @click="add1">
        Add User</v-btn
      >
      <v-btn class="primary mr-6 elevation-0" v-show="system" @click="Login1"
        >Login History</v-btn
      >
      <v-btn class="primary mr-6 elevation-0" v-show="system" @click="dash1"
        >Dashboard</v-btn
      >
      <v-btn class="primary mr-6 elevation-0" v-show="inventry" @click="stocke1"
        >Stock Entry</v-btn
      >
      <v-btn class="primary mr-6 elevation-0" v-show="inventry" @click="stockv1"
        >Stock View</v-btn
      >
      <v-btn class="primary mr-6 elevation-0" v-show="inventry" @click="dash1"
        >Dashboard</v-btn
      >
      <v-btn
        class="primary mr-6 elevation-0"
        color="primary"
        dark
        @click="goout"
        >Log Out</v-btn
      >
    
    
    <!-- <v-flex class="d-flex">
      <v-dialog width="300px" height="150px" class="ma-auto mt-15">
        <v-flex>
          <h3 class="ml-7 pt-5 font-weight-regular">Do you want to LogOut</h3>

          <f-flex class="d-flex mt-7">
            <v-btn class="ml-5 mr-15">cancel</v-btn>

            <v-btn>Yes</v-btn>
          </f-flex>
        </v-flex>
      </v-dialog>
    </v-flex> -->
  
  <!-- <v-app id="inspire"> -->
    <!-- <v-row justify="center"> -->
     
</v-app-bar>
<v-dialog
        v-model=dial
        persistent
        max-width="290"
      >
     
        <v-card width="450px" height="150px">
          <v-card-title class="text-h5">
            <h5 class="font-weight-regular ml-5 mt-3">Do you want to LogOut</h5> 
          </v-card-title>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="white"
              style="background-color: rgb(241, 82, 82);"
              text
              @click="cancel1"
              class="mr-15 mt-3 "
            >
             cancel
            </v-btn>
            <v-btn
              color="white"
              style="background-color: rgb(63, 204, 70);"

              text
              class="mr-4  mt-3"
              @click="homepage"
            >
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
 

  </div>
</template>
<script>
export default {
  data() {
    return {
      // biller: false,
      // manager: false,
      // system: false,
      // inventry: false,
      value: true,
      // loginhistory1:{userid:"",Type:"",Date:"",Time:""},
      dial:false
    };
  },
  methods: {
    goout(){
this.dial=true
    },
    homepage() {
      let loginhist = {};
      // this.loginhistory.userid = this.name;
      // this.loginhistory.Type = "login";
      // this.loginhistory.Date = dates;
      // this.loginhistory.Time = times
      const dates1 = new Date().getDate();
      const dates2 = new Date().getMonth();
      const dates3 = new Date().getFullYear();
      const dates = dates3 + "-" + dates2 + "-" + dates1;
      console.log("this.userid", this.userid);
      const dates4 = new Date().getHours();
      const dates5 = new Date().getMinutes();
      const dates6 = new Date().getSeconds();
      const times = dates4 + "." + dates5 + "." + dates6;
      loginhist = {
        userid: this.userid,
        Type: "logout",
        Date: dates,
        Time: times,
      };

      this.$store.commit("set_loginhistory", loginhist);
      // this.loginhistory1.
      // this.$store.commit("set_loginhistory2",this.loginhistory)
      //   console.log(this.userid);
      // this.loginhistory={}
      // this.$store.commit("set_loginhistory",this.loginhistory1)
      // this.loginhistory={}
      this.$emit("logout", false);

      this.$router.push("/");
      this.dial=false
    },
    cancel1(){
      console.log("hi")
      this.dial=false

    },
    stockv1() {
      this.$router.push("/stockview");
    },
    bill1() {
      this.$router.push("/billentry");
    },
    dash1() {
      this.$router.push("/dashboard");
    },
    stocke1() {
      this.$router.push("/stockentry");
    },
    sales1() {
      this.$router.push("/salesreport");
    },
    add1() {
      this.$router.push("/adduser");
    },
    Login1() {
      this.$router.push("/loginhistory");
    },
  },
  props: {
    biller: Boolean,
    manager: Boolean,
    system: Boolean,
    inventry: Boolean,
    userid: String,
  },
};
</script>
