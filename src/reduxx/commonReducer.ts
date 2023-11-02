import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawer: {
    open: false,
  },
};

const slice = createSlice({
  name: "common-reducer",
  initialState,
  reducers: {
    openDrawer: (state) => {
      return {
        ...state,
        drawer: {
          ...state?.drawer,
          open: true,
        },
      };
    },
    closeDrawer: (state) => {
      return {
        ...state,
        drawer: {
          ...state?.drawer,
          open: false,
        },
      };
    },
  },
});

export const { openDrawer, closeDrawer } = slice.actions;

export default slice.reducer;
