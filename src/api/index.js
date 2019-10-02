import axios from "axios";

axios.defaults.baseURL = 'http://react-cdp-api.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function getMovies(offset = 0, limit = 24) {
	return axios.get('/movies', {params: {offset, limit}});
}

export default {
	getMovies,
}