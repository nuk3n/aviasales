/* eslint-disable */
import classes from './ticket-list.module.scss';
import TicketItem from '../ticket-item';

function TicketList() {
  return (
    <div className={classes['appBody__ticketList']}>
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
