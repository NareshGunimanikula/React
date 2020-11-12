import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';
import ReactDom from 'react-dom';

const NavigationBar = () =>{
    return(
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">My Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mr-sm-2" inline="true" >
                <Nav.Link href="/Login" >Log In</Nav.Link>
                <Nav.Link href="/SignUp">Sign Up</Nav.Link>
            </Nav>           
        </Navbar.Collapse>
    </Navbar>
    );
}

export default NavigationBar;