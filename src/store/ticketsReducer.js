const defaultState = {
  tickets: [],
};

// eslint-disable-next-line default-param-last
const ticketsReducer = (state = defaultState, action) => {
  const SET_TICKETS = 'setTickets';

  switch (action.type) {
    case SET_TICKETS:
      return { ...state, tickets: [...state.tickets, ...action.tickets] };
    default:
      return state;
  }
};

export default ticketsReducer;
