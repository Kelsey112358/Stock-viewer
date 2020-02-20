import { combineReducers } from 'redux';
import globalsReducer from './global/reducer';
import pageReducers from './pageReducers';

const makeRootReducer = () =>
  combineReducers({
    global: globalsReducer,
    ...pageReducers,
  });

export default makeRootReducer;
