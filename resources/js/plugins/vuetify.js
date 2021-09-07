import Vue from 'vue'
import Vuetify from 'vuetify'

import Colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const opts = {
  icons: {
		iconfont: 'mdi',
	},
	theme: {
		dark: false,
		themes: {
		  light: {
			  primary: '#212529',
		  }
		}
	},
}

export default new Vuetify(opts)
