<template>
  <v-app app>

    <custom-toolbar/>

    <custom-home/>

    <section id="about">
      <custom-about/>
    </section>

    <section id="ourteam">
      <custom-our-team/>
    </section>

    <section id="howitworks">
      <custom-how-it-works/>
    </section>

    <section id="pricing">
      <custom-pricing/>
    </section>

    <section id="blog">
      <custom-blog/>
    </section>

    <section id="contact">
      <custom-contact/>
    </section>

    <custom-footer/>

  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import toolbar from './components/toolbar.vue'
import home from './components/home.vue'
import about from './components/about.vue'
import footer from './components/footer.vue'
import contact from './components/contact.vue'
import blog from './components/blog.vue'
import ourteam from './components/ourteam.vue'
import howitworks from './components/howitworks.vue'
import pricing from './components/pricing.vue'

export default {
  layout: 'basic',
  components:{
    customToolbar : toolbar,
    customHome: home,
    customAbout: about,
    customBlog: blog,
    customContact: contact,
    customFooter: footer,
    customOurTeam: ourteam,
    customHowItWorks: howitworks,
    customPricing: pricing,
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
*{
  font-family: 'Nunito', sans-serif;
}

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
