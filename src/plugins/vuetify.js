/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import * as labs from 'vuetify/labs/components'
import { aliases, fa } from 'vuetify/iconsets/fa'

// // Translations provided by Vuetify
// import { th, en } from 'vuetify/locale'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    ...labs,
  },
  // locale: {
  //   locale: 'th',
  //   fallback: 'th',
  //   messages: { th, en },
  // },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#F8CB46',
        },
      },
    },
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
})
