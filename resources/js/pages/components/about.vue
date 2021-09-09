<template>
<v-sheet>
  <!-- start of how it works(1) -->
  <v-container class="pt-16 pb-16">
    <p class="text-center text-h4 font-weight-medium indigo--text text--darken-4">How It Works</p>
    <v-row class="mt-10">

      <v-col cols="12" md="4">

        <v-hover v-slot="{ hover }" open-delay="200">
        <v-card class="mx-auto" max-width="444" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
          <div class="d-flex justify-center pt-10">
            <v-icon x-large color="teal">mdi-briefcase-search</v-icon>
          </div>
          <v-card-title class="d-flex justify-center indigo--text text--darken-4 font-weight-bold">Search Opportunities</v-card-title>
          <v-card-text>
            <p class="pl-5 pr-5 text-subtitle-1 text-center">Curabitur quamtis etsum lacus etsumis nulatis iaculis etsum vitae etsum ets nisle varius.</p>
          </v-card-text>
        </v-card>
        </v-hover>

      </v-col>

      <v-col cols="12" md="4">

        <v-hover v-slot="{ hover }" open-delay="200">
        <v-card class="mx-auto" max-width="444" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
          <div class="d-flex justify-center pt-10">
            <v-icon x-large color="red">mdi-diamond-stone</v-icon>
          </div>
          <v-card-title class="d-flex justify-center indigo--text text--darken-4 font-weight-bold">Reach Clients</v-card-title>
          <v-card-text>
            <p class="pl-5 pr-5 text-subtitle-1 text-center">Curabitur quamtis etsum lacus etsumis nulatis iaculis etsum vitae etsum ets nisle varius.</p>
          </v-card-text>
        </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" md="4">

        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card class="mx-auto" max-width="444" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
            <div class="d-flex justify-center pt-10">
              <v-icon x-large color="blue">mdi-cash-plus</v-icon>
            </div>
            <v-card-title class="d-flex justify-center indigo--text text--darken-4 font-weight-bold">Get Rewarded</v-card-title>
            <v-card-text >
              <p class="pl-5 pr-5 text-subtitle-1 text-center">Curabitur quamtis etsum lacus etsumis nulatis iaculis etsum vitae etsum ets nisle varius.</p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
  <!-- end of how it works(2) -->

  <!-- how it works (2) -->
  <div :style="{'background': '#E8EAF6'}">
    <v-container>
      Carousel here
    </v-container>
  </div>
  <!-- end of how it works (2) -->

  <!-- how it works (3) -->
  <div :style="{'background': '#E8EAF6'}" class="pb-16">
  <v-container >

    <h1 class="text-center text-h4 font-weight-medium indigo--text text--darken-4 mb-12">Trusted By Over 9,000+ Businesses</h1>

    <v-row class="d-flex justify-center mb-5">
      <v-col cols="12" md="2">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card class="d-flex justify-center pa-5" width="110" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
            <v-img max-width="100" src="https://picsum.photos/id/237/316/95"></v-img>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" md="2">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card class="d-flex justify-center pa-5" width="110" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
            <v-img max-width="100" src="https://picsum.photos/id/237/316/95"></v-img>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" md="2" >
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card class="d-flex justify-center pa-5" width="110" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
            <v-img max-width="100" src="https://picsum.photos/id/237/316/95"></v-img>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" md="2" >
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card class="d-flex justify-center pa-5" width="110" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
            <v-img max-width="100" src="https://picsum.photos/id/237/316/95"></v-img>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" md="2">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card class="d-flex justify-center pa-5" width="110" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
            <v-img max-width="100" src="https://picsum.photos/id/237/316/95"></v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col cols="12" md="2" class="d-flex justify-center">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card class="d-flex justify-center pa-5" width="110" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
            <v-img max-width="100" src="https://picsum.photos/id/237/316/95"></v-img>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" md="2" class="d-flex justify-center">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card class="d-flex justify-center pa-5" width="110" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
            <v-img max-width="100" src="https://picsum.photos/id/237/316/95"></v-img>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" md="2" class="d-flex justify-center">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card class="d-flex justify-center pa-5" width="110" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
            <v-img max-width="100" src="https://picsum.photos/id/237/316/95"></v-img>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" md="2" class="d-flex justify-center">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card class="d-flex justify-center pa-5" width="110" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
            <v-img max-width="100" src="https://picsum.photos/id/237/316/95"></v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
  </div>
  <!-- end of how it works (3) -->

  <!-- how it works (4) -->
  <v-container class="pa-1 mb-12">
      <v-row>
          <v-col cols="12" md="6" class="pl-16 pr-16 pt-16">
            <h1 class="text-h4 font-weight-medium indigo--text text--darken-4 mb-5 mt-16" >Discover how we can help you to grow your business fast.</h1>

            <p mb-3 class="">Anticas quia voluptas sit aspernatur netsum demo ets ipsam voluptatem lorem fugit, seditum netis velas net nesciunt.</p>
            <ul class="mb-5 pa-1">
              <li><v-icon left color="blue">mdi-check</v-icon> Quias netus magni netsum qui ratione sequi.</li>
              <li><v-icon left color="blue">mdi-check</v-icon> Venis ratione sequi netus enim tempor magni.</li>
              <li><v-icon left color="blue">mdi-check</v-icon> Enim ipsam netus voluptatem voluptas.</li>
            </ul>
            <v-btn color="blue" class="white--text">Discover More</v-btn>
          </v-col>

          <v-col cols="12" md="6" class="pa-9">
            <v-img src="https://picsum.photos/id/237/555/416"></v-img>
          </v-col>
      </v-row>
    </v-container>
  <!-- end of how it works (4) -->

  <!-- how it works (5) -->
  <div :style="{'background': '#E8EAF6'}" class="pa-12">
    <v-container>
      <h1 class="text-center text-h4 font-weight-medium indigo--text text--darken-4 mb-12">Fun Facts About Our Agency</h1>

      <v-row class="d-flex justify-center">

        <v-col cols="12" md="2" class="d-flex justify-center">
          <v-card color="#E8EAF6" flat>
            <div class="d-flex justify-center mb-4">
              <v-icon x-large color="blue">mdi-gift</v-icon>
            </div>
            <v-card-title class="d-flex justify-center pa-0" ><h3>1050+</h3></v-card-title>
            <v-card-text class="d-flex justify-center">
              <p>Projects Completed</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="2" class="d-flex justify-center">
          <v-card color="#E8EAF6" flat>
            <div class="d-flex justify-center mb-4">
              <v-icon x-large color="deep-orange">mdi-heart</v-icon>
            </div>
            <v-card-title class="d-flex justify-center pa-0" ><h3>217k</h3></v-card-title>
            <v-card-text class="d-flex justify-center">
              <p>Happy Clients</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="2" class="d-flex justify-center">
          <v-card color="#E8EAF6" flat>
            <div class="d-flex justify-center mb-4">
              <v-icon x-large color="green">mdi-medal</v-icon>
            </div>
            <v-card-title class="d-flex justify-center pa-0" ><h3>1210</h3></v-card-title>
            <v-card-text class="d-flex justify-center">
              <p>Design Awards</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="2" class="d-flex justify-center">
          <v-card color="#E8EAF6" flat>
            <div class="d-flex justify-center mb-4">
              <v-icon x-large color="deep-orange">mdi-basket</v-icon>
            </div>
            <v-card-title class="d-flex justify-center pa-0"><h3>217k</h3></v-card-title>
            <v-card-text class="d-flex justify-center">
              <p>Happy Clients</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="2" class="d-flex justify-center">
          <v-card color="#E8EAF6" flat>
            <div class="d-flex justify-center mb-4">
              <v-icon x-large color="amber">mdi-bell</v-icon>
            </div>
            <v-card-title class="d-flex justify-center pa-0" ><h3>2137</h3></v-card-title>
            <v-card-text class="d-flex justify-center">
              <p>Line Of Codes</p>
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </div>
  <!-- end of how it works (5) -->
</v-sheet>
</template>

<script>
export default {
  name:'about'
}
</script>

<style scoped>
li{
  list-style-type: none;
}
</style>
