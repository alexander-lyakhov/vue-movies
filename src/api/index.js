// http://react-cdp-api.herokuapp.com/api-docs

import axios from 'axios';
import { flags } from '@/utils';

axios.defaults.baseURL = 'http://react-cdp-api.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(
  config => {
    flags.isLoading = true;
    return config;
  },

  err => {
    flags.isLoading = false;
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  res => {
    flags.isLoading = false;
    return res;
  },

  err => {
    flags.isLoading = false;
    return Promise.reject(err);
  }
);

function getMovies(params) {
  return axios.get('/movies', { params });
}

function getMovieById(id) {
  return axios.get(`/movies/${id}`);
}

export default {
  getMovies,
  getMovieById
};
