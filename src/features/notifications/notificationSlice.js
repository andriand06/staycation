import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: [],
  reducers: {},
});

export default notificationsSlice.reducer;

export const getAllNotifications = (state) => state.notifications;
