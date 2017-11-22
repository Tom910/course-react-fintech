import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

import subscribeFirebase from '../middleware/subscribeFirebase';
import updateFirebase from '../middleware/updateFirebase';

const store = createStore(
  rootReducer,
  applyMiddleware(subscribeFirebase, updateFirebase, thunk)
);

export default store;
