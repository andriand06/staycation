import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCheckouts } from "features/checkout/checkoutSlice";
import Header from "parts/Header";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "elements/Stepper";
import BookingInformation from "parts/Checkout/BookingInformation";
import Payment from "parts/Checkout/Payment";
import Completed from "parts/Checkout/Completed";
import {
  useGetDetailPageQuery,
  useAddNewBookingMutation,
} from "features/api/apiSlice";
import { Spinner } from "elements/Spinner";
import NotFound from "./NotFound";
import { format } from "date-fns";

const Checkout = ({ match }) => {
  const { id } = match.params;
  const checkout = useSelector(getCheckouts);
  const {
    data: detailPage,
    isLoading,
    isError,
    isSuccess,
  } = useGetDetailPageQuery(id);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    proofPayment: "",
    bankFrom: "",
    accountHolder: "",
  });

  const updateField = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const [addNewBooking] = useAddNewBookingMutation();
  const steps = {
    bookingInformation: {
      title: "Booking Information",
      description: "Please fill in the blank fields below",
      content: (
        <BookingInformation
          data={data}
          checkout={checkout}
          ItemDetails={detailPage}
          fieldChange={updateField}
        />
      ),
    },
    payment: {
      title: "Payment",
      description: "Kindly follow the instructions below",
      content: (
        <Payment
          data={data}
          ItemDetails={detailPage}
          checkout={checkout}
          fieldChange={updateField}
        />
      ),
    },
    completed: {
      title: "Yay! Completed",
      description: null,
      content: <Completed />,
    },
  };
  let content;
  if (detailPage && isSuccess) {
    content = (
      <Stepper steps={steps}>
        {(prevStep, nextStep, CurrentStep, steps) => (
          <>
            <Numbering
              data={steps}
              current={CurrentStep}
              style={{ marginBottom: 50 }}
            />
            <Meta data={steps} current={CurrentStep} />
            <MainContent data={steps} current={CurrentStep} />
            {CurrentStep === "bookingInformation" && (
              <Controller>
                {data.firstName !== "" &&
                  data.lastName !== "" &&
                  data.email !== "" &&
                  data.phoneNumber !== "" && (
                    <Fade>
                      <Button
                        type="button"
                        className="btn mb-3"
                        isBlock
                        isPrimary
                        hasShadow
                        onClick={nextStep}
                      >
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                <Button
                  className="btn"
                  type="link"
                  isBlock
                  isLight
                  href={`/properties/${detailPage._id}`}
                >
                  Cancel
                </Button>
              </Controller>
            )}
            {CurrentStep === "payment" && (
              <Controller>
                {data.proofPayment !== "" &&
                  data.bankFrom !== "" &&
                  data.accountHolder !== "" && (
                    <Fade>
                      <Button
                        type="button"
                        className="btn mb-3"
                        isBlock
                        isPrimary
                        hasShadow
                        onClick={async () => {
                          nextStep();
                          const payload = new FormData();
                          payload.append("idItem", detailPage._id);
                          payload.append("duration", checkout.data.duration);
                          payload.append(
                            "bookingStartDate",
                            format(checkout.data.date.startDate, "dd MON yyyy")
                          );
                          payload.append(
                            "bookingEndDate",
                            format(checkout.data.date.endDate, "dd MON yyyy")
                          );
                          payload.append("firstName", data.firstName);
                          payload.append("lastName", data.lastName);
                          payload.append("email", data.email);
                          payload.append("phoneNumber", data.phoneNumber);
                          payload.append("accountHolder", data.accountHolder);
                          payload.append("bankFrom", data.bankFrom);
                          payload.append("image", data.proofPayment);
                          await addNewBooking(payload)
                            .unwrap()
                            .then((res) =>
                              alert(
                                `Successfully Booking ${JSON.stringify(res)}`
                              )
                            )
                            .catch((err) =>
                              alert(`Failed to Booking ${JSON.stringify(err)}`)
                            );
                        }}
                      >
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                <Button
                  className="btn"
                  type="button"
                  isBlock
                  isLight
                  onClick={prevStep}
                >
                  Cancel
                </Button>
              </Controller>
            )}
            {CurrentStep === "completed" && (
              <Controller>
                <Button
                  className="btn"
                  type="link"
                  isBlock
                  isPrimary
                  hasShadow
                  href=""
                >
                  Back to Home
                </Button>
              </Controller>
            )}
          </>
        )}
      </Stepper>
    );
  } else if (isLoading) {
    content = <Spinner />;
  } else if (isError) {
    content = <NotFound />;
  }
  return (
    <>
      <Header isCentered />
      {content}
    </>
  );
};

export default Checkout;
