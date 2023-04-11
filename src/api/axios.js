import axios from 'axios'
import qs from 'qs'

const config = {
  baseURL: `${process.env.VUE_APP_BASEURL}/api`,
  paramsSerializer: {
    serialize: (params) => {
      return qs.stringify(params, {
        encodeValuesOnly: true,
      })
    },
  },
}
const instance = axios.create(config)
const publicInstance = axios.create(config)

if (localStorage.getItem('jwt')) {
  instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt')
}

export { instance, publicInstance }
