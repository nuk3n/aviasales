/* eslint-disable */
import classes from './ticket-item.module.scss';

function TicketItem() {
  return (
    <div className={classes.ticketItem}>
      <div className={classes['ticketItem__header']}>
        <span className={classes['ticketItem__price']}>13 400 Р</span>
        <img
          className={classes['ticketItem__companyLogo']}
          src={require('../../../images/S7logo.png')}
          alt="a/c logo"
        />
      </div>
      <div className={classes['ticketItem__tripInfo']}>
        <div className={classes['ticketItem__parameter']}>
          <span className={classes['ticketItem__subtitle']}>MOW - HKT</span>
          <span className={classes['ticketItem__info']}>10:45 – 08:00</span>
        </div>
        <div className={classes['ticketItem__parameter']}>
          <span className={classes['ticketItem__subtitle']}>В ПУТИ</span>
          <span className={classes['ticketItem__info']}>21ч 15м</span>
        </div>
        <div className={classes['ticketItem__parameter']}>
          <span className={classes['ticketItem__subtitle']}>2 ПЕРЕСАДКИ</span>
          <span className={classes['ticketItem__info']}>HKG, JNB</span>
        </div>
      </div>
      <div className={classes['ticketItem__tripInfo']}>
        <div className={classes['ticketItem__parameter']}>
          <span className={classes['ticketItem__subtitle']}>MOW - HKT</span>
          <span className={classes['ticketItem__info']}>10:45 – 08:00</span>
        </div>
        <div className={classes['ticketItem__parameter']}>
          <span className={classes['ticketItem__subtitle']}>В ПУТИ</span>
          <span className={classes['ticketItem__info']}>21ч 15м</span>
        </div>
        <div className={classes['ticketItem__parameter']}>
          <span className={classes['ticketItem__subtitle']}>2 ПЕРЕСАДКИ</span>
          <span className={classes['ticketItem__info']}>HKG, JNB</span>
        </div>
      </div>
    </div>
  );
}

export default TicketItem;
