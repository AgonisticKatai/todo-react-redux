import {
  FETCH_PENDING_TASKS_INIT,
  FETCH_PENDING_TASKS_SUCCES,
  FETCH_PENDING_TASKS_FAILURE,
  ADD_NEW_TASK_INIT,
  ADD_NEW_TASK_SUCCES,
  ADD_NEW_TASK_FAILURE
} from "./types";

import API from "../api";

export function fetchPendingTasks() {
  return async dispatch => {
    dispatch(() => {
      return {
        type: FETCH_PENDING_TASKS_INIT
      };
    });
    try {
      const data = await API.tasks.getPendingTasks();
      return dispatch(fetchPendingTasksSucces(data.tasks));
    } catch (error) {
      return dispatch(fetchPendingTasksFailure(error));
    }
  };
}

export function fetchPendingTasksSucces(tasks) {
  return {
    type: FETCH_PENDING_TASKS_SUCCES,
    payload: tasks
  };
}

export function fetchPendingTasksFailure(error) {
  return {
    type: FETCH_PENDING_TASKS_FAILURE,
    payload: error
  };
}

export function addNewTask(task) {
  return async dispatch => {
    dispatch(() => {
      return {
        type: ADD_NEW_TASK_INIT
      };
    });
    try {
      await API.tasks.addTask(task);
      return dispatch(addNewTaskSucces());
    } catch (error) {
      return dispatch(addNewTaskFailure(error));
    }
  };
}

export function addNewTaskSucces (task) {
  return {
    type: ADD_NEW_TASK_SUCCES,
    payload: task
  };
}

export function addNewTaskFailure (error) {
  return {
    type: ADD_NEW_TASK_FAILURE,
    payload: error
  };
}
