import { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesError } from '../slices/movieSlice';

import service from '../services/movieService';

export const fetchMovies = (data) => {
  return async (dispatch) => {
    dispatch(fetchMoviesStart());

    try {
      const response = await service.fetchMovies(data);

      if (response.status === 200) {
        dispatch(fetchMoviesSuccess(response.data.body));
      } else {
        dispatch(fetchMoviesError(response.data.body));
      }
    } catch (error) {
      dispatch(fetchMoviesError(error.message));
    }
  };
};
