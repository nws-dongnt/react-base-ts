import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthUser = {
  accessToken: string;
  username: string;
};

export type AuthState = {
  user: AuthUser | undefined;
};

const initialState: AuthState = {
  user: undefined,
};

const slice = createSlice({
  name: "auth-reducer",
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<AuthUser>) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    clearAuth: (state) => {
      return {
        ...state,
        ...initialState,
      };
    },
  },
});

export const { setAuthUser, clearAuth } = slice.actions;

export default slice.reducer;
