<template>
    <v-container>
        <template>
            <v-alert color="red" border="right" dark v-show="guess">
                same cannot be added
            </v-alert>
            <v-row justify="center">
                <v-dialog v-model="find" persistent max-width="390">
                    <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template> -->
                    <v-card height="360">

                        <v-card-title class="d-flex primary white--text">
                            <v-btn icon @click="changes">
                                <v-icon>mdi-close-circle</v-icon>
                            </v-btn>
                            <h4 class="font-weight-medium ml-8">ADD STOCK</h4>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-text-field dense outlined class="mt-12 mx-7" label="Medicine Name"
                                v-model="Mname"></v-text-field>
                            <v-text-field dense outlined class="mt-5 mx-7" label="Brand" v-model="Mbrand"></v-text-field>
                            <v-btn width="287" class="ml-7 mt-5 primary" @click="save">ADD</v-btn>
                        </v-card-text>
                        {{ $store.state.MedicineMaster }}

                        <v-card-actions>
                            <v-spacer></v-spacer>

                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>



    </v-container>
</template>
<script>
export default {
    data() {
        return {
            Mname: "",
            Mbrand: "",
            medicine_details: { MedicineName: "", Brand: "" },
            guess: false
        }
    },
    methods: {
        changes() {

            this.$emit("send")

        },
        save() {
            if (this.Mname == "" && this.Mbrand == "" ){
                alert("field should not be left empty")

            }
            for (let i = 0; i < this.$store.state.MedicineMaster.length; i++) {
                if (this.Mname == this.$store.state.MedicineMaster[i].MedicineName) {
                  alert("same name cannot ")
                    break;
                }

                else {
                    this.medicine_details.MedicineName = this.Mname;
                    this.medicine_details.Brand = this.Mbrand;
                    this.$store.commit("set_Mdetails", this.medicine_details);

                    this.$emit("inserting", this.medicine_details);
                    this.medicine_details={};
                    break;
                }
            }
        },

    },
    props: {
        find: Boolean,

    }
}

</script>