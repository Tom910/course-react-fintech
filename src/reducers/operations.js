import { createAction, createReducer } from 'redux-act';

export const UPDATE_OPERATION = 'UPDATE_OPERATION';

export const updateAction = createAction('UPDATE_OPERATION');

const operations = createReducer({
  [updateAction]: (state, payload) => ({ ...state, ...payload })
}, {});

export default operations;
