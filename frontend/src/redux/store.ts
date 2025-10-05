"use client";

import apiGrabitSlice from "@/services/apiGrabitSlice";
import { configureStore } from "@reduxjs/toolkit";

// import apiSanitySlice from "@/services/apiSanitySlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import userSlice from "./slices/user/userSlice";
import notificationSlice from "./slices/notification/notificationSlice";
// import apiLevupSlice from "@/services/apiLevupSlice";

const store = configureStore({
  reducer: {
    [apiGrabitSlice?.reducerPath]: apiGrabitSlice?.reducer,
    [userSlice?.reducerPath]: userSlice?.reducer,
    [notificationSlice?.reducerPath]: notificationSlice?.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    const returnableMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["notification/show", "notification/hide"],
        ignoredPaths: ["notification"],
      },
    }).concat(apiGrabitSlice?.middleware);
    // if (apiInvestEdgeSlice)
    //   returnableMiddleware.concat(apiInvestEdgeSlice.middleware);
    return returnableMiddleware;
  },
  devTools: process.env.NEXT_PUBLIC_NODE_ENV !== "production",
});

setupListeners(store.dispatch);
export default store;
