import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
const Login = () => {
    const {signInUsingGoogle} = useAuth()
    const location = useLocation()
    console.log('came from', location.state?.from)
    return (
        <div className="login-container">
            <div>
                <h1>Log in</h1>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-john? <Link to="/register">create account</Link></p>
                <div> --------------------- or ----------------------</div>
                <button onClick={signInUsingGoogle} className="btn-regular">Goolge sign in</button>
            </div>
        </div>
    );
};

export default Login;