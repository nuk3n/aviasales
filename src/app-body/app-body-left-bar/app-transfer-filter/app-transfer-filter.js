import classes from './app-transfer-filter.module.scss';
import * as actions from '../../../actions';
import { connect } from 'react-redux';

function AppTransferFilter({ transfer, setTransfer }) {
  function handleChange(event) {
    setTransfer(event.target.name, event.target.checked);
  }

  return (
    <div className={classes.appTransferFilter}>
      <h1 className={classes.appTransferFilter__header}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
      <label className={classes.option}>
        <input
          className={classes.option__checkbox}
          type="checkbox"
          name="all"
          checked={transfer.all}
          onChange={handleChange}
        />
        <span className={classes.customCheckbox} />
        Все
      </label>
      <label className={classes.option}>
        <input
          className={classes.option__checkbox}
          type="checkbox"
          name="without"
          checked={transfer.without}
          onChange={handleChange}
        />
        <span className={classes.customCheckbox} />
        Без пересадок
      </label>
      <label className={classes.option}>
        <input
          className={classes.option__checkbox}
          type="checkbox"
          name="oneTransfer"
          checked={transfer.oneTransfer}
          onChange={handleChange}
        />
        <span className={classes.customCheckbox} />1 пересадка
      </label>
      <label className={classes.option}>
        <input
          className={classes.option__checkbox}
          type="checkbox"
          name="twoTransfers"
          checked={transfer.twoTransfers}
          onChange={handleChange}
        />
        <span className={classes.customCheckbox} />2 пересадки
      </label>
      <label className={classes.option}>
        <input
          className={classes.option__checkbox}
          type="checkbox"
          name="threeTransfers"
          checked={transfer.threeTransfers}
          onChange={handleChange}
        />
        <span className={classes.customCheckbox} />3 пересадки
      </label>
    </div>
  );
}

const mapStateToProps = (state) => ({
  transfer: state.transfer,
});

export default connect(mapStateToProps, actions)(AppTransferFilter);
