import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginData: {
    loading: false,
    data: null,
    error: null,
  },
  openModal: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setModal(state, action) {
      state.openModal = action.payload;
    },
    loginStart(state) {
      state.loginData.loading = true;
    },
    loginSuccess(state, action) {
      state.loginData.loading = false;
      state.loginData.data = action.payload;
      state.loginData.error = null;
    },
    loginError(state, action) {
      state.loginData.loading = false;
      state.loginData.data = null;
      state.loginData.error = action.payload;
    },
  },
});

const { actions, reducer } = authSlice;

export const { setModal, loginStart, loginSuccess, loginError } = actions;

export default reducer;
