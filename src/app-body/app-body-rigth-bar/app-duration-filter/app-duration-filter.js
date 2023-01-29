/* eslint-disable */
import classes from './app-duration-filter.module.scss';

function AppDurationFilter() {
  return (
    <div className={classes.durationFilter}>
      <div className={`${classes['durationFilter__option']} ${classes['active']}`}>САМЫЙ ДЕШЕВЫЙ</div>
      <div className={classes['durationFilter__option']}>САМЫЙ БЫСТРЫЙ</div>
      <div className={classes['durationFilter__option']}>ОПТИМАЛЬНЫЙ</div>
    </div>
  );
}

export default AppDurationFilter;
