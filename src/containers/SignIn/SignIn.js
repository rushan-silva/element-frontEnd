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
import Service from '../../services/auth';
import Typography from '@material-ui/core/Typography';
import './SignIn.css';
import Image from '../../images/signIn_wallpaper.jpg'
import { Link } from 'react-router-dom';
import ErrorAlert from '../../components/AlertBars/AlertBarError';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          email: '',
          password: '',
          enableSubmit: false,
          popErrorAlert: false,
          errorMsg: 'Testing'
        }
    }

    handleChange = key => event => {
      const promise = new Promise((resolve) => {
          this.setState({ [key]: event.target.value });
          resolve(true);
      });

      promise.then((resolve) => {
          if (resolve) {
              if (!this.checkErrors()) {
                  this.setState({ enableSubmit: true });
              } else {
                  this.setState({ enableSubmit: false });
              }
          }
      });
    }

    checkErrors = () => {
      if (this.state.email === '' || this.state.password === '') {
        return true;
      } else {
        return false;
      }
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const userObj = {
        email: this.state.email,
        password: this.state.password,
      }

      Service.LogIn(userObj).then((response) => {
        console.log('res: ', response);
        if (response.success) {
          console.log('success');
        } else {
          this.setState({ popErrorAlert: true });
        }
      }).catch(err => {
        console.log('err: ', err);
      });

    }

    closeErrorAlertPopper = () => {
      this.setState({ popErrorAlert: false });
    }

    render() { 
        return ( 
          <div>
            <ErrorAlert close = { this.closeErrorAlertPopper } open = { this.state.popErrorAlert } message={this.state.errorMsg} />
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
                      <Input id="email" name="email" autoComplete="email" onChange={this.handleChange('email')} autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input
                        name="password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={this.handleChange('password')}
                      />
                    </FormControl>
                    <Button
                      type="submit"
                      fullWidth
                      variant="raised"
                      color="primary"
                      className="Submit"
                      style={{ marginTop: '20px' }}
                      disabled={!this.state.enableSubmit}
                      onClick={this.handleSubmit}
                    >
                      Sign in
                    </Button>
                    <Link to="/sign-up" style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)' }}>
                      <Button style={{ marginLeft: '135px', marginTop: '20px' }}>
                        Sign Up
                      </Button>
                    </Link>
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