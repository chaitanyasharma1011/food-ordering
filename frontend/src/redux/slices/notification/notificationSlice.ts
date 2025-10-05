"use client";

import { ReduxStoreType } from "@/library/type";
import {
  AlertColor,
  AlertPropsColorOverrides,
  SnackbarOrigin,
} from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";

interface Notification {
  open: boolean;
  message: ReactNode;
  severity?:
    | OverridableStringUnion<AlertColor, AlertPropsColorOverrides>
    | undefined;
  variant?: "standard" | "filled" | "outlined";
  icon?: ReactNode;
  anchorOrigin?: SnackbarOrigin;
  autoHideDuration?: number;
}

const initialState: Notification = {
  severity: "info",
  message: "",
  open: false,
  autoHideDuration: 6000,
  anchorOrigin: {
    vertical: "top",
    horizontal: "center",
  },
  icon: null,
  variant: "standard",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    show: (state, action) => ({
      ...state,
      ...action.payload,
      open: true,
    }),
    hide: (state) => ({
      ...state,
      open: false,
    }),
    remove: () => initialState,
  },
});

export const notificationState = (state: ReduxStoreType) => state.notification;
export const {
  show: showNotification,
  hide: hideNotification,
  remove: removeNotification,
} = notificationSlice.actions;
export default notificationSlice;
