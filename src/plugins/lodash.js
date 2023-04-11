import lodash from 'lodash'

const registerLodash = (app) => {
  app.config.globalProperties.$_ = lodash
}

export { registerLodash, lodash }
