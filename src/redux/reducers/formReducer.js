import { formTypes } from '../actions/formAction';

const initialState = {};

export const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case formTypes.ADD_TASK_FORM_SUCCESS:
      return {
        ...state,
        title: payload.title,
        description: payload.description
      };
    case formTypes.POST_TASK_SUCCSESS:
      return payload;
    case formTypes.POST_TASK_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
