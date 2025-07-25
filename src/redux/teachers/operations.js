import { db } from '../firebase';
import { get, ref } from 'firebase/database';
import { createAsyncThunk } from '@reduxjs/toolkit';

const teachersRef = ref(db, 'teachers');

export const fetchTeachersThunk = createAsyncThunk(
  'teachers/fetch',
  async (_, thunkAPI) => {
    try {
      const snapshot = await get(teachersRef);
      const data = snapshot.val();
      return Object.entries(data).map(([id, teacher]) => ({
        id,
        ...teacher,
      }));
    } catch (error) {
      console.error('Error fetching teachers:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
