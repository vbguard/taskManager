export const getToken = state => {
  const session = getSession(state);

  return session.token;
};

export const getSession = state => state.session;
