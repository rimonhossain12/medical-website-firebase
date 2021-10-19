import React from 'react';
import Header from '../Header/Header';
import './LoadService.css';

const LoadService = (props) => {
    const { name, doctorName, img, desription, Education } = props.service;
    // console.log(name, doctorName, img, desription, Education);
    return (
        <div>
            <div className="data-container">
                <img claName="img-fluid w-25" src={img} alt="" />
                <h4>Treatment: {name}</h4>
                <h5>DoctorName: {doctorName}</h5>
                <p>Education: {Education}</p>
                <p>{desription?.slice(0,100)}</p>
                
            </div>
            
        </div>
    );
};

export default LoadService;