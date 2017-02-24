import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  puppies: require('./puppies').default
});

export default rootReducer;
