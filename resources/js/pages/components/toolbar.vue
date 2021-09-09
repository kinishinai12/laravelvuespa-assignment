<template>
  <v-card flat>
      <v-container fluid>
        <v-row class="child-flex">
          <div>
            <v-container>
              <v-toolbar flat>

              <v-toolbar-title class="mr-5"><p class="ma-0 font-weight-bold text-h5 indigo--text text--darken-4"><v-icon large left color="blue">mdi-vector-combine</v-icon>Smart</p></v-toolbar-title>

              <v-btn text>Home</v-btn>
              <v-btn text >About</v-btn>
              <v-btn text >Our Team</v-btn>
              <v-btn text>Pricing</v-btn>
              <v-btn text>Blog</v-btn>
              <v-btn text>Contact</v-btn>

              <v-spacer></v-spacer>

              <v-btn text class="mr-1"><v-icon left>mdi-login</v-icon>Log in</v-btn>
              <v-btn color="#1E88E5" class="white--text">Sign-Up</v-btn>

            </v-toolbar>
            </v-container>
          </div>
        </v-row>
      </v-container>
    </v-card>
</template>

<script>
export default {
  name:'toobar'
}
</script>
