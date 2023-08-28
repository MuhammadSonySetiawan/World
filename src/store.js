import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./reduser/searchSlice";

export const store = configureStore({
  reducer: {
    searchSlice,
  },
});
