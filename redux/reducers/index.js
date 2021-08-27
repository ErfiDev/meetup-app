import { combineReducers } from "redux";
import Toggle from "./toggle";
import { userReducer, userStatusReducer } from "./user";
import Favorites from "./favorites";
import Meetups from "./meetups";

const Reducers = combineReducers({
  Toggle,
  User: userReducer,
  userStatus: userStatusReducer,
  Favorites,
  Meetups,
});

export default Reducers;
