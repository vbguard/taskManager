export const modalActionTypes = {
  MODAL_INFO_OPEN: 'MODAL_INFO_OPEN',
  MODAL_INFO_CLOSE: 'MODAL_INFO_CLOSE',
  MODAL_CALENDAR_OPEN: 'MODAL_CALENDAR_OPEN',
  MODAL_CALENDAR_CLOSE: 'MODAL_CALENDAR_CLOSE',
  MODAL_DELETE_OPEN: 'MODAL_DELETE_OPEN',
  MODAL_DELETE_CLOSE: 'MODAL_DELETE_CLOSE'
};

export const openInfoModal = () => ({
  type: modalActionTypes.MODAL_INFO_OPEN,
  payload: true
});

export const closeInfoModal = () => ({
  type: modalActionTypes.MODAL_INFO_CLOSE,
  payload: false
});

export const openCalendarModal = () => ({
  type: modalActionTypes.MODAL_CALENDAR_OPEN,
  payload: true
});

export const closeCalendarModal = () => ({
  type: modalActionTypes.MODAL_CALENDAR_CLOSE,
  payload: false
});

export const openDeleteModal = () => ({
  type: modalActionTypes.MODAL_DELETE_OPEN,
  payload: true
});

export const closeDeleteModal = () => ({
  type: modalActionTypes.MODAL_DELETE_CLOSE,
  payload: false
});
