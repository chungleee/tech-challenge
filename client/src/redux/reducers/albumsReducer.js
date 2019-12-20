import { FETCH_ALBUMS_BY_USERID, FETCH_ALBUM_BY_ID } from "../actions/types";

const initialState = {
  albums: [],
  photos: []
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS_BY_USERID:
      return {
        ...state,
        albums: action.payload
      };
    case FETCH_ALBUM_BY_ID:
      return {
        ...state,
        photos: action.payload
      };
    default:
      return state;
  }
};

export default albumsReducer;
