import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import registerServiceWorker from './registerServiceWorker';

import BaseLayout from './components/BaseLayout';
import App from './containers/App';
import Register from './containers/Register';
import Login from './containers/Login';
import Dashboard from './components/Dashboard';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducers/reducer';

const store = createStore(
    reducer,
    applyMiddleware(reduxThunk)
);



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>

          <Route exact path="/" component={App} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />

        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
