<template>
  <v-sheet color="#E8EAF6">
    <v-container class="pa-16 mb-12">
      <v-row>
        <!-- first v-col -->
        <v-col cols="12" md="6">

          <v-row>
            <v-col cols="12" md="12">
              <p class="text-h4 font-weight-medium indigo--text text--darken-4">How It Works.</p>
            </v-col>

            <v-col cols="12" md="12">
              <div>
                <p>Quis autem velis ets reprehender net etid quiste netsum voluptate. <br> Utise wisi enim minim veniam, <br> quis etsad ets aspernatis netsum stationes nets qualitats.</p>
              </div>
            </v-col>

            <v-col cols="12" md="12">
              <v-row>
                <v-col md="4" >
                  <h4>LinkedIn</h4>
                  <div class="mt-2">
                    <v-icon color="yellow" large>mdi-star</v-icon>
                    <v-icon color="yellow" large>mdi-star</v-icon>
                    <v-icon color="yellow" large>mdi-star</v-icon>
                    <v-icon color="yellow" large>mdi-star</v-icon>
                    <v-icon color="yellow" large>mdi-star-half</v-icon>
                  </div>
                </v-col>
                <v-col md="1" class="d-flex justify-center">
                   <v-divider class="mx-4" vertical></v-divider>
                </v-col>
                <v-col md="4">
                  <h4>Upwork</h4>
                  <div class="mt-2">
                    <v-icon color="yellow" large>mdi-star</v-icon>
                    <v-icon color="yellow" large>mdi-star</v-icon>
                    <v-icon color="yellow" large>mdi-star</v-icon>
                    <v-icon color="yellow" large>mdi-star</v-icon>
                    <v-icon color="yellow" large>mdi-star-outline</v-icon>
                  </div>
                </v-col>
              </v-row>
            </v-col>

            <!-- <v-col cols="4" md="2">
              <v-divider class="mx-4" vertical></v-divider>
            </v-col>

            <v-col cols="4" md="5">
              <h4>Upwork</h4>
            </v-col> -->

          </v-row>
        </v-col>
        <!-- end of first v-col -->

        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12" md="12">
              <v-card class="pa-3">
                <v-list>

                  <v-list-group :value="false">
                    <template v-slot:activator>
                      <v-list-item-title><v-icon left color="green" fab>mdi-pencil</v-icon> Create Account</v-list-item-title>
                    </template>
                    <v-list-item>

                        <p>This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style.</p>

                    </v-list-item>
                  </v-list-group>

                </v-list>
              </v-card>
            </v-col>

            <v-col cols="12" md="12">
              <v-card class="pa-3">
                <v-list>

                  <v-list-group :value="false">
                    <template v-slot:activator>
                      <v-list-item-title><v-icon left color="green" fab>mdi-signal-cellular-3</v-icon> Choose Package</v-list-item-title>
                    </template>
                    <v-list-item>

                        <p>This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style.</p>

                    </v-list-item>
                  </v-list-group>

                </v-list>
              </v-card>
            </v-col>

            <v-col cols="12" md="12">
              <v-card class="pa-3">
                <v-list>

                  <v-list-group :value="false">
                    <template v-slot:activator>
                      <v-list-item-title><v-icon left color="green" fab>mdi-thumb-up</v-icon> Enjoy Smart</v-list-item-title>
                    </template>
                    <v-list-item>

                        <p>This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style.</p>

                    </v-list-item>
                  </v-list-group>

                </v-list>
              </v-card>
            </v-col>
          </v-row>


        </v-col>

      </v-row>
    </v-container>


    <!-- end of how it works -->
  </v-sheet>
</template>

<script>
export default {
  name: 'howitworks'
}
</script>
