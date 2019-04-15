import React from 'react';

class LoginPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h2>Please Log In</h2>
                <form onSubmit={}>
                    <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={}
                    onChange={}
                    />
                    <input
                    type="text"
                    name="password"
                    placeholder="Enter password"
                    value={}
                    onChange={}
                    />
                    <button type="submit">Login</button>
                </form>

            </div>
        )
    }
}

export default LoginPage;