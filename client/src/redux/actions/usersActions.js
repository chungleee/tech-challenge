import axios from "axios";
import { FETCH_USERS } from "./types";

export const handleFetchUsers = () => {
  return async dispatch => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      dispatch({
        type: FETCH_USERS,
        payload: res.data
      });
    } catch (error) {
      console.error(error);
    }
  };
};
