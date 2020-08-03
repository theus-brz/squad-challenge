import axios from 'axios';

import API_CONFIG from '../constants/API_CONFIG';

const { BASE_URL, TIMEOUT } = API_CONFIG;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

export default api;
