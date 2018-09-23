import React, { Component } from 'react';
import FacebookProvider, { Login } from 'react-facebook';
import { Link } from 'react-router-dom';
import { Input, Button } from '@material-ui/core';
import Image from '../../images/signIn_wallpaper.jpg';
import Service from '../../services/auth';
import './SignUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fname: '',
            lname: '',
            email: '',
            password: '',
        }
    }

    getUserAccessToken = () => {
        return (
            <FacebookProvider appId="247872615946957">
                <Login
                scope="email"
                onResponse={this.handleResponse}
                onError={this.handleError}
                >
                <span>Login via Facebook</span>
                </Login>
            </FacebookProvider>
        );
    }

    handleChange = key => event => {
        this.setState({ [key]: event.target.value });
    }

    handleResponse = (data) => {
        const userObj = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            password: this.state.password,
            accessToken: data.tokenDetail.accessToken,
        }
        Service.SignUp(userObj).then(response => {
            console.log('res: ', response);
        }).catch(err => {
            console.log('err: ', err);
        });
    }
    
    handleError = (error) => {
        this.setState({ error });
    }

    render() {
        console.log('state: ', this.state);
        return (
            <div style={{ height: '100%', minHeight: '100%', backgroundImage: `url(${Image})`, flex: '1', position: 'absolute', top: '0', bottom: '0', left: '0', right: '0' }}>
                <div id="login-box">
                    <div className="left">
                        <h1>Sign up</h1>

                        <Input className="fieldStyle" type="text" name="fname" placeholder="First Name" onChange={this.handleChange('fname')}/>
                        <Input className="fieldStyle" type="text" name="lname" placeholder="Last Name" onChange={this.handleChange('lname')}/>
                        <Input className="fieldStyle" type="text" name="email" placeholder="Email" onChange={this.handleChange('email')}/>
                        <Input className="fieldStyle" type="password" name="password" placeholder="Password" onChange={this.handleChange('password')}/>
                        <Input className="fieldStyle" type="password" name="password2" placeholder="Retype password" />
                        
                        <div className="row">
                            <div className="col-md-3">
                                {/* <input className="submitBtn" type="submit" name="signup_submit" value="Sign me up" onClick={this.getUserAccessToken()} /> */}
                                <FacebookProvider appId="247872615946957">
                                    <Login
                                    scope="email"
                                    onResponse={this.handleResponse}
                                    onError={this.handleError}
                                    >
                                    <span className="submitBtn" style={{ padding: '5px' }}>Sign Me Up</span>
                                    </Login>
                                </FacebookProvider>
                            </div>
                            <div className="col-md-3">
                                <Button className="submitBtn">
                                    <Link to="/" style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)', marginTop: '5px' }}>Sign In</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                        
                    <div className="right">
                        <span className="loginwith">Sign in with<br />social network</span>
                        
                        <button className="social-signin facebook">Log in with facebook</button>
                        <button className="social-signin twitter">Log in with Twitter</button>
                        <button className="social-signin google">Log in with Google+</button>
                    </div>
                    <div className="or">OR</div>
                </div>
            </div>
        );
    }
}
 
export default SignUp;