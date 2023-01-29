/* eslint-disable */
import AppDurationFilter from './app-duration-filter';
import TicketList from './ticket-list';
import './app-body-rigth-bar.scss';
import ShowMoreTicketsButton from './show-more-tickets-button';

function AppBodyRigthBar() {
  return (
    <div className="appBody__rigthBar">
      <AppDurationFilter />
      <TicketList />
      <ShowMoreTicketsButton />
    </div>
  );
}

export default AppBodyRigthBar;
