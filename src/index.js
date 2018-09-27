import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './Store';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';
import Home from './containers/Home/Home';
import EmotionAnalysisView from  './containers/Dashboard/EmotionView';
import Progress from './components/CircularProgress';

const target = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            {/* <PersistGate loading={null} persistor={persistor}>*/}
                <div>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/emotion-analysis" component={EmotionAnalysisView} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/home" component={Home} />
                    <Route path="/progress" component={Progress} />
                </div>
            {/* </PersistGate>*/}
        </Router>
    </Provider>,
    target
);
registerServiceWorker();
//injectTapEventPlugin();
