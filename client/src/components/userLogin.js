import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/index';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login()
    }

    handleChange = event => {
        this.setState({
            [event.target.ref]: event.target.value
          });
    } 

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" ref="email" value={this.state.email} onChange={this.handleChange} />
                    <label htmlFor="password">Password</label>
                    <input type="password" ref="password" value={this.state.password} onChange={this.handleChange} />
                    <input type="submit">Login</input>
                </form>
            </div>
        )
    }
}

export default connect(null, {login})(Login);