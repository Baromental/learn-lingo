import { createSlice } from '@reduxjs/toolkit';
import { bookTrialThunk } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'bookTrial',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(bookTrialThunk.pending, state => {
        state.loading = true;
      })
      .addCase(bookTrialThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(bookTrialThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const bookTrialReducers = slice.reducer;
