import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import SignOut from './components/auth/signout';
import reducers from './reducers';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if (token) {
    store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory } >
      <Route path="/" component={ App }>
        <Route path="signin" component={ SignIn } />
        <Route path="signup" component={ SignUp } />
        <Route path="signout" component={ SignOut } />
        <Route path="feature" component={ RequireAuth(Feature) } />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
