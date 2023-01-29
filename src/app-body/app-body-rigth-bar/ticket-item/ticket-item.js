/* eslint-disable */
import './ticket-item.scss';

function TicketItem() {
  return (
    <div className="ticketItem">
      <div className="ticketItem__header">
        <span className="ticketItem__price">13 400 Р</span>
        <img className="ticketItem__companyLogo" src={require('../../../images/S7logo.png')} alt="a/c logo" />
      </div>
      <div className="ticketItem__tripInfo">
        <div className="ticketItem__parameter">
          <span className="ticketItem__subtitle">MOW - HKT</span>
          <span className="ticketItem__info">10:45 – 08:00</span>
        </div>
        <div className="ticketItem__parameter">
          <span className="ticketItem__subtitle">В ПУТИ</span>
          <span className="ticketItem__info">21ч 15м</span>
        </div>
        <div className="ticketItem__parameter">
          <span className="ticketItem__subtitle">2 ПЕРЕСАДКИ</span>
          <span className="ticketItem__info">HKG, JNB</span>
        </div>
      </div>
      <div className="ticketItem__tripInfo">
        <div className="ticketItem__parameter">
          <span className="ticketItem__subtitle">MOW - HKT</span>
          <span className="ticketItem__info">10:45 – 08:00</span>
        </div>
        <div className="ticketItem__parameter">
          <span className="ticketItem__subtitle">В ПУТИ</span>
          <span className="ticketItem__info">21ч 15м</span>
        </div>
        <div className="ticketItem__parameter">
          <span className="ticketItem__subtitle">2 ПЕРЕСАДКИ</span>
          <span className="ticketItem__info">HKG, JNB</span>
        </div>
      </div>
    </div>
  );
}

export default TicketItem;
