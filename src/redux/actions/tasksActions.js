import { fetchPosts, requestDeleteTask, requestUpdateTask } from '../../utils/requests';

export const tasksTypes = {
  FETCH_TASKS_START: 'FETCH_TASKS_START',
  FETCH_TASKS_SUCCESS: 'FETCH_TASKS_SUCCESS',
  FETCH_TASKS_ERROR: 'FETCH_TASKS_ERROR',
  DELETE_TASK_START: 'DELETE_TASK_START',
  DELETE_TASK_SUCCESS: 'DELETE_TASK_SUCCESS',
  DELETE_TASK_ERROR: 'DELETE_TASK_ERROR',
  TASK_DONE_START: 'TASK_DONE_START',
  TASK_DONE_SUCCESS: 'TASK_DONE_SUCCESS',
  TASK_DONE_ERROR: 'TASK_DONE_ERROR',
  EDIT_TASK_START: 'EDIT_TASK_START',
  EDIT_TASK_SUCCESS: 'EDIT_TASK_SUCCESS',
  EDIT_TASK_ERROR: 'EDIT_TASK_ERROR',
  SEARCH_TASKS: 'SEARCH_TASKS'
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

export const editTaskStart = () => ({
  type: tasksTypes.EDIT_TASK_START,
  payload: true
});

export const editTaskSuccess = id => ({
  type: tasksTypes.EDIT_TASK_SUCCESS,
  payload: id
});

export const editTaskError = error => ({
  type: tasksTypes.EDIT_TASK_ERROR,
  payload: error.message
});

export const deleteTask = data => dispatch => {
  dispatch(deleteTaskStart());
  requestDeleteTask(data)
    .then(resp => dispatch(deleteTaskSuccess(resp.data.taskId)))
    .catch(error => dispatch(deleteTaskError(error)));
};

export const doneTaskStart = () => ({
  type: tasksTypes.TASK_DONE_START,
  payload: true
});

export const doneTaskSuccess = id => ({
  type: tasksTypes.TASK_DONE_SUCCESS,
  payload: id
});

export const doneTaskError = error => ({
  type: tasksTypes.TASK_DONE_ERROR,
  payload: error.message
});

export const requestDoneTask = data => dispatch => {
  dispatch(doneTaskStart());
  requestUpdateTask(data)
    .then(resp => console.log(resp))
    .catch(err => dispatch(doneTaskError(err)));
};

export const editTask = data => dispatch => {
  dispatch(editTaskStart());
  requestUpdateTask(data)
    .then(resp => {
      dispatch(editTaskSuccess(resp.data));
    })
    .catch(error => dispatch(editTaskError(error)));
};

export const searchTasks = search => ({
  type: tasksTypes.SEARCH_TASKS,
  payload: search
});
