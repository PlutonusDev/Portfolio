import home from './reducers/home';

import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

const createRootReducer = (history) => combineReducers({
  home,
  router: connectRouter(history),
});

export default createRootReducer;
