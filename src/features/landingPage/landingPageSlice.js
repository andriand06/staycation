import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const landingPageSlice = createSlice({
  name: "landingPage",
  initialState: {
    data: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLandingPages.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchLandingPages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchLandingPages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const { reducer } = landingPageSlice;
export default reducer;

/**
 * createAsyncThunk accepts two arguments:
 * A string that will be used as the prefix for the generated action types
 * A "payload creator" callback function that should return a Promise containing some
 * data, or a rejected Promise with an error
 */
export const fetchLandingPages = createAsyncThunk(
  "landingPage/fetchLandingPages",
  async () => {
    const response = await axios.get(
      "https://server-staycations.herokuapp.com/api/v1/landing-page"
    );
    return response.data;
  }
);
export const getLandingPage = (state) => state.landingPage.data;
