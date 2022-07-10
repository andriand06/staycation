import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";
export const checkoutSlicer = createSlice({
  name: "checkout",
  initialState: {
    value: {
      data: {
        _id: null,
        duration: 1,
        date: {
          startDate: format(new Date(), "dd MMM yyyy"),
          endDate: format(new Date(), "dd MMM yyyy"),
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
