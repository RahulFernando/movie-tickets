import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movieData: {
    loading: false,
    data: [],
    error: null,
  },
  cartData: {
    movies: [],
    total_price: 0.0,
    user: null,
  },
  addToCartData: {
    loading: false,
    data: null,
    error: null,
  },
  openModal: false,
};

const authSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    fetchMoviesStart(state) {
      state.movieData.loading = true;
    },
    fetchMoviesSuccess(state, action) {
      state.movieData.loading = false;
      state.movieData.data = action.payload;
      state.movieData.error = null;
    },
    fetchMoviesError(state, action) {
      state.movieData.loading = false;
      state.movieData.data = [];
      state.movieData.error = action.payload;
    },
    setCartData(state, action) {
      const { movie, no_of_tickets, price, title, img, user } = action.payload;

      const existingIndex = state.cartData.movies.findIndex(
        (item) => item.movie === movie
      );

      // if already exist
      if (existingIndex > -1) {
        const existingMovie = state.cartData.movies[existingIndex];
        existingMovie.no_of_tickets =
          Number(existingMovie.no_of_tickets) + Number(no_of_tickets);
        state.cartData.total_price = existingMovie.no_of_tickets * price;
        state.cartData.movies[existingIndex] = existingMovie;
      } else {
        // otherwise
        state.cartData.movies.push({ movie, no_of_tickets, title, img });
        state.cartData.total_price = no_of_tickets * price;
        state.cartData.user = user;
      }
    },
    addToCartStart(state) {
      state.addToCartData.loading = true;
    },
    addToCartSuccess(state, action) {
      state.addToCartData.loading = false;
      state.addToCartData.data = action.payload;
      state.addToCartData.error = null;
    },
    addToCartError(state, action) {
      state.addToCartData.loading = false;
      state.addToCartData.data = null;
      state.addToCartData.error = action.payload;
    },
    cartDataReset(state) {
      state.cartData = initialState.cartData;
    },
    setModal(state, action) {
      state.openModal = action.payload;
    },
  },
});

const { actions, reducer } = authSlice;

export const {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesError,
  setCartData,
  addToCartStart,
  addToCartSuccess,
  addToCartError,
  cartDataReset,
  setModal,
} = actions;

export default reducer;
