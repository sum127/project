import axios from 'axios'
import { baseUrl } from './_env'

export default {
    // GET http://...:3000/list
    list: () => axios.get(`${baseUrl}/tourList`),
    // GET http://...:3000/list/:id 
    get: (id) => axios.get(`${baseUrl}/tourList/${id}`),
    // GET http://...:3000/list?q=keyword
    search: (keyword) => axios.get(`${baseUrl}/tourList?q=${keyword}`),
}