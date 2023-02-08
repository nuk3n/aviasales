const defaultState = {
  filter: 'cheap',
};

// eslint-disable-next-line default-param-last
const filterReducer = (state = defaultState, action) => {
  const SET_FILTER = 'setFilter';
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

export default filterReducer;
