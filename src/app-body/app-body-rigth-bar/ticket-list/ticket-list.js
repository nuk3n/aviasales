import classes from './ticket-list.module.scss';
import TicketItem from '../ticket-item';
import ShowMoreTicketsButton from '../show-more-tickets-button';
import EmptyListWarning from '../empty-list-warning';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

function TicketList({ tickets, transfer, filter, status }) {
  const [ticketsToShow, setTicketsToShow] = useState(5);
  useEffect(() => {
    setTicketsToShow(5);
  }, [transfer, filter]);
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

    return filteredTicketList.slice(0, ticketsToShow).map((ticket) => (
      <li key={ticket.id}>
        <TicketItem ticketInfo={ticket} />
      </li>
    ));
  };

  const finalTicketsList = filterTickets(tickets);
  const showMoreTicketsButton =
    finalTicketsList.length !== 0 ? <ShowMoreTicketsButton setMoreTickets={setTicketsToShow} /> : null;
  const emptyListWarning = finalTicketsList.length === 0 && !(status === 'error') ? <EmptyListWarning /> : null;

  return (
    <div className={classes.appBody__ticketList}>
      <ul>{finalTicketsList}</ul>
      {showMoreTicketsButton}
      {emptyListWarning}
    </div>
  );
}

const mapStateToProps = (state) => ({
  status: state.status,
  tickets: state.tickets,
  transfer: state.transfer,
  filter: state.filter,
});

export default connect(mapStateToProps)(TicketList);
