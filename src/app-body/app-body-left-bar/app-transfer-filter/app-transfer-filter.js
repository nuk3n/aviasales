/* eslint-disable */
import classes from './app-transfer-filter.module.scss';

function AppTransferFilter() {
  return (
    <div className={classes.appTransferFilter}>
      <h1 className={classes['appTransferFilter__header']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
      <label className={classes.option}>
        <input className={classes['option__checkbox']} type="checkbox" />
        <span className={classes.customCheckbox}></span>
        Все
      </label>
      <label className={classes.option}>
        <input className={classes['option__checkbox']} type="checkbox" />
        <span className={classes.customCheckbox}></span>
        Без пересадок
      </label>
      <label className={classes.option}>
        <input className={classes['option__checkbox']} type="checkbox" />
        <span className={classes.customCheckbox}></span>1 пересадка
      </label>
      <label className={classes.option}>
        <input className={classes['option__checkbox']} type="checkbox" />
        <span className={classes.customCheckbox}></span>2 пересадки
      </label>
      <label className={classes.option}>
        <input className={classes['option__checkbox']} type="checkbox" />
        <span className={classes.customCheckbox}></span>3 пересадки
      </label>
    </div>
  );
}

export default AppTransferFilter;
