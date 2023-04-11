import api from '../api'

const registerApi = (app) => {
  app.config.globalProperties.$api = api
}

export { registerApi }
