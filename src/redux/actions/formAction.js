export const formTypes = { ADD_TASK_FORM_SUCCESS: 'ADD_TASK_FORM_SUCCESS' };
export const formSuccess = (title, description) => ({
  type: formTypes.ADD_TASK_FORM_SUCCESS,
  payload: { title, description }
});
