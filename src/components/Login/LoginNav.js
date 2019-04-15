import React from 'react';
import { Link } from 'react-router-dom';

const LoginNav = (props) => {
    return (
        <div>
            <Link to="/login">Log In</Link>
            <Link to="/register">Sign Up</Link>
        </div>
    )
}

export default LoginNav;