import { loginThunk, logoutThunk, registerThunk } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: {
    name: '',
    email: '',
  },
  isLoggedIn: false,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        (registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.loading = false;
          state.isLoggedIn = true;
          state.user.name = payload.user.name;
          state.user.email = payload.user.email;
        }
      )
      .addCase(logoutThunk.fulfilled, state => {
        return initialState;
      })
      .addCase(
        (registerThunk.pending, loginThunk.pending, logoutThunk.pending),
        state => {
          state.loading = true;
          state.error = false;
        }
      )
      .addCase(
        (registerThunk.rejected, loginThunk.rejected, logoutThunk.rejected),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
  selectors: {
    selectUser: state => state.user,
    isLoggedIn: state => state.isLoggedIn,
  },
});

export const authReducer = authSlice.reducer;
export const { selectUser, isLoggedIn } = authSlice.selectors;
