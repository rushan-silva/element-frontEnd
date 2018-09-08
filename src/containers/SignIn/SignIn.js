import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './signIn.css';
import Image from '../../images/signIn_wallpaper.jpg'
import { Link } from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          <div>
            <CssBaseline />
            <div style={{ backgroundImage: `url(${Image})`, height: '100%', width: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="Main">
              <div className="Layout">
                <Paper className="Paper">
                  <Avatar className="Avatar">
                    <LockIcon />
                  </Avatar>
                  <Typography variant="headline">Sign in</Typography>
                  <form className="Form">
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="email">Email Address</InputLabel>
                      <Input id="email" name="email" autoComplete="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input
                        name="password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                    </FormControl>
                    <Button
                      type="submit"
                      fullWidth
                      variant="raised"
                      color="primary"
                      className="Submit"
                      style={{ marginTop: '20px' }}
                    >
                      Sign in
                    </Button>
                    <Button style={{ marginLeft: '135px', marginTop: '20px' }}>
                      <Link to="/sign-up" style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)' }}>Sign Up</Link>
                    </Button>
                    <div style={{ marginLeft: '95px', marginTop: '20px' }}>
                      <a className="text" href="/">Forgot your password?</a>
                    </div>
                  </form>
                </Paper>
              </div>
            </div> 
          </div>
        );
    }
}

export default SignIn;