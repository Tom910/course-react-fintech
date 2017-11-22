import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

import subscribeFirebase from '../middleware/subscribeFirebase';
import updateFirebase from '../middleware/updateFirebase';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(subscribeFirebase, updateFirebase))
);

export default store;
