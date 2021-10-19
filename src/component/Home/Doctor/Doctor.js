import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import picture1 from '../../../images/doctor/1.jpg';
import picture2 from '../../../images/doctor/2.jpg';
import picture3 from '../../../images/doctor/3.jpg';
import picture4 from '../../../images/doctor/4.jpg';
import picture5 from '../../../images/doctor/5.jpg';
import picture6 from '../../../images/doctor/6.jpg';
import picture7 from '../../../images/doctor/7.jpg';
import picture8 from '../../../images/doctor/8.jpg';
import { Col, Row } from 'react-bootstrap';
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons';

const Doctor = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mt-5">
                <Row xs={1} md={3} lg={4}>
                    <Col className="mt-3 col-style">
                       
                        <img src={picture1} alt="" />
                        <h4 className="text-info">Dr.Ms Fatema Khatun</h4>
                        <span className="text-primary">From Span</span>
                    </Col>

                    <Col className="mt-3">
                        <img src={picture2} alt="" />
                        <h4 className="text-info">Dr.Ms Jessica</h4>
                        <span className="text-primary">From USA</span>
                    </Col>


                    <Col className="mt-3">
                        <img src={picture3} alt="" />
                        <h4 className="text-info">Dr.Ms.Karina"</h4>
                        <span className="text-primary">From Japan</span>

                    </Col>

                    <Col className="mt-3">
                        <img src={picture4} alt="" />
                        <h4 className="text-info">Dr.Taku</h4>
                        <span className="text-primary">From China</span>
                    </Col>

                    <Col className="mt-3">
                        <img src={picture5} alt="" />
                        <h4 className="text-info">Dr.Ms Karim</h4>
                        <span className="text-primary">From London</span>
                    </Col>

                    <Col className="mt-3">
                        <img src={picture6} alt="" />
                        <h4 className="text-info">Dr.Abullahil Khafi </h4>
                        <span className="text-primary">From British</span>
                    </Col>

                    <Col className="mt-3">
                        <img src={picture7} alt="" />
                        <h4 className="text-info">Dr.Kamal</h4>
                        <span className="text-primary">From Uganda</span>
                    </Col>

                    <Col className="mt-3">
                        <img src={picture8} alt="" />
                        <h4 className="text-info">Dr.Ms Natasha</h4>
                        <span className="text-primary">From Singapore</span>
                    </Col>
                </Row>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Doctor;