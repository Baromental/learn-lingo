// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { teachersReducer } from './teachers/slice';

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
  },
});
