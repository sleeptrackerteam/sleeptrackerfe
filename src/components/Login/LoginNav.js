import React from 'react';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

const LoginNav = (props) => {
    return (
        <div>
            <Link to="/login" component={LoginPage}>Log In</Link>
            <Link to="/register" component={SignUpPage}>Sign Up</Link>
        </div>
    )
}

export default LoginNav;