const defaultState = {
  status: 'finished',
};

// eslint-disable-next-line default-param-last
const statusReducer = (state = defaultState, action) => {
  const SET_STATUS = 'setStatus';
  switch (action.type) {
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export default statusReducer;
