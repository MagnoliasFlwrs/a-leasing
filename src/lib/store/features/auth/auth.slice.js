import { createSlice } from "@reduxjs/toolkit";
import { lsKeyMap } from "../../../constants";

const accessToken = localStorage.getItem(lsKeyMap.ACCESS_TOKEN);
const refreshToken = localStorage.getItem(lsKeyMap.REFRESH_TOKEN);

const initialState =
  accessToken && refreshToken
    ? { isAuth: true, tokens: { accessToken, refreshToken } }
    : { isAuth: false };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (_, action) => {
      localStorage.setItem(lsKeyMap.ACCESS_TOKEN, action.payload.accessToken);
      localStorage.setItem(lsKeyMap.REFRESH_TOKEN, action.payload.refreshToken);

      return { isAuth: true, tokens: action.payload };
    },
    logout: () => {
      localStorage.clear();

      return { isAuth: false };
    },
  },
});

export const { setTokens, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
