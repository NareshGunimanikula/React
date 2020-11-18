import React, { Component } from "react";
// import {
//   Navbar,
//   Nav,
//   NavDropdown,
//   Form,
//   Button,
//   FormControl,
// } from "react-bootstrap";
import SignUp from './SignUp';
import Login from './Login';
import {Link} from 'react-router-dom';


const NavigationBar = () => {
  return (
    //     <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    //     <Navbar.Brand href="#home">My Blog</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    //         <Nav className="mr-sm-2" inline="true" >
    //             <Nav.Link href="/Login" >Log In</Nav.Link>
    //             <Nav.Link href="/SignUp">Sign Up</Nav.Link>
    //         </Nav>
    //     </Navbar.Collapse>
    // </Navbar>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="#" >
            My Blog
          </Link>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/SignUp"}>
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
  );
};

export default NavigationBar;
