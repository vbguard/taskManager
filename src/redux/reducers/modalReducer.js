import { modalActionTypes } from '../actions/modalAction';

const initialState = {
  modalInfo: false,
  modalCalendar: false,
  modalDelete: false
};

export const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case modalActionTypes.MODAL_INFO_OPEN:
      return { ...state, modalInfo: payload };
    case modalActionTypes.MODAL_INFO_CLOSE:
      return { ...state, modalInfo: payload };
    case modalActionTypes.MODAL_CALENDAR_OPEN:
      return { ...state, modalCalendar: payload };
    case modalActionTypes.MODAL_CALENDAR_CLOSE:
      return { ...state, modalCalendar: payload };
    case modalActionTypes.MODAL_DELETE_OPEN:
      return { ...state, modalDelete: payload };
    case modalActionTypes.MODAL_DELETE_CLOSE:
      return { ...state, modalDelete: payload };
    default:
      return state;
  }
};
