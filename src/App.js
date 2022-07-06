import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "assets/scss/style.scss";

import Landingpage from "pages/LandingPage";
import Examples from "pages/Examples";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import NotFound from "pages/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landingpage}></Route>
          <Route exact path="/properties/:id" component={DetailsPage}></Route>
          <Route exact path="/examples" component={Examples}></Route>
          <Route exact path="/checkout/:id" component={Checkout}></Route>
          <Route path="/*" component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
