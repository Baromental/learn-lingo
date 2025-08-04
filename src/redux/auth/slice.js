import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  user: {
    name: '',
    email: '',
  },
  isRefreshing: false,
  isLoggedIn: false,
  loading: false,
  error: false,
  authInitialized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.isLoggedIn = false;
        state.loading = false;
        state.error = false;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.authInitialized = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.authInitialized = true;
      })
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.loading = false;
          state.isLoggedIn = true;
          state.user.name = payload.name;
          state.user.email = payload.email;
        }
      )
      .addMatcher(
        isAnyOf(registerThunk.pending, loginThunk.pending, logoutThunk.pending),
        state => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected,
          logoutThunk.rejected
        ),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
  selectors: {
    selectUser: state => state.user,
    selectIsLoggedIn: state => state.isLoggedIn,
    selectIsRefreshing: state => state.isRefreshing,
    selectAuthInitialized: state => state.authInitialized,
  },
});

export const authReducer = authSlice.reducer;
export const {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectAuthInitialized,
} = authSlice.selectors;
