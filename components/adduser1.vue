<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card>
                    <template>
                        <!-- <v-container> -->
                        <v-card>
                            <h4 class="font-weight-regular pt-3 pb-3">User details</h4>
                            <v-expansion-panels focusable>
                                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                                    <v-expansion-panel-header class="primary white--text">Item</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-flex class="d-flex">
                                            <v-text-field :rules="nameRules" label="User Id" dense outlined
                                                class="pr-16 mt-7" v-model="userdetails.userid"></v-text-field>
                                            <v-text-field :rules="passRules" label="Password" dense outlined
                                                class="pr-16 mt-7" v-model="userdetails.password"></v-text-field>
                                            <v-select :items="items" :rules="roleRules" label="Role" dense outlined
                                                class="pr-16 mt-7" bottom v-model="userdetails.role"></v-select>
                                            <v-btn class="primary mt-7" width="90px" @click="add">add</v-btn>


                                        </v-flex>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                            <!-- {{ this.msg }} -->
                        </v-card>
                        <!-- </v-container> -->

                    </template>

                </v-card>
                <template>
                    <div class="text-center ma-2">

                        <v-snackbar v-model="snackbar" :color="color">
                            {{ text }}

                            <template v-slot:action="{ attrs }">
                                <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
                                    Close
                                </v-btn>
                            </template>
                        </v-snackbar>
                    </div>
                </template>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            nameRules: [
                v => !!v || 'Name is required',
            ],
            passRules: [
                v => !!v || 'Password is required',
            ],
            roleRules: [
                v => !!v || 'Role is required',
            ],
            items: ['Biller', 'Manager', 'System Admin', 'Inventry'],
            userdetails: { userid: "", password: "", role: "" },
            checked: true,
            msg: "",
            snackbar: false,
            text: "",
            color: ""



        }
    },
    methods: {
        add() {
            let message = this.$store.state.login;
            this.msg = message;
            for (let i = 0; i < this.msg.length; i++) {
                this.checked = true;
                if (this.userdetails.password == this.msg[i].password && this.userdetails.userid == this.msg[i].userid) {
                    // if (this.userdetails.password == this.msg[i].password) {
                    //     this.msg = "already exists";
                    //     break;
                    this.checked = false;
                    this.snackbar = true
                    this.text = "Already exists"
                    this.color = "red";
                    break;

                }


            }
            if (this.userdetails.password == "" || this.userdetails.userid=="") {

                this.checked = false;
                this.snackbar = true
                this.text = "field should not be left empty";
                this.color ="orange"
            }
            if (this.checked) {
                this.$store.commit("set_details", this.userdetails);
                this.userdetails = {};
                this.snackbar = true;
                this.text = "Added Successfully"
                this.color = "green";
            }

        }
    }
}

</script>