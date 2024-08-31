import { createSlice } from "@reduxjs/toolkit";
import { fetchLoginPost } from "../../actions/auth";

interface ApiState {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

const initialState: ApiState = {
  data: null,
  status: "idle",
  error: null,
  loading: false,
};

const getPostLogin = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginPost.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchLoginPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchLoginPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch data post";
        state.loading = false;
      });
  },
});

export default getPostLogin.reducer;
