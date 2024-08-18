import { createSlice } from "@reduxjs/toolkit";
import { fetchBudgetInfo, addBudgetItem } from "../operations";

interface BudgetItem {
  id: number;
  SN: string;
  BudgetNo: string;
  BudgetDescription: string;
  BudgetedAmount: string;
  ActualAmount: string;
  Variance: string;
  Date: string;
}

interface BudgetState {
  budget: BudgetItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: BudgetState = {
  budget: [],
  isLoading: false,
  error: null,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBudgetInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBudgetInfo.fulfilled, (state, action) => {
        state.budget = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBudgetInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch";
      })
      .addCase(addBudgetItem.fulfilled, (state, action) => {
        state.budget.push(action.payload);
      })
      .addCase(addBudgetItem.rejected, (state, action) => {
        state.error = action.error.message || "Failed to add item";
      });
  },
});

export default budgetSlice.reducer;
