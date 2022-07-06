import React, { useEffect, useRef } from "react";
import Header from "parts/Header";
import { useGetLandingPageQuery } from "features/api/apiSlice";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import Counter from "features/counter/Counter";
import { Spinner } from "elements/Spinner";
import NotFound from "./NotFound";
const LandingPage = ({ ...props }) => {
  const {
    data: landingPage = [],
    isLoading,
    isSuccess,
    isError,
  } = useGetLandingPageQuery();
  const ref = useRef();
  useEffect(() => {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  });
  let content;
  if (isLoading) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = (
      <>
        <Counter />
        <Hero refMostPicked={ref} data={landingPage.hero} />
        <MostPicked refMostPicked={ref} data={landingPage.mostPicked} />
        <Categories data={landingPage.categoryId}></Categories>
        <Testimony data={landingPage.testimonial}></Testimony>
      </>
    );
  } else if (isError) {
    content = <NotFound />;
  }
  return (
    <>
      <Header {...props}></Header>
      {content}
      <Footer />
    </>
  );
};
export default LandingPage;
