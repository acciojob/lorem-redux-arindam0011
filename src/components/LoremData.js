import { createSlice } from "@reduxjs/toolkit";

const loremSlice = createSlice({
  name: "loremDAta",
  initialState: {
    data: [],
    status: 'loading', // Set initial status to 'loading'
    error: null,
  },
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
      state.status = 'succeeded';
    },
    setLoading: (state) => {
      state.status = 'loading';
    },
    setError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    }
  }
});

export const { addData, setLoading, setError } = loremSlice.actions;

export default loremSlice.reducer;
