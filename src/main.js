// main.js
import { createApp } from 'vue'
import App from './App.vue'

// Plugins
import { registerPlugins } from '@/plugins'

// import Vuetify from 'vuetify'
// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/dist/vuetify.min.css'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})
const app = createApp(App)
app.use(vuetify)

registerPlugins(app)

app.mount('#app')
