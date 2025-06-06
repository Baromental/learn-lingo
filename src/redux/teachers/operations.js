import { db } from '../firebase';
import { get, ref } from 'firebase/database';
import { createAsyncThunk } from '@reduxjs/toolkit';

const teachersRef = ref(db, '/');

export const fetchTeachersThunk = createAsyncThunk(
  'fetchTeachers',
  async (_, thunkAPI) => {
    try {
      const snapshot = await get(teachersRef);
      const data = snapshot.val();
      return data;
    } catch (error) {
      console.error('Error fetching teachers:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
