import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import logo from "./logo.jpg";

function Navbar() {
  return (
    <>
      <div className="row mainrowd">
        <div className="col-sm-12 col-md-4 col-xl-4 div1">
          <img src={logo} alt="SLA Logo" className="logoImage" />
        </div>

        <div className="col-sm-12 col-md-4 col-xl-4 div2">
          <div className="col-sm-12 col-md-4 col-xl-4 div2child child midchild">
            <div className="dropdown">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-xl-4 div3">
          <div className="col-sm-12 col-md-4 col-xl-4 div2child child linkchild">
            <div className="dropdown">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                News/Events
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <NavLink className="dropdown-item" to="/service" exact>
                  Something else here
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-xl-4 div2child child">
            <div className="dropdown">
              <NavLink to="/service" exact>
                <p>About Us</p>
              </NavLink>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-xl-4 div2child child">
            <div className="dropdown">
              <NavLink to="/service" exact>
                <p>Donation</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
