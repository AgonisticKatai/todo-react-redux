import {
  FETCH_TASKS_INIT,
  FETCH_TASKS_SUCCES,
  FETCH_TASKS_FAILURE
} from "./types";

import API from "../api";

export function fetchTasks() {
  return async dispatch => {
    dispatch(() => {
      return {
        type: FETCH_TASKS_INIT
      };
    });
    try {
      const data = await API.tasks.getAll();
      return dispatch(fetchProductsSucces(data.tasks));
    } catch (error) {
      return dispatch(fetchProductsFailure(error));
    }
  };
}

export function fetchTasksSucces(tasks) {
  return {
    type: FETCH_TASKS_SUCCES,
    payload: tasks
  };
}

export function fetchTasksFailure(error) {
  return {
    type: FETCH_TASKS_FAILURE,
    payload: error
  };
}
