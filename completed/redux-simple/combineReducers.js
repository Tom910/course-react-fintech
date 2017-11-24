// <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.js"></script>

function createStore(reducer, initalState) {
  let state = initalState;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);

    listeners.forEach(listener => listener());

    return action;
  }

  function subscribe(listener) {
    listeners.push(listener);

    return function unsubscribe() {
      const index = listeners.indexOf(listener);

      listeners.splice(index, 1);
    };
  }

  dispatch({
    type: 'INIT'
  });

  return {
    subscribe,
    dispatch,
    getState
  }
}


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
}


const reducers = Redux.combineReducers({
  count,
  countNew: count
});

const store = createStore(
  reducers,
  undefined,
  Redux.applyMiddleware(logger)
);






console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState())
});

store.dispatch({
  type: 'COUNT_UP'
});


