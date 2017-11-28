export const API_REQUEST = 'API_REQUEST';

const httpRequest = store => next => action => {
  if (action.type !== API_REQUEST) {
    return next(action);
  }

  return fetch(action.request.API + action.request.query, {method: action.request.method})
    .then(response => response.json())
    .then(data => {
      return store.dispatch({type: action.call.success, payload: data})
    }, () => {
      return store.dispatch({type: action.call.fail})
    });
};


export default httpRequest;
