const httpRequest = store => next => action => {
  if (action.type !== 'API_REQUEST') {
    return next(action);
  }

  const accc = {
    type: 'API_REQUEST',
    request: {
      method,
      type,
      query
    },
    call: {
      success: 'ad',
      fail: ''
    }
  };

  const { callType, failType, method = 'get', payload, request, } = action;

  fetch(API + method)
    .then(response => response.json())
    .then(data => {
      store.dispatch({ type: callType, payload: data })
    });
};

export default;
