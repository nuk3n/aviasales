/* eslint-disable */
import classes from './app-transfer-filter.module.scss';
import { connect } from 'react-redux';
import { setTransfer } from '../../../actions';

function AppTransferFilter({ transfer, setTransfer }) {
  function handleChange(event) {
    setTransfer(event.target.name, event.target.checked);
  }

  return (
    <div className={classes.appTransferFilter}>
      <h1 className={classes['appTransferFilter__header']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
      <label className={classes.option}>
        <input
          className={classes['option__checkbox']}
          type="checkbox"
          name="all"
          checked={transfer['all']}
          onChange={handleChange}
        />
        <span className={classes.customCheckbox}></span>
        Все
      </label>
      <label className={classes.option}>
        <input
          className={classes['option__checkbox']}
          type="checkbox"
          name="without"
          checked={transfer['without']}
          onChange={handleChange}
        />
        <span className={classes.customCheckbox}></span>
        Без пересадок
      </label>
      <label className={classes.option}>
        <input
          className={classes['option__checkbox']}
          type="checkbox"
          name="oneTransfer"
          checked={transfer['oneTransfer']}
          onChange={handleChange}
        />
        <span className={classes.customCheckbox}></span>1 пересадка
      </label>
      <label className={classes.option}>
        <input
          className={classes['option__checkbox']}
          type="checkbox"
          name="twoTransfers"
          checked={transfer['twoTransfers']}
          onChange={handleChange}
        />
        <span className={classes.customCheckbox}></span>2 пересадки
      </label>
      <label className={classes.option}>
        <input
          className={classes['option__checkbox']}
          type="checkbox"
          name="threeTransfers"
          checked={transfer['threeTransfers']}
          onChange={handleChange}
        />
        <span className={classes.customCheckbox}></span>3 пересадки
      </label>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    transfer: state.transfer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTransfer: (option, transfer) => dispatch(setTransfer(option, transfer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppTransferFilter);
