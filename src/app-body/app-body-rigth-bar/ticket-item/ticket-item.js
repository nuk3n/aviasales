import classes from './ticket-item.module.scss';
import { format, addMinutes } from 'date-fns';

function TicketItem({ ticketInfo: { carrier, segments, price } }) {
  const convertMinutes = (minutes) => `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;
  const stopsFirstSegment = segments[0].stops.length !== 0 ? `${segments[0].stops.length} ПЕРЕСАДКИ` : 'БЕЗ ПЕРЕСАДОК';
  const stopsSecondSegment = segments[1].stops.length !== 0 ? `${segments[1].stops.length} ПЕРЕСАДКИ` : 'БЕЗ ПЕРЕСАДОК';
  const departureTimeFirstSegment = format(new Date(`${segments[0].date}`), 'kk:mm');
  const departureTimeSecondSegment = format(new Date(`${segments[1].date}`), 'kk:mm');
  const arrivalTimeFirstSegment = format(addMinutes(new Date(`${segments[0].date}`), segments[0].duration), 'kk:mm');
  const arrivalTimeSecondSegment = format(addMinutes(new Date(`${segments[1].date}`), segments[1].duration), 'kk:mm');

  return (
    <div className={classes.ticketItem}>
      <div className={classes.ticketItem__header}>
        <span className={classes.ticketItem__price}>{price} Р</span>
        <img
          className={classes.ticketItem__companyLogo}
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          alt="a/c logo"
        />
      </div>
      <div className={classes.ticketItem__tripInfo}>
        <div className={classes.ticketItem__parameter}>
          <span className={classes.ticketItem__subtitle}>
            {segments[0].origin} — {segments[0].destination}
          </span>
          <span className={classes.ticketItem__info}>
            {departureTimeFirstSegment} – {arrivalTimeFirstSegment}
          </span>
        </div>
        <div className={classes.ticketItem__parameter}>
          <span className={classes.ticketItem__subtitle}>В ПУТИ</span>
          <span className={classes.ticketItem__info}>{convertMinutes(segments[0].duration)}</span>
        </div>
        <div className={classes.ticketItem__parameter}>
          <span className={classes.ticketItem__subtitle}>{stopsFirstSegment}</span>
          <span className={classes.ticketItem__info}>{segments[0].stops.join(', ')}</span>
        </div>
      </div>
      <div className={classes.ticketItem__tripInfo}>
        <div className={classes.ticketItem__parameter}>
          <span className={classes.ticketItem__subtitle}>
            {segments[1].origin} — {segments[1].destination}
          </span>
          <span className={classes.ticketItem__info}>
            {departureTimeSecondSegment} – {arrivalTimeSecondSegment}
          </span>
        </div>
        <div className={classes.ticketItem__parameter}>
          <span className={classes.ticketItem__subtitle}>В ПУТИ</span>
          <span className={classes.ticketItem__info}>{convertMinutes(segments[1].duration)}</span>
        </div>
        <div className={classes.ticketItem__parameter}>
          <span className={classes.ticketItem__subtitle}>{stopsSecondSegment}</span>
          <span className={classes.ticketItem__info}>{segments[1].stops.join(', ')}</span>
        </div>
      </div>
    </div>
  );
}

export default TicketItem;
