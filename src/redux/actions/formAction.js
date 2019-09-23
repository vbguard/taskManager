import axios from 'axios';

export const formTypes = {
  ADD_TASK_FORM_SUCCESS: 'ADD_TASK_FORM_SUCCESS',
  POST_TASK_LOADER: 'POST_TASK_LOADER',
  POST_TASK_SUCCSESS: 'POST_TASK_SUCCSESS',
  POST_TASK_ERROR: 'POST_TASK_ERROR'
};

export const formSuccess = (title, description) => ({
  type: formTypes.ADD_TASK_FORM_SUCCESS,
  payload: { title, description }
});

export const postTaskLoader = () => ({
  type: formTypes.POST_TASK_LOADER,
  payload: true
});

export const postTaskSuccsess = request => ({
  type: formTypes.POST_TASK_LOADER,
  payload: request
});
export const postTaskError = error => ({
  type: formTypes.POST_TASK_LOADER,
  payload: error
});

export const addTask = () => dispatch => {
  dispatch(postTaskLoader(true));
  axios
    .post('https://task-manager.goit.co.ua/api/task/create')
    .then(response => {
      console.log(response);
      dispatch(postTaskLoader(false));
      dispatch(postTaskSuccsess(response));
    })
    .catch(error => dispatch(postTaskError(error)));
};
