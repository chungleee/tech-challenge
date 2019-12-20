import axios from "axios";
import { FETCH_ALBUMS_BY_ID } from "./types";

export const handleGetUserAlbums = userId => {
  return async dispatch => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    );
    dispatch({
      type: FETCH_ALBUMS_BY_ID,
      payload: res.data
    });
  };
};
