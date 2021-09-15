<template>
    <v-sheet id="home">
      <div class="d-none d-md-flex pa-16" :style="{'background': '#1E88E5'}"></div>
      <div :style="{'background': '#1E88E5'}" class="pb-16">
        <v-container class="pa-1" >
          <v-row>
              <v-col cols="12" md="6" class="pl-12 pr-12 pt-16 justify-center">
                <h1 class="mb-5 mt-16  white--text ">Discover The World's Most Advanced Online Tool</h1>
                <p mb-3 class="white--text text-left text-h6 font-weight-light">Track and analyze all your data in one central location nisledis qui officia deserunt etimus quis autem netsum loremisat entimus velis netsad.</p>
                <p class="white--text ma-0"><v-icon left size="64">mdi-play-circle-outline</v-icon><a href="#" class="white--text">Watch Presentation</a></p>
              </v-col>

              <v-col cols="12" md="6" class="pa-9 justify-center">
                <v-img width="555" src="https://picsum.photos/id/237/555/515"></v-img>
              </v-col>
          </v-row>
        </v-container>
      </div>
    </v-sheet>
</template>

<script>
export default {
  name: 'home'
}
</script>
