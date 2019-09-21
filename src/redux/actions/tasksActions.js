import { fetchPosts } from '../../utils/requests';

export const tasksTypes = {
  FETCH_TASKS_START: 'FETCH_TASKS_START',
  FETCH_TASKS_SUCCES: 'FETCH_TASKS_SUCCES',
  FETCH_TASKS_ERROR: 'FETCH_TASKS_ERROR'
};

export const fetchTasksStart = () => ({
  type: tasksTypes.FETCH_TASKS_START,
  payload: true
});

export const fetchTasksSucces = tasks => ({
  type: tasksTypes.FETCH_TASKS_SUCCES,
  payload: tasks
});

export const fetchTasksError = error => ({
  type: tasksTypes.FETCH_TASKS_ERROR,
  payload: error.message
});

export const getUserTasks = token => dispatch => {
  dispatch(fetchTasksStart());

  fetchPosts(token)
    .then(resp => dispatch(fetchTasksSucces(resp.data.tasks)))
    .catch(error => dispatch(fetchTasksError(error)));
};
