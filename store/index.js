import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: [
      { userid: "thinesh", password: "1212", role: "Biller" },
      { userid: "mano", password: "2525", role: "Manager" },
      { userid: "anandh", password: "2222", role: "System Admin" },
      { userid: "karthick", password: "4444", role: "Inventry" },
      { userid: "thinesh1", password: "1212", role: "Biller" },
      { userid: "thinesh2", password: "1212", role: "Biller" },

    ],
    loginHistory: [],
    MedicineMaster: [
      { MedicineName: "capol", Brand: "paracetamol" },
      { MedicineName: "Disprol", Brand: "paracetamol" },
      { MedicineName: "Acetaminophen", Brand: "Tylenol" },
      { MedicineName: "Aspirin", Brand: "Aspro Clear®" },
      { MedicineName: "Dolo650", Brand: "paracetamol" },
    ],
    Stock: [
      { MedicineName: "capol", quantity: 3, unitprice: 10 },
      { MedicineName: "Disprol", quantity: 7, unitprice: 12 },
      { MedicineName: "Acetaminophen", quantity: 12, unitprice: 7 },
      { MedicineName: "Aspirin", quantity: 15, unitprice: 1 },
    ],
    BillMaster: [
      {
        BillNo: 23,
        BillDate: "2023-05-02",
        BillAmount: 45,
        BillGst: 56,
        NetPrice: 65,
        UserId: "thinesh",
      },
      {
        BillNo: 29,
        BillDate: "2023-05-03",
        BillAmount: 35,
        BillGst: 5,
        NetPrice: 6,
        UserId: "thinesh",
      },
      {
        BillNo: 24,
        BillDate: "2023-05-04",
        BillAmount: 35,
        BillGst: 5,
        NetPrice: 63,
        UserId: "thinesh",
      },
      {
        BillNo: 6,
        BillDate: "2023-05-01",
        BillAmount: 35,
        BillGst: 5,
        NetPrice: 83,
        UserId: "thinesh",
      },
      {
        BillNo: 7,
        BillDate: "2023-04-30",
        BillAmount: 35,
        BillGst: 5,
        NetPrice: 47,
        UserId: "thinesh",
      },
      {
        BillNo: 8,
        BillDate: "2023-04-29",
        BillAmount: 35,
        BillGst: 5,
        NetPrice: 66,
        UserId: "thinesh",
      },
      {
        BillNo: 9,
        BillDate: "2023-04-28",
        BillAmount: 35,
        BillGst: 5,
        NetPrice: 25,
        UserId: "thinesh",
      },
      {
        BillNo: 91,
        BillDate: "2023-01-15",
        BillAmount: 35,
        BillGst: 5,
        NetPrice: 25,
        UserId: "thinesh",
      },
      {
        BillNo: 92,
        BillDate: "2023-02-28",
        BillAmount: 35,
        BillGst: 5,
        NetPrice: 25,
        UserId: "thinesh",
      },
      {
        BillNo: 93,
        BillDate: "2023-03-28",
        BillAmount: 35,
        BillGst: 5,
        NetPrice: 25,
        UserId: "thinesh",
      },
      {
        BillNo: 95,
        BillDate: "2023-04-02",
        BillAmount: 35,
        BillGst: 5,
        NetPrice: 25,
        UserId: "thinesh",
      },
      {
        BillNo: 97,
        BillDate: "2023-06-09",
        BillAmount: 35,
        BillGst: 5,
        NetPrice: 25,
        UserId: "thinesh",
      },
      {
        BillNo: 101,
        BillDate: "2023-07-17",
        BillAmount: 35,
        BillGst: 5,
        NetPrice: 25,
        UserId: "thinesh",
      },
      {
        BillNo: 92,
        BillDate: "2023-08-21",
        BillAmount: 35,
        BillGst: 5,
        NetPrice: 25,
        UserId: "thinesh",
      },
      {
        BillNo: 11,
        BillDate: "2023-09-08",
        BillAmount: 35,
        BillGst: 5,
        NetPrice: 25,
        UserId: "thinesh",
      },
      {
        BillNo: 67,
        BillDate: "2023-10-03",
        BillAmount: 35,
        BillGst: 5,
        NetPrice: 25,
        UserId: "thinesh",
      },
      {
        BillNo: 56,
        BillDate: "2023-11-11",
        BillAmount: 35,
        BillGst: 5,
        NetPrice: 25,
        UserId: "thinesh",
      },
      {
        BillNo: 45,
        BillDate: "2023-12-05",
        BillAmount: 35,
        BillGst: 5,
        NetPrice: 25,
        UserId: "thinesh",
      },
    ],
    BillDetails: [{ BillNo: 23, MedicineName: "capol", quantity: 5, UnitPrice: 12, Amount: 45 }, { BillNo: 24, MedicineName: "capol", quantity: 5, UnitPrice: 10, Amount: 45 }],
    // // Dynamic: [],
    Myarray:[],
  },
  mutations: {
    set_details(state, new_login) {
      state.login.push(new_login);
    },
    set_loginhistory(state, new_history) {
      state.loginHistory.push(new_history);
    },
    set_Mdetails(state, new_details) {
      state.MedicineMaster.push(new_details);
    },
    set_stock(state, new_stock) {
      state.Stock.push(new_stock);
    },
    set_billmaster(state, new_bill) {
      state.BillMaster.push(new_bill);
    },
    set_billdetails(state, new_billdetail) {
      state.BillDetails.push(new_billdetail);
    },
    // set_value(state, new_value) {
    //   state.Dynamic.push(new_value)
    // },
    set_array(state, new_array) {
      state.Myarray = new_array;
    },
  },
  actions: {},
  modules: {},
});
