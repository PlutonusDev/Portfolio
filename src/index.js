import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore, {History} from './store';

import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';

import Root from './components/root';

const Store = configureStore();

ReactDOM.render((
  <Provider store={Store}>
    <ConnectedRouter history={History}>
      <Switch>
        <Route path="/" render={() => (<Root />)} />
      </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
