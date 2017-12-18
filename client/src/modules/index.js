import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import counter from "./counter";
import pendingTasks from "../reducers/pendingTasks"

export default combineReducers({
  routing: routerReducer,
  pendingTasks
});
