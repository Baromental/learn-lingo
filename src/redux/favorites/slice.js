import {
  addToFavoritesThunk,
  fetchFavoritesThunk,
  removeFromFavoritesThunk,
} from './operation';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFavoritesThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.items = payload;
    });
    builder.addCase(addToFavoritesThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.items.push(payload);
    });
    builder.addCase(
      removeFromFavoritesThunk.fulfilled,
      (state, { payload }) => {
        state.loading = false;
        state.items = state.items.filter(id => id !== payload);
      }
    );
  },
  selectors: {
    selectFavoritesTeachers: state => state.items,
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { selectFavoritesTeachers } = favoritesSlice.selectors;
