// http://react-cdp-api.herokuapp.com/api-docs

import axios from 'axios';

axios.defaults.baseURL = 'http://react-cdp-api.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function getMovies(params) {
  return axios.get('/movies', { params });
}

function getMovie(id) {
  return axios.get(`/movies/${id}`);
}

export default {
  getMovies,
  getMovie
};
