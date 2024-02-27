<template>
  <v-app>
    <menubar v-show="appbar" :biller="Bills" :manager="Mans" :system="Syss" :inventry="Invens" @logout="goosout" :userid="name">
    </menubar>
    <login @nesting="Nesting" @bill="Bill" @man="Man" @sys="Sys" @inven="Inven" v-show="!appbar" @username="Username">
    </login>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import menubar from "./components/menubar.vue"
import login from "./components/login.vue"
export default {
  name: "App",
  data() {
    return {
      appbar: false,
      Bills: false,
      Mans: false,
      Syss: false,
      Invens: false,
      name: ""
    }
  },

  components: {
    menubar,
    login
  },
  methods: {
    Nesting(val) {
      this.appbar = val


    },
    Bill(val) {
      this.Bills = val
    },
    Man(val) {
      this.Mans = val
    },
    Sys(val) {
      this.Syss = val
    },
    Inven(val) {
      this.Invens = val
    },
    goosout(val) {
      this.appbar = val
      this.Bills = val;
      this.Mans = val;
      this.Syss = val;
      this.Invens = val;
    },
    Username(val) {
      this.name = val
    }

  }

};
</script>
