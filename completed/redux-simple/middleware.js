function count(state = 0, action) {
  switch (action.type) {
    case 'COUNT_UP':
      return state + 1;
    default:
      return state;
  }
}


const logger = ({ getState, dispatch }) => {
  return next => action => {
    console.log('Пришел экшен', action);

    let newValue = next(action);

    console.log('Повлекло изменения', newValue);

    return newValue;
  }
};


const reducers = Redux.combineReducers({
  count,
  countNew: count
});

const store = Redux.createStore(
  reducers,
  undefined,
  Redux.applyMiddleware(logger)
);


store.subscribe(() => {
  // console.log(store.getState())
});

store.dispatch({
  type: 'COUNT_UP'
});


