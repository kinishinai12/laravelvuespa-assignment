<template>
  <v-sheet class="mt-16">
    <!-- Pricing for every business, at any stage section -->
    <v-container class="pa-1 mb-12">
      <h2 class="text-center text-h4 font-weight-medium indigo--text text--darken-4 mt-12">Pricing for every business, at any stage</h2>
      <v-row class="mt-1">
        <v-col cols="12" md="4">
          <v-card :loading="loading" class="mx-auto my-12" :width="width">

            <p class="text-center indigo--text text--darken-4 pt-10 text-h5">BASIC</p>


            <p class="text-center text-h2 indigo--text text--darken-4 font-weight-bold">$25</p>

            <p class="text-center text--secondary text-subtitle-1 font-weight-bold">Per Month</p>



            <div class="d-flex justify-center">
              <ul>
                <li><v-icon small left color="blue">mdi-check-circle</v-icon> Custom Charts</li>
                <li><v-icon small left color="blue">mdi-check-circle</v-icon> 5 Mailboxes, 10 Gb Storage</li>
                <li><v-icon small left color="blue">mdi-check-circle</v-icon> Unlimited Free Dashboards</li>
                <li><v-icon small left color="blue">mdi-check-circle</v-icon> Access to all APIs</li>
              </ul>
            </div>



            <div class="d-flex justify-center pa-7">
              <v-btn outlined color="blue" class="text--blue pa-8">Free 15-DAY trial</v-btn>
            </div>

            <template slot="progress">
              <v-progress-linear color="blue" height="10" indeterminate></v-progress-linear>
            </template>

          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card :loading="loading" class="mx-auto my-12" :width="width">

            <p class="text-center indigo--text text--darken-4 pt-10 text-h5">STANDARD</p>


            <p class="text-center text-h2 indigo--text text--darken-4 font-weight-bold">$99</p>

            <p class="text-center text--secondary text-subtitle-1 font-weight-bold">Per Month</p>



            <div class="d-flex justify-center">
              <ul>
                <li><v-icon small left color="blue">mdi-check-circle</v-icon> All Basic features</li>
                <li><v-icon small left color="blue">mdi-check-circle</v-icon> 15 Mailboxes, 50 Gb Storage</li>
                <li><v-icon small left color="blue">mdi-check-circle</v-icon> Interactive Screen Sharing</li>
                <li><v-icon small left color="blue">mdi-check-circle</v-icon> Full Reports History</li>
              </ul>
            </div>



            <div class="d-flex justify-center pa-7">
              <v-btn color="blue" class="white--text pa-8">Free 15-DAY trial</v-btn>
            </div>

            <template slot="progress">
              <v-progress-linear color="blue" height="10" indeterminate></v-progress-linear>
            </template>

          </v-card>
        </v-col>


        <v-col cols="12" md="4">
          <v-card :loading="loading" class="mx-auto my-12" :width="width">

            <p class="text-center indigo--text pt-10 text-h5">PRO</p>


            <p class="text-center text-h2 indigo--text text--darken-4 font-weight-bold">$199</p>

            <p class="text-center text--secondary text-subtitle-1 font-weight-bold">Per Month</p>



            <div class="d-flex justify-center">
              <ul>
                <li><v-icon small left color="blue">mdi-check-circle</v-icon> All Standard Features</li>
                <li><v-icon small left color="blue">mdi-check-circle</v-icon> 50 Mailboxes, 90 Gb Storage</li>
                <li><v-icon small left color="blue">mdi-check-circle</v-icon> Dedicated Account Manager</li>
                <li><v-icon small left color="blue">mdi-check-circle</v-icon> 24/7 Priority Support</li>
              </ul>
            </div>



            <div class="d-flex justify-center pa-7">
              <v-btn outlined color="blue" class="text--blue pa-8">Free 15-DAY trial</v-btn>
            </div>

            <template slot="progress">
              <v-progress-linear color="blue" height="10" indeterminate></v-progress-linear>
            </template>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- end of pricing for every bsiness, at any stage section -->

    <!-- amazing features -->
    <div :style="{'background': '#E8EAF6'}">
    <v-container class="pa-12 mb-12">
      <h2 class="text-center text-h4 font-weight-medium indigo--text text--darken-4 pt-5">Amazing Features</h2>

      <v-row class="pa-8 d-flex justify-center">

        <v-col cols="12" md="4">
          <div class="d-flex flex-row">
            <div>
              <v-icon x-large left class="mt-3" color="green">mdi-diamond-stone</v-icon>
            </div>
            <div class="float-left pa-1">
              <h4 class="indigo--text text--darken-4">Support 24/7</h4>
              <p>Utise wisi enim nets venias, quis tation ullamcorper nets lobotis nisle consequat.</p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="d-flex flex-row">
            <div>
              <v-icon x-large left class="mt-3" color="blue">mdi-account-group-outline</v-icon>
            </div>
            <div class="float-left pa-1">
              <h4 class="indigo--text text--darken-4">User Friendly</h4>
              <p>Utise wisi enim nets venias, quis tation ullamcorper nets lobotis nisle consequat.</p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="d-flex flex-row">
            <div>
              <v-icon x-large left class="mt-3" color="yellow">mdi-bell-outline</v-icon>
            </div>
            <div class="float-left pa-1">
              <h4 class="indigo--text text--darken-4">Notifications</h4>
              <p>Utise wisi enim nets venias, quis tation ullamcorper nets lobotis nisle consequat.</p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="d-flex flex-row">
            <div>
              <v-icon x-large left class="mt-3" color="blue">mdi-cogs</v-icon>
            </div>
            <div class="float-left pa-1">
              <h4 class="indigo--text text--darken-4">Accesibility</h4>
              <p>Utise wisi enim nets venias, quis tation ullamcorper nets lobotis nisle consequat.</p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="d-flex flex-row">
            <div>
              <v-icon x-large left class="mt-3" color="orange">mdi-cash</v-icon>
            </div>
            <div class="float-left pa-1">
              <h4 class="indigo--text text--darken-4">Cost Control</h4>
              <p>Utise wisi enim nets venias, quis tation ullamcorper nets lobotis nisle consequat.</p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="d-flex flex-row">
            <div>
              <v-icon x-large left class="mt-3" color="green">mdi-message-text</v-icon>
            </div>
            <div class="float-left pa-1">
              <h4 class="indigo--text text--darken-4">Chat With Friends</h4>
              <p class="text-start">Utise wisi enim nets venias, quis tation ullamcorper nets lobotis nisle consequat.</p>
            </div>
          </div>
        </v-col>

      </v-row>

    </v-container>
    </div>
    <!-- end of amazing features -->



    <!-- qoute section -->
    <v-container class="pa-1 mb-12">
      <v-row>
          <v-col cols="12" md="6" class="pl-16 pr-16 pt-16">

            <div class="mt-12">
              <p mb-3 class="font-italic text--secondary text-h4 text-center">“People who succeed in business aren't afraid to hear feedback from their customers - they actually thrive from it.”</p>
            </div>
            <div>
              <p class="ma-0 text-center text-h6 indigo--text text--darken-4">Johanna S. Richardson</p>
            </div>
            <div>
              <p class="text-center primary--text">CEO Essentials</p>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="pa-9">
            <v-img src="https://picsum.photos/id/237/555/416"></v-img>
          </v-col>
      </v-row>
    </v-container>
    <!-- end of qoute section -->
  </v-sheet>
</template>

<script>
export default {
  name: 'pricing',
  computed: {
   width() {
    switch (this.$vuetify.breakpoint.name) {
      case 'sm': return 400
      case 'md': return 324
    }
  },

}
}
</script>

<style scoped>
li{
  list-style-type: none;
  padding: 4px;
}
</style>


