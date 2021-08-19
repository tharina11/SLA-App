import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./main.css";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Services from "./Service/Services";
import Navbar from "./NavBar/NavBar";
import Carosel from "./Carousel/Carousel";

function MainBody() {
  return (
    <div className="Login-component">
      <Router>
      <Navbar />
      <div className="row">
        <div className="col col-lg-4 col-lg-4 col-sm-12">

        </div>
        <div className="col col-md-8 col-lg-8 col-sm-12">
        <Switch>
            <Route path="/" exact>
                <Carosel />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/service" exact>
              <Services />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
      

      </Router>
    </div>
  );
}

export default MainBody;
