import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MedicalService from './MedicalService/MedicalService';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <MedicalService></MedicalService>
            <Footer></Footer>
        </div>
    );
};

export default Home;