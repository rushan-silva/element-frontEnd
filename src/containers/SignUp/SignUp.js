import React, { Component } from 'react';
import Image from '../../images/signIn_wallpaper.jpg';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={{ height: '100%', minHeight: '100%', backgroundImage: `url(${Image})`, flex: '1', position: 'absolute', top: '0', bottom: '0', left: '0', right: '0' }}>
                <p style={{ color: 'white' }}>THIS</p>
                <p style={{ color: 'white' }}>IS</p>
                <p style={{ color: 'white' }}>FOR</p>
                <p style={{ color: 'white' }}>SIGN</p>
                <p style={{ color: 'white' }}>UP</p>
                <p style={{ color: 'white' }}>PAGE</p>
                <p style={{ color: 'white' }}>ENJOY!!!</p>
            </div>
        );
    }
}
 
export default SignUp;