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
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, state => {
        return initialState;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
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
  },
});

export const authReducer = authSlice.reducer;
export const { selectUser, selectIsLoggedIn, selectIsRefreshing } =
  authSlice.selectors;
