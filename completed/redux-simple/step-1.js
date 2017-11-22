function createStore(initalState) {
  let state = initalState;

  function getState() {
    return state;
  }

  return {
    getState
  }
}

var store = createStore(0);

console.log(store.getState());
