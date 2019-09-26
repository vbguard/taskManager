import { fetchAddForm } from '../../utils/requests';

export const formTypes = {
  ADD_TASK_FORM_SUCCESS: 'ADD_TASK_FORM_SUCCESS',
  ADD_TASK_FORM_LOADER: 'ADD_TASK_FORM_LOADER',
  ADD_TASK_FORM_ERROR: 'ADD_TASK_FORM_ERROR'
};

export const postTaskStart = bool => ({
  type: formTypes.ADD_TASK_FORM_LOADER,
  payload: bool
});

export const postTaskSuccess = task => ({
  type: formTypes.ADD_TASK_FORM_SUCCESS,
  payload: { task }
});
export const postTaskError = error => ({
  type: formTypes.ADD_TASK_FORM_ERROR,
  payload: { error }
});

export const addTask = data => (dispatch, getState) => {
  const store = getState();

  dispatch(postTaskStart(true));

  fetchAddForm(data, store.session.token)
    .then(response => {
      dispatch(postTaskStart(false));
      dispatch(postTaskSuccess(response.data.task));
    })
    .catch(error => dispatch(postTaskError(error)));
};
