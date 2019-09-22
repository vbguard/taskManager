import { tasksTypes } from '../actions/tasksActions';

const initialState = {
  tasks: null,
  loader: false,
  error: null
};

export const tasksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case tasksTypes.FETCH_TASKS_START:
      return { ...state, loader: payload };
    case tasksTypes.FETCH_TASKS_SUCCESS:
      return { ...state, tasks: payload, loader: false };
    case tasksTypes.FETCH_TASKS_ERROR:
      return { ...state, error: payload, loader: false };

    default:
      return state;
  }
};
