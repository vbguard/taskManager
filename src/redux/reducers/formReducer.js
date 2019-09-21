import { formTypes } from '../actions/formAction';

export const formReducer = (state = [], { type, payload }) => {
  switch (type) {
    case formTypes.ADD_TASK_FORM_SUCCESS:
      return [...state, payload];
    default:
      return state;
  }
};
