import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_API_URL + 'api/'
axios.defaults.withCredentials = true
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'