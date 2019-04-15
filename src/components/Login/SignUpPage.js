import React from 'react';

class SignUpPage extends React.Component {
    constructor() {
        super();
        this.state = {
            fullname:"",
            username:"",
            email:"",
            password:"",
            verifypassword:""
        };
    }

    render() {
        return (
            <div>
                <h2>Create An Account</h2>
                <form onSubmit={}>
                    <input
                    type="text"
                    name="fullname"
                    placeholder="Enter your full name"
                    value={this.state.fullname}
                    onChange={}
                    />
                    <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={this.state.username}
                    onChange={}
                    /><input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={}
                    /><input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={}
                    />
                    <input
                    type="password"
                    name="verifypassword"
                    placeholder="Verify Password"
                    value={this.state.verifypassword}
                    onChange={}
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default SignUpPage;