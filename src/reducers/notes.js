export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const REORDER_NOTE = "REORDER_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_ALL_NOTES = "DELETE_ALL_NOTES";

function notesReducer(state = [], action) {
  switch (action.type) {
    case DELETE_ALL_NOTES:
      return [];
    case ADD_NOTE:
      return [...state, action.note];
    case UPDATE_NOTE:
      return state.map(el => {
        if (action.note.id !== el.id) return el; else return {...action.note}
      });
    case REMOVE_NOTE:
      return state.filter(el => {
        return (action.id !== el.id);
      });
    case REORDER_NOTE:
      let from, to;
      state.forEach(function(item, i, arr) {
        if (item.id === action.fromId) from = {...item};
        if (item.id === action.toId) to = {...item};
      });
      return state.map(el => {
        if (action.fromId === el.id){
          return to;
        }
          if (action.toId === el.id) {
            return from;
        }
        return el;
      });
    default:
      return state;
  }
}

export default notesReducer;
