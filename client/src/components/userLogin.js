import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index';

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
            <div id="login">
            <h1 className="title"> Log In </h1>
                <form onSubmit={this.handleSubmit}>
                    <div class="field">
                      <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Email" ref= "email" value={this.state.email} onChange={this.handleChange} />
                        <span class="icon is-small is-left">
                          <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                          <i class="fas fa-check"></i>
                        </span>
                      </p>
                    </div>
                    <div class="field">
                      <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password" ref="password" value={this.state.password} onChange={this.handleChange} />
                        <span class="icon is-small is-left">
                          <i class="fas fa-lock"></i>
                        </span>
                      </p>
                    </div>
                    <div class="field">
                      <p class="control">
                        <button class="button is-success">
                          Login
                        </button>
                      </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {login})(Login);