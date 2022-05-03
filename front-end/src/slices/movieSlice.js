import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movieData: {
    loading: false,
    data: [],
    error: null,
  },
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
  },
});

const { actions, reducer } = authSlice;

export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesError } = actions;

export default reducer;
