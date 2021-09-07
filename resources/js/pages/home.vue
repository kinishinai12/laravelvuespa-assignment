<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <card :title="$t('home')">
        {{ $t('you_are_logged_in') }}
      </card>
    </div>
    <template>
      <v-card class="mx-auto" max-width="344">
        <v-card-text>
          <div>Word of the Day</div>
          <p class="text-h4 text--primary">
            be•nev•o•lent
          </p>
          <p>adjective</p>
          <div class="text--primary">
            well meaning and kindly.<br>
            "a benevolent smile"
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4">
            Learn More
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </div>

</template>

<script>
// import axios from 'axios'
export default {
  middleware: 'auth',

  // async asyncData () {
  //   const { data: projects } = await axios.get('/api/projects')

  //   return {
  //     projects
  //   }
  // },

  metaInfo () {
    return { title: this.$t('home') }
  }
}
</script>
