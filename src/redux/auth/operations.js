const { createAsyncThunk } = require('@reduxjs/toolkit');

export const registerThunk = createAsyncThunk('register');

export const loginThunk = createAsyncThunk('login');

export const logoutThunk = createAsyncThunk('logout');
