/* eslint-disable */
import './ticket-list.scss';
import TicketItem from '../ticket-item';

function TicketList() {
  return (
    <div className="appBody__ticketList">
      <ul>
        <li>
          <TicketItem />
        </li>
        <li>
          <TicketItem />
        </li>
        <li>
          <TicketItem />
        </li>
        <li>
          <TicketItem />
        </li>
        <li>
          <TicketItem />
        </li>
      </ul>
    </div>
  );
}

export default TicketList;
