import { createStore, compose, applyMiddleware } from "redux";
import Reducers from "./reducers/index.js";
import Thunk from "redux-thunk";

const Store = createStore(Reducers, compose(applyMiddleware(Thunk)));

export default Store;
