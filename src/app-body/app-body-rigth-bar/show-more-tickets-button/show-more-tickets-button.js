import classes from './show-more-tickets-button.module.scss';
import * as actions from '../../../actions';
import { connect } from 'react-redux';

function ShowMoreTicketsButton({ setMoreTickets }) {
  return (
    <button type="button" className={classes.showMoreTicketButton} onClick={setMoreTickets}>
      ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
    </button>
  );
}

export default connect(null, actions)(ShowMoreTicketsButton);
