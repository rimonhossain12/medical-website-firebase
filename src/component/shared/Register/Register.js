import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="text" name="" id="" />
                <br />
                <input type="password" name="" id="" /><br />
                <input type="submit" name="Submit" /><br />
                <br />
            </form>
            <Link to="/login">Already Register</Link>
        </div>
    );
};

export default Register;