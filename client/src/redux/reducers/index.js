import { combineReducers } from "redux";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  usersState: usersReducer
});

export default rootReducer;
