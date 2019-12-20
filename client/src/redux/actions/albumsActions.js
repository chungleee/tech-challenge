import axios from "axios";
import { FETCH_ALBUMS_BY_USERID, FETCH_ALBUM_BY_ID } from "./types";

export const handleGetUserAlbums = userId => {
  return async dispatch => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
      );
      dispatch({
        type: FETCH_ALBUMS_BY_USERID,
        payload: res.data
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const handleGetAlbumById = albumId => {
  try {
    return async dispatch => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      );

      dispatch({
        type: FETCH_ALBUM_BY_ID,
        payload: res.data
      });
    };
  } catch (error) {
    console.error(error);
  }
};
