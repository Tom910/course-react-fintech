function createStore(initalState) {
  let state = initalState;

  function getState() {
    return state;
  }

  function dispatch(action) {
    return action;
  }

  return {
    dispatch,
    getState
  }
}

var store = createStore(0);

store.dispatch({
  type: 'COUNT_UP'
});

console.log(store.getState());
