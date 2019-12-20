import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import albumsReducer from "./albumsReducer";

const rootReducer = combineReducers({
  usersState: usersReducer,
  albumsState: albumsReducer
});

export default rootReducer;
