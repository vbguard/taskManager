import { fetchPosts } from '../../utils/requests';

export const tasksTypes = {
  FETCH_TASKS_START: 'FETCH_TASKS_START',
  FETCH_TASKS_SUCCESS: 'FETCH_TASKS_SUCCESS',
  FETCH_TASKS_ERROR: 'FETCH_TASKS_ERROR'
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
