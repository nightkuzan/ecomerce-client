
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import 'tailwindcss/dist/tailwind.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './assets/tailwind.css'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')