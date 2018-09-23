import React, { Component } from 'react';
import SignIn from './containers/SignIn/SignIn';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./Store";
import Posts from './components/Chart/Posts';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App" >
        <Posts/>
      </div>
      </Provider>
    )
  }
}

export default App;
