import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import LoadService from './LoadService/LoadService';
import MedicalService from './MedicalService/MedicalService';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <MedicalService></MedicalService>
            {/* <LoadService></LoadService> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;