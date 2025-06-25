const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: {
    name: '',
    email: '',
  },
  isLogged: false,
  loading: false,
  error: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase();
  },
  selectors: {
    selectUser: state => state.user,
    isLogged: state => state.isLogged,
  },
});

export const authReducer = slice.reducer;
