import { fetchPosts, requestDeleteTask } from "../../utils/requests";

export const tasksTypes = {
  FETCH_TASKS_START: "FETCH_TASKS_START",
  FETCH_TASKS_SUCCESS: "FETCH_TASKS_SUCCESS",
  FETCH_TASKS_ERROR: "FETCH_TASKS_ERROR",
  DELETE_TASK_START: "DELETE_TASK_START",
  DELETE_TASK_SUCCESS: "DELETE_TASK_SUCCESS",
  DELETE_TASK_ERROR: "DELETE_TASK_ERROR"
};

export const fetchTasksStart = () => ({
  type: tasksTypes.FETCH_TASKS_START,
  payload: true
});

export const fetchTasksSuccess = tasks => ({
  type: tasksTypes.FETCH_TASKS_SUCCESS,
  payload: tasks
});

export const fetchTasksError = error => ({
  type: tasksTypes.FETCH_TASKS_ERROR,
  payload: error.message
});

export const getUserTasks = token => dispatch => {
  dispatch(fetchTasksStart());

  fetchPosts(token)
    .then(resp => dispatch(fetchTasksSuccess(resp.data.tasks)))
    .catch(error => dispatch(fetchTasksError(error)));
};

export const deleteTaskStart = () => ({
  type: tasksTypes.DELETE_TASK_START,
  payload: true
});

export const deleteTaskSuccess = id => ({
  type: tasksTypes.DELETE_TASK_SUCCESS,
  payload: id
});

export const deleteTaskError = error => ({
  type: tasksTypes.DELETE_TASK_ERROR,
  payload: error.message
});

export const deleteTask = token => dispatch => {
  dispatch(deleteTaskStart());
  requestDeleteTask();
  //   fetchPosts(token)
  //     .then(resp => dispatch(fetchTasksSuccess(resp.data.tasks)))
  //     .catch(error => dispatch(fetchTasksError(error)));
};
