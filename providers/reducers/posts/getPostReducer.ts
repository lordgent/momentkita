import { createSlice } from "@reduxjs/toolkit";
import { fetchDataPost } from "../../actions/posts";

interface ApiState {
  data: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

const initialState: ApiState = {
  data: [],
  status: "idle",
  error: null,
  loading: false,
};

const getPost = createSlice({
  name: "list_post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataPost.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchDataPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchDataPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch data post";
        state.loading = false;
      });
  },
});

export default getPost.reducer;
