import uuid from 'react-uuid';

const searchUrl = 'https://aviasales-test-api.kata.academy/tickets?searchId=';

const setStatus = (status) => ({
  type: 'setStatus',
  status,
});

export const setFilter = (filter) => ({ type: 'setFilter', filter });

export const setTransfer = (option, checked) => ({ type: 'setTransfer', option, checked });

const fetchRetry = async (url, search, tries, dispatch) => {
  try {
    dispatch(setStatus('loading'));
    const request = await fetch(`${url}${search}`);
    const ticketsResponse = await request.json();
    return ticketsResponse;
  } catch (err) {
    if (tries === 1) {
      dispatch(setStatus('error'));
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
      dispatch(setStatus('finished'));
    }
  }
};
