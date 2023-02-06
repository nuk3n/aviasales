import uuid from 'react-uuid';

const searchUrl = 'https://aviasales-test-api.kata.academy/tickets?searchId=';
let ticketsToShowNumber = 5;

const setError = (status) => ({
  type: 'setError',
  error: status,
});

const setLoading = (status) => ({
  type: 'setLoading',
  loading: status,
});

const fetchRetry = async (url, search, tries, dispatch) => {
  try {
    dispatch(setLoading(true));
    const request = await fetch(`${url}${search}`);
    const ticketsResponse = await request.json();
    return ticketsResponse;
  } catch (err) {
    if (tries === 1) {
      dispatch(setError(true));
      dispatch(setLoading(false));
      return false;
    }
    const fetch = await fetchRetry(url, search, tries - 1, dispatch);
    return fetch;
  }
};

export const getInitialTickets = () => async (dispatch) => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search');
  const { searchId } = await response.json();
  let loading = true;
  while (loading) {
    // eslint-disable-next-line no-await-in-loop
    const { tickets: ticketList, stop } = await fetchRetry(searchUrl, searchId, 4, dispatch);
    loading = !stop;
    if (loading) {
      const tickets = ticketList.map((ticket) => ({ ...ticket, id: uuid() }));
      dispatch({ type: 'setTickets', tickets });
    }
    if (!loading) {
      dispatch(setLoading(false));
    }
  }
};

export const setMoreTickets = () => (dispatch) => {
  ticketsToShowNumber += 5;
  dispatch({ type: 'setTicketsNumber', ticketsToShowNumber });
};

export const setFilter = (filter) => (dispatch) => {
  ticketsToShowNumber = 5;
  dispatch({ type: 'setTicketsNumber', ticketsToShowNumber });
  dispatch({ type: 'setFilter', filter });
};

export const setTransfer = (option, checked) => (dispatch) => {
  ticketsToShowNumber = 5;
  dispatch({ type: 'setTicketsNumber', ticketsToShowNumber });
  dispatch({ type: 'setTransfer', option, checked });
};
