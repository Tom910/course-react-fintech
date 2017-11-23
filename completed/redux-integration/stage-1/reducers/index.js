import { combineReducers } from 'redux'
import accounts from './accounts';
import operations from './operations';
import user from './user';

const rootReducer = combineReducers({
  accounts,
  operations,
  user
});

export default rootReducer;
