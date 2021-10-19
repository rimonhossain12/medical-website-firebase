import React from 'react';
import { Link } from 'react-router-dom';
import notImg from '../../../images/404.jpg';


const NotFound = () => {
    return (
        <div>
            <img src={notImg} alt="" className="w-50"/><br />
            <Link to="/home">
                <button className="btn btn-warning text-light">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;