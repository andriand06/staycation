import React from "react";
import Fade from "react-reveal/Fade";
import InputText from "elements/Form/InputText";
export default function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;

  return (
    <Fade>
      <section className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <div className="card">
                <figure className="img-wrapper" style={{ height: 270 }}>
                  <img
                    src={ItemDetails.imageId[0].imageUrl}
                    alt={ItemDetails.title}
                    className="img-cover"
                  />
                </figure>
                <div className="row align-items-center">
                  <div className="col">
                    <div className="meta-wrapper">
                      <h5>{ItemDetails.title}</h5>
                      <span className="text-gray-500">
                        {ItemDetails.city},{ItemDetails.country}
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>
                      ${+checkout.data.duration * ItemDetails.price}
                      <span className="text-gray-500"> per </span>
                      {checkout.data.duration} {ItemDetails.unit}
                      {+checkout.data.duration > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5">
            <Fade delay={600}>
              <label htmlFor="firstName">First Name</label>
              <InputText
                name="firstName"
                id="firstName"
                onChange={props.fieldChange}
                value={data.firstName}
              />

              <label htmlFor="lastName">Last Name</label>
              <InputText
                name="lastName"
                id="lastName"
                onChange={props.fieldChange}
                value={data.lastName}
              />

              <label htmlFor="email">Email</label>
              <InputText
                name="email"
                id="email"
                type="email"
                onChange={props.fieldChange}
                value={data.email}
              />

              <label htmlFor="phoneNumber">Phone Number</label>
              <InputText
                name="phoneNumber"
                id="phoneNumber"
                type="tel"
                onChange={props.fieldChange}
                value={data.phoneNumber}
              />
            </Fade>
          </div>
        </div>
      </section>
    </Fade>
  );
}
