import { tasksTypes } from '../actions/tasksActions';

export const tasksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case tasksTypes.FETCH_TASKS_SUCCES:
      return payload;

    default:
      return state;
  }
};
