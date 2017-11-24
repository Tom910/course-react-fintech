function createStore(reducer, initalState) {
  let state = initalState;

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);

    return action;
  }

  return {
    dispatch,
    getState
  }
}

function count(state, action) {
  switch (action.type) {
    case 'COUNT_UP':
      return state + 1;
    default:
      return state;
  }
}

var store = createStore(count, 0);

store.dispatch({
  type: 'COUNT_UP'
});

console.log(store.getState());
