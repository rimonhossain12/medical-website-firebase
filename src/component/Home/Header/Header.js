import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo3.jpg';
import './Header.css';
import pic1 from '../../../images/carousel/1.jpg';
import pic2 from '../../../images/carousel/2.jpg';
import pic3 from '../../../images/carousel/5.jpg';




const Header = () => {
    return (
        <div>
            {/* navbar start */}
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
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
            {/* navbar ends */}

            {/* carousel start */}



            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-size"
                        src={pic1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="fw-bold">See our Medical Team responsibility</h3>
                        <p className="fw-bold">We are 100 Medical expert team they are always service patience and take care properly</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Our Mother Care Doctor</h3>
                        <p>Our Mother care doctor always support our pregnant mother all the situations</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Our Special Doctor Team</h3>
                        <p>They are always handle any serious moment patient.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* carousel ends */}
        </div>
    );
};

export default Header;