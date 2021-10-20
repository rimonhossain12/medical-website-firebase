import React from 'react';
import { Link } from 'react-router-dom';
import './LoadService.css';

const LoadService = ({service}) => {
    const { id,name, doctorName, img, desription, Education } = service;
    return (
        <div>
            <div className="data-container">
                <img claName="img-fluid w-25" src={img} alt="" />
                <h4>Treatment: {name}</h4>
                <h5>DoctorName: {doctorName}</h5>
                <p>Education: {Education}</p>
                <p>{desription?.slice(0, 100)}</p>
                <Link to={`/booking/${id}`}>
                    <button className="btn btn-danger text-light">{name.toLowerCase()}</button>
                </Link>

            </div>
          </div>
    );
};

export default LoadService;