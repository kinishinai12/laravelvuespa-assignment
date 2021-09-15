<template>
  <div>
    <v-app-bar app flat color="white" height="90">
      <v-container>
          <div>
            <v-container>
              <v-toolbar flat>
                <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-md-none"></v-app-bar-nav-icon>

                  <v-toolbar-title class="mr-3"><p class="ma-0 font-weight-bold text-h5 indigo--text text--darken-4"><v-icon large left color="blue">mdi-vector-combine</v-icon>Smart</p></v-toolbar-title>

                    <div class="d-none d-md-flex">
                      <v-btn tag="a" text href="#home">Home</v-btn>
                      <v-btn tag="a" text href="#about">about</v-btn>
                      <v-btn tag="a" text href="#ourteam">Our Team</v-btn>
                      <v-btn tag="a" text href="#howitworks">How it works</v-btn>
                      <v-btn tag="a" text href="#pricing">Pricing</v-btn>
                      <v-btn tag="a" text href="#blog">Blog</v-btn>
                      <v-btn tag="a" text href="#contact">Contact</v-btn>
                    </div>


                    <v-spacer></v-spacer>


                    <v-btn text class="mr-1"><v-icon left>mdi-login</v-icon>Log in</v-btn>
                    <v-btn color="#1E88E5" class="white--text">Sign-Up</v-btn>


              </v-toolbar>
            </v-container>

          </div>

      </v-container>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" temporary fixed>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <p class="ma-0 font-weight-bold text-h5 indigo--text text--darken-4"><v-icon large left color="blue">mdi-vector-combine</v-icon>Smart</p>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item-group>

            <v-list-item to="#home">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item to="#about">
              <v-list-item-title>about</v-list-item-title>
            </v-list-item>

            <v-list-item to="#ourteam">
              <v-list-item-title>Our Team</v-list-item-title>
            </v-list-item>

            <v-list-item to="#howitworks">
              <v-list-item-title>How it works</v-list-item-title>
            </v-list-item>

            <v-list-item to="#pricing">
              <v-list-item-title>Pricing</v-list-item-title>
            </v-list-item>

            <v-list-item to="#blog">
              <v-list-item-title>Blog</v-list-item-title>
            </v-list-item>

            <v-list-item to="#contact">
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name:'toobar',
  data: () => ({
      drawer: false,
      group: null,
    }),
}
</script>

<style scoped>
a,
a:hover,
a:focus,
a:active,
a:visited {
	text-decoration: none;
	outline: 0;
}

a:hover{
	color: #0d6efd;
}
</style>
