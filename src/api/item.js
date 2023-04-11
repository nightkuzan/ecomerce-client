import { instance as axios } from './axios.js'

const getItems = async (params) => {
  const response = await axios.get('/items', { params })
  return response.data
}

const addItem = async (data) => {
  const response = await axios.post('/items', { data })
  return response.data
}

const getItemById = async (id, params) => {
  const response = await axios.get(`/items/${id}`, { params })
  return response.data
}

const updateItemById = async (id, data) => {
  const response = await axios.put(`/items/${id}`, { data })
  return response.data
}

const removeItemById = async (id) => {
  const response = await axios.delete(`/items/${id}`)
  return response.data
}

export default {
  getItems,
  addItem,
  getItemById,
  updateItemById,
  removeItemById,
}
