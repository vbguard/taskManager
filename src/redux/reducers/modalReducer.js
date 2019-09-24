import { modalActionTypes } from "../actions/modalAction";

export const modalReducer = (state = false, { type, payload }) => {
  switch (type) {
    case modalActionTypes.OPEN_MODAL:
      return payload;
    case modalActionTypes.CLOSE_MODAL:
      return payload;
    default:
      return state;
  }
};
