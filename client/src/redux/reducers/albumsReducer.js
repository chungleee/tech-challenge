import { FETCH_ALBUMS_BY_ID } from "../actions/types";

const initialState = {
  albums: [],
  photos: []
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS_BY_ID:
      return {
        ...state,
        albums: action.payload
      };
    default:
      return state;
  }
};

export default albumsReducer;
