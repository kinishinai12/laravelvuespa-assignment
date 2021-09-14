<template>
  <v-sheet id="ourteam">
    <v-container class="pa-12">
      <h1 class="text-center text-h4 font-weight-medium indigo--text text--darken-4">Meet Our Team</h1>
      <v-row class="mt-12">

        <v-col cols="12" md="4">
          <v-card class="mx-auto" :width="width">
            <v-img :width="width" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
          </v-card>
          <div class="pa-5">
            <h3 class="text-center text-h6 font-weight-medium indigo--text text--darken-4">Christina Hawkings</h3>
            <p class="font-italic text--secondary text-center">Head of SEO</p>

            <p class="text-center">Johnathan is our co-founder and has developed search strategies for a variety of clients for over 5 years.</p>
            <v-row>
              <v-col class="d-flex justify-center" md="12">

                <div class="pa-2">
                  <v-btn fab small dark color="blue"><v-icon>mdi-twitter</v-icon></v-btn>
                </div>

                <div class="pa-2">
                  <v-btn fab small dark color="red"><v-icon>mdi-instagram</v-icon></v-btn>
                </div>

                <div class="pa-2">
                  <v-btn fab small dark color="indigo"><v-icon>mdi-microphone-outline</v-icon></v-btn>
                </div>

                <div class="pa-2">
                  <v-btn fab small dark color="pink"><v-icon>mdi-email</v-icon></v-btn>
                </div>

              </v-col>
            </v-row>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="mx-auto" :width="width">
            <v-img :width="width" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
          </v-card>

          <div class="pa-5">
            <h3 class="text-center text-h6 font-weight-medium indigo--text text--darken-4">Andreas Johansons</h3>
            <p class="font-italic text--secondary text-center">Marketing Manager</p>

            <p class="text-center">Andres fell in love with marketing at the school and looks forward to being part of the industry for years.</p>
            <v-row>
              <v-col class="d-flex justify-center" md="12">

                <div class="pa-2">
                  <v-btn fab small dark color="blue"><v-icon>mdi-twitter</v-icon></v-btn>
                </div>

                <div class="pa-2">
                  <v-btn fab small dark color="red"><v-icon>mdi-instagram</v-icon></v-btn>
                </div>

                <div class="pa-2">
                  <v-btn fab small dark color="indigo"><v-icon>mdi-microphone-outline</v-icon></v-btn>
                </div>

                <div class="pa-2">
                  <v-btn fab small dark color="pink"><v-icon>mdi-email</v-icon></v-btn>
                </div>

              </v-col>
            </v-row>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="mx-auto" :width="width">
            <v-img :width="width" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
          </v-card>

          <div class="pa-5">
            <h3 class="text-center text-h6 font-weight-medium indigo--text text--darken-4">Alexandra Smiths</h3>
            <p class="font-italic text--secondary text-center">SEO Specialist</p>

            <p class="text-center">Graduating with a degree in Spanish,<br/> English and French, she has always loved writing.</p>
            <v-row>
              <v-col class="d-flex justify-center" md="12">

                <div class="pa-2">
                  <v-btn fab small dark color="blue"><v-icon>mdi-twitter</v-icon></v-btn>
                </div>

                <div class="pa-2">
                  <v-btn fab small dark color="red"><v-icon>mdi-instagram</v-icon></v-btn>
                </div>

                <div class="pa-2">
                  <v-btn fab small dark color="indigo"><v-icon>mdi-microphone-outline</v-icon></v-btn>
                </div>

                <div class="pa-2">
                  <v-btn fab small dark color="pink"><v-icon>mdi-email</v-icon></v-btn>
                </div>

              </v-col>
            </v-row>
          </div>
        </v-col>

      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'ourteam',
  computed: {
   width() {
    switch (this.$vuetify.breakpoint.name) {
      case 'sm': return 500
      case 'md': return 350
    }
  },

}
}
</script>
