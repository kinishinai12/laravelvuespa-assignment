<template>
  <v-app>
    <custom-toolbar/>
    <custom-home/>
    <custom-about/>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import toolbar from './components/toolbar.vue'
import home from './components/home.vue'
import about from './components/about.vue'

export default {
  layout: 'basic',
  components:{
    customToolbar : toolbar,
    customHome: home,
    customAbout: about,
  },

  metaInfo () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: window.config.appName
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>

<style scoped>
/* .top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.title {
  font-size: 85px;
} */
</style>


  <!-- <div>
    <div class="top-right links">
      <template v-if="authenticated">
        <router-link :to="{ name: 'home' }">
          {{ $t('home') }}
        </router-link>
      </template>
      <template v-else>
        <router-link :to="{ name: 'login' }">
          {{ $t('login') }}
        </router-link>
        <router-link :to="{ name: 'register' }">
          {{ $t('register') }}
        </router-link>
      </template>
    </div>

    <div class="text-center">
      <div class="title mb-4">
        {{ title }}
      </div>

      <div class="links">
        <a href="https://github.com/cretueusebiu/laravel-vue-spa">github.com/cretueusebiu/laravel-vue-spa</a>
      </div>
    </div>
  </div> -->
