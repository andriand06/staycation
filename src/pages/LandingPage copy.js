import React, { Component } from "react";
import Header from "parts/Header";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import Counter from "features/counter/Counter";
export default class Landingpage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Counter />
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.category}></Categories>
        <Testimony data={landingPage.testimonial}></Testimony>
        <Footer />
      </>
    );
  }
}
