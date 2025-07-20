import { getDatabase, ref, get } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFavoritesThunk = createAsyncThunk(
  'favorites/fetch',
  async () => {
    const db = getDatabase();
    const auth = getAuth();
    const uid = auth.currentUser?.uid;

    if (!uid) return {};

    const snapshot = await get(ref(db, `favorites/${uid}`));
    return snapshot.val() || {};
  }
);
