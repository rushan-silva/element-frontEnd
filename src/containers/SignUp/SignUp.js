import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '@material-ui/core';
import Image from '../../images/signIn_wallpaper.jpg';
import './SignUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={{ height: '100%', minHeight: '100%', backgroundImage: `url(${Image})`, flex: '1', position: 'absolute', top: '0', bottom: '0', left: '0', right: '0' }}>
                <div id="login-box">
                    <div className="left">
                        <h1>Sign up</h1>
                        
                        <Input className="fieldStyle" type="text" name="username" placeholder="Username" />
                        <Input className="fieldStyle" type="text" name="email" placeholder="E-mail" />
                        <Input className="fieldStyle" type="password" name="password" placeholder="Password" />
                        <Input className="fieldStyle" type="password" name="password2" placeholder="Retype password" />
                        
                        <div className="row">
                            <div className="col-md-3">
                                <input className="submitBtn" type="submit" name="signup_submit" value="Sign me up" />
                            </div>
                            <div className="col-md-3">
                                <Button className="submitBtn">
                                    <Link to="/" style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)' }}>Sign In</Link>
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