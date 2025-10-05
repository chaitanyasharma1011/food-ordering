import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  isError: false,
  accessToken: null,
  user: {},
  authorized: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userState: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    userLogout: (_, action) => ({
      ...initialState,
      ...action.payload,
    }),
  },
});

export const userState = (state: Record<string, any>) => state.user;
export const { userState: userStateAction, userLogout: userLogoutAction } =
  userSlice.actions;
export default userSlice;
