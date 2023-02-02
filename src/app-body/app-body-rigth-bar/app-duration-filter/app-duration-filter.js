/* eslint-disable */
import classes from './app-duration-filter.module.scss';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

function AppDurationFilter({ filter, setFilter }) {
  const cheap = filter === 'cheap' ? 'active' : null;
  const fast = filter === 'fast' ? 'active' : null;
  const optimal = filter === 'optimal' ? 'active' : null;

  return (
    <div className={classes.durationFilter}>
      <div className={`${classes['durationFilter__option']} ${classes[cheap]}`} onClick={() => setFilter('cheap')}>
        САМЫЙ ДЕШЕВЫЙ
      </div>
      <div className={`${classes['durationFilter__option']} ${classes[fast]}`} onClick={() => setFilter('fast')}>
        САМЫЙ БЫСТРЫЙ
      </div>
      <div className={`${classes['durationFilter__option']} ${classes[optimal]}`} onClick={() => setFilter('optimal')}>
        ОПТИМАЛЬНЫЙ
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

export default connect(mapStateToProps, actions)(AppDurationFilter);
