import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import log1 from '../../../images/MedicalService/1.jpg';
import log2 from '../../../images/MedicalService/2.jpg';
import log3 from '../../../images/MedicalService/3.jpg';
import log4 from '../../../images/MedicalService/4.jpg';
import log5 from '../../../images/MedicalService/5.jpg';
import log6 from '../../../images/MedicalService/6.jpg';
import log7 from '../../../images/MedicalService/7.jpg';
import log8 from '../../../images/MedicalService/8.jpg';
import { Col, Row } from 'react-bootstrap';
import './MedicalService.css';

const MedicalService = () => {
    return (
        <div>
            <Header></Header>

           <div className="container mt-5 para-style">
               <h2 className="fw-bold">What kind of service we are provided</h2>
                <Row xs={1} md={3} lg={4} className="g-4">
                    <Col className="mt-5 para-style">
                        <img src={log1} alt="" />
                        <p className="text-start mt-2">24 hour ambulance service</p>
                    </Col>
                    <Col className="mt-5 para-style">
                        <img src={log2} alt="" />
                        <p className="text-start mt-2">Every night normal operation service</p>
                    </Col>
                    <Col className="mt-5 para-style">
                        <img src={log3} alt="" />
                        <p className="text-start mt-2">Every 2 days after our special surgery operation held</p>
                    </Col>

                    <Col className="mt-5 para-style">
                        <img src={log4} alt="" />
                        <p className="text-start mt-2">Best plastic surgy doctor come every 1 week later </p>
                    </Col>

                    <Col className="mt-5 para-style">
                        <img src={log5} alt="" />
                        <p className="text-start mt-2">Special eye doctor came everyday</p>
                    </Col>

                    <Col className="mt-5 para-style">
                        <img src={log6} alt="" />
                        <p className="text-start mt-2">Neuro Medicine doctor every days come</p>
                    </Col>

                    <Col className="mt-5 para-style">
                        <img src={log7} alt="" />
                        <p className="text-start mt-2">24 dentist are see patient </p>
                    </Col>

                    <Col className="mt-5 para-style">
                        <img src={log8} alt="" />
                        <p className="text-start mt-2">Cancer specialist come after 3 days later</p>
                    </Col>
                </Row>
           </div>

            <Footer></Footer>
        </div>
    );
};

export default MedicalService;