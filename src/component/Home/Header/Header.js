import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo3.jpg';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="not show"
                            src={logo}
                            width="80"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className="text-primary fw-bold">Home</Nav.Link>
                            <Nav.Link href="#link" className="text-primary fw-bold">About</Nav.Link>
                            <Nav.Link href="#link" className="text-primary fw-bold">Service</Nav.Link>
                            <Nav.Link href="#link" className="text-primary fw-bold">contact</Nav.Link>
                            <button className="badge rounded-pill btn-warning btn-style">LogIn</button>
                            <button className="badge rounded-pill btn-warning btn-style">LogOut</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;