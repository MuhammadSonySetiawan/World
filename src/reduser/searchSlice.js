import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keyword: "",
};

export const searchSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    searchItem: (state, action) => {
      state.keyword += action.payload;
    },
    clearData: (state) => initialState,
    reset: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { searchItem, clearData } = searchSlice.actions;

export default searchSlice.reducer;
