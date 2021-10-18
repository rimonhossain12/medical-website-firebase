import React from 'react';
import {  Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import aboutImg from '../../../images/about/2.jpg';
import './About.css';



const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mt-5">
                <h4 className="text-info fw-bold">About About Hospital Our Team Member always ready to give service</h4>
                <Row xs={1} md={2} lg={2} className="g-4">
                    <Col className="mt-3">
                    <img src={aboutImg} alt="" />
                    </Col>

                    <Col className="mt-5">
                    <h2 className="text-primary">What Type to treatment we are provided</h2>
                    <ol className="text-start ms-3">
                            <li>Adrenal glands</li>
                            <li>Anus</li>
                            <li>Appendix</li>
                            <li>Bladder (urinary)</li>
                            <li>Bone marrow (spongy part of the bone)</li>
                            <li>Brain</li>
                            <li>Bronchi (tubes in the lungs</li>
                            <li>Diaphragm (muscle of breathing)</li>
                            <li>Ears</li>
                            <li>Eyes</li>
                            <li>Gallbladder</li>
                            <li>Genitals</li>
                            <li>Hypothalamus (in the brain)</li>
                            <li>Kidneys</li>
                            <li>Large intestine</li>
                            <li>Larynx (voice box)</li>
                            <li>Liver</li>
                            <li>Lungs</li>
                            <li>Mammary glands</li>
                            <li>Mouth</li>
                    </ol>
                    </Col>

                </Row>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default About;