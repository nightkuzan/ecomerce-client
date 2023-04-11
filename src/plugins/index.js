import vuetify from './vuetify'
import router from '../router'

import { registerApi } from './api.js'
import { registerDayjs } from './day.js'
import { registerLodash } from './lodash.js'
import { registerBaseURL } from './baseurl'

import { swal, swalOptions } from './vue-sweetalert2'

export function registerPlugins(app) {
  registerApi(app)
  registerDayjs(app)
  registerLodash(app)
  registerBaseURL(app)

  app.use(vuetify).use(router).use(swal, swalOptions)
}
