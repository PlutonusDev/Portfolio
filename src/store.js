import {applyMiddleware, compose, createStore} from 'redux';
import {logger} from 'redux-logger';
import createRootReducer from './reducer';
import {promiseMiddleware, localStorageMiddleware} from './middleware';

import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';

export const History = createBrowserHistory();
const navRouter = routerMiddleware(History);

export default function configureStore(preloadedState) {
  const store = createStore(
      createRootReducer(History),
      preloadedState,
      compose(
          applyMiddleware(
              navRouter,
              promiseMiddleware,
              localStorageMiddleware,
              logger,
          ),
      ),
  );

  return store;
}
