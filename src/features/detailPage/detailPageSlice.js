import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "api/client";
const detailPageSlice = createSlice({
  name: "detailPage",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDetailPage.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchDetailPage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchDetailPage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default detailPageSlice.reducer;

export const fetchDetailPage = createAsyncThunk(
  "detailPage/fetchDetailPage",
  async (id) => {
    const response = await client.get(
      `https://server-staycations.herokuapp.com/api/v1/detail-page/${id}`
    );
    return response.data;
  }
);
export const getDetailPage = (state) => state.detailPage.data;
