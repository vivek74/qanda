import axios from 'axios'

const API_KEY = "";
const URL = "";

const request = axios.create({
  baseURL: URL,
  timeout: 30000
})

request.interceptors.request.use(
  request => {
    const apiKey = API_KEY
    if (apiKey) {
      request.headers.Authorization = apiKey
    }
    return request
  },
  error => {
    return Promise.reject(error)
  }
)

export default request