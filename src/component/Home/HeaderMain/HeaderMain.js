import React from 'react';
import Header from '../Header/Header';
import Footer from './component/Home/Footer/Footer';
import Service from './component/Home/Service/Service';

const HeaderMain = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default HeaderMain;