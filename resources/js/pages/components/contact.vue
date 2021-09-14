<template>
  <v-sheet id="contact">
    <v-container class="pa-16 mb-12">
      <v-row>

        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12" md="12">
              <p class="text-h5 font-weight-medium indigo--text text--darken-4">Get in touch</p>
            </v-col>
            <v-col cols="12" md="12">
              <v-text-field hide-details label="Full Name*" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-text-field hide-details label="Email Address*" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-text-field hide-details label="Phone Number*" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
               <v-textarea hide-details outlined label="Your Message..."></v-textarea>
            </v-col>
            <v-col cols="12" md="12">
              <v-btn color="#1E88E5" class="white--text pa-7">Send Message</v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12" md="12">
              <p class="text-h5 font-weight-medium indigo--text text--darken-4">How to find us</p>
            </v-col>
            <v-col cols="12" md="12">
              <v-card width="600" height="270">
                <iframe class="contact-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9050207912896!2d-0.14675028449633118!3d51.514958479636384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2sOxford+St%2C+London%2C+UK!5e0!3m2!1sen!2sro!4v1485889312335" width="600" height="270" style="border:0" allowfullscreen></iframe>
              </v-card>
            </v-col>
            <v-col cols="12" md="12">
              <h3>Head Office</h3>
            </v-col>
            <v-col cols="12" md="12">
              <p><v-icon left color="blue">mdi-map-marker-outline</v-icon> 10 Oxford Street, London, UK, E1 1EC</p>
              <p><v-icon left color="blue">mdi-email</v-icon> office@smart.co.uk</p>
              <p><v-icon left color="blue">mdi-phone</v-icon> +44 987 654 321</p>
            </v-col>
          </v-row>
        </v-col>

      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'contact',
}
</script>
