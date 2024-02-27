<template class="p-0">
  <div
    height="100vh"
    style="
      background-image: url(https://www.hpsmc.org/img/cimage.jpg);
      height: 100vh;
      background-size: cover;
    "
  >
    <v-container>
      <v-layout>
        <v-flex class="d-flex justify-center mt-16">
          <v-card
            width="350px"
            height="300px"
            style="background-color: rgba(0, 0, 0, 0)"
          >
            <h2 class="text-center pt-5 pb-3 primary white--text">Log In</h2>
            <div class="d-flex">
              <v-icon class="pl-13">mdi-account</v-icon>
              <v-text-field
                label="User id"
                outlined
                dense
                class="mr-16 mt-7"
                v-model="name"
              ></v-text-field>
            </div>
            <div class="d-flex">
              <v-icon class="pl-13">mdi-lock-open</v-icon>
              <v-text-field
                label="Password"
                outlined
                dense
                class="mr-16 mt-1"
                v-model="pass"
              ></v-text-field>
            </div>
            <span class="ml-16">
              <v-btn
                color="primary"
                @click="next"
                height="35px"
                width="80px"
                class="ml-16"
                >LOG IN</v-btn
              >
            </span>
          </v-card>
        </v-flex>
      </v-layout>
      <template>
        
        <div class="text-center ma-2">
          <v-snackbar v-model="snackbar" :color="clr">
            {{ text }}

            <template v-slot:action="{ attrs }">
              <v-btn
                color="white"
                text
                v-bind="attrs"
                @click="snackbar = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </div>
      </template>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hulk: false,
      pass: "",
      name: "",
      array: "",
      loginhistory: { userid: "", Type: "", Date: "", Time: "" },
      check: false,
      snackbar: false,
      text: "Invalid UserId or Password",
      clr: "red accent-4",
      condition: 0,
      userdetail: { username: "", userrole: "" },
      interval: {},
      value: 0,
      page:false
    };
  },
 
  methods: {
    next() {
      let arr = this.$store.state.login;
      this.array = arr;
      this.hulk = true;
      // console.log(arr)
      for (let i = 0; i < this.array.length; i++) {
        // console.log(arr);
        if (
          this.name == this.array[i].userid &&
          this.pass == this.array[i].password
        ) {
          this.check = true;
          this.condition = i;
        }
      }
      if (this.check) {
        console.log("con");
        this.$emit("nesting", true);
        
       this.page= this.$router.push("/dashboard");

        if (this.$store.state.login[this.condition].role == "Biller") {
          this.$emit("bill", true);
        } else if (this.$store.state.login[this.condition].role == "Manager") {
          this.$emit("man", true);
        } else if (
          this.$store.state.login[this.condition].role == "System Admin"
        ) {
          this.$emit("sys", true);
        } else if (this.$store.state.login[this.condition].role == "Inventry") {
          //     console.log("Inventry")
          this.$emit("inven", true);
        }

        this.check = false;
      } else {
        this.snackbar = true;
      }
      // for(let i=0;i<this.$store.state.login.length;i++){
      this.userdetail.username = this.name;
      this.userdetail.userrole = this.$store.state.login[this.condition].role;
      this.$store.commit("set_array", this.userdetail);
      this.userdetail = {};

      const dates1 = new Date().getDate();
      const dates2 = new Date().getMonth();
      const dates3 = new Date().getFullYear();
      const dates4 = new Date().getHours();
      const dates5 = new Date().getMinutes();
      const dates6 = new Date().getSeconds();
      const times = dates4 + "." + dates5 + "." + dates6;
      const dates = dates3 + "-" + dates2 + "-" + dates1;
      this.loginhistory.userid = this.name;
      this.loginhistory.Type = "login";
      this.loginhistory.Date = dates;
      this.loginhistory.Time = times;
      this.$store.commit("set_loginhistory", this.loginhistory);
      this.$emit("display", true);
      this.$emit("username", this.name);
      this.name = "";
      this.pass = "";
      this.loginhistory = {};
      // this.emit("username", this.name)
    },
  },
};
</script>

