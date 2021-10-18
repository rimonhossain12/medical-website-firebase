import React from 'react';
import About from './AboutUs/About';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;