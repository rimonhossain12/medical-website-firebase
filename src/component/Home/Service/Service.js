import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LoadService from '../LoadService/LoadService';
import './Service.css';


const Service = () => {

    // load data from local machine 
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/medicalProduct.json')
            .then(res => res.json())
            .then(data => setServices(data))
        // .then(data => console.log('data load form lcoal',data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container -mt-5">
                <h3 className="mt-5 text-primary mb-5 text-style fs-italic fst-italic">Our Twenty Four hour Emergency service</h3>
            <Row xs={1} md={2} xl={3} className="g-2">
                    {
                        services.map(service => <LoadService
                            service={service.id}
                            service={service}
                        >
                        </LoadService>)
                    }
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Service;