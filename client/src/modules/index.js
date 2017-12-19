import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import pendingTasks from "../reducers/pendingTasksReducer"

export default combineReducers({
  routing: routerReducer,
  pendingTasks
});
