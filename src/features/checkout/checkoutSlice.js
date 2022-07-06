import { createSlice } from "@reduxjs/toolkit";
import formatDate from "../../utils/formatDate";
export const checkoutSlicer = createSlice({
  name: "checkout",
  initialState: {
    value: {
      data: {
        _id: null,
        duration: 1,
        date: {
          startDate: formatDate(new Date()),
          endDate: formatDate(new Date()),
          key: "selection",
        },
      },
    },
  },
  reducers: {
    updateCheckout: (state, action) => {
      state.value.data = action.payload;
    },
    checkoutBooking: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateCheckout, checkoutBooking } = checkoutSlicer.actions;
export default checkoutSlicer.reducer;

export const getCheckouts = (state) => state.checkout.value;
