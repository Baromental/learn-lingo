import { auth, db } from 'redux/firebase';
import { ref, get, set, remove } from 'firebase/database';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFavoritesThunk = createAsyncThunk(
  'favorites/fetch',
  async (_, thunkAPI) => {
    const uid = auth.currentUser?.uid;
    if (!uid) return {};

    const snapshot = await get(ref(db, `favorites/${uid}`));
    const data = snapshot.val() || {};
    return Object.keys(data);
  }
);

export const addToFavoritesThunk = createAsyncThunk(
  'favorites/add',
  async (teacherId, thunkAPI) => {
    const uid = auth.currentUser?.uid;
    if (!uid) return thunkAPI.rejectWithValue('User not authenticated');

    try {
      await set(ref(db, `favorites/${uid}/${teacherId}`), true);
      return teacherId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFromFavoritesThunk = createAsyncThunk(
  'favorites/remove',
  async (teacherId, thunkAPI) => {
    const uid = auth.currentUser?.uid;
    if (!uid) return thunkAPI.rejectWithValue('User not authenticated');

    try {
      await remove(ref(db, `favorites/${uid}/${teacherId}`), true);
      return teacherId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
