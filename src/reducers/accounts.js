export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';

export default function accounts (state = {}, action) {
  switch (action.type) {
    case UPDATE_ACCOUNT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
