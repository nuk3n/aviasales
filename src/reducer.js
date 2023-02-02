const initialState = {
  filter: 'cheap',
  transfer: {
    all: false,
    without: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
};

const allFilter = (obj, checked) => {
  const newObj = { ...obj };
  Object.keys(newObj).forEach((el) => {
    newObj[el] = checked;
  });
  return newObj;
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  const stateTransfer = { ...state.transfer };
  switch (action.type) {
    case 'setFilter':
      return { ...state, filter: action.filter };
    case 'setTransfer':
      if (action.option === 'all') return { ...state, transfer: allFilter(state.transfer, action.checked) };
      if (action.option !== 'all' && stateTransfer.all === true) {
        stateTransfer.all = false;
        stateTransfer[action.option] = action.checked;
      } else {
        stateTransfer[action.option] = action.checked;
      }
      if (
        stateTransfer.all !== true &&
        stateTransfer.without === true &&
        stateTransfer.oneTransfer === true &&
        stateTransfer.twoTransfers === true &&
        stateTransfer.threeTransfers === true
      )
        stateTransfer.all = true;
      return { ...state, transfer: stateTransfer };
    default:
      return state;
  }
};

export default reducer;
