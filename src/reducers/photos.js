export const PHOTO_LOADED = 'PHOTO_LOADED';

export default function photos(state = [], action) {
  switch (action.type) {
    case PHOTO_LOADED:
      return [
        ...state,
        ...action.photos
      ];
    default:
      return state;
  }
}


const urlRandomPhoto = 'https://api.unsplash.com/photos/random?client_id=cef673c119a4369af6491013ad909cdc96e1cebb4fe8449d4c9837d1ce152f7a&count=10';

export const loadPhoto = (dispatch, getState) => {
  return fetch(urlRandomPhoto)
    .then(response => response.json())
    .then(data => {
      return dispatch({ type: PHOTO_LOADED, photos: data })
    });
};
