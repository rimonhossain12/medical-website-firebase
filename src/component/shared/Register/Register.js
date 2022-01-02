import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Home/Footer/Footer';
import Banner from '../Banner/Banner';
import './Register.css';


const Register = () => {
    const { singInUsingGoogle, singInEmailPassword } = useAuth();
    console.log(useAuth());

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name,setName] = useState('');

    // handle name 
    const handleUseName = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }
    // handle email and password
    const handleRegistration = (e) => {
        console.log('button is click');
        e.preventDefault();
        singInEmailPassword(email, password, name);
        console.log(email, password,name);
    }

    // email for
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    // for password;
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div>
            <Banner></Banner>
           
            <div className="container">
                <div className="register-form mx-auto">
                    <h4 className="text-info pt-3">Please Registration</h4>
                    <input onBlur={handleUseName} type="email" name="email" id="" placeholder="your name " className="w-75 text-start form-control" />
                    <input onBlur={handleEmailChange} type="email" name="email" id="" placeholder="your email " className="w-75 text-start form-control" />
                    <input onBlur={handlePasswordChange} type="password" name="password" id="" placeholder="your password " className="w-75 text-start form-control" />
                    <input onClick={handleRegistration} class="btn btn-primary" type="submit" value="Submit" />

                    <br />
                    <button className="btn btn-primary me-1 mb-1 badge rounded-pill bg-warning text-light" onClick={singInUsingGoogle}>Sign In Google</button>
                    <button className="btn btn-primary badge rounded-pill bg-warning text-light">Sign In Github</button><br />
                    <Link to="/login">Already Register?</Link>
                </div>
            </div>
            <Footer></Footer>

        </div >
    );
};

export default Register;