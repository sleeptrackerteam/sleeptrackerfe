import React, { Component }  from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = ({

        })
    }

    render() {
        return (
            <div>
                <h2>Please Log In</h2>
                <form onSubmit={this.props.loggedIn}>
                    <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={this.props.username}
                    onChange={this.props.handleChange}
                    />
                    <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={this.props.password}
                    onChange={this.props.handleChange}
                    />
                    <button type="submit">Login</button>
                </form>

            </div>
        )
    }
}

export default LoginPage;