/* eslint-disable */
import './app-transfer-filter.scss';

function AppTransferFilter() {
  return (
    <div className="appTransferFilter">
      <h1 className="appTransferFilter__header">КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
      <label className="option">
        <input className="option__checkbox" type="checkbox" />
        <span className="customCheckbox"></span>
        Все
      </label>
      <label className="option">
        <input className="option__checkbox" type="checkbox" />
        <span className="customCheckbox"></span>
        Без пересадок
      </label>
      <label className="option">
        <input className="option__checkbox" type="checkbox" />
        <span className="customCheckbox"></span>1 пересадка
      </label>
      <label className="option">
        <input className="option__checkbox" type="checkbox" />
        <span className="customCheckbox"></span>2 пересадки
      </label>
      <label className="option">
        <input className="option__checkbox" type="checkbox" />
        <span className="customCheckbox"></span>3 пересадки
      </label>
    </div>
  );
}

export default AppTransferFilter;
