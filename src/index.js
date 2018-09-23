import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';
import Home from './containers/Home/Home';
import EmotionAnalysisView from  './containers/Dashboard/EmotionView';


const target = document.getElementById('root');

ReactDOM.render(
    // <Router>
    //     <div>
    //         {/* <Route exact path="/" component={SignIn} /> */}
    //         <Route exact path="/" component={EmotionAnalysisView} />
    //         <Route path="/sign-up" component={SignUp} />
    //         <Route path="/home" component={Home} />
    //     </div>
    // </Router>,
    <App/>,
    target
);
registerServiceWorker();
//injectTapEventPlugin();
