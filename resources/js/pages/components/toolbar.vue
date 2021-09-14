<template>

      <v-container>
          <div>
            <v-container>
              <v-toolbar flat>

                  <v-toolbar-title class="mr-3"><p class="ma-0 font-weight-bold text-h5 indigo--text text--darken-4"><v-icon large left color="blue">mdi-vector-combine</v-icon>Smart</p></v-toolbar-title>

                    <v-btn tag="a" text href="#home">Home</v-btn>
                    <v-btn tag="a" text href="#about">about</v-btn>
                    <v-btn tag="a" text href="#ourteam">Our Team</v-btn>
                    <v-btn tag="a" text href="#howitworks">How it works</v-btn>
                    <v-btn tag="a" text href="#pricing">Pricing</v-btn>
                    <v-btn tag="a" text href="#blog">Blog</v-btn>
                    <v-btn tag="a" text href="#contact">Contact</v-btn>


                    <v-spacer></v-spacer>


                    <v-btn text class="mr-1"><v-icon left>mdi-login</v-icon>Log in</v-btn>
                    <v-btn color="#1E88E5" class="white--text">Sign-Up</v-btn>


              </v-toolbar>
            </v-container>

          </div>

      </v-container>

</template>

<script>
export default {
  name:'toobar'
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
