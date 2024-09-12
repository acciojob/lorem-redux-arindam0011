import { createSlice } from "@reduxjs/toolkit";

const loremSlice = createSlice({
  name: "loremDAta",
  initialState: {
    data: [],
    status: 'loading', // Ensure this matches the expected default state
    error: null,
  },
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
      state.status = 'succeeded'; // Ensure this is set when data is added
    },
    setLoading: (state) => {
      state.status = 'loading'; // Ensure the status is set to loading
    },
    setError: (state, action) => {
      state.status = 'failed'; // Ensure the status is set to failed
      state.error = action.payload;
    }
  }
});

export const { addData, setLoading, setError } = loremSlice.actions;

export default loremSlice.reducer;
