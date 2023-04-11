const registerBaseURL = (app) => {
  app.config.globalProperties.$baseURL = `${process.env.VUE_APP_BASEURL}`
}
export { registerBaseURL }
