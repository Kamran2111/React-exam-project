import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export default store;
