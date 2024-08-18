import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "./slice/budgetSlice";
import userSlice from "./slice/userSlice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userSlice,
    budget: budgetReducer,
  },
});

export type RootStat = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
