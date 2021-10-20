import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router';
import './Booking.css';


const Booking = () => {
    const  { serviceId } = useParams();
    const [service, setService] = useState({})
    console.log('service id = ', serviceId);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/rimonhossain12/fake-data/main/medicalProduct.json')
        .then(res => res.json())
        .then(data => {
        const selected =    data.find(service=>service.id === serviceId)
        setService(selected)
        })
    },[])

    return (
        <div className="container">
           <div className="booking-div">
                <img className="img-style" src={service?.img} alt="" />
                <h4 className="text-info fw-bold">{service?.name}</h4>
                <h5 className="text-info fw-normal">{service?.doctorName}</h5>
                <p className="text-primary">Education: {service?.Education}</p>
                <p className="text-start ms-3 ">{service?.desription}</p>

           </div>
           

           {/*  // <h2>This is booking: {service?.name}</h2> */}
        </div>
    );
};
export default Booking;