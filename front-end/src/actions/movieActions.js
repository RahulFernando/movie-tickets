import {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesError,
  addToCartStart,
  addToCartSuccess,
  addToCartError,
} from '../slices/movieSlice';

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

export const addToCart = (data) => {
  return async (dispatch) => {
    dispatch(addToCartStart());

    try {
      const response = await service.putCart(data);

      if (response.status === 200) {
        dispatch(addToCartSuccess(response.data.body));
      } else {
        dispatch(addToCartError(response.data.message));
      }
    } catch (error) {
      dispatch(addToCartError(error.message));
    }
  };
};
