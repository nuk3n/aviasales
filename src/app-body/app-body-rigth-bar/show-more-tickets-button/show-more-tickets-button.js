import classes from './show-more-tickets-button.module.scss';

function ShowMoreTicketsButton({ setMoreTickets }) {
  return (
    <button type="button" className={classes.showMoreTicketButton} onClick={() => setMoreTickets((prev) => prev + 5)}>
      ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
    </button>
  );
}

export default ShowMoreTicketsButton;
