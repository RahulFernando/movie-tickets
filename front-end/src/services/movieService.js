import http from '../config/httpHelper';

const httpRequest = {
  fetchMovies: (data) => http.get(`/movies?search=${data}`),
  putCart: (data) => http.post('/carts', data),
};

export default httpRequest;
