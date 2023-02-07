const initialState = {
  status: 'finished',
  filter: 'cheap',
  tickets: [],
  ticketsToShowNumber: 5,
  transfer: {
    all: false,
    without: true,
    oneTransfer: false,
    twoTransfers: true,
    threeTransfers: false,
  },
};

const allFiltersChecked = (obj, checked) => {
  const newObj = { ...obj };
  Object.keys(newObj).forEach((el) => {
    newObj[el] = checked;
  });
  return newObj;
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  const tickets = [...state.tickets];
  const stateTransfer = { ...state.transfer };
  switch (action.type) {
    case 'setStatus':
      return { ...state, status: action.status };
    case 'setFilter':
      return { ...state, tickets, filter: action.filter };
    case 'setTickets':
      return { ...state, tickets: [...state.tickets, ...action.tickets] };
    case 'setTicketsNumber':
      return { ...state, ticketsToShowNumber: action.ticketsToShowNumber };
    case 'setTransfer':
      if (action.option === 'all')
        return {
          ...state,
          transfer: allFiltersChecked(state.transfer, action.checked),
        };
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
