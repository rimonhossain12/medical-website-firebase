import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import contImg from '../../../images/Clients/contact.jpg';
import { Col, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
           <Header></Header>
            <h5 className="mt-5 text-info text-bold">Our location details</h5>
            <hr className="w-25 mx-auto"/>
            <div className="d-flex container mt-5">
                <Row xs={1} md={2} xl={3} className="g-2">
                    <Col>
                    <img src={contImg}  alt="" />
                    </Col>
                    <Col className="ms-5">
                        <h4 className="text-center text-info">Where are our location?</h4>
                        <p className="text-start text-primary">Dhaka Banani 102, Dhaka Sheikh Kamal Hospital</p>
                      <p className="text-start text-primary">Phone: +8883012831038</p>

                        <p className="text-start text-primary">Email: rimonmpi@gmail.com</p>
                        <p className="text-start text-primary">Facebook: sheikhKamal.medical.hospital-230</p>

                    </Col>
                </Row>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Contact;