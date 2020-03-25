import { combineReducers } from 'redux';
import { entities } from 'redux-entity';
import counter from './counter';
import todo from './todo';

export default combineReducers({
  entities,
  counter,
  todo
});
