import React from 'react';
import axios from 'axios';

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

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    register = event => {
        event.preventDefault();
        if (this.state.password === this.state.verifypassword) {
            axios
                .post('https://sleeper-app.herokuapp.com/api/auth/register', {
                    fullname: this.state.fullname,
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                })
                .then(res => {
                    alert('Your account has been registered')
                })
                .catch(err => console.log('Error', err));
                this.setState({
                    fullname:"",
                    username:"",
                    email:"",
                    password:"",
                    verifypassword:""
                })
        }
    }

    render() {
        return (
            <div>
                <h2>Create An Account</h2>
                <form onSubmit={this.register}>
                    <input
                    type="text"
                    name="fullname"
                    placeholder="Enter your full name"
                    value={this.state.fullname}
                    onChange={this.handleChange}
                    />
                    <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    /><input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    /><input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                    <input
                    type="password"
                    name="verifypassword"
                    placeholder="Verify Password"
                    value={this.state.verifypassword}
                    onChange={this.handleChange}
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default SignUpPage;