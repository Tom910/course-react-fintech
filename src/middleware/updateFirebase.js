import databaseInstants from '../services/database';

export const UPDATE_FIREBASE = 'UPDATE_FIREBASE';

const updateFirebase = store => next => action => {
  if (action.type !== UPDATE_FIREBASE) {
    return next(action);
  }

  const { database, payload } = action;

  databaseInstants.ref(database).push(payload);
};

export const updateFirebaseAction = (database, payload) => ({
  type: UPDATE_FIREBASE,
  database,
  payload
});

export default updateFirebase;
