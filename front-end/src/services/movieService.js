import http, { Axios } from '../config/httpHelper';

const baseURL = 'http://localhost:4000/api/v1'

const httpRequest = {
  fetchMovies: (data) => http.get(`/movies/get?search=${data}`),
  fetchTheaters: () => http.get('/theaters'),
  postMovie: (data) => Axios(baseURL).post('/movies/add', data),
  putMovie: (data) => Axios(baseURL).put('/movies/update', data),
  deleteMovie: (id) => Axios(baseURL).delete(`/movies/delete/${id}`),
  putCart: (data) => Axios(baseURL).post('/carts', data),
};

export default httpRequest;
