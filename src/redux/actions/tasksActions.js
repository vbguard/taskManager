import { requestDeleteTask } from '../../utils/requests';

export const tasksTypes = {
  FETCH_TASKS_REQUEST: 'FETCH_TASKS_REQUEST',
  FETCH_TASKS_SUCCESS: 'FETCH_TASKS_SUCCESS',
  FETCH_TASKS_ERROR: 'FETCH_TASKS_ERROR',
  DELETE_TASK_START: 'DELETE_TASK_START',
  DELETE_TASK_SUCCESS: 'DELETE_TASK_SUCCESS',
  DELETE_TASK_ERROR: 'DELETE_TASK_ERROR'
};

export const fetchTasksSuccess = tasks => ({
  type: tasksTypes.FETCH_TASKS_SUCCESS,
  payload: tasks
});

export const fetchTasksError = error => ({
  type: tasksTypes.FETCH_TASKS_ERROR,
  payload: error.message
});

export const getUserTasks = () => ({
  type: tasksTypes.FETCH_TASKS_REQUEST,
  payload: {
    request: {
      method: 'GET',
      url: '/tasks'
    },

    options: {
      onSuccess({ dispatch, response }) {
        dispatch(fetchTasksSuccess(response.data.tasks));
      },
      onError({ dispatch, error }) {
        dispatch(fetchTasksError(error));
      }
    }
  }
});

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

export const deleteTask = data => dispatch => {
  dispatch(deleteTaskStart());
  requestDeleteTask(data)
    .then(resp => dispatch(deleteTaskSuccess(resp.data.taskId)))
    .catch(error => dispatch(deleteTaskError(error)));
};
