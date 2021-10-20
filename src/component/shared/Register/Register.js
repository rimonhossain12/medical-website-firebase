import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';


const Register = () => {
    const { singInUsingGoogle, singInWithEmail,getEmail,getPassowrd } = useAuth();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // handle email and password
    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(email, password)
    }

    // email for
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    // for password;
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="container">
            <div className="register-form mx-auto">
                <h4 className="text-info pt-3">Please Registration</h4>
                <input onBlur={handleEmailChange} type="email" name="email" id="" placeholder="your email " className="w-75 text-start form-control" />
                <input onBlur={handlePasswordChange} type="password" name="password" id="" placeholder="your password " className="w-75 text-start form-control" />
                <input class="btn btn-primary" type="submit" value="Submit" />

                <br />
                <button className="btn btn-primary me-1 mb-1 badge rounded-pill bg-warning text-light" onClick={singInUsingGoogle}>Sign In Google</button>
                <button className="btn btn-primary badge rounded-pill bg-warning text-light">Sign In Github</button><br />
                <Link to="/login">Already Register?</Link>
            </div>

        </div >
    );
};

export default Register;