import axios from 'axios';

import API_CONFIG from '../constants/API_CONFIG';

const { BASE_URL, X_RAPID_API_KEY, TIMEOUT } = API_CONFIG;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-rapidapi-key': X_RAPID_API_KEY,
  },
  timeout: TIMEOUT,
});

export default api;
