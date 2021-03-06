import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions/userActions';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login()
        alert("Logged in!")
        this.props.history.push('/articles') 
    }

    handleChange = event => {
        this.setState({
            [event.target.ref]: event.target.value
          });
    } 

    render(){
        return(
          <div>
              <div id="login">
                <h1 className="title"> Log In </h1>
                  <form onSubmit={this.handleSubmit}>
                      <div className="field">
                        <p className="control has-icons-left has-icons-right">
                          <input className="input" type="email" placeholder="Email" ref= "email" value={this.state.email} onChange={this.handleChange} />
                          <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                          </span>
                          <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <p className="control has-icons-left">
                          <input className="input" type="password" placeholder="Password" ref="password" value={this.state.password} onChange={this.handleChange} />
                          <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <p className="control">
                          <button className="button is-success">
                            Login
                          </button></p>
                          <br></br>
                          <div>     
                                Don't have an account?
                                <br></br>
                                <br></br>
                              <p>
                                <Link to={"/signup"}>
                                  <button> Sign Up </button>
                                </Link>
                              </p>
                              
                            </div>
                       
                      </div>
                  </form>
              </div>
          </div>
        )
    }
}

export default connect(null, {login})(Login);