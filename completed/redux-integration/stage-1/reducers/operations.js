export const UPDATE_OPERATION = 'UPDATE_OPERATION';

export default function operations(state = {}, action) {
  switch (action.type) {
    case UPDATE_OPERATION:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
