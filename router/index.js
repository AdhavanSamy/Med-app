import Vue from "vue";
import VueRouter from "vue-router";
// import login from "../views/login"
import dashboard from "../views/dashboard"
import  adduser from "../views/adduser"
import  loginhistory from "../views/loginhistory"
import  stockentry from "../views/stockentry"
import  stockview from "../views/stockview"
import  billentry from "../views/billentry"
import salesreport from "../views/salesreport"







Vue.use(VueRouter);

const routes = [
  {
    path: "/adduser",
    name: "adduser",
    component: adduser,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component:dashboard,

  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component:login,

  // },
  {
    path: "/loginhistory",
    name: "loginhistory",
    component:loginhistory,

  },
  {
    path: "/stockentry",
    name: "stockentry",
    component:stockentry,

  },
  {
    path: "/stockview",
    name: "stockview",
    component:stockview,

  },
  {
    path: "/billentry",
    name: "billentry",
    component:billentry,

  },
  {
    path: "/salesreport",
    name: "salesreport",
    component:salesreport,

  }
 
];

const router = new VueRouter({
  routes,
});

export default router;
