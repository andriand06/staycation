import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCheckouts } from "features/checkout/checkoutSlice";
import Button from "elements/Button";
import InputNumber from "elements/Form/InputNumber";
import InputDate from "elements/Form/InputDate";
import {
  updateCheckout,
  checkoutBooking,
} from "features/checkout/checkoutSlice";
import { addDays } from "date-fns/esm";
import InputText from "elements/Form/InputText";
import formatDate from "utils/formatDate";
import { format } from "date-fns";
const BookingForm = ({ itemDetails, startBooking, history }) => {
  const checkout = useSelector(getCheckouts);
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let data = {};
    if (name === "date") {
      let startDate = new Date(value.startDate);
      let endDate = new Date(value.endDate);
      let countDuration = new Date(endDate - startDate).getDate();
      data = {
        _id: itemDetails._id,
        duration: countDuration,
        date: {
          startDate: format(startDate, "dd MMM yyyy"),
          endDate: format(endDate, "dd MMM yyyy"),
        },
      };
    } else if (name === "duration") {
      let duration = value;
      let startDate = new Date(checkout.data.date.startDate);
      let endDate = addDays(startDate, duration - 1);
      data = {
        _id: itemDetails._id,
        duration: duration,
        date: {
          startDate: format(startDate, "dd MMM yyyy"),
          endDate: format(endDate, "dd MMM yyyy"),
        },
      };
    }
    dispatch(updateCheckout(data));
  };
  const continueBooking = () => {
    dispatch(checkoutBooking(checkout));
    history.push(`/checkout/${itemDetails._id}`);
  };
  return (
    <div className="card bordered" style={{ padding: "60px 80px" }}>
      <h4 className="mb-3">Start Booking</h4>
      <h5 className="h2 text-teal mb-4">
        ${itemDetails.price}{" "}
        <span className="text-gray-500 font-weight-light">
          per {itemDetails.unit}
        </span>
      </h5>
      <InputText
        type="hidden"
        name="itemId"
        value={checkout.data._id ? checkout.data._id : undefined}
      />
      <label htmlFor="duration">How long you will stay?</label>
      <InputNumber
        max={30}
        suffix={" night"}
        isSuffixPlural
        onChange={onChangeInput}
        name="duration"
        value={checkout.data.duration}
      />

      <label htmlFor="date">Pick a date</label>
      <InputDate
        onChange={onChangeInput}
        name="date"
        value={checkout.data.date}
      />

      <h6
        className="text-gray-500 font-weight-light"
        style={{ marginBottom: 40 }}
      >
        You will pay{" "}
        <span className="text-gray-900">
          ${itemDetails.price * checkout.data.duration} USD
        </span>{" "}
        per{" "}
        <span className="text-gray-900">
          {checkout.data.duration} {itemDetails.unit}
        </span>
      </h6>

      <Button
        className="btn"
        hasShadow
        isPrimary
        isBlock
        type="link"
        href="#"
        onClick={continueBooking}
      >
        Continue to Book
      </Button>
    </div>
  );
};

export default BookingForm;
