import {
  FETCH_PENDING_TASKS_INIT,
  FETCH_PENDING_TASKS_SUCCES,
  FETCH_PENDING_TASKS_FAILURE,
  ADD_NEW_TASK_INIT,
  ADD_NEW_TASK_SUCCES,
  ADD_NEW_TASK_FAILURE
} from "../actions/types";

import initialState from "./initialState";

export default function pendingTasksReducer(
  state = initialState.pendingTasks,
  action
) {
  switch (action.type) {
    case FETCH_PENDING_TASKS_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_PENDING_TASKS_SUCCES:
      return {
        ...state,
        tasks: action.payload,
        error: null,
        loading: false,
        total: action.payload.length
      };
    case FETCH_PENDING_TASKS_FAILURE:
      return {
        ...state,
        tasks: [],
        error: action.payload,
        loading: false
      };
    case ADD_NEW_TASK_INIT:
      return {
        ...state,
        error: null,
        loading: true
      };
    case ADD_NEW_TASK_SUCCES:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        error: null,
        loading: false
      };
    case ADD_NEW_TASK_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state;
  }
}
