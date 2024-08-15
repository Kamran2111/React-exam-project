import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
import { ISignIn, ISignUp } from "../types/infoAuthTypes";

axios.defaults.baseURL = "https://api.escuelajs.co/api/v1";

export const fetchSignIn = createAsyncThunk(
  "loginUser/getLogin",
  async ({ email, password }: ISignIn, thunkApi) => {
    try {
      const response = await axios.post("/auth/login", { email, password });
      return response.data;
      // Я знаю что any не правильно так типизировать но я незнаю что как испрваиться
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchSignUp = createAsyncThunk(
  "loginUser/postLogin",
  async ({ email, password, confirmPassword }: ISignUp, thunkApi) => {
    try {
      const response = await axios.post("/auth/profile", {
        email,
        password,
        confirmPassword,
      });
      return response.data;
      // Я знаю что any не правильно так типизировать но я незнаю как испрваиться
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchBudgetInfo = createAsyncThunk(
  "budgetInfo/getBudget",
  async()
);
