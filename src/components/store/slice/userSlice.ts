import { createSlice } from "@reduxjs/toolkit";
import { fetchSignIn, fetchSignUp } from "../operations";
import { IError } from "../../types/infoAuthTypes";

interface AuthState {
  id: number | null;
  email: string | null;
  token: string | null;
  error: IError | null;
  isLoading: boolean;
}

export const initialState: AuthState = {
  id: null,
  email: null,
  token: null,
  error: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSignIn.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.token = action.payload.access_token;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchSignIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as IError;
      })
      .addCase(fetchSignUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSignUp.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.token = action.payload.access_token;
        (state.isLoading = false), (state.error = null);
      })
      .addCase(fetchSignUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as IError;
      });
  },
});

export default userSlice.reducer;
