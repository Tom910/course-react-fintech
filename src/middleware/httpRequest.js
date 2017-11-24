const httpRequest = store => next => action => {
  if (action.type !== 'API_REQUEST') {
    return next(action);
  }

  const {
    request: {
      API,
      method,
      query
    },
    call: {
      success,
      fail
    }
  } = action;

  return fetch(API + query, { method })
    .then(response => response.json())
    .then(data => {
      store.dispatch({ type: success, payload: data })
    })
    .catch((error) => {
      store.dispatch({ type: fail })
    });
};

export default httpRequest;
