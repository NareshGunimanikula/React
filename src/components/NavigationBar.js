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
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-us">Contact Us</Nav.Link>
            <Nav.Link href="/contact-us">About Us</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            {/* <Form inline> */}
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            
            {/* <Button variant="outline-success">Search</Button> */}
            {/* </Form> */}
        </Navbar.Collapse>
    </Navbar>
    );
}

export default NavigationBar;