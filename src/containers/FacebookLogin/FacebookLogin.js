import React, { Component } from 'react';
import FacebookProvider, { Login } from 'react-facebook';

class FacebookLogin extends Component {
    handleResponse = (data) => {
        console.log(data);
      }
    
    handleError = (error) => {
    this.setState({ error });
    }

    render() { 
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
}
 
export default FacebookLogin;