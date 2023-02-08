const defaultState = {
  transfer: {
    all: false,
    without: true,
    oneTransfer: false,
    twoTransfers: true,
    threeTransfers: false,
  },
};

// eslint-disable-next-line default-param-last
const transferReducer = (state = defaultState, action) => {
  const SET_TRANSFER = 'setTransfer';
  const newTransfer = { ...state.transfer };
  switch (action.type) {
    case SET_TRANSFER:
      if (action.option === 'all') {
        Object.keys(newTransfer).forEach((item) => {
          newTransfer[item] = action.checked;
        });
      } else {
        // eslint-disable-next-line no-return-assign
        Object.keys(newTransfer).map((item) => (item === action.option ? (newTransfer[item] = action.checked) : item));
        newTransfer.all = Object.keys(newTransfer)
          .slice(1)
          .every((item) => newTransfer[item] === true);
      }
      return { ...state, transfer: newTransfer };
    default:
      return state;
  }
};

export default transferReducer;
