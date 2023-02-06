import classes from './ticket-list.module.scss';
import TicketItem from '../ticket-item';
import ShowMoreTicketsButton from '../show-more-tickets-button';
import EmptyListWarning from '../empty-list-warning';
import { connect } from 'react-redux';

function TicketList({ tickets, amount, transfer, filter, error }) {
  const cheapFilter = (a, b) => a.price - b.price;
  const fastFilter = (a, b) =>
    a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration);
  const filterByTransfer = (ticket, transfers) =>
    ticket.segments[0].stops.length === transfers && ticket.segments[1].stops.length === transfers;

  const filterTickets = (ticketList) => {
    let filteredTicketList = [];

    if (transfer.without === true) {
      filteredTicketList = ticketList.reduce((acc, ticket) => {
        if (filterByTransfer(ticket, 0)) acc.push(ticket);
        return acc;
      }, filteredTicketList);
    }

    if (transfer.oneTransfer === true) {
      filteredTicketList = ticketList.reduce((acc, ticket) => {
        if (filterByTransfer(ticket, 1)) acc.push(ticket);
        return acc;
      }, filteredTicketList);
    }

    if (transfer.twoTransfers === true) {
      filteredTicketList = ticketList.reduce((acc, ticket) => {
        if (filterByTransfer(ticket, 2)) acc.push(ticket);
        return acc;
      }, filteredTicketList);
    }

    if (transfer.threeTransfers === true) {
      filteredTicketList = ticketList.reduce((acc, ticket) => {
        if (filterByTransfer(ticket, 3)) acc.push(ticket);
        return acc;
      }, filteredTicketList);
    }

    if (filter === 'cheap') filteredTicketList.sort(cheapFilter);
    if (filter === 'fast') filteredTicketList.sort(fastFilter);

    return filteredTicketList.slice(0, amount).map((ticket) => (
      <li key={ticket.id}>
        <TicketItem ticketInfo={ticket} />
      </li>
    ));
  };

  const finalTicketsList = filterTickets(tickets);
  const showMoreTicketsButton = finalTicketsList.length !== 0 ? <ShowMoreTicketsButton /> : null;
  const emptyListWarning = finalTicketsList.length === 0 && !error ? <EmptyListWarning /> : null;

  return (
    <div className={classes.appBody__ticketList}>
      <ul>{finalTicketsList}</ul>
      {showMoreTicketsButton}
      {emptyListWarning}
    </div>
  );
}

const mapStateToProps = (state) => ({
  error: state.error,
  tickets: state.tickets,
  amount: state.ticketsToShowNumber,
  transfer: state.transfer,
  filter: state.filter,
});

export default connect(mapStateToProps)(TicketList);
