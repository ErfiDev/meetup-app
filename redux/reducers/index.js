import { combineReducers } from "redux";
import Toggle from "./toggle";
import { userReducer, userStatusReducer } from "./user";
import Favorites from "./favorites";

const Reducers = combineReducers({
  Toggle,
  User: userReducer,
  userStatus: userStatusReducer,
  Favorites,
});

export default Reducers;
