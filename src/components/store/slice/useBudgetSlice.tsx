import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./userSlice";
import { number, string } from "yup";
import { BudgetInfo } from "../../types/budgetInfoTypes";

export const initialState: BudgetInfo = {
  id: null,
  SN: null,
  BudgetNo: null,
  BudgetDescription: null,
  BudgetedAmunt: null,
  ActualAmount: null,
  Variance: null,
  Date: null,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {},
});
