import { createSlice } from '@reduxjs/toolkit';
import { fetchTeachersThunk } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTeachersThunk.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTeachersThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchTeachersThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
  selectors: {
    selectTeachers: state => state.items,
  },
});

export const teachersReducer = slice.reducer;
export const { selectTeachers } = slice.selectors;
