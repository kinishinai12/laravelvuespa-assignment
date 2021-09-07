<template>
  <v-sheet>
    <v-container class="pt-16 pb-16">
      <h1 class="d-flex justify-center">Our Blog</h1>
      <v-row class="mt-10">

        <v-col cols="12" md="4">

          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card class="mx-auto" max-width="350" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
              <v-img width="350" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
              <v-card-title class="pb-0">The Guide To LinkedIn Ads</v-card-title>

              <div class="pl-5 pt-0">
                <p class="font-italic text--secondary"><v-icon small>mdi-card-text-outline</v-icon> Marketing & Design — 11 Min Read</p>
              </div>

              <v-card-text class="pt-0">
                <p>Quis autem velis reprehender nets quiste voluptate velite estum quants etsamis sedit varias nets.</p>
              </v-card-text>
            </v-card>
          </v-hover>

        </v-col>

        <v-col cols="12" md="4">

          <v-hover v-slot="{ hover }" open-delay="200">
          <v-card class="mx-auto" max-width="350" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
              <v-img width="350" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
              <v-card-title class="pb-0">Affinity Designer Quick Start</v-card-title>

              <div class="pl-5 pt-0">
                <p class="font-italic text--secondary"><v-icon small>mdi-play-circle-outline</v-icon> SaaS Solutions &#8212; 25 Min Watch</p>
              </div>

              <v-card-text class="pt-0">
                <p>Quis autem velis reprehender nets quiste voluptate velite estum quants etsamis sedit varias nets.</p>
              </v-card-text>
            </v-card>
          </v-hover>

        </v-col>

        <v-col cols="12" md="4">

          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card class="mx-auto" max-width="350" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
              <v-img width="350" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
              <v-card-title class="pb-0">Our Happy Team</v-card-title>

              <div class="pl-5 pt-0">
                <p class="font-italic text--secondary"><v-icon small>mdi-microphone-outline</v-icon> Product Launch &#8212; 19 Min Listen</p>
              </div>

              <v-card-text class="pt-0">
                <p>Quis autem velis reprehender nets quiste voluptate velite estum quants etsamis sedit varias nets.</p>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'blog',
}
</script>
