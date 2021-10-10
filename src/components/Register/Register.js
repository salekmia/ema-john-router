import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css';
const Register = () => {
    return (
        <div className="login-container">
            <div>
                <h2>Create accout</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link> </p>
                <div>-------------- or --------------</div>
                <button className="btn-regular">Google sign in</button>
            </div>
        </div>
    );
};

export default Register;