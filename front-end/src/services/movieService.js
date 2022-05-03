import http from '../config/httpHelper';

const httpRequest = {
  fetchMovies: (data) => http.get(`/movies?search=${data}`),
};

export default httpRequest;
