/* eslint-disable */
import AppDurationFilter from './app-duration-filter';
import TicketList from './ticket-list';
import classes from './app-body-rigth-bar.module.scss';
import ShowMoreTicketsButton from './show-more-tickets-button';

function AppBodyRigthBar() {
  return (
    <div className={classes['appBody__rigthBar']}>
      <AppDurationFilter />
      <TicketList />
      <ShowMoreTicketsButton />
    </div>
  );
}

export default AppBodyRigthBar;
