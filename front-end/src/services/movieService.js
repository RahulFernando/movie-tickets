import http from '../config/httpHelper';

const httpRequest = {
  fetchMovies: (data) => http.get(`/movies?search=${data}`),
  fetchTheaters: () => http.get('/theaters'),
  postMovie: (data) => http.post('/movies', data),
  putCart: (data) => http.post('/carts', data),
};

export default httpRequest;
