import { ENV } from '@/config';

import axios from 'axios';

const instance = axios.create();

let baseUrl: string;
if (process.env.NODE_ENV === 'development') {
  baseUrl = ENV.prod.apiBaseUrl;
} else {
  baseUrl = ENV.prod.apiBaseUrl;
}

instance.defaults.baseURL = baseUrl;

instance.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers= {
      'content-type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return config;
  }
);

export default instance;