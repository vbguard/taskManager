import { formTypes } from '../actions/formAction';

const initialState = { title: '', description: '', error: null, loader: false };

export const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case formTypes.ADD_TASK_FORM_REQUEST:
      return { ...initialState, loader: true };
    case formTypes.ADD_TASK_FORM_SUCCESS:
      return {
        ...state,
        title: payload.title,
        description: payload.description
      };
    case formTypes.ADD_TASK_FORM_ERROR:
      return { ...state, error: payload.error };
    default:
      return state;
  }
};
