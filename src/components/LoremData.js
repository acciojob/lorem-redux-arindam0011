import { createSlice } from "@reduxjs/toolkit";

const loremSlice = createSlice({
  name: "loremDAta",
  initialState: {
    data: [],
    loading: true,
    error: null
  },
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { addData, setLoading, setError } = loremSlice.actions;

export default loremSlice.reducer;
