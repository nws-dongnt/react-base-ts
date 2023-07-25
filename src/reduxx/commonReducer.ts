import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MemoType = {
  value: string;
};

const initialState: { memo: MemoType } = {
  memo: { value: "" },
};

const slice = createSlice({
  name: "common-reducer",
  initialState,
  reducers: {
    updateMemo: (state, action: PayloadAction<string>) => {
      return { ...state, memo: { value: action.payload } };
    },
  },
});

export const { updateMemo } = slice.actions;

export default slice.reducer;
