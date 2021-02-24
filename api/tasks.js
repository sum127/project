import axios from 'axios'
import { baseUrl } from './_env'

export default {
  list: ()=> axios.get(`${baseUrl}/tourTasks`),
  post: (data)=> axios.post(`${baseUrl}/tourTasks`, data),
  delete: (id)=> axios.delete(`${baseUrl}/tourTasks/${id}`),
}