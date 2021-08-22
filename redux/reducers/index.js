import { combineReducers } from "redux";
import Toggle from "./toggle";
import User from "./user";

const Reducers = combineReducers({
  Toggle,
  User,
});

export default Reducers;
