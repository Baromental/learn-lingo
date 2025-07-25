import { db } from '../firebase';
import { push, ref } from 'firebase/database';
import { createAsyncThunk } from '@reduxjs/toolkit';

const bookTrialRef = ref(db, '/bookTrial');

export const bookTrialThunk = createAsyncThunk(
  'bookTrial/book',
  async (formData, thunkAPI) => {
    try {
      await push(bookTrialRef, formData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
