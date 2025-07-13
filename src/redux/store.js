// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { teachersReducer } from './teachers/slice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teachers: teachersReducer,
  },
});
