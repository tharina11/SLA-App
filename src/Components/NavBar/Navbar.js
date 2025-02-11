import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import React from "react"
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

function Nav2() {
  return (
    <>
      {" "}
      <div className="navDiv">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="black"
          variant="dark"
          className="navbar2"
        >
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="../img/logo.jpg"
                alt="SLA Logo"
                className="logoImageNav2"
              />{" "}
              SRI LANKA ASSOCIATION
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">About Us</Nav.Link>
                <Nav.Link href="#pricing">Events</Nav.Link>

                <NavDropdown
                  title="More"
                  id="collasible-nav-dropdown"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="#action/3.1">Photo Gallery</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    committee Members
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    History
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Contact Us</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Become a member
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Nav2;
