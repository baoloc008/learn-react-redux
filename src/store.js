import { combineReducers, createStore } from "redux";
import { counter } from "./reducer";

const rootReducer = combineReducers({ counter });
const store = createStore(rootReducer);

export default store;
