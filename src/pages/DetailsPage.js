import React from "react";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import { Spinner } from "elements/Spinner";
import { useGetDetailPageQuery } from "features/api/apiSlice";
import NotFound from "./NotFound";
const DetailsPage = ({ match, ...props }) => {
  const { id } = match.params;
  const {
    data: detailPage = [],
    isLoading,
    isSuccess,
    isError,
  } = useGetDetailPageQuery(id);
  setTimeout(() => {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }, 3);

  const breadcrumb = [
    {
      pageTitle: "Home",
      pageHref: "",
    },
    {
      pageTitle: "House Details",
      pageHref: "",
    },
  ];
  let center;
  if (isLoading) {
    center = <Spinner />;
  } else if (isSuccess) {
    center = (
      <>
        <PageDetailTitle breadcrumb={breadcrumb} data={detailPage} />
        <FeaturedImage data={detailPage.imageId} />
        <section className="container px-5">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={detailPage} />
            </div>
            <div className="col-5">
              <BookingForm itemDetails={detailPage} history={props.history} />
            </div>
          </div>
        </section>
        <Categories data={detailPage.categoryId} />
        <Testimony data={detailPage.testimonial} />
      </>
    );
  } else if (isError) {
    center = <NotFound />;
  }
  return (
    <>
      <Header {...props} />
      {center}
      <Footer />
    </>
  );
};
export default DetailsPage;
