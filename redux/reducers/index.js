import { combineReducers } from "redux";
import Toggle from "./toggle";
import { userReducer, userStatusReducer } from "./user";

const Reducers = combineReducers({
  Toggle,
  User: userReducer,
  userStatus: userStatusReducer,
});

export default Reducers;
