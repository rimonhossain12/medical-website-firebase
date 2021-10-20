import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo3.jpg';


const Banner = () => {
    const { user, logOut} = useAuth();
    console.log('user is see from banner',user);
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img id="img-style"
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
                            <Nav.Link as={HashLink} to="/home#home" className="text-primary fw-bold">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/about#about" className="text-primary fw-bold">About</Nav.Link>
                            <Nav.Link as={HashLink} to="/service#service" className="text-primary fw-bold">Service</Nav.Link>
                            <Nav.Link as={HashLink} to="/doctor#doctor" className="text-primary fw-bold">Doctor</Nav.Link>
                            <Nav.Link as={HashLink} to="/client#client" className="text-primary fw-bold">Client</Nav.Link>
                            <Nav.Link as={HashLink} to="/register#register" className="text-primary fw-bold">Register</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact#contact" className="text-primary fw-bold">contact</Nav.Link>
                            <Nav.Link className="text-info fw-bold">{user?.displayName}</Nav.Link>

                            {
                                user.email ? <button className="badge rounded-pill btn-warning btn-style" onClick={logOut}>LogOut</button> :
                                    <Link to="/login"> <button className="badge rounded-pill btn-warning btn-style">LogIn</button></Link>

                            }

                            {/* <Link to="/login"></Link> */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Banner;