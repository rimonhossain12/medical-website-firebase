import React from 'react';
import { Row } from 'react-bootstrap';
import './Footer.css';
import logo from '../../../images/logo4.jpg';
const Footer = (props) => {
    // const { faFacebook, faLinkedin, faGithub} = props;
    return (

        <div className="footer-section">
            <div className="container mt-5">
                <Row xs={1} md={2} lg={4} className="g-4">
                    <div className="mt-5">
                        <img id="img-id" className="mb-2" src={logo} alt="" />
                        <p className="text-left text-start fs-6">We are provided worldClass Treatment to our mind. We are believe human care is the best way to success. Please come to us and take service</p>
                    </div>

                    <div className="mt-5 text-start">
                        <h4 className="title-style">Opening Hour</h4>
                        <hr className="common-hr"/>
                        <p><span className="span-space">Monday-Friday</span> <span>8:00 Am - 4:00 Pm </span></p>
                        <p><span className="span-space">Monday-Friday</span> <span>8:00 Am - 4:00 Pm </span></p>
                        <p><span className="span-space">Monday-Friday</span> <span>8:00 Am - 4:00 Pm </span></p>
                        <p><span className="span-space">Monday-Friday</span> <span>8:00 Am - 4:00 Pm </span></p>
                    </div>

                    <div className="mt-5 text-start">
                        <h4 className="title-style">Our Best Doctor</h4>
                        <hr className="common-hr" />
                        <p>Dr.MD. Rizad Hasan</p>
                        <p>Dr.MD.Jabbor Ali</p>
                        <p>Dr.MD.Kamal Uddin</p>
                        <p>Dr.Halim khan</p>
                    </div>
                    <div className="mt-5 text-start">
                        <h4 className="title-style">Contact us</h4>
                        <hr className="common-hr" />
                        <p>House NO 27, Road No 07, East Road,</p>
                        <p>Dhaka Bangladesh</p>

                        <p>username@gmail.com</p>
                        <p>humarncarehospital@gmail.com</p>
                        <p>phone: 07123454345</p>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default Footer;