import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000/country',
})

const COUNTRIES_SERVICE = {
  create: async (data) => {
    return await service.post('/', data)
  },
  readAll: async (data) => {
    return await service.get('/')
  },
  readOne: async (id) => {
    return await service.get(`/${id}`)
  },
  editOne: async (id, data) => {
    return await service.patch(`/${id}`, data)
  },
  deleteOne: async (id) => {
    return await service.delete(`/${id}`)
  },
}

export default COUNTRIES_SERVICE
