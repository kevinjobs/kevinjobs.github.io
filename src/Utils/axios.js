import axios from 'axios';

const instance = axios.create()

instance.defaults.baseURL = 'http://localhost:5000'
// instance.defaults.baseURL = 'https://api.iyum.in:5000/api/v2'

instance.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data)
    return config
  }
)

export default instance