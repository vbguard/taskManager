import { tasksTypes } from '../actions/tasksActions';
import { formTypes } from '../actions/formAction';

const initialState = {
  tasks: null,
  loader: false,
  error: null,
  search: ''
};

export const tasksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case tasksTypes.FETCH_TASKS_START:
      return { ...state, loader: payload };
    case tasksTypes.FETCH_TASKS_SUCCESS:
      return { ...state, tasks: payload, loader: false };
    case tasksTypes.FETCH_TASKS_ERROR:
      return { ...state, error: payload, loader: false };
    case tasksTypes.DELETE_TASK_START:
      return { ...state, loader: payload };
    case tasksTypes.DELETE_TASK_SUCCESS:
      return {
        ...state,
        loader: false,
        tasks: state.tasks.filter(el => el._id !== payload)
      };
    case tasksTypes.DELETE_TASK_ERROR:
      return { ...state, error: payload, loader: false };
    case tasksTypes.EDIT_TASK_START:
      return { ...state, loader: payload };
    case tasksTypes.EDIT_TASK_SUCCESS:
      return {
        ...state,
        loader: false,
        tasks: state.tasks.find(el => el._id === payload)
      };
    case tasksTypes.EDIT_TASK_ERROR:
      return { ...state, error: payload, loader: false };
    case formTypes.ADD_TASK_FORM_SUCCESS:
      const newTask = payload.task;
      return { ...state, tasks: [newTask, ...state.tasks] };
    case tasksTypes.SEARCH_TASKS:
      return { ...state, search: payload };
    default:
      return state;
  }
};
