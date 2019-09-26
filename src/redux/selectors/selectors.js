export const getToken = state => state.session.token;

export const getLoader = state => state.userTasks.loader;

export const getSession = state => state.session;

export const getTasks = state => state.userTasks.tasks;

export const getInfoModal = state => state.modal.modalInfo;

export const getCalendarModal = state => state.modal.modalCalendar;

export const getDeleteModal = state => state.modal.modalDelete;

export const getNickname = state => state.session.nickname;
