import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import "assets/scss/style.scss";

import Landingpage from 'pages/LandingPage';
import Examples from 'pages/Examples'
import DetailsPage from 'pages/DetailsPage';
import Checkout from 'pages/Checkout'
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landingpage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route path="/examples" component={Examples}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        
      </Router>
    </div>
  );
}

export default App;
