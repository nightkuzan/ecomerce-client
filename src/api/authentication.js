import { instance as axios } from './axios.js'

const authLocalLogin = (identifier, password, userType = 'user') => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('/auth/local', {
        identifier,
        password,
      })
      const { jwt } = response.data

      localStorage.setItem('jwt', jwt)
      localStorage.setItem('userType', userType)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwt

      resolve(response.data)
    } catch (error) {
      reject(error)
    }
  })
}

const authLocalLogout = () => {
  return new Promise(async (resolve, reject) => {
    try {
      delete axios.defaults.headers.common['Authorization']
      localStorage.removeItem('jwt')
      localStorage.removeItem('userType')

      resolve()
    } catch {
      reject()
    }
  })
}

export default {
  authLocalLogin,
  authLocalLogout,
}
