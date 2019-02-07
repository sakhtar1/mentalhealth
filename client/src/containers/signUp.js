import React, { Component } from 'react';
// import ReactSignupLoginComponent from 'react-signup-login-component';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../actions/index';

class Signup extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signup()
        alert("Your profile has been created!")
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
                <h1 className="title"> Sign Up </h1>
                  <form onSubmit={this.handleSubmit}>
                      <div className="field">
                        <p className="control has-icons-left has-icons-right">
                          <input className="input" type="email" placeholder="Email" ref= "email" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} />
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
                          <input className="input" type="password" placeholder="Password" ref="password" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                          <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <p className="control has-icons-left">
                          <input className="input" type="password-confirm" placeholder="Confirm-Password" ref="password-confirm" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                          <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <p className="control">
                          <button className="button is-success">
                            Signup
                          </button>
                        </p>
                        <div>
                          <p> 
                            Already have an account? 
                            <br></br>
                            <br></br>
                              <Link to={"/login"}>
                                <button> Login </button>
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

export default connect(null, {signup})(Signup);
 
// const LoginPage = (props) => {
//     const signupWasClickedCallback = (data) => {
//       console.log(data);
//       alert('Signup callback, see log on the console to see the data.');
//     };
//     const loginWasClickedCallback = (data) => {
//       console.log(data);
//       alert('Login callback, see log on the console to see the data.');
//     };
//     const recoverPasswordWasClickedCallback = (data) => {
//       console.log(data);
//       alert('Recover password callback, see log on the console to see the data.');
//     };
//     return (
//         <div>
//         <br></br>
//         <br></br>
//             <ReactSignupLoginComponent
//                 title="Mental Health"
//                 handleSignup={signupWasClickedCallback}
//                 handleLogin={loginWasClickedCallback}
//                 handleRecoverPassword={recoverPasswordWasClickedCallback}
//             />
//         </div>
//     );
// };
 
// export default LoginPage;